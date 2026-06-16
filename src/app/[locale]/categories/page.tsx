import { LOCALES, LOCALE_CONFIG, localizedPath, type Locale } from "@/lib/i18n";
import { getCategoriesPageCopy } from "@/lib/pages-localized";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) return {};
  const copy = getCategoriesPageCopy(locale);

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale, "/categories"),
  });
}

export default async function LocaleCategoriesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!LOCALE_CONFIG[locale]) notFound();
  const copy = getCategoriesPageCopy(locale);

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copy.categories.map((category) => (
            <Link
              key={category.slug}
              href={localizedPath(locale, `/categories/${category.slug}`)}
              className="border border-border rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-0.5 bg-card group"
            >
              <div className="flex items-start gap-4">
                {category.icon && (
                  <svg
                    className="w-9 h-9 shrink-0 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={category.icon.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={category.icon.path} fill={`${category.icon.color}22`} />
                  </svg>
                )}
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {category.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {category.count}+ {copy.templatesLabel}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
