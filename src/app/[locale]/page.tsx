import { EmailGenerator } from "@/components/generator/email-generator";
import { SignatureAnimation } from "@/components/generator/signature-animation";
import { JsonLd } from "@/components/seo/json-ld";
import { getLocalizedBlogPosts } from "@/lib/blog-localized";
import { HOME_COPY, LOCALES, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

const CATEGORY_ICONS = [
  { slug: "clients", color: "#0d9488", path: "M12 21c-1.5-1.5-6-5-6-9a4 4 0 0 1 6-3.46A4 4 0 0 1 18 12c0 4-4.5 7.5-6 9z" },
  { slug: "coworkers", color: "#ea580c", path: "M3 7h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
  { slug: "managers", color: "#2563eb", path: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5.5 21v-2a5.5 5.5 0 0 1 11 0v2" },
  { slug: "deadlines", color: "#dc2626", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" },
  { slug: "meetings", color: "#7c3aed", path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M2 10h20" },
  { slug: "invoices", color: "#ca8a04", path: "M12 2a7 7 0 0 0-7 7v1a3 3 0 0 0 3 3h1v5h6v-5h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zM12 12v4M10 22h4" },
  { slug: "suppliers", color: "#7c3aed", path: "M5 8h14l-1.5 10H6.5L5 8zM9 8V6a3 3 0 0 1 6 0v2" },
  { slug: "corporate-buzzwords", color: "#374151", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" },
] as const;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = HOME_COPY[locale];

  if (!copy) return {};

  return createMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: localizedPath(locale),
  });
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = HOME_COPY[locale];

  if (!copy) notFound();

  const featuredPosts = getLocalizedBlogPosts(locale).slice(-3).reverse();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: copy.metadataTitle,
          url: `https://www.passiveaggressiveemails.com${localizedPath(locale)}`,
          description: copy.metadataDescription,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground">
              {copy.heroTitleTop}
              <br />
              {copy.heroTitleBottom}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {copy.heroDescription}
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link href="#generator" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors">
                {copy.generateCta}
              </Link>
              <Link href="/examples" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                {copy.examplesCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="max-w-xl mx-auto">
            <SignatureAnimation locale={locale} />
          </div>
        </section>

        <section id="generator" className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                {copy.generatorTitle}
              </h2>
              <p className="text-muted-foreground">
                {copy.generatorDescription}
              </p>
            </div>
            <EmailGenerator locale={locale} />
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              {copy.toneScaleTitle}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              {copy.toneScaleDescription}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {copy.tones.map((tone) => (
                <div key={tone.level} className="border border-border rounded-lg p-4 bg-card hover:shadow-sm transition-shadow">
                  <div className="text-2xl mb-2">{tone.emoji}</div>
                  <div className="font-medium text-sm">{tone.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{tone.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-heading font-bold mb-6 text-center">
              {copy.fromBlog}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={localizedPath(locale, `/blog/${post.slug}`)} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow bg-card group">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              {copy.popularCategories}
            </h2>
            <p className="text-muted-foreground mb-10">
              {copy.popularCategoriesDescription}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {copy.categories.map((cat) => {
                const icon = CATEGORY_ICONS.find((item) => item.slug === cat.slug);
                return (
                  <Link key={cat.slug} href={localizedPath(locale, `/categories/${cat.slug}`)} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors group flex flex-col items-center">
                    {icon && (
                      <svg className="w-7 h-7 mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke={icon.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={icon.path} fill={`${icon.color}22`} />
                      </svg>
                    )}
                    <div className="text-sm font-medium">{cat.label}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
