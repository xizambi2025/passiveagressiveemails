import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Hall of Fame",
  description:
    "The greatest passive-aggressive workplace emails ever crafted. Finest examples of professional hostility, ranked by aggression score.",
  path: "/hall-of-fame",
});

const HALL_OF_FAME = [
  {
    rank: 1,
    title: "The Thermonuclear Reply-All",
    subject: "Re: Re: Re: Re: Re: Quick Question About the Printer",
    preview: "Since this thread has now exceeded the length of War and Peace, I thought I'd add my contribution to what will surely be studied by future historians.",
    aggressionScore: 97,
    toneLabel: "Corporate Assassin",
    votes: 4821,
  },
  {
    rank: 2,
    title: "The Invoice Ultimatum",
    subject: "Invoice #1247 - Day 180 - A Retrospective",
    preview: "Half a year ago, I sent you an invoice. Since then, entire civilizations have risen and fallen. Seasons have changed. I've learned a new language. And yet, my payment remains outstanding.",
    aggressionScore: 94,
    toneLabel: "Corporate Assassin",
    votes: 4156,
  },
  {
    rank: 3,
    title: "The Calendar Assassin",
    subject: "Declining: 7:00 AM Brainstorm Session (For the 12th Time)",
    preview: "I appreciate your enthusiasm for early morning creativity, though I note that our 'brainstorm' sessions have yet to produce a single actionable idea, much like scheduling them at dawn.",
    aggressionScore: 89,
    toneLabel: "Per My Previous Email",
    votes: 3892,
  },
  {
    rank: 4,
    title: "The Scope Creep Symphony",
    subject: "Re: Just One More Small Change (Version 47)",
    preview: "I've attached the revised design incorporating your latest feedback. For reference, the original brief was 2 pages. The change log is now 847 pages. I trust this aligns with your vision.",
    aggressionScore: 86,
    toneLabel: "Per My Previous Email",
    votes: 3641,
  },
  {
    rank: 5,
    title: "The Lunch Thief Manifesto",
    subject: "To the Person Who Took My Clearly Labeled Lunch",
    preview: "I hope you enjoyed the organic quinoa bowl I spent 45 minutes preparing this morning. I've attached a receipt so you can Venmo me. I've also CC'd HR, facilities, and the security team.",
    aggressionScore: 92,
    toneLabel: "Corporate Assassin",
    votes: 3498,
  },
  {
    rank: 6,
    title: "The Deadline Archaeologist",
    subject: "Unearthing the Original Deadline from the Paleolithic Era",
    preview: "According to my records—and carbon dating—this deliverable was originally due six weeks ago. I'm beginning to think 'end of week' means something different in your time zone.",
    aggressionScore: 84,
    toneLabel: "Per My Previous Email",
    votes: 3201,
  },
  {
    rank: 7,
    title: "The Meeting-That-Should-Be-An-Email",
    subject: "Re: Meeting Invite - 'Quick Sync' (Duration: 2 Hours)",
    preview: "I notice this 'quick sync' has a longer runtime than most feature films. I've taken the liberty of preparing a written summary that covers what we'll likely discuss, which is nothing.",
    aggressionScore: 78,
    toneLabel: "Passive Aggressive",
    votes: 2987,
  },
  {
    rank: 8,
    title: "The Credit Thief Correction",
    subject: "RE: Great Job on the Presentation! (Correction Enclosed)",
    preview: "Thank you all for the kind words about 'my' presentation. I've attached the original file metadata showing the actual author. Spoiler: it's me. You're welcome, Derek.",
    aggressionScore: 95,
    toneLabel: "Corporate Assassin",
    votes: 2876,
  },
  {
    rank: 9,
    title: "The 'As Per My Last Email' Symphony",
    subject: "As Per My Last 7 Emails, 3 Slack Messages, and 2 Carrier Pigeons",
    preview: "I'm following up on my previous communications, which span multiple platforms, time zones, and at this point, dimensions of reality.",
    aggressionScore: 88,
    toneLabel: "Per My Previous Email",
    votes: 2654,
  },
  {
    rank: 10,
    title: "The Passive Aggressive Out-of-Office",
    subject: "Automatic Reply: I Am Currently Unavailable",
    preview: "I am out of the office and will not be responding to emails until I return, much like how I don't respond to emails when I'm in the office. Expected delay: unchanged.",
    aggressionScore: 91,
    toneLabel: "Corporate Assassin",
    votes: 2543,
  },
];

export default function HallOfFamePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Hall of Fame - Best Passive Aggressive Emails",
          description: "The greatest passive-aggressive workplace emails, ranked by the community",
          url: "https://www.passiveaggressiveemails.com/hall-of-fame",
        }}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Hall of Fame
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The greatest passive-aggressive emails ever crafted. These
              masterpieces of professional hostility have earned their place in
              corporate communication history.
            </p>
          </div>

          <div className="space-y-4">
            {HALL_OF_FAME.map((entry) => (
              <article
                key={entry.rank}
                className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {entry.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h2 className="font-heading font-bold text-lg text-foreground">
                          {entry.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {entry.subject}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold font-heading text-foreground">
                          {entry.aggressionScore}
                        </div>
                        <div className="text-xs text-muted-foreground">/100</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                      &ldquo;{entry.preview}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 bg-muted rounded-full">
                        {entry.toneLabel}
                      </span>
                      <span>
                        {entry.votes.toLocaleString()} votes
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#generator"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
            >
              Create Your Masterpiece
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
