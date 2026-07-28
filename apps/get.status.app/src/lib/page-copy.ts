import { getPageCopy } from '@status-im/content/loaders'

import { createSectionFinder } from './page-sections'

import type {
  HeroSection,
  Language,
  RichTextSection,
} from '@status-im/content/schemas'

export type CmsHeroCopy = {
  headline: string
  body?: string
}

export type CmsPrefooterCopy = {
  description?: string
  title?: string
}

export type CmsPrefooterCopyByPath = Partial<
  Record<'/' | '/apps', CmsPrefooterCopy>
>

export async function getCmsHeroCopy(
  route: string,
  locale: Language,
  pageName: string,
  heroKey: string
): Promise<CmsHeroCopy> {
  const page = await getPageCopy(route, locale)
  const findSection = createSectionFinder(pageName)
  const hero = findSection<HeroSection>(page.sections, 'hero', heroKey)

  return {
    headline: hero.headline,
    ...(hero.body ? { body: hero.body } : {}),
  }
}

const findOptionalRichTextSection = (
  sections: ReadonlyArray<{ componentType: string; key: string }>,
  key: string
): RichTextSection | undefined =>
  sections.find(
    section => section.componentType === 'richText' && section.key === key
  ) as RichTextSection | undefined

export async function getCmsPrefooterCopyForSite(
  locale: Language
): Promise<CmsPrefooterCopyByPath> {
  const [homePage, appsPage] = await Promise.all([
    getPageCopy('/', locale),
    getPageCopy('/apps', locale),
  ])

  const copy: CmsPrefooterCopyByPath = {}
  const homePrefooter = findOptionalRichTextSection(
    homePage.sections,
    'home.prefooter'
  )
  const appsPrefooter = findOptionalRichTextSection(
    appsPage.sections,
    'apps.prefooter'
  )

  if (homePrefooter?.body) {
    copy['/'] = { description: homePrefooter.body }
  }
  if (appsPrefooter?.body) {
    copy['/apps'] = { description: appsPrefooter.body }
  }

  return copy
}
