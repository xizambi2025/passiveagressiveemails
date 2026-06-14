import { createMetadata } from "@/lib/seo";
import { BlogIllustration } from "@/components/blog/blog-illustration";
import { BLOG_POSTS } from "@/lib/blog";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Blog - Workplace Communication Insights",
  description:
    "Articles about workplace communication, corporate humor, email templates, professional writing, and the art of passive aggression.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and observations on workplace communication —
            from the mildly helpful to the deeply cathartic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
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
