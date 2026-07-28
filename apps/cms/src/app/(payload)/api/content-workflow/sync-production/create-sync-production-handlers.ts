import { NextResponse, type NextRequest } from 'next/server'

import type {
  BranchSyncComparison,
  BranchSyncDecision,
} from '@status-im/content/github'

type PayloadClient = Awaited<
  ReturnType<typeof import('payload').getPayload>
>

export interface SyncProductionRouteDependencies {
  compareProductionToStaging: typeof import('@status-im/content/github').compareProductionToStaging
  getBranchSyncDecision: (
    comparison: BranchSyncComparison
  ) => BranchSyncDecision
  getBranchSyncLinks: typeof import('@status-im/content/github').getBranchSyncLinks
  getPayload: () => Promise<PayloadClient>
  loadGithubConfigFromEnv: typeof import('@status-im/content/github').loadGithubConfigFromEnv
  setGithubConfig: typeof import('@status-im/content/github').setGithubConfig
  syncProductionToStaging: typeof import('@/services/content-workflow').syncProductionToStaging
}

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error)

const loadGithubConfigResponse = ({
  loadGithubConfigFromEnv,
  setGithubConfig,
}: Pick<
  SyncProductionRouteDependencies,
  'loadGithubConfigFromEnv' | 'setGithubConfig'
>): NextResponse | null => {
  try {
    setGithubConfig(loadGithubConfigFromEnv())
    return null
  } catch (error) {
    return NextResponse.json(
      { error: `GitHub config not loaded: ${getErrorMessage(error)}` },
      { status: 500 }
    )
  }
}

const requireUser = async ({
  getPayload,
  req,
}: {
  getPayload: SyncProductionRouteDependencies['getPayload']
  req: NextRequest
}): Promise<NextResponse | null> => {
  const payload = await getPayload()
  const { user } = await payload.auth({ headers: req.headers })
  return user
    ? null
    : NextResponse.json({ error: 'unauthenticated' }, { status: 401 })
}

export const createSyncProductionHandlers = ({
  compareProductionToStaging,
  getBranchSyncDecision,
  getBranchSyncLinks,
  getPayload,
  loadGithubConfigFromEnv,
  setGithubConfig,
  syncProductionToStaging,
}: SyncProductionRouteDependencies): {
  GET: (req: NextRequest) => Promise<NextResponse>
  POST: (req: NextRequest) => Promise<NextResponse>
} => {
  const GET = async (req: NextRequest): Promise<NextResponse> => {
    const githubConfigResponse = loadGithubConfigResponse({
      loadGithubConfigFromEnv,
      setGithubConfig,
    })
    if (githubConfigResponse) {
      return githubConfigResponse
    }

    const authResponse = await requireUser({ getPayload, req })
    if (authResponse) {
      return authResponse
    }

    try {
      const comparison = await compareProductionToStaging()
      const githubConfig = loadGithubConfigFromEnv()
      return NextResponse.json({
        comparison,
        decision: getBranchSyncDecision(comparison),
        links: getBranchSyncLinks({
          owner: githubConfig.owner,
          repo: githubConfig.repo,
          productionBranch: comparison.productionBranch,
          stagingBranch: comparison.stagingBranch,
        }),
      })
    } catch (error) {
      return NextResponse.json(
        { error: getErrorMessage(error) },
        { status: 502 }
      )
    }
  }

  const POST = async (req: NextRequest): Promise<NextResponse> => {
    const githubConfigResponse = loadGithubConfigResponse({
      loadGithubConfigFromEnv,
      setGithubConfig,
    })
    if (githubConfigResponse) {
      return githubConfigResponse
    }

    const authResponse = await requireUser({ getPayload, req })
    if (authResponse) {
      return authResponse
    }

    try {
      const result = await syncProductionToStaging()
      const status = result.decision.kind === 'blocked' ? 409 : 200
      return NextResponse.json(result, { status })
    } catch (error) {
      return NextResponse.json(
        { error: getErrorMessage(error) },
        { status: 502 }
      )
    }
  }

  return { GET, POST }
}
