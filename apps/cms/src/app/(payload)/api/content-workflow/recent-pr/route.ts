import { getPayload } from 'payload'

import {
  findOpenPullRequestsTouchingPath,
  loadGithubConfigFromEnv,
  setGithubConfig,
} from '@status-im/content/github'

import { createRecentPrGetHandler } from './create-recent-pr-get-handler'

export const GET = createRecentPrGetHandler({
  findOpenPullRequestsTouchingPath,
  getPayload: async () => {
    const { default: config } = await import('@payload-config')
    return getPayload({ config })
  },
  loadGithubConfigFromEnv,
  setGithubConfig,
})
