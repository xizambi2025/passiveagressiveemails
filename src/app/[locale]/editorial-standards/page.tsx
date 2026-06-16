import { EditorialStandardsContent } from "@/components/company/editorial-standards-content";
import { getEditorialCopy } from "@/lib/company-localized";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getEditorialCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/editorial-standards"),
  });
}

export default async function LocaleEditorialStandardsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();

  return <EditorialStandardsContent locale={locale} />;
}
