import { base64url } from '@scure/base'

import { signData, verifySignedData } from './sign-data'

import type { EncodedURLData } from './encode-url-data'

export async function signEncodedURLData(
  encodedURLData: EncodedURLData,
  privateKey: Uint8Array | string
): Promise<string> {
  const signature = await signData(encodedURLData, privateKey)

  return base64url.encode(signature)
}

export function verifyEncodedURLData(
  encodedSignature: string,
  encodedURLData: EncodedURLData,
  publicKey?: string
): boolean {
  const signature = base64url.decode(encodedSignature)

  return verifySignedData(signature, encodedURLData, publicKey)
}
