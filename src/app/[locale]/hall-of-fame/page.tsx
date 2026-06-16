import { JsonLd } from "@/components/seo/json-ld";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { getHallOfFamePageCopy } from "@/lib/pages-localized";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getHallOfFamePageCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/hall-of-fame"),
  });
}

export default async function LocaleHallOfFamePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();
  const copy = getHallOfFamePageCopy(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.jsonLdName,
          description: copy.jsonLdDescription,
          url: `https://www.passiveagressiveemails.com${localizedPath(locale, "/hall-of-fame")}`,
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
            {copy.entries.map((entry) => (
              <article
                key={entry.rank}
                className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {entry.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h2 className="font-heading font-bold text-lg text-foreground">
                          {entry.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {entry.subject}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold font-heading text-foreground">
                          {entry.aggressionScore}
                        </div>
                        <div className="text-xs text-muted-foreground">/100</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                      &ldquo;{entry.preview}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {entry.toneLabel}
                      </span>
                      <span>
                        {entry.votes.toLocaleString()} {copy.votesLabel}
                      </span>
                    </div>
                  </div>
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
