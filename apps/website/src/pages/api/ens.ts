// import { getServerSession } from 'next-auth/next'

import { getEthereumClient } from '@/lib/ethereum-client'

// import type { NextRequest, NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

// export const config = {
//   runtime: 'edge',
// }

export default async function handler(
  req: // : NextRequest
  NextApiRequest,
  res: // : NextResponse
  NextApiResponse
) {
  // const session = await getServerSession(req, res, {})

  // res.status(200).json({ name: 'John Doe' })
  // return

  // todo: log headers, origin, forward-for, socket.?doamin, referer, cookies
  // console.log(JSON.stringify(req))
  console.log('process.env.VERCEL_URL', process.env.VERCEL_URL)
  console.log("req.headers['x-forwarded-for']", req.headers['x-forwarded-for'])
  console.log('req.socket.remoteAddress', req.socket.remoteAddress)
  console.log('req.headers.origin', req.headers.origin)
  // page
  // process.env.VERCEL_URL undefined
  // req.headers['x-forwarded-for'] undefined
  // req.socket.remoteAddress ::1
  // req.headers.origin http://localhost:3000

  // postman/browser
  // process.env.VERCEL_URL undefined
  // req.headers['x-forwarded-for'] undefined
  // req.socket.remoteAddress ::1
  // req.headers.origin undefined

  const { ensName, compress } = JSON.parse(req.body)

  const client = getEthereumClient()

  if (!client) {
    return
  }

  const publicKey = await client.resolvePublicKey(ensName, {
    compress,
  })

  if (!publicKey) {
    // setError('INVALID_ENS_NAME')
    // setIsLoading(false)

    res.status(404).end()
    return
  }

  // setPublicKey(publicKey)
  // setIsLoading(false)
  res.status(200).json({ publicKey })
}
