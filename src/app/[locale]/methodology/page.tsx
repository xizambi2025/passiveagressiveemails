import { MethodologyContent } from "@/components/company/methodology-content";
import { JsonLd, faqSchema } from "@/components/seo/json-ld";
import { getMethodologyCopy } from "@/lib/company-localized";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getMethodologyCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/methodology"),
  });
}

export default async function LocaleMethodologyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();
  const copy = getMethodologyCopy(locale);

  return (
    <>
      <JsonLd data={faqSchema(copy.faqs)} />
      <MethodologyContent locale={locale} />
    </>
  );
}
