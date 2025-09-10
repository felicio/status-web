/**
 * Alchemy Prices + Token API service
 * Alternative to CryptoCompare for price and token metadata fetching
 *
 * Enhanced to calculate 24h price change percentage by fetching both current
 * and historical prices (24h ago) and computing the percentage change.
 *
 * @see https://www.alchemy.com/docs/reference/prices-api-quickstart for Prices API
 * @see https://www.alchemy.com/docs/reference/alchemy-gettokenmetadata for Token API
 * @see https://dashboard.alchemy.com for API key management
 */

// import 'server-only'

import retry from 'async-retry'

import { serverEnv } from '../../../config/env.server.mjs'
import {
  getRandomApiKey,
  markApiKeyAsRateLimited,
  markApiKeyAsSuccessful,
} from '../api-key-rotation'

import type { NetworkType } from '../../api/types'
import type {
  AlchemyHistoricalTokenPricesResponseBody,
  AlchemyTokenMetadataResponseBody,
  AlchemyTokenPricesBySymbolResponseBody,
  AlchemyTransformedHistoryResponse,
  AlchemyTransformedMetadataResponse,
  AlchemyTransformedPriceResponse,
  ERC20Token,
  ERC20TokenList,
} from './types'

// Revalidation time constants (matching CryptoCompare structure)
export const ALCHEMY_PRICES_REVALIDATION_TIMES = {
  CURRENT_PRICE: 60, // Current prices (portfolio view)
  TRADING_PRICE: 15, // Trading prices (detail view)
  PRICE_HISTORY: 3600, // Historical charts (1 hour)
  TOKEN_METADATA: 86400, // Token metadata (24 hours)
  PRICE_FOR_DATE: 86400, // Point-in-time prices (24 hours)
} as const

const API_KEY_COUNT = serverEnv.ALCHEMY_API_KEYS.split(',')
  .map(k => k.trim())
  .filter(Boolean).length

// Network mapping (reuse existing from main Alchemy service)
const alchemyNetworks = {
  ethereum: 'eth-mainnet',
  optimism: 'opt-mainnet',
  arbitrum: 'arb-mainnet',
  base: 'base-mainnet',
  polygon: 'polygon-mainnet',
  bsc: 'bnb-mainnet',
}

// Load ERC20 token list (cached)
let erc20TokenList: ERC20TokenList | null = null
let tokensBySymbol: Map<string, ERC20Token[]> | null = null

async function loadTokenList(): Promise<void> {
  if (erc20TokenList && tokensBySymbol) return

  try {
    // Try to import the token list directly (works in bundled environment)
    try {
      const tokenListModule = await import('../../../constants/erc20.json')
      erc20TokenList = tokenListModule.default
    } catch {
      // Fallback to file system read (for development)
      const { readFile } = await import('fs/promises')
      const path = await import('path')
      const { fileURLToPath } = await import('url')

      const __filename = fileURLToPath(import.meta.url)
      const __dirname = path.dirname(__filename)
      const tokenListPath = path.resolve(
        __dirname,
        '../../../constants/erc20.json',
      )
      const tokenListData = await readFile(tokenListPath, 'utf-8')
      erc20TokenList = JSON.parse(tokenListData)
    }

    // Create symbol lookup map
    tokensBySymbol = new Map()
    if (erc20TokenList) {
      for (const token of erc20TokenList.tokens) {
        if (!tokensBySymbol.has(token.symbol)) {
          tokensBySymbol.set(token.symbol, [])
        }
        tokensBySymbol.get(token.symbol)!.push(token)
      }
    }
  } catch (error) {
    console.warn('Could not load ERC20 token list:', error)
    erc20TokenList = {
      $schema: '',
      name: '',
      timestamp: '',
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [],
    } as ERC20TokenList
    tokensBySymbol = new Map()
  }
}

function getTokenBySymbol(
  symbol: string,
  network: NetworkType = 'ethereum',
): ERC20Token | null {
  if (!tokensBySymbol) return null

  const tokens = tokensBySymbol.get(symbol) || []
  const networkId = getNetworkId(network)

  // Find token for specific network first
  let token = tokens.find(t => t.chainId === networkId)

  // Fallback to first available token
  if (!token && tokens.length > 0) {
    token = tokens[0]
  }

  return token || null
}

function getNetworkId(network: NetworkType): number {
  const networkIds = {
    ethereum: 1,
    optimism: 10,
    arbitrum: 42161,
    base: 8453,
    polygon: 137,
    bsc: 56,
  } as const
  return (networkIds as Record<NetworkType, number>)[network] || 1
}

/**
 * Fetch current token prices using Alchemy Prices API
 * Maps to CryptoCompare's legacy_fetchTokensPrice function
 * Enhanced to calculate 24h price change percentage
 */
export async function alchemy_fetchTokensPrice(
  symbols: string[],
): Promise<AlchemyTransformedPriceResponse> {
  if (symbols.length === 0) return {}

  // Alchemy limits to 25 symbols per request
  const batches = []
  for (let i = 0; i < symbols.length; i += 25) {
    batches.push(symbols.slice(i, i + 25))
  }

  const results: AlchemyTransformedPriceResponse = {}

  for (const batch of batches) {
    try {
      const batchResult = await _fetchTokenPricesBatchWith24hChange(batch)
      Object.assign(results, batchResult)
    } catch (error) {
      console.warn(`Failed to fetch prices for batch:`, batch, error)
      // Add empty entries for failed symbols
      for (const symbol of batch) {
        results[symbol] = { USD: _createDefaultPriceResponse(symbol, 0) }
      }
    }
  }

  return results
}

async function _fetchTokenPricesBatch(
  symbols: string[],
): Promise<AlchemyTransformedPriceResponse> {
  const url = new URL(
    `https://api.g.alchemy.com/prices/v1/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}/tokens/by-symbol`,
  )
  // Use multiple symbols parameters instead of array format
  symbols.forEach(symbol => url.searchParams.append('symbols', symbol))

  const body = await _retryPricesAPI(async () =>
    _fetchPricesAPI<AlchemyTokenPricesBySymbolResponseBody>(
      url,
      'GET',
      ALCHEMY_PRICES_REVALIDATION_TIMES.CURRENT_PRICE,
    ),
  )

  return _transformPricesResponse(body)
}

/**
 * Fetch current token prices and calculate comprehensive metrics
 * by fetching current, 24h ago, and 1h ago prices for complete data
 */
async function _fetchTokenPricesBatchWith24hChange(
  symbols: string[],
): Promise<AlchemyTransformedPriceResponse> {
  // Fetch current prices
  const currentPrices = await _fetchTokenPricesBatch(symbols)

  // Calculate timestamps for different periods
  const now = new Date()
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)

  // Fetch historical prices for different time periods
  const historicalPrices24h: Record<string, number> = {}
  const historicalPrices1h: Record<string, number> = {}
  const volumeData24h: Record<string, number> = {}

  for (const symbol of symbols) {
    try {
      // Fetch 24h ago price
      const price24h = await _fetchTokenPriceAtTime(symbol, twentyFourHoursAgo)
      if (price24h !== null) {
        historicalPrices24h[symbol] = price24h
      }

      // Fetch 1h ago price
      const price1h = await _fetchTokenPriceAtTime(symbol, oneHourAgo)
      if (price1h !== null) {
        historicalPrices1h[symbol] = price1h
      }

      // Fetch 24h volume data
      const volume = await _fetchTokenVolume24h(symbol)
      if (volume !== null) {
        volumeData24h[symbol] = volume
      }
    } catch (error) {
      console.warn(`Failed to fetch historical data for ${symbol}:`, error)
    }
  }

  // Calculate comprehensive metrics and update the response
  const enhancedResults: AlchemyTransformedPriceResponse = {}

  for (const [symbol, priceData] of Object.entries(currentPrices)) {
    const currentPrice = priceData.USD.PRICE
    const historicalPrice24h = historicalPrices24h[symbol]
    const historicalPrice1h = historicalPrices1h[symbol]
    const volume24h = volumeData24h[symbol]

    // Calculate 24h change percentage
    let changePercentage24h = 0
    if (historicalPrice24h && historicalPrice24h > 0) {
      changePercentage24h =
        ((currentPrice - historicalPrice24h) / historicalPrice24h) * 100
    }

    // Calculate 1h change percentage
    let changePercentage1h = 0
    if (historicalPrice1h && historicalPrice1h > 0) {
      changePercentage1h =
        ((currentPrice - historicalPrice1h) / historicalPrice1h) * 100
    }

    // Calculate market cap (using circulating supply if available)
    const circulatingSupply = priceData.USD.CIRCULATINGSUPPLY || 0
    const marketCap = currentPrice * circulatingSupply

    // Create enhanced price response with all required fields
    enhancedResults[symbol] = {
      USD: {
        ...priceData.USD,
        // 24h metrics
        CHANGEPCT24HOUR: changePercentage24h,
        CHANGE24HOUR: currentPrice - (historicalPrice24h || currentPrice),
        OPEN24HOUR: historicalPrice24h || currentPrice,
        HIGH24HOUR: Math.max(currentPrice, historicalPrice24h || currentPrice),
        LOW24HOUR: Math.min(currentPrice, historicalPrice24h || currentPrice),
        // 1h metrics
        CHANGEPCTHOUR: changePercentage1h,
        CHANGEHOUR: currentPrice - (historicalPrice1h || currentPrice),
        OPENHOUR: historicalPrice1h || currentPrice,
        HIGHHOUR: Math.max(currentPrice, historicalPrice1h || currentPrice),
        LOWHOUR: Math.min(currentPrice, historicalPrice1h || currentPrice),
        // Volume metrics
        VOLUME24HOUR: volume24h || 0,
        VOLUME24HOURTO: volume24h || 0,
        TOTALVOLUME24H: volume24h || 0,
        TOTALVOLUME24HTO: volume24h || 0,
        // Market cap metrics
        MKTCAP: marketCap,
        CIRCULATINGSUPPLYMKTCAP: marketCap,
        // Supply metrics (if available from token metadata)
        CIRCULATINGSUPPLY: circulatingSupply,
      },
    }
  }

  return enhancedResults
}

/**
 * Fetch token price at a specific time using Alchemy historical API
 */
async function _fetchTokenPriceAtTime(
  symbol: string,
  targetTime: Date,
): Promise<number | null> {
  try {
    // Create a time window around the target time (± 1 hour for better data availability)
    const startTime = new Date(targetTime.getTime() - 60 * 60 * 1000) // 1 hour before
    const endTime = new Date(targetTime.getTime() + 60 * 60 * 1000) // 1 hour after

    const url = new URL(
      `https://api.g.alchemy.com/prices/v1/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}/tokens/historical`,
    )

    const requestBody = {
      symbol,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    }

    const body = await _retryPricesAPI(async () =>
      _fetchPricesAPI<AlchemyHistoricalTokenPricesResponseBody>(
        url,
        'POST',
        ALCHEMY_PRICES_REVALIDATION_TIMES.PRICE_FOR_DATE,
        requestBody,
      ),
    )

    // Get the closest price to our target time
    if (body.data && body.data.length > 0) {
      const closestPrice = body.data.reduce((closest, current) => {
        const currentDiff = Math.abs(
          new Date(current.timestamp).getTime() - targetTime.getTime(),
        )
        const closestDiff = Math.abs(
          new Date(closest.timestamp).getTime() - targetTime.getTime(),
        )
        return currentDiff < closestDiff ? current : closest
      })

      return parseFloat(closestPrice.value)
    }

    return null
  } catch (error) {
    console.warn(
      `Failed to fetch historical price for ${symbol} at ${targetTime.toISOString()}:`,
      error,
    )
    return null
  }
}

/**
 * Fetch 24h volume data for a token using Alchemy historical API
 */
async function _fetchTokenVolume24h(symbol: string): Promise<number | null> {
  try {
    const now = new Date()
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    const url = new URL(
      `https://api.g.alchemy.com/prices/v1/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}/tokens/historical`,
    )

    const requestBody = {
      symbol,
      startTime: twentyFourHoursAgo.toISOString(),
      endTime: now.toISOString(),
    }

    const body = await _retryPricesAPI(async () =>
      _fetchPricesAPI<AlchemyHistoricalTokenPricesResponseBody>(
        url,
        'POST',
        ALCHEMY_PRICES_REVALIDATION_TIMES.PRICE_HISTORY,
        requestBody,
      ),
    )

    // Sum up the volume from all data points in the 24h period
    if (body.data && body.data.length > 0) {
      const totalVolume = body.data.reduce((sum, dataPoint) => {
        const volume = parseFloat(dataPoint.totalVolume || '0')
        return sum + volume
      }, 0)

      return totalVolume
    }

    return null
  } catch (error) {
    console.warn(`Failed to fetch 24h volume for ${symbol}:`, error)
    return null
  }
}

/**
 * Fetch historical token prices using Alchemy Prices API
 * Maps to CryptoCompare's legacy_fetchTokenPriceHistory function
 *
 * @see https://www.alchemy.com/docs/data/prices-api/prices-api-endpoints/prices-api-endpoints/get-historical-token-prices
 *
 * 40 CU per request https://www.alchemy.com/docs/reference/compute-unit-costs#prices-api
 *
 * Note: Alchemy limits intervals to specific data points per request:
 * - 1h intervals: 30 days or 720 data points
 * - 1d intervals: 365 days or 365 data points
 * This function automatically optimizes intervals and batches requests as needed:
 * - 90+ days: Uses 1-day intervals with batching (365-day chunks)
 * - 31-89 days: Uses 1-hour intervals with batching (30-day chunks)
 * - ≤30 days: Uses 1-hour intervals (single request)
 */
export async function alchemy_fetchTokenPriceHistory(
  symbol: string,
  days: '1' | '7' | '30' | '90' | '365' | 'all' = '1',
): Promise<AlchemyTransformedHistoryResponse> {
  const { startTime, endTime } = _calculateDateRange(days)

  // Calculate the total time span in days
  const totalDays = Math.ceil(
    (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24),
  )

  // For 90+ days, use 1-day intervals with batching if needed
  if (totalDays >= 90) {
    return await _fetchTokenPriceHistoryBatchedWithInterval(
      symbol,
      startTime,
      endTime,
      '1d',
    )
  }

  // For 30 days or less, use 1-hour intervals with single request
  if (totalDays <= 30) {
    return await _fetchTokenPriceHistoryWithInterval(
      symbol,
      startTime,
      endTime,
      '1h',
    )
  }

  // For 31-89 days, use 1-hour intervals with batching
  return await _fetchTokenPriceHistoryBatched(symbol, startTime, endTime)
}

/**
 * Fetch historical prices for a single date range with specified interval
 */
async function _fetchTokenPriceHistoryWithInterval(
  symbol: string,
  startTime: Date,
  endTime: Date,
  interval: '1h' | '1d',
): Promise<AlchemyTransformedHistoryResponse> {
  const url = new URL(
    `https://api.g.alchemy.com/prices/v1/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}/tokens/historical`,
  )

  const requestBody = {
    symbol,
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    interval,
  }

  const body = await _retryPricesAPI(async () =>
    _fetchPricesAPI<AlchemyHistoricalTokenPricesResponseBody>(
      url,
      'POST',
      ALCHEMY_PRICES_REVALIDATION_TIMES.PRICE_HISTORY,
      requestBody,
    ),
  )

  return _transformHistoryResponse(body)
}

/**
 * Fetch historical prices for a large date range by batching with specified interval
 */
async function _fetchTokenPriceHistoryBatchedWithInterval(
  symbol: string,
  startTime: Date,
  endTime: Date,
  interval: '1h' | '1d',
): Promise<AlchemyTransformedHistoryResponse> {
  const allResults: AlchemyTransformedHistoryResponse = []

  // Set batch size based on interval
  const batchSizeDays = interval === '1h' ? 30 : 365 // 30 days for 1h, 365 days for 1d
  const batchSizeMs = batchSizeDays * 24 * 60 * 60 * 1000

  let currentStart = new Date(startTime)
  const finalEnd = new Date(endTime)
  let batchCount = 0
  const maxBatches =
    Math.ceil((finalEnd.getTime() - startTime.getTime()) / batchSizeMs) + 10 // Safety buffer

  while (currentStart < finalEnd && batchCount < maxBatches) {
    // Calculate the end time for this batch
    const currentEnd = new Date(
      Math.min(currentStart.getTime() + batchSizeMs, finalEnd.getTime()),
    )

    // Safety check: ensure we're making progress
    if (currentEnd.getTime() <= currentStart.getTime()) {
      console.warn(
        `Batch end time (${currentEnd.toISOString()}) is not after start time (${currentStart.toISOString()}), breaking to prevent infinite loop`,
      )
      break
    }

    try {
      console.log(
        `Fetching price history for ${symbol} from ${currentStart.toISOString()} to ${currentEnd.toISOString()} (batch ${batchCount + 1}, ${interval} interval)`,
      )

      const batchResult = await _fetchTokenPriceHistoryWithInterval(
        symbol,
        currentStart,
        currentEnd,
        interval,
      )
      allResults.push(...batchResult)

      // Move to the next batch (start from the last timestamp + appropriate interval to avoid overlap)
      if (batchResult.length > 0) {
        const lastTimestamp = batchResult[batchResult.length - 1].time
        const newStart = new Date((lastTimestamp + 1) * 1000) // +1 second to avoid overlap

        // Safety check: ensure we're making forward progress
        if (newStart.getTime() <= currentStart.getTime()) {
          console.warn(
            `New start time (${newStart.toISOString()}) is not after current start time (${currentStart.toISOString()}), advancing by ${interval}`,
          )
          const advanceMs =
            interval === '1h' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000
          currentStart = new Date(currentEnd.getTime() + advanceMs)
        } else {
          currentStart = newStart
        }
      } else {
        // No data returned, advance by appropriate interval
        const advanceMs =
          interval === '1h' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000
        currentStart = new Date(currentEnd.getTime() + advanceMs)
      }
    } catch (error) {
      console.warn(`Failed to fetch price history batch for ${symbol}:`, error)
      // Skip this batch and move to the next one
      const advanceMs = interval === '1h' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000
      currentStart = new Date(currentEnd.getTime() + advanceMs)
    }

    batchCount++
  }

  if (batchCount >= maxBatches) {
    console.warn(
      `Reached maximum batch limit (${maxBatches}) for ${symbol}, stopping to prevent infinite loop`,
    )
  }

  // Sort results by timestamp to ensure chronological order
  return allResults.sort((a, b) => a.time - b.time)
}

/**
 * Fetch historical prices for a large date range by batching into 30-day chunks (1h intervals only)
 * @deprecated Use _fetchTokenPriceHistoryBatchedWithInterval instead
 */
async function _fetchTokenPriceHistoryBatched(
  symbol: string,
  startTime: Date,
  endTime: Date,
): Promise<AlchemyTransformedHistoryResponse> {
  return _fetchTokenPriceHistoryBatchedWithInterval(
    symbol,
    startTime,
    endTime,
    '1h',
  )
}

/**
 * Fetch token metadata using hybrid approach:
 * 1. Primary: Load from existing erc20.json token list
 * 2. Enhanced: Optionally enrich with Alchemy Token API
 */
export async function alchemy_fetchTokenMetadata(
  symbol: string,
): Promise<AlchemyTransformedMetadataResponse> {
  await loadTokenList()

  // Start with local token data
  const localToken = getTokenBySymbol(symbol)

  let result: AlchemyTransformedMetadataResponse = {
    ID: 0,
    TYPE: 'ERC20',
    SYMBOL: symbol,
    NAME: localToken?.name || symbol,
    LOGO_URL: localToken?.logoURI || '',
    ASSET_DESCRIPTION_SNIPPET: '',
    ASSET_DECIMAL_POINTS: localToken?.decimals || 18,
  }

  // Optionally enhance with Alchemy Token API if we have contract address
  if (localToken) {
    try {
      const network =
        (Object.keys(alchemyNetworks).find(
          key => getNetworkId(key as NetworkType) === localToken.chainId,
        ) as NetworkType) || 'ethereum'

      const alchemyData = await _fetchTokenMetadataFromAPI(
        localToken.address,
        network,
      )

      if (alchemyData) {
        // Merge Alchemy data with local data
        result = {
          ...result,
          NAME: alchemyData.name || result.NAME,
          LOGO_URL: alchemyData.logo || result.LOGO_URL,
          ASSET_DECIMAL_POINTS:
            alchemyData.decimals || result.ASSET_DECIMAL_POINTS,
        }
      }
    } catch (error) {
      console.warn(`Could not fetch enhanced metadata for ${symbol}:`, error)
    }
  }

  return result
}

async function _fetchTokenMetadataFromAPI(
  contractAddress: string,
  network: NetworkType,
): Promise<AlchemyTokenMetadataResponseBody | null> {
  try {
    const url = new URL(
      `https://${alchemyNetworks[network]}.g.alchemy.com/v2/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}`,
    )

    const requestBody = {
      jsonrpc: '2.0',
      method: 'alchemy_getTokenMetadata',
      params: [contractAddress],
      id: 1,
    }

    const response = await _retryTokenAPI(async () =>
      _fetchTokenAPI<AlchemyTokenMetadataResponseBody>(
        url,
        'POST',
        ALCHEMY_PRICES_REVALIDATION_TIMES.TOKEN_METADATA,
        requestBody,
      ),
    )

    return response
  } catch (error) {
    console.warn(`Token API call failed for ${contractAddress}:`, error)
    return null
  }
}

/**
 * Fetch token prices for specific date using Alchemy historical API
 * Maps to CryptoCompare's fetchTokensPriceForDate function
 */
export async function alchemy_fetchTokensPriceForDate(
  symbols: string[],
  timestamp: number,
): Promise<Record<string, { USD: { PRICE: number } }>> {
  const results: Record<string, { USD: { PRICE: number } }> = {}

  // Convert timestamp to date range (timestamp ± 1 hour for point-in-time)
  const date = new Date(timestamp * 1000)
  const startTime = new Date(date.getTime() - 60 * 60 * 1000) // 1 hour before
  const endTime = new Date(date.getTime() + 60 * 60 * 1000) // 1 hour after

  for (const symbol of symbols) {
    try {
      const url = new URL(
        `https://api.g.alchemy.com/prices/v1/${getRandomApiKey(serverEnv.ALCHEMY_API_KEYS)}/tokens/historical`,
      )

      const requestBody = {
        symbol,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      }

      const body = await _retryPricesAPI(async () =>
        _fetchPricesAPI<AlchemyHistoricalTokenPricesResponseBody>(
          url,
          'POST',
          ALCHEMY_PRICES_REVALIDATION_TIMES.PRICE_FOR_DATE,
          requestBody,
        ),
      )

      // Get the closest price to our target timestamp
      if (body.data && body.data.length > 0) {
        const closestPrice = body.data.reduce((closest, current) => {
          const currentDiff = Math.abs(
            new Date(current.timestamp).getTime() - date.getTime(),
          )
          const closestDiff = Math.abs(
            new Date(closest.timestamp).getTime() - date.getTime(),
          )
          return currentDiff < closestDiff ? current : closest
        })

        results[symbol] = {
          USD: {
            PRICE: parseFloat(closestPrice.value),
          },
        }
      }
    } catch (error) {
      console.warn(
        `No price data for ${symbol} at timestamp ${timestamp}:`,
        error,
      )
    }
  }

  return results
}

// Helper Functions

function _calculateDateRange(days: string): { startTime: Date; endTime: Date } {
  const endTime = new Date()
  let startTime: Date

  if (days === 'all') {
    // Set to a very early date for "all" data
    startTime = new Date('2010-01-01')
  } else {
    const daysNum = parseInt(days)
    startTime = new Date(endTime.getTime() - daysNum * 24 * 60 * 60 * 1000)
  }

  return { startTime, endTime }
}

function _transformPricesResponse(
  response: AlchemyTokenPricesBySymbolResponseBody,
): AlchemyTransformedPriceResponse {
  const result: AlchemyTransformedPriceResponse = {}

  for (const item of response.data) {
    if (item.error) {
      console.warn(`Price error for ${item.symbol}:`, item.error)
      result[item.symbol] = {
        USD: _createDefaultPriceResponse(item.symbol, 0),
      }
      continue
    }

    const usdPrice = item.prices.find(p => p.currency === 'usd')
    if (usdPrice) {
      const price = parseFloat(usdPrice.value)
      result[item.symbol] = {
        USD: _createDefaultPriceResponse(
          item.symbol,
          price,
          new Date(usdPrice.lastUpdatedAt).getTime() / 1000,
        ),
      }
    } else {
      result[item.symbol] = {
        USD: _createDefaultPriceResponse(item.symbol, 0),
      }
    }
  }

  return result
}

function _createDefaultPriceResponse(
  symbol: string,
  price: number,
  lastUpdate?: number,
) {
  return {
    TYPE: '5',
    MARKET: 'CCCAGG',
    FROMSYMBOL: symbol,
    TOSYMBOL: 'USD',
    FLAGS: '1',
    PRICE: price,
    LASTUPDATE: lastUpdate || Math.floor(Date.now() / 1000),
    MEDIAN: price,
    LASTVOLUME: 0,
    LASTVOLUMETO: 0,
    LASTTRADEID: '',
    VOLUMEDAY: 0,
    VOLUMEDAYTO: 0,
    VOLUME24HOUR: 0,
    VOLUME24HOURTO: 0,
    OPENDAY: price,
    HIGHDAY: price,
    LOWDAY: price,
    OPEN24HOUR: price,
    HIGH24HOUR: price,
    LOW24HOUR: price,
    LASTMARKET: 'Alchemy',
    VOLUMEHOUR: 0,
    VOLUMEHOURTO: 0,
    OPENHOUR: price,
    HIGHHOUR: price,
    LOWHOUR: price,
    TOPTIERVOLUME24HOUR: 0,
    TOPTIERVOLUME24HOURTO: 0,
    CHANGE24HOUR: 0,
    CHANGEPCT24HOUR: 0,
    CHANGEDAY: 0,
    CHANGEPCTDAY: 0,
    CHANGEHOUR: 0,
    CHANGEPCTHOUR: 0,
    CONVERSIONTYPE: 'direct',
    CONVERSIONSYMBOL: '',
    CONVERSIONLASTUPDATE: lastUpdate || Math.floor(Date.now() / 1000),
    SUPPLY: 0,
    MKTCAP: 0,
    MKTCAPPENALTY: 0,
    CIRCULATINGSUPPLY: 0,
    CIRCULATINGSUPPLYMKTCAP: 0,
    TOTALVOLUME24H: 0,
    TOTALVOLUME24HTO: 0,
    TOTALTOPTIERVOLUME24H: 0,
    TOTALTOPTIERVOLUME24HTO: 0,
    IMAGEURL: '',
  }
}

function _transformHistoryResponse(
  response: AlchemyHistoricalTokenPricesResponseBody,
): AlchemyTransformedHistoryResponse {
  return response.data.map(price => ({
    time: Math.floor(new Date(price.timestamp).getTime() / 1000),
    close: parseFloat(price.value),
    high: parseFloat(price.value), // Alchemy doesn't provide OHLC, using price as all values
    low: parseFloat(price.value),
    open: parseFloat(price.value),
    volumefrom: parseFloat(price.totalVolume || '0'),
    volumeto: parseFloat(price.totalVolume || '0'),
    conversionType: 'direct',
    conversionSymbol: '',
  }))
}

// API Fetch Functions

async function _fetchPricesAPI<T>(
  url: URL,
  method: 'GET' | 'POST',
  revalidate: number,
  body?: Record<string, unknown>,
): Promise<T> {
  console.log(JSON.stringify(body, null, 2))
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
    cache: 'force-cache',
    next: {
      revalidate,
    },
  })

  if (!response.ok) {
    if (response.status === 429) {
      const apiKey = _extractPricesAPIKey(url)
      if (apiKey) {
        markApiKeyAsRateLimited(apiKey)
      }
    }
    throw new Error(`Prices API request failed: ${response.statusText}`)
  }

  const responseBody: T = await response.json()

  const apiKey = _extractPricesAPIKey(url)
  if (apiKey) {
    markApiKeyAsSuccessful(apiKey)
  }

  return responseBody
}

async function _fetchTokenAPI<T>(
  url: URL,
  method: 'GET' | 'POST',
  revalidate: number,
  body?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
    cache: 'force-cache',
    next: {
      revalidate,
    },
  })

  if (!response.ok) {
    if (response.status === 429) {
      const apiKey = _extractTokenAPIKey(url)
      if (apiKey) {
        markApiKeyAsRateLimited(apiKey)
      }
    }
    throw new Error(`Token API request failed: ${response.statusText}`)
  }

  const responseBody: T = await response.json()

  const apiKey = _extractTokenAPIKey(url)
  if (apiKey) {
    markApiKeyAsSuccessful(apiKey)
  }

  return responseBody
}

function _extractPricesAPIKey(url: URL): string | undefined {
  // Extract API key from Prices API URL: /prices/v1/{apiKey}/...
  const pathParts = url.pathname.split('/')
  return pathParts[3] // prices/v1/API_KEY/tokens/...
}

function _extractTokenAPIKey(url: URL): string | undefined {
  // Extract API key from Token API URL: /{network}.g.alchemy.com/v2/{apiKey}
  const pathParts = url.pathname.split('/')
  return pathParts[2] // /v2/API_KEY
}

// Retry Functions

async function _retryPricesAPI<T>(fetchFn: () => Promise<T>): Promise<T> {
  const result = await retry(
    async bail => {
      try {
        return await fetchFn()
      } catch (error) {
        if (error instanceof Error && error.message.includes('429')) {
          throw error // Retry on rate limit
        }
        return bail(error)
      }
    },
    {
      retries: API_KEY_COUNT,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 60000,
      randomize: true,
    },
  )

  if (!result) {
    throw new Error('Retry operation failed to return a result')
  }

  return result
}

async function _retryTokenAPI<T>(fetchFn: () => Promise<T>): Promise<T> {
  const result = await retry(
    async bail => {
      try {
        return await fetchFn()
      } catch (error) {
        if (error instanceof Error && error.message.includes('429')) {
          throw error // Retry on rate limit
        }
        return bail(error)
      }
    },
    {
      retries: API_KEY_COUNT,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 60000,
      randomize: true,
    },
  )

  if (!result) {
    throw new Error('Retry operation failed to return a result')
  }

  return result
}
