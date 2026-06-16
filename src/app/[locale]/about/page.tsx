import { AboutContent } from "@/components/company/about-content";
import { JsonLd } from "@/components/seo/json-ld";
import { getAboutCopy } from "@/lib/company-localized";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getAboutCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/about"),
  });
}

export default async function LocaleAboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();
  const copy = getAboutCopy(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: copy.jsonLdName,
          url: `https://www.passiveagressiveemails.com${localizedPath(locale, "/about")}`,
        }}
      />
      <AboutContent locale={locale} />
    </>
  );
}
