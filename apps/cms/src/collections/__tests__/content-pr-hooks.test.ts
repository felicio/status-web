import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { Pages } from '../Pages'
import {
  SiteFooterContent,
  SiteNavigationContent,
  SiteSettingsContent,
} from '../SiteContent'

const repoBackedCollections = [
  Pages,
  SiteSettingsContent,
  SiteNavigationContent,
  SiteFooterContent,
]

describe('repo-backed content PR hooks', () => {
  it('creates content PRs only after Payload saves successfully', () => {
    for (const collection of repoBackedCollections) {
      assert.ok(
        collection.hooks?.afterChange?.length,
        `${collection.slug} should open a PR after a successful save`
      )
    }
  })
})
