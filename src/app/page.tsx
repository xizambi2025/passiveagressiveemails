import { EmailGenerator } from "@/components/generator/email-generator";
import { SignatureAnimation } from "@/components/generator/signature-animation";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Passive Aggressive Email Generator",
          url: "https://passiveaggressiveemails.com",
          description:
            "Generate workplace emails ranging from politely professional to 'per my previous email.' The definitive tool for crafting passive-aggressive corporate communication.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground">
              Passive Aggressive
              <br />
              Email Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate workplace emails ranging from politely professional to
              &ldquo;per my previous email.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link
                href="#generator"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
              >
                Generate Email
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Browse Examples
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="max-w-xl mx-auto">
            <SignatureAnimation />
          </div>
        </section>

        <section id="generator" className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Craft Your Email
              </h2>
              <p className="text-muted-foreground">
                Select your parameters. We&apos;ll handle the passive aggression.
              </p>
            </div>
            <EmailGenerator />
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              The Tone Scale
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              From cordial professionalism to career-ending precision.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { level: 1, label: "Professional", emoji: "😊", desc: "Genuinely polite" },
                { level: 2, label: "Slightly Annoyed", emoji: "🙂", desc: "Smile is slipping" },
                { level: 3, label: "Concerned", emoji: "😐", desc: "Patience wearing thin" },
                { level: 4, label: "Passive Aggressive", emoji: "🙃", desc: "Reading between lines" },
                { level: 5, label: "Per My Previous Email", emoji: "😤", desc: "CC'ing the manager" },
                { level: 6, label: "Corporate Assassin", emoji: "💀", desc: "Career-ending precision" },
              ].map((tone) => (
                <div
                  key={tone.level}
                  className="border border-border rounded-lg p-4 bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="text-2xl mb-2">{tone.emoji}</div>
                  <div className="font-medium text-sm">{tone.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tone.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Popular Categories
            </h2>
            <p className="text-muted-foreground mb-10">
              Browse our curated collection of workplace communication templates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { slug: "clients", label: "Clients", emoji: "🤝" },
                { slug: "coworkers", label: "Coworkers", emoji: "💼" },
                { slug: "managers", label: "Managers", emoji: "👔" },
                { slug: "deadlines", label: "Deadlines", emoji: "⏰" },
                { slug: "meetings", label: "Meetings", emoji: "📅" },
                { slug: "invoices", label: "Invoices", emoji: "💰" },
                { slug: "suppliers", label: "Suppliers", emoji: "📦" },
                { slug: "corporate-buzzwords", label: "Buzzwords", emoji: "🗣️" },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors group"
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </div>
                  <div className="text-sm font-medium">{cat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
