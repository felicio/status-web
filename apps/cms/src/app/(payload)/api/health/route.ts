import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@payload-config'

const healthTimeoutMs = (() => {
  const value = Number.parseInt(
    process.env['PAYLOAD_HEALTH_TIMEOUT_MS'] || '10000',
    10
  )

  if (!Number.isInteger(value) || value < 1) {
    throw new Error('PAYLOAD_HEALTH_TIMEOUT_MS must be a positive integer')
  }

  return value
})()

const withTimeout = async <T>(
  operation: Promise<T>,
  label: string
): Promise<T> => {
  let timeout: ReturnType<typeof setTimeout> | undefined

  try {
    return await Promise.race([
      operation,
      new Promise<never>((_, reject) => {
        timeout = setTimeout(() => {
          reject(new Error(`${label} timed out after ${healthTimeoutMs}ms`))
        }, healthTimeoutMs)
      }),
    ])
  } finally {
    if (timeout) {
      clearTimeout(timeout)
    }
  }
}

/**
 * GET /api/health
 *
 * Lightweight health probe. Performs one cheap DB read so external uptime
 * monitors (UptimeRobot, Vercel Cron, etc.) can poll this URL on a schedule
 * to:
 *   1. Verify CMS + DB are reachable from the public internet.
 *   2. Keep the backing Postgres project warm when the provider idles
 *      inactive databases.
 *
 * Public, unauthenticated. Returns no internal detail beyond OK / not-OK so
 * it is safe to expose. Cache disabled — every poll must hit the DB to be
 * meaningful as a keep-alive.
 *
 * Response:
 *   200 { ok: true,  db: "ok",   latencyMs: number }
 *   503 { ok: false, db: "down", error: string }
 */
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const GET = async (): Promise<NextResponse> => {
  const startedAt = Date.now()
  try {
    const payload = await withTimeout(getPayload({ config }), 'getPayload')
    await withTimeout(payload.db.pool.query('select 1 as ok'), 'database ping')
    return NextResponse.json(
      { ok: true, db: 'ok', latencyMs: Date.now() - startedAt },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        db: 'down',
        error: err instanceof Error ? err.message : String(err),
        latencyMs: Date.now() - startedAt,
      },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }
}
