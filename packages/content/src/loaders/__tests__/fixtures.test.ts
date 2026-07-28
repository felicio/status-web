import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { before, describe, it } from 'node:test'

import {
  getAllPageCopy,
  getFooter,
  getNavigationContent,
  getPageCopy,
  getSiteSettings,
} from '../index'
import { setContentRoot } from '../_fs'

const activeLocale = 'en'

before(() => {
  setContentRoot(resolve(process.cwd(), '../../content/get.status.app'))
})

describe('content fixture loaders', () => {
  it('loads every page fixture by declared route', async () => {
    const records = await getAllPageCopy(activeLocale)

    assert.ok(records.length > 0)
    const routes = new Set<string>()
    for (const { page, slug } of records) {
      assert.equal(
        routes.has(page.route),
        false,
        `duplicate route ${page.route}`
      )
      routes.add(page.route)

      const loaded = await getPageCopy(page.route, activeLocale)
      assert.equal(loaded.route, page.route)
      assert.equal(
        slug,
        page.route === '/' ? 'home' : page.route.slice(1).replace(/\//g, '-')
      )
    }
  })

  it('loads site chrome fixtures without fallback content', async () => {
    const [settings, footer, navigation] = await Promise.all([
      getSiteSettings(activeLocale),
      getFooter(activeLocale),
      getNavigationContent(activeLocale),
    ])

    assert.ok(settings.siteTitle)
    assert.ok(footer.mainLinks.length > 0)
    assert.ok(navigation.sitemap.length > 0)
  })

  it('rejects inactive locales instead of silently falling back', async () => {
    await assert.rejects(getAllPageCopy('fr'), /locale "fr" is not active/)
  })
})
