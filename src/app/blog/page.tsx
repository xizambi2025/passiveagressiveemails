import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Blog - Workplace Communication Insights",
  description:
    "Articles about workplace communication, corporate humor, email templates, professional writing, and the art of passive aggression.",
  path: "/blog",
});

const BLOG_POSTS = [
  { slug: "ultimate-guide-passive-aggressive-emails", title: "Guide to Passive-Aggressive Emails", description: "Everything you need to know about crafting the perfect passive-aggressive workplace email. Tone selection, timing, CC strategy, and key phrases decoded.", category: "Workplace Communication", date: "2026-06-01", readTime: "8 min read" },
  { slug: "per-my-last-email-history", title: "The History of 'Per My Last Email'", description: "How four words became the most feared phrase in corporate communication. The origin, evolution, and cultural impact of passive-aggressive email language.", category: "Corporate Humor", date: "2026-05-28", readTime: "6 min read" },
  { slug: "corporate-buzzwords-decoded", title: "50 Corporate Buzzwords Decoded", description: "A dictionary of corporate speak and the passive-aggressive subtext behind each phrase. From synergy to circle back, decoded for clarity.", category: "Corporate Humor", date: "2026-05-25", readTime: "10 min read" },
];

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

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
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
              </Link>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
