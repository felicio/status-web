import { Point } from 'ethereum-cryptography/secp256k1'
import {
  toHex,
  // utf8ToBytes as toBytes, // see https://github.com/paulmillr/noble-hashes/blob/d76eb7c818931d290c4c27abb778e8e269895154/src/utils.ts#L91-L96
} from 'ethereum-cryptography/utils'
import { varint } from 'multiformats'
import { base58btc } from 'multiformats/bases/base58'

/**
 * @see https://github.com/multiformats/multibase/blob/af2d36bdfaeaca453d20b18542ca57bd56b51f6c/README.md#multibase-table
 */
const VALID_MULTIBASE_CODES = [
  'f', // hexadecimal
  'z', // base58btc
] as const

type MultibaseCode = typeof VALID_MULTIBASE_CODES[number]

/**
 * @see https://pkg.go.dev/github.com/multiformats/go-multicodec#pkg-types
 */
const VALID_MULTICODEC_CODES = [
  231, // secp256k1-pub (compressed) (0xe7)
] as const

type MulticodecCode = typeof VALID_MULTICODEC_CODES[number]

/**
 * @see https://specs.status.im/spec/2#public-key-serialization for specification
 */
export function deserializePublicKey(
  publicKey: string, // uncompressed, compressed, or compressed & encoded
  options = { compress: true }
): string {
  const cpk = publicKey.replace(/^0[xX]/, 'f') // ensure multibase code for hexadecimal encoding
  const c = cpk[0] as MultibaseCode

  if (!VALID_MULTIBASE_CODES.includes(c)) {
    throw new Error('Invalid public key multibase code')
  }

  let pk: string
  switch (c) {
    case 'z': {
      const zpk = base58btc.decode(cpk)
      const v = varint.decode(zpk)
      const c = v[0] as MulticodecCode
      const b = v[1]

      if (!VALID_MULTICODEC_CODES.includes(c)) {
        throw new Error('Invalid public key multicodec code')
      }

      pk = toHex(zpk.slice(b))

      break
    }

    case 'f': {
      pk = cpk.slice(1)

      break
    }

    default: {
      throw new Error('Unsopported public key multicodec code')
    }
  }

  const p = Point.fromHex(pk).toHex(options.compress) // validates and sets compression

  return `0x${p}`
}
