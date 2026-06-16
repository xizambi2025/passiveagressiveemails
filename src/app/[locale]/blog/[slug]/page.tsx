import { BlogIllustration } from "@/components/blog/blog-illustration";
import { JsonLd, articleSchema } from "@/components/seo/json-ld";
import { getLocalizedBlogPostMap, LOCALIZED_BLOG_SLUGS } from "@/lib/blog-localized";
import { BLOG_INDEX_COPY, LOCALES, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    LOCALIZED_BLOG_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getLocalizedBlogPostMap(locale)[slug];

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: localizedPath(locale, `/blog/${slug}`),
  });
}

export default async function LocalizedBlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getLocalizedBlogPostMap(locale)[slug];
  const copy = BLOG_INDEX_COPY[locale];

  if (!post || !copy) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: post.author,
          url: `https://www.passiveaggressiveemails.com${localizedPath(locale, `/blog/${slug}`)}`,
        })}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href={localizedPath(locale, "/blog")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← {copy.backToBlog}
            </Link>
          </div>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-0.5 bg-muted rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
              {copy.by} {post.author}
            </div>
          </header>

          <div className="mb-10">
            <BlogIllustration visual={post.visual} title={post.title} />
          </div>

          <article className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="text-2xl font-heading font-bold mt-10 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc space-y-3 pl-5 text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={i} className="rounded-2xl border-l-4 border-primary bg-muted/50 px-6 py-5 font-heading text-xl leading-relaxed text-foreground">
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "table") {
                return (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border">
                    <table className="w-full border-collapse text-sm">
                      <thead className="bg-muted/70 text-left">
                        <tr>
                          <th className="w-1/3 px-4 py-3 font-heading text-foreground">{block.columns[0]}</th>
                          <th className="px-4 py-3 font-heading text-foreground">{block.columns[1]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map(([left, right]) => (
                          <tr key={`${left}-${right}`} className="border-t border-border">
                            <td className="px-4 py-3 align-top font-medium text-foreground">{left}</td>
                            <td className="px-4 py-3 align-top leading-relaxed text-muted-foreground">{right}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-heading font-bold mb-3">{copy.ready}</h3>
            <Link href={`${localizedPath(locale)}#generator`} className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors">
              {copy.cta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
