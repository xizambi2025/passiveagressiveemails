import { getEditorialCopy } from "@/lib/company-localized";
import { DEFAULT_LOCALE, localizedPath, type Locale } from "@/lib/i18n";
import Link from "next/link";

function pageHref(locale: Locale | undefined, path: string) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  return localizedPath(locale, path);
}

export function EditorialStandardsContent({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = getEditorialCopy(locale);

  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.principlesTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.principlesIntro}</p>
            <div className="space-y-4">
              {copy.principles.map((principle) => (
                <div key={principle.title} className="border border-border rounded-lg p-5">
                  <h3 className="font-medium mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.reviewTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.reviewIntro}</p>
            <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
              {copy.reviewSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.updatesTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.updatesParagraph}</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.aiTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.aiParagraph}</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.feedbackTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.feedbackParagraph}</p>
          </section>

          <section className="pt-4 border-t border-border/60">
            <p className="text-sm text-muted-foreground">
              {copy.seeAlsoLabel}{" "}
              <Link href={pageHref(locale, "/methodology")} className="underline hover:text-foreground">
                {copy.seeAlsoMethodology}
              </Link>{" "}
              ·{" "}
              <Link href={pageHref(locale, "/about")} className="underline hover:text-foreground">
                {copy.seeAlsoAbout}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
