import { JsonLd } from "@/components/seo/json-ld";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { getExamplesPageCopy } from "@/lib/pages-localized";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getExamplesPageCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/examples"),
  });
}

export default async function LocaleExamplesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();
  const copy = getExamplesPageCopy(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.jsonLdName,
          description: copy.jsonLdDescription,
          url: `https://www.passiveaggressiveemails.com${localizedPath(locale, "/examples")}`,
        }}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              {copy.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {copy.description}
            </p>
          </div>

          <div className="space-y-4">
            {copy.emails.map((email) => (
              <article
                key={email.id}
                className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h2 className="font-medium text-foreground mb-1">
                      {email.subject}
                    </h2>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {email.recipient}
                      </span>
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {email.toneLabel}
                      </span>
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {copy.scoreLabel}: {email.aggressionScore}/100
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{email.preview}&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {email.situation}
                  </span>
                  <Link
                    href={localizedPath(locale, `/categories/${email.categorySlug}`)}
                    className="text-xs font-medium hover:underline"
                  >
                    {email.categoryLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={localizedPath(locale)}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              {copy.generateCta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
