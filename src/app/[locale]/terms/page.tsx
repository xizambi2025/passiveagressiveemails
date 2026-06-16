import { TermsContent } from "@/components/legal/terms-content";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};

  return createMetadata({
    title: "Terms of Service",
    description:
      "Terms of service for PassiveAggressiveEmails.com. Usage guidelines, disclaimers, and legal information.",
    path: localizedPath(locale, "/terms"),
  });
}

export default async function LocaleTermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();

  return <TermsContent locale={locale} />;
}
