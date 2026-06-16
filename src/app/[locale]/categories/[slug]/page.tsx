import { JsonLd, faqSchema } from "@/components/seo/json-ld";
import { CATEGORY_SLUGS } from "@/lib/category-detail";
import {
  getCategoryDetailMetadata,
  getLocalizedCategoryDetail,
  isCategorySlug,
} from "@/lib/category-detail-localized";
import { getCategoriesPageCopy } from "@/lib/pages-localized";
import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    CATEGORY_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!LOCALE_CONFIG[locale] || !isCategorySlug(slug)) return {};
  const meta = getCategoryDetailMetadata(locale, slug);

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: localizedPath(locale, `/categories/${slug}`),
  });
}

export default async function LocaleCategoryPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!LOCALE_CONFIG[locale] || !isCategorySlug(slug)) notFound();

  const category = getLocalizedCategoryDetail(locale, slug);
  const categoriesCopy = getCategoriesPageCopy(locale);

  return (
    <>
      <JsonLd data={faqSchema(category.faqs)} />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href={localizedPath(locale, "/categories")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← {categoriesCopy.backToCategories}
            </Link>
          </div>

          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">{category.emoji}</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              {category.label}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {category.longDescription}
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold mb-6">
              {category.examplesHeading}
            </h2>
            <div className="space-y-4">
              {category.examples.map((example, i) => (
                <article
                  key={i}
                  className="border border-border rounded-lg p-6 bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-medium text-foreground">
                      {example.subject}
                    </h3>
                    <span className="text-lg font-bold font-heading flex-shrink-0">
                      {example.score}
                      <span className="text-xs text-muted-foreground">/100</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{example.preview}&rdquo;
                  </p>
                  <div className="mt-3">
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {example.toneLabel}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold mb-6">
              {category.faqHeading}
            </h2>
            <div className="space-y-4">
              {category.faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="font-medium text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link
              href={localizedPath(locale)}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              {category.generateCta.replace("{label}", category.label)}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
