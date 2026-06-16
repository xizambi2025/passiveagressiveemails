import { ContactContent } from "@/components/company/contact-content";
import { getContactCopy } from "@/lib/company-localized";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getContactCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/contact"),
  });
}

export default async function LocaleContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();

  return <ContactContent locale={locale} />;
}
