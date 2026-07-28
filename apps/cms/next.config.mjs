import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { withPayload } from '@payloadcms/next/withPayload'

const cmsRoot = path.dirname(fileURLToPath(import.meta.url))
const workspaceRoot = path.join(cmsRoot, '../..')

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: workspaceRoot,
  eslint: {
    // CMS workspace still has WIP collection/workflow modules outside the
    // get.status.app MVP scope; keep `pnpm lint` as the source of truth.
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: workspaceRoot,
    resolveAlias: {
      '@payload-config': path.join(cmsRoot, 'payload.config.ts'),
      '@': path.join(cmsRoot, 'src'),
    },
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@payload-config': path.join(cmsRoot, 'payload.config.ts'),
      '@': path.join(cmsRoot, 'src'),
    }
    return webpackConfig
  },
}

export default withPayload(nextConfig)
