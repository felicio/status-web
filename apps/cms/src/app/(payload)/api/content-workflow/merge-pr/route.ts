import { getPayload } from 'payload'

import { loadGithubConfigFromEnv, setGithubConfig } from '@status-im/content/github'

import { mergeContentPullRequest } from '@/services/content-workflow'

import { createMergePrPostHandler } from './create-merge-pr-post-handler'

export const POST = createMergePrPostHandler({
  getPayload: async () => {
    const { default: config } = await import('@payload-config')
    return getPayload({ config })
  },
  loadGithubConfigFromEnv,
  mergeContentPullRequest,
  setGithubConfig,
})
