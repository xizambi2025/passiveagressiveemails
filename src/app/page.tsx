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
                { slug: "clients", label: "Clients", color: "#0d9488", path: "M12 21c-1.5-1.5-6-5-6-9a4 4 0 0 1 6-3.46A4 4 0 0 1 18 12c0 4-4.5 7.5-6 9z" },
                { slug: "coworkers", label: "Coworkers", color: "#ea580c", path: "M3 7h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
                { slug: "managers", label: "Managers", color: "#2563eb", path: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5.5 21v-2a5.5 5.5 0 0 1 11 0v2" },
                { slug: "deadlines", label: "Deadlines", color: "#dc2626", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" },
                { slug: "meetings", label: "Meetings", color: "#7c3aed", path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M2 10h20" },
                { slug: "invoices", label: "Invoices", color: "#ca8a04", path: "M12 2a7 7 0 0 0-7 7v1a3 3 0 0 0 3 3h1v5h6v-5h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zM12 12v4M10 22h4" },
                { slug: "suppliers", label: "Suppliers", color: "#7c3aed", path: "M5 8h14l-1.5 10H6.5L5 8zM9 8V6a3 3 0 0 1 6 0v2" },
                { slug: "corporate-buzzwords", label: "Buzzwords", color: "#374151", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors group flex flex-col items-center"
                >
                  <svg className="w-7 h-7 mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke={cat.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={cat.path} fill={`${cat.color}22`} />
                  </svg>
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
