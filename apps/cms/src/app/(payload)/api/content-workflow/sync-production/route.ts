import {
  compareProductionToStaging,
  getBranchSyncDecision,
  getBranchSyncLinks,
  loadGithubConfigFromEnv,
  setGithubConfig,
} from '@status-im/content/github'
import { getPayload } from 'payload'

import { syncProductionToStaging } from '@/services/content-workflow'

import { createSyncProductionHandlers } from './create-sync-production-handlers'

const handlers = createSyncProductionHandlers({
  compareProductionToStaging,
  getBranchSyncDecision,
  getBranchSyncLinks,
  getPayload: async () => {
    const { default: config } = await import('@payload-config')
    return getPayload({ config })
  },
  loadGithubConfigFromEnv,
  setGithubConfig,
  syncProductionToStaging,
})

export const GET = handlers.GET
export const POST = handlers.POST
