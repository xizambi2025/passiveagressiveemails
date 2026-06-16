import { DEFAULT_LOCALE, localizedPath, type Locale } from "@/lib/i18n";
import { getAboutCopy } from "@/lib/company-localized";
import Link from "next/link";

function pageHref(locale: Locale | undefined, path: string) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  return localizedPath(locale, path);
}

export function AboutContent({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = getAboutCopy(locale);

  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.missionTitle}</h2>
            {copy.missionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.whatWeDoTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.whatWeDoParagraph}</p>
            <ul className="space-y-2 text-muted-foreground">
              {copy.whatWeDoBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.philosophyTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.philosophyParagraph}</p>
            <ul className="space-y-2 text-muted-foreground">
              {copy.philosophyBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.editorialTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {copy.editorialParagraphBefore}
              <Link
                href={pageHref(locale, "/editorial-standards")}
                className="underline hover:text-foreground"
              >
                {copy.editorialLinkLabel}
              </Link>
              {copy.editorialParagraphAfter}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">{copy.disclaimerTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{copy.disclaimerParagraph}</p>
            <p className="text-sm text-muted-foreground italic">{copy.disclaimerNote}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
