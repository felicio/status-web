import { isActiveLocale } from '@status-im/content/locales'

import { getCmsPrefooterCopyForSite } from '../../../lib/page-copy'
import WebsiteLayout from '../../../website/layout'

export const dynamic = 'force-static'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleWebsiteLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isActiveLocale(locale)) {
    throw new Error(
      `LocaleWebsiteLayout received non-active locale "${locale}"`
    )
  }

  const prefooterCopy = await getCmsPrefooterCopyForSite(locale)

  return <WebsiteLayout prefooterCopy={prefooterCopy}>{children}</WebsiteLayout>
}
