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
    color: "#0d9488",
    path: "M12 21c-1.5-1.5-6-5-6-9a4 4 0 0 1 6-3.46A4 4 0 0 1 18 12c0 4-4.5 7.5-6 9z",
    description: "For when deliverables are clear but payment isn't, or when the brief changes for the 47th time.",
    count: 125,
  },
  {
    slug: "coworkers",
    label: "Coworkers",
    color: "#ea580c",
    path: "M3 7h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    description: "Reply-all offenders, lunch thieves, credit stealers, and people who schedule 4pm Friday meetings.",
    count: 180,
  },
  {
    slug: "managers",
    label: "Managers",
    color: "#2563eb",
    path: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5.5 21v-2a5.5 5.5 0 0 1 11 0v2",
    description: "Micromanagers, meeting addicts, and those who say 'let's circle back' without ever circling forward.",
    count: 150,
  },
  {
    slug: "suppliers",
    label: "Suppliers",
    color: "#7c3aed",
    path: "M5 8h14l-1.5 10H6.5L5 8zM9 8V6a3 3 0 0 1 6 0v2",
    description: "Wrong orders, missed deliveries, and creative interpretations of 'next-day shipping.'",
    count: 95,
  },
  {
    slug: "meetings",
    label: "Meetings",
    color: "#7c3aed",
    path: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M2 10h20",
    description: "The ones that should have been emails, the ones at 7am, and the ones that go 45 minutes overtime.",
    count: 110,
  },
  {
    slug: "deadlines",
    label: "Deadlines",
    color: "#dc2626",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    description: "For those who treat 'end of day' as a philosophical concept rather than a temporal constraint.",
    count: 130,
  },
  {
    slug: "invoices",
    label: "Invoices",
    color: "#ca8a04",
    path: "M12 2a7 7 0 0 0-7 7v1a3 3 0 0 0 3 3h1v5h6v-5h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zM12 12v4M10 22h4",
    description: "Payment follow-ups ranging from polite to 'I know where your office is.'",
    count: 85,
  },
  {
    slug: "corporate-buzzwords",
    label: "Corporate Buzzwords",
    color: "#374151",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
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
                <svg className="w-9 h-9 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke={category.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={category.path} fill={`${category.color}22`} />
                </svg>
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
