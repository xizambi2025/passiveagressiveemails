import { createMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_POSTS: Record<string, {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}> = {
  "ultimate-guide-passive-aggressive-emails": {
    title: "The Ultimate Guide to Passive-Aggressive Emails",
    description: "Everything you need to know about crafting the perfect passive-aggressive workplace email.",
    category: "Workplace Communication",
    date: "2026-06-01",
    readTime: "8 min read",
    author: "The Editorial Team",
    content: [
      "Passive-aggressive emails are an art form. They require the perfect balance of professionalism and subtext — the ability to communicate displeasure without ever technically being unprofessional. This guide breaks down the key elements of effective passive-aggressive workplace communication.",
      "The foundation of any passive-aggressive email is plausible deniability. If someone were to read your email aloud in a meeting, it should sound perfectly reasonable. The hostility lives between the lines, in the choice of words, the strategic use of timestamps, and the careful selection of who gets CC'd.",
      "## The Anatomy of a Passive-Aggressive Email\n\nEvery effective passive-aggressive email contains several key elements: a deceptively warm opening, a reminder of context (that shouldn't need reminding), the core request rephrased as if for the first time, and a sign-off that could be sincere or threatening depending on the reader's conscience.",
      "## Timing Is Everything\n\nThe timing of your email matters. A follow-up sent at 8:01 AM about something due 'end of day yesterday' sends a clear message. A response sent within 3 minutes of receiving an excuse demonstrates that you were, in fact, paying attention the entire time.",
      "## The CC Strategy\n\nStrategic CC usage is the nuclear option of passive-aggressive communication. CC'ing someone's manager says 'I need a witness.' CC'ing your own manager says 'I'm building a case.' BCC'ing anyone says 'This isn't over.'",
      "## Key Phrases and Their Meanings\n\n- 'As per my last email' — I already told you this and you didn't read it\n- 'Going forward' — Don't ever do this again\n- 'Just to clarify' — You clearly didn't understand the first time\n- 'I wanted to flag' — This is your fault and I'm documenting it\n- 'For your convenience' — Because you clearly can't find anything yourself",
      "## Conclusion\n\nThe best passive-aggressive emails are those that make the recipient feel slightly uncomfortable without giving them anything concrete to complain about. It's about precision, not volume. One well-crafted sentence can do more damage than a paragraph of overt hostility.",
    ],
  },
  "per-my-last-email-history": {
    title: "The History of 'Per My Last Email'",
    description: "How four words became the most feared phrase in corporate communication.",
    category: "Corporate Humor",
    date: "2026-05-28",
    readTime: "6 min read",
    author: "The Editorial Team",
    content: [
      "'Per my last email.' Four words that can make even the most confident professional break into a cold sweat. But where did this phrase come from, and how did it become the universal signal for 'I am barely containing my frustration'?",
      "The phrase itself is deceptively simple — it's just a reference to a previous communication. But context is everything. When someone writes 'per my last email,' they are simultaneously communicating three things: I already addressed this, you didn't read it, and I am keeping a record.",
      "## The Evolution of Corporate Hostility\n\nBefore email, workplace passive aggression required creativity. Memos with strategic highlighting. Meeting minutes that 'accidentally' omitted someone's contributions. The modern email gave professionals a new canvas for subtle warfare.",
      "## Why It Works\n\nThe genius of 'per my last email' is its complete deniability. If challenged, the sender can claim they were simply being helpful — providing a reference to relevant prior communication. The subtext is unmistakable, but the text itself is innocent.",
      "## Variations in the Wild\n\n- 'As I mentioned previously...' — The formal variant\n- 'Circling back on this...' — The persistent variant\n- 'Just bumping this to the top of your inbox...' — The 'I know you're ignoring me' variant\n- 'Reattaching for convenience...' — The 'you lost it, didn't you' variant",
      "## The Cultural Impact\n\nThe phrase has transcended email and become a cultural phenomenon. It appears on mugs, t-shirts, and has its own hashtag. It resonates because nearly every professional has experienced both sides — the frustration of being ignored and the guilt of being caught.",
    ],
  },
  "corporate-buzzwords-decoded": {
    title: "50 Corporate Buzzwords Decoded: What They Actually Mean",
    description: "A comprehensive dictionary of corporate speak and the passive-aggressive subtext behind each phrase.",
    category: "Corporate Humor",
    date: "2026-05-25",
    readTime: "10 min read",
    author: "The Editorial Team",
    content: [
      "Corporate language is a dialect designed to say nothing while appearing to say everything. Behind every buzzword is a simpler truth that someone decided was too direct for professional consumption. Here's your field guide to decoding the corporate lexicon.",
      "## The Classics\n\n**Synergy** — We want you to do two people's jobs.\n\n**Circle back** — I'm ending this conversation now, and may or may not revisit it.\n\n**Low-hanging fruit** — The easy stuff we should have done months ago.\n\n**Move the needle** — Actually accomplish something measurable for once.\n\n**Deep dive** — Look at this more carefully because something is clearly wrong.",
      "## The Passive-Aggressive Favorites\n\n**Going forward** — Don't do this again.\n\n**For future reference** — Remember this or there will be consequences.\n\n**As discussed** — I have witnesses.\n\n**To be transparent** — I'm about to say something you won't like.\n\n**With all due respect** — I have no respect for what you just said.",
      "## The Meaningless Fillers\n\n**Bandwidth** — Time. Just say time.\n\n**Leverage** — Use. Just say use.\n\n**Ecosystem** — The things around the thing.\n\n**Ideation** — Thinking. We used to just call it thinking.\n\n**Paradigm shift** — Something changed and we need it to sound more important than it is.",
      "## The Meeting Buzzwords\n\n**Let's take this offline** — Stop talking about this in front of everyone.\n\n**Parking lot** — Your idea isn't good enough for this meeting.\n\n**Action items** — The things no one will actually do after this meeting.\n\n**Stakeholder alignment** — Getting everyone to agree, which will never happen.",
      "## Why We Use Them\n\nBuzzwords persist because they serve a social function. They signal membership in professional culture, create distance from uncomfortable truths, and provide plausible deniability. Saying 'we need to rightsize the team' is somehow more acceptable than 'we're firing people.'",
    ],
  },
};

const ALL_SLUGS = Object.keys(BLOG_POSTS);

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = BLOG_POSTS[slug];
    if (!post) return {};
    return createMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${slug}`,
    });
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: post.author,
          url: `https://passiveaggressiveemails.com/blog/${slug}`,
        })}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Blog
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
              By {post.author}
            </div>
          </header>

          <article className="space-y-6">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-heading font-bold mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.includes("\n\n")) {
                return (
                  <div key={i} className="space-y-4">
                    {paragraph.split("\n\n").map((p, j) => {
                      if (p.startsWith("## ")) {
                        return (
                          <h2 key={j} className="text-2xl font-heading font-bold mt-10 mb-4">
                            {p.replace("## ", "")}
                          </h2>
                        );
                      }
                      if (p.startsWith("**")) {
                        const match = p.match(/\*\*(.+?)\*\*\s*—\s*(.+)/);
                        if (match) {
                          return (
                            <p key={j} className="text-muted-foreground leading-relaxed">
                              <strong className="text-foreground">{match[1]}</strong>
                              {" — "}{match[2]}
                            </p>
                          );
                        }
                      }
                      if (p.startsWith("- ")) {
                        return (
                          <ul key={j} className="space-y-2 text-muted-foreground">
                            {p.split("\n").map((item, k) => (
                              <li key={k} className="leading-relaxed">
                                {item.replace("- ", "")}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={j} className="text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      );
                    })}
                  </div>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-heading font-bold mb-3">
              Ready to craft your own?
            </h3>
            <Link
              href="/#generator"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              Generate an Email
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
