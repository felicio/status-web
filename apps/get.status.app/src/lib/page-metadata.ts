import { getPageCopy, getSiteSettings } from '@status-im/content/loaders'
import { isActiveLocale } from '@status-im/content/locales'

import { cloudinaryLoader } from '../app/_components/assets/loader'

import type { Metadata } from 'next'

const GET_SITE_OG_IMAGE = cloudinaryLoader({
  src: 'get.status.app/Hero_app',
  width: 1200,
})

type RouteParams = { params: Promise<{ locale: string }> }

/**
 * Build a Next.js `generateMetadata` export bound to a CMS page route.
 * Falls back to `site.settings` for siteName / base URL when page SEO is sparse.
 */
export function createPageMetadata(route: string) {
  return async function generateMetadata({
    params,
  }: RouteParams): Promise<Metadata> {
    const { locale } = await params
    if (!isActiveLocale(locale)) {
      throw new Error(`generateMetadata received non-active locale "${locale}"`)
    }

    const [page, settings] = await Promise.all([
      getPageCopy(route, locale),
      getSiteSettings(locale),
    ])
    const title = page.seo?.metaTitle ?? page.title
    const description = page.seo?.metaDescription ?? page.description
    const canonical = route === '/' ? '/' : route
    const baseUrl = settings.canonicalUrl.replace(/\/$/, '')
    const url = `${baseUrl}${canonical === '/' ? '' : canonical}`

    return {
      title,
      description,
      keywords: settings.keywords,
      alternates: {
        canonical,
      },
      openGraph: {
        type: 'website',
        url,
        title,
        description,
        siteName: settings.siteName,
        images: [{ url: GET_SITE_OG_IMAGE }],
      },
    }
  }
}
