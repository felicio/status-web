import { expect, test } from 'vitest'

import {
  recoverPublicKeyFromEncodedURLData,
  signEncodedURLData,
} from './sign-url-data'

import type { EncodedURLData } from './encode-url-data'

const privateKey = new Uint8Array([
  233, 34, 68, 49, 2, 175, 16, 66, 41, 112, 38, 154, 139, 197, 117, 203, 223,
  215, 4, 135, 228, 217, 5, 31, 75, 9, 30, 221, 141, 239, 82, 84,
])
const publicKey =
  '0x04f9134866f2bd8f45f2bc7893c95a6b989378c370088c9a1a5a53eda2ebb8a1e8386921592b6bd56fc3573f03c46df3396cc42e2993cdc001855c858865d768a7'
const encodedURLData =
  'G74AgK0ObFNmYT-WC_Jcc9KfSjHXAQo9THKEEbgPaJoItceMES-bUxr2Tj9efv447rRefBIUg9CEsSFyjBOFTRdZ9PH2wUOW8hVNYqIje3BC96mZ8uFogqM6k7gCCJnMHy4ulsmsgHTdeh5dAzTNNuG8m9XB8oVeildTCKlRhINnTZh4kAl5sP8SzBB4V2_I41a8PKl3mcS0z_eF5gA=' as EncodedURLData
const encodedSignature =
  'k-n7d-9Pcx6ht87F4riP5xAw1v7S-e1HGMRaeaO068Q3IF1Jo8xOyeMT9Yr3Wv349Z2CdBzylw8M83CgQhcMogA='

test('should sign URL data', async () => {
  expect(await signEncodedURLData(encodedURLData, privateKey)).toBe(
    encodedSignature
  )
})

test('should recover original public key from URL data', async () => {
  expect(
    await recoverPublicKeyFromEncodedURLData(encodedURLData, encodedSignature)
  ).toBe(publicKey)
})

test('should not recover original public key from same URL data but changed signature', async () => {
  const changedEncodedSignature =
    'OyOgY6Zta8S7U4l5Bv_9E_7snALhixwvjxORVAVJ-YJk-tMSGgstOy5XEEQx25TQJIAtpWf8eHnEmV8V-GmouQA='

  expect(
    await recoverPublicKeyFromEncodedURLData(
      encodedURLData,
      changedEncodedSignature
    )
  ).not.toBe(publicKey)
})

test('should not recover original public key from same signature but changed URL data', async () => {
  const changedEncodedURLData =
    'CyeACk0KHkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBlZ2VzdGFzLhIYV2UgZG8gbm90IHN1cHBvcnQgQWxpY2UuGMCEPSIHIzQzNjBERioEAQIDBAM=' as EncodedURLData

  expect(
    await recoverPublicKeyFromEncodedURLData(
      changedEncodedURLData,
      encodedSignature
    )
  ).not.toBe(publicKey)
})
