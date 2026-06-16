import { PrivacyContent } from "@/components/legal/privacy-content";
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
    title: "Privacy Policy",
    description:
      "Privacy policy for PassiveAggressiveEmails.com. How we handle your data, cookies, and generated emails.",
    path: localizedPath(locale, "/privacy"),
  });
}

export default async function LocalePrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();

  return <PrivacyContent locale={locale} />;
}
