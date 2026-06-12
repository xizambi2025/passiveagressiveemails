import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Email Categories - Passive Aggressive Emails by Situation",
  description:
    "Browse passive-aggressive email templates by category: clients, coworkers, managers, suppliers, meetings, deadlines, invoices, and corporate buzzwords.",
  path: "/categories",
});

const CATEGORIES = [
  {
    slug: "clients",
    label: "Clients",
    emoji: "🤝",
    description: "For when deliverables are clear but payment isn't, or when the brief changes for the 47th time.",
    count: 125,
  },
  {
    slug: "coworkers",
    label: "Coworkers",
    emoji: "💼",
    description: "Reply-all offenders, lunch thieves, credit stealers, and people who schedule 4pm Friday meetings.",
    count: 180,
  },
  {
    slug: "managers",
    label: "Managers",
    emoji: "👔",
    description: "Micromanagers, meeting addicts, and those who say 'let's circle back' without ever circling forward.",
    count: 150,
  },
  {
    slug: "suppliers",
    label: "Suppliers",
    emoji: "📦",
    description: "Wrong orders, missed deliveries, and creative interpretations of 'next-day shipping.'",
    count: 95,
  },
  {
    slug: "meetings",
    label: "Meetings",
    emoji: "📅",
    description: "The ones that should have been emails, the ones at 7am, and the ones that go 45 minutes overtime.",
    count: 110,
  },
  {
    slug: "deadlines",
    label: "Deadlines",
    emoji: "⏰",
    description: "For those who treat 'end of day' as a philosophical concept rather than a temporal constraint.",
    count: 130,
  },
  {
    slug: "invoices",
    label: "Invoices",
    emoji: "💰",
    description: "Payment follow-ups ranging from polite to 'I know where your office is.'",
    count: 85,
  },
  {
    slug: "corporate-buzzwords",
    label: "Corporate Buzzwords",
    emoji: "🗣️",
    description: "Synergy, circle back, low-hanging fruit, and other phrases that make people question their career choices.",
    count: 75,
  },
];

export default function CategoriesPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every workplace frustration, categorized and catalogued for your
            passive-aggressive convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="border border-border rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-0.5 bg-card group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {category.emoji}
                </span>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {category.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {category.count}+ templates
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
