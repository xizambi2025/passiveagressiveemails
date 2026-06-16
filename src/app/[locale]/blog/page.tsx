import { BlogIllustration } from "@/components/blog/blog-illustration";
import { getLocalizedBlogPosts } from "@/lib/blog-localized";
import { BLOG_INDEX_COPY, LOCALES, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = BLOG_INDEX_COPY[locale];

  if (!copy) return {};

  return createMetadata({
    title: copy.title,
    description: copy.description,
    path: localizedPath(locale, "/blog"),
  });
}

export default async function LocalizedBlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = BLOG_INDEX_COPY[locale];

  if (!copy) notFound();

  const posts = getLocalizedBlogPosts(locale);

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

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm group">
              <Link href={localizedPath(locale, `/blog/${post.slug}`)} className="block">
                <BlogIllustration visual={post.visual} title={post.title} compact />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-0.5 bg-muted rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
