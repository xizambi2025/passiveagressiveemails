import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Passive Aggressive Email Examples",
  description:
    "Browse our curated collection of passive-aggressive workplace email examples. From mildly annoyed to corporate assassin level, find the perfect template for every situation.",
  path: "/examples",
});

const EXAMPLE_EMAILS = [
  {
    id: "late-reply-1",
    subject: "Re: Following Up (Again)",
    situation: "Late reply to important email",
    recipient: "Coworker",
    tone: 4,
    toneLabel: "Passive Aggressive",
    aggressionScore: 68,
    preview: "I hope this email finds you well, though I suspect it will find you the same way my last three emails did — unread.",
    category: "coworkers",
  },
  {
    id: "missed-deadline-1",
    subject: "Re: Project Deadline - Gentle Reminder #7",
    situation: "Missed deadline (again)",
    recipient: "Freelancer",
    tone: 5,
    toneLabel: "Per My Previous Email",
    aggressionScore: 82,
    preview: "I'm writing to inquire about the deliverable that was due last Tuesday. Or was it the Tuesday before? Time loses meaning when you're waiting.",
    category: "deadlines",
  },
  {
    id: "credit-stealing-1",
    subject: "Re: Great presentation! (The one I made)",
    situation: "Taking credit for my work",
    recipient: "Coworker",
    tone: 6,
    toneLabel: "Corporate Assassin",
    aggressionScore: 91,
    preview: "I noticed the slides from yesterday's presentation looked remarkably familiar. Almost as if I'd created them myself. Which, of course, I did.",
    category: "coworkers",
  },
  {
    id: "lunch-meeting-1",
    subject: "Re: 12:00 PM Meeting - A Few Thoughts",
    situation: "Scheduling meetings during lunch",
    recipient: "Manager",
    tone: 3,
    toneLabel: "Concerned",
    aggressionScore: 45,
    preview: "I wanted to flag that the recurring noon meeting does coincide with what some cultures refer to as 'lunch.' Just flagging for awareness.",
    category: "meetings",
  },
  {
    id: "invoice-1",
    subject: "Invoice #4521 - 90 Day Follow Up",
    situation: "Late payment on invoice",
    recipient: "Client",
    tone: 5,
    toneLabel: "Per My Previous Email",
    aggressionScore: 78,
    preview: "I trust this email finds you well and your accounts payable department equally thriving, despite the apparent hibernation of the past quarter.",
    category: "invoices",
  },
  {
    id: "reply-all-1",
    subject: "Re: Re: Re: Re: All - Quick Question",
    situation: "Replying all unnecessarily",
    recipient: "Coworker",
    tone: 4,
    toneLabel: "Passive Aggressive",
    aggressionScore: 55,
    preview: "Thank you for sharing your lunch preferences with all 847 employees. I'm sure the CFO was equally delighted to learn you prefer Thai over Italian.",
    category: "coworkers",
  },
  {
    id: "micromanage-1",
    subject: "Re: Status Update Request #14 (This Week)",
    situation: "Micromanaging every task",
    recipient: "Manager",
    tone: 4,
    toneLabel: "Passive Aggressive",
    aggressionScore: 65,
    preview: "As requested, here is my hourly update. Between 2:00 and 2:15, I breathed approximately 200 times and had one thought about quitting.",
    category: "managers",
  },
  {
    id: "wrong-order-1",
    subject: "Re: Order #8847 - Creative Interpretation of Our Requirements",
    situation: "Sent wrong order again",
    recipient: "Supplier",
    tone: 5,
    toneLabel: "Per My Previous Email",
    aggressionScore: 74,
    preview: "We received 500 units of what appears to be a product we've never ordered, from a catalogue we've never seen, in a color that doesn't exist in nature.",
    category: "suppliers",
  },
  {
    id: "vague-brief-1",
    subject: "Re: Project Brief - Seeking Clarification on... Everything",
    situation: "Sending vague requirements",
    recipient: "Client",
    tone: 3,
    toneLabel: "Concerned",
    aggressionScore: 48,
    preview: "Thank you for the brief. I have a few clarifying questions, specifically regarding the parts between the beginning and the end.",
    category: "clients",
  },
];

export default function ExamplesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Passive Aggressive Email Examples",
          description: "Curated collection of passive-aggressive workplace email examples",
          url: "https://passiveaggressiveemails.com/examples",
        }}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Email Examples
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated gallery of passive-aggressive workplace communication.
              Browse by category, tone level, or recipient type.
            </p>
          </div>

          <div className="space-y-4">
            {EXAMPLE_EMAILS.map((email) => (
              <article
                key={email.id}
                className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h2 className="font-medium text-foreground mb-1">
                      {email.subject}
                    </h2>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {email.recipient}
                      </span>
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {email.toneLabel}
                      </span>
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        Score: {email.aggressionScore}/100
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{email.preview}&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {email.situation}
                  </span>
                  <Link
                    href={`/categories/${email.category}`}
                    className="text-xs font-medium hover:underline"
                  >
                    {email.category}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#generator"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              Generate Your Own
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
