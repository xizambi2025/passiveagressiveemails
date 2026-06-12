import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Blog - Workplace Communication Insights",
  description:
    "Articles about workplace communication, corporate humor, email templates, professional writing, and the art of passive aggression.",
  path: "/blog",
});

const BLOG_POSTS = [
  { slug: "ultimate-guide-passive-aggressive-emails", title: "The Ultimate Guide to Passive-Aggressive Emails", description: "Everything you need to know about crafting the perfect passive-aggressive workplace email, from tone selection to strategic CC usage.", category: "Workplace Communication", date: "2026-06-01", readTime: "8 min read" },
  { slug: "per-my-last-email-history", title: "The History of 'Per My Last Email'", description: "How four words became the most feared phrase in corporate communication. A deep dive into the evolution of passive-aggressive office language.", category: "Corporate Humor", date: "2026-05-28", readTime: "6 min read" },
  { slug: "corporate-buzzwords-decoded", title: "50 Corporate Buzzwords Decoded: What They Actually Mean", description: "From 'synergy' to 'circle back' — a comprehensive dictionary of corporate speak and the passive-aggressive subtext behind each phrase.", category: "Corporate Humor", date: "2026-05-25", readTime: "10 min read" },
  { slug: "how-to-follow-up-professionally", title: "How to Follow Up on an Email Without Sounding Desperate", description: "The art of the follow-up email: timing, tone, and the subtle difference between persistent and passive-aggressive.", category: "Professional Writing", date: "2026-05-22", readTime: "7 min read" },
  { slug: "email-sign-offs-ranked-aggression", title: "Email Sign-Offs Ranked by Aggression Level", description: "From 'Warm regards' to 'Regards' to the nuclear 'Best.' — how your email sign-off reveals your true feelings.", category: "Workplace Communication", date: "2026-05-19", readTime: "5 min read" },
  { slug: "surviving-reply-all-culture", title: "Surviving Reply-All Culture: A Field Guide", description: "Strategies for managing the reply-all epidemic without losing your mind or your professional reputation.", category: "Productivity", date: "2026-05-16", readTime: "6 min read" },
  { slug: "passive-aggressive-emails-remote-work", title: "Passive-Aggressive Emails in the Remote Work Era", description: "How remote work has transformed the landscape of workplace passive aggression, from Slack to email to calendar invites.", category: "Remote Work", date: "2026-05-13", readTime: "7 min read" },
  { slug: "invoice-follow-up-templates", title: "10 Invoice Follow-Up Email Templates (That Actually Get Paid)", description: "Professional payment reminder templates that escalate gracefully from polite to pointed. Tested and proven effective.", category: "Email Templates", date: "2026-05-10", readTime: "8 min read" },
  { slug: "meetings-that-should-be-emails", title: "How to Say 'This Meeting Should Be an Email' (Professionally)", description: "Tactical approaches for reducing unnecessary meetings without making enemies. Templates and scripts included.", category: "Productivity", date: "2026-05-07", readTime: "6 min read" },
  { slug: "art-of-strategic-cc", title: "The Art of the Strategic CC: A Masterclass", description: "When to CC, when to BCC, and when to 'accidentally' include someone's manager. The politics of email recipients decoded.", category: "Workplace Communication", date: "2026-05-04", readTime: "9 min read" },
  { slug: "dealing-with-micromanagers-email", title: "Email Templates for Dealing with Micromanagers", description: "Professionally firm responses to the manager who needs hourly updates. Set boundaries without setting fires.", category: "Email Templates", date: "2026-05-01", readTime: "7 min read" },
  { slug: "anatomy-of-out-of-office", title: "The Anatomy of a Perfect Out-of-Office Reply", description: "From the basic auto-reply to the art of the passive-aggressive OOO that subtly establishes dominance.", category: "Workplace Communication", date: "2026-04-28", readTime: "5 min read" },
  { slug: "scope-creep-professional-responses", title: "Responding to Scope Creep: Templates That Set Boundaries", description: "How to say 'that wasn't in the brief' without burning client relationships. Professional pushback frameworks.", category: "Email Templates", date: "2026-04-25", readTime: "8 min read" },
  { slug: "passive-aggressive-slack-messages", title: "Passive-Aggressive Slack Messages: The New Frontier", description: "How instant messaging has created an entirely new grammar of workplace hostility. From emoji reactions to thread etiquette.", category: "Workplace Communication", date: "2026-04-22", readTime: "6 min read" },
  { slug: "freelancer-client-communication", title: "Freelancer Email Templates: Getting Clients to Respect Boundaries", description: "Professional templates for scope, timeline, and payment conversations that every freelancer needs in their toolkit.", category: "Email Templates", date: "2026-04-19", readTime: "9 min read" },
  { slug: "workplace-email-psychology", title: "The Psychology Behind Passive-Aggressive Emails", description: "Why we write them, why they work, and what your email style says about your conflict management approach.", category: "Workplace Communication", date: "2026-04-16", readTime: "7 min read" },
  { slug: "friday-afternoon-meeting-decline", title: "How to Decline a Friday 4pm Meeting (Every Time)", description: "Scripts and templates for protecting your end-of-week sanity. Because some meetings can wait until Monday.", category: "Productivity", date: "2026-04-13", readTime: "5 min read" },
  { slug: "email-response-time-expectations", title: "Email Response Times: What They Really Communicate", description: "The unwritten rules of reply timing. Why responding too fast is desperate and too slow is aggressive.", category: "Professional Writing", date: "2026-04-10", readTime: "6 min read" },
  { slug: "corporate-jargon-generator-guide", title: "Corporate Jargon: A Survival Guide for New Employees", description: "Decoding the language of meetings, memos, and management speak. Essential translation for your first year.", category: "Corporate Humor", date: "2026-04-07", readTime: "8 min read" },
  { slug: "handling-credit-theft-professionally", title: "When Someone Takes Credit for Your Work: Email Responses", description: "Templates for reclaiming your contributions without creating office warfare. Strategic, professional, effective.", category: "Email Templates", date: "2026-04-04", readTime: "7 min read" },
  { slug: "email-etiquette-2026", title: "Email Etiquette in 2026: What's Changed and What Hasn't", description: "The evolving norms of professional email communication in the post-pandemic, AI-augmented workplace.", category: "Professional Writing", date: "2026-04-01", readTime: "6 min read" },
  { slug: "managing-up-email-templates", title: "Managing Up: Email Templates for Difficult Bosses", description: "Professional communication strategies for navigating challenging management relationships without losing your job.", category: "Email Templates", date: "2026-03-29", readTime: "8 min read" },
  { slug: "remote-work-communication-mistakes", title: "10 Remote Work Communication Mistakes (and How to Fix Them)", description: "Common email and messaging pitfalls that remote workers make, and professional templates for doing better.", category: "Remote Work", date: "2026-03-26", readTime: "7 min read" },
  { slug: "polite-no-email-templates", title: "How to Say No in an Email (Without Actually Saying No)", description: "The corporate art of declining without declining. Templates for every situation from meetings to projects.", category: "Professional Writing", date: "2026-03-23", readTime: "6 min read" },
  { slug: "email-subject-lines-that-get-read", title: "Email Subject Lines That Actually Get Opened", description: "The science and art of subject lines that cut through inbox noise. From professional to strategically alarming.", category: "Professional Writing", date: "2026-03-20", readTime: "5 min read" },
  { slug: "workplace-apology-emails", title: "The Workplace Apology Email: When You're Sorry (But Not Really)", description: "Templates for apologizing when you're technically at fault but spiritually innocent. Corporate contrition perfected.", category: "Email Templates", date: "2026-03-17", readTime: "6 min read" },
  { slug: "vendor-management-emails", title: "Vendor Communication: From Polite to 'We Need to Talk'", description: "Escalation templates for supplier and vendor relationships. How to get what you paid for without legal involvement.", category: "Email Templates", date: "2026-03-14", readTime: "7 min read" },
  { slug: "meeting-notes-passive-aggressive", title: "How to Write Meeting Notes That Hold People Accountable", description: "The subtle art of documenting commitments in a way that makes it impossible to pretend they never happened.", category: "Productivity", date: "2026-03-11", readTime: "6 min read" },
  { slug: "email-forwarding-etiquette", title: "The Ethics of Email Forwarding: When and How", description: "Strategic forwarding, the subtle art of FYI, and when 'sharing for visibility' becomes an act of war.", category: "Workplace Communication", date: "2026-03-08", readTime: "5 min read" },
  { slug: "deadline-reminder-templates", title: "Deadline Reminder Email Templates: From Gentle to Nuclear", description: "A progressive escalation framework for deadline reminders. Start soft, end unforgettable.", category: "Email Templates", date: "2026-03-05", readTime: "8 min read" },
  { slug: "workplace-humor-professionalism-line", title: "Where Humor Meets Professionalism: Finding the Line", description: "How to be funny at work without becoming HR's next conversation topic. The psychology of appropriate workplace wit.", category: "Workplace Communication", date: "2026-03-02", readTime: "7 min read" },
  { slug: "async-communication-best-practices", title: "Async Communication: Replacing Meetings with Better Emails", description: "How to shift your team's culture from meeting-heavy to async-first. Templates and frameworks included.", category: "Productivity", date: "2026-02-27", readTime: "9 min read" },
  { slug: "new-hire-email-survival-guide", title: "New Hire Email Survival Guide: First 90 Days", description: "Templates for every awkward email situation you'll face in your first three months. From introductions to establishing boundaries.", category: "Professional Writing", date: "2026-02-24", readTime: "8 min read" },
  { slug: "cross-cultural-email-communication", title: "Cross-Cultural Email Communication: Navigating Global Teams", description: "How directness, formality, and context vary across cultures — and how to adapt your passive aggression accordingly.", category: "Workplace Communication", date: "2026-02-21", readTime: "7 min read" },
  { slug: "performance-review-response-emails", title: "Responding to Performance Reviews: Email Templates", description: "Professional responses to feedback ranging from fair to wildly inaccurate. Defend your record with poise.", category: "Email Templates", date: "2026-02-18", readTime: "6 min read" },
  { slug: "client-ghosting-follow-up", title: "When Clients Ghost You: The Follow-Up Sequence That Works", description: "A 5-email escalation sequence for clients who disappear after deliverables are sent. Tested across industries.", category: "Email Templates", date: "2026-02-15", readTime: "7 min read" },
  { slug: "email-signatures-decoded", title: "What Your Email Signature Says About You", description: "From inspirational quotes to minimal initials — decoding the personality types behind professional email signatures.", category: "Corporate Humor", date: "2026-02-12", readTime: "5 min read" },
  { slug: "delegation-email-templates", title: "Delegating Without Sounding Like a Jerk: Email Templates", description: "How to assign work, set expectations, and follow up without becoming the manager everyone complains about.", category: "Professional Writing", date: "2026-02-09", readTime: "7 min read" },
  { slug: "handling-workplace-gossip-email", title: "Email Responses to Workplace Gossip and Politics", description: "Professional templates for navigating office politics without getting pulled into the drama. Stay above it.", category: "Workplace Communication", date: "2026-02-06", readTime: "6 min read" },
  { slug: "project-update-email-templates", title: "Project Update Emails That People Actually Read", description: "Templates for status updates that are clear, concise, and subtly communicate 'I've been doing all the work.'", category: "Email Templates", date: "2026-02-03", readTime: "6 min read" },
  { slug: "email-productivity-inbox-zero", title: "Inbox Zero and the Passive-Aggressive Response Time", description: "How email management strategies affect your perceived professionalism and workplace relationships.", category: "Productivity", date: "2026-01-31", readTime: "7 min read" },
  { slug: "leaving-job-gracefully-emails", title: "Leaving a Job Gracefully: Every Email You'll Need", description: "From resignation letter to farewell message — templates for exiting with class and minimal bridge-burning.", category: "Professional Writing", date: "2026-01-28", readTime: "8 min read" },
  { slug: "escalation-email-framework", title: "The Professional Escalation Framework: When Emails Aren't Working", description: "A systematic approach to escalating issues through email channels. From direct to manager to skip-level to nuclear.", category: "Workplace Communication", date: "2026-01-25", readTime: "9 min read" },
  { slug: "ai-email-writing-human-touch", title: "AI Email Writing vs. The Human Touch", description: "When to use AI for emails and when human nuance matters. The passive-aggressive email is an art form AI hasn't mastered.", category: "Professional Writing", date: "2026-01-22", readTime: "6 min read" },
  { slug: "holiday-party-rsvp-emails", title: "Holiday Party RSVPs and Other Social Obligation Emails", description: "Templates for the mandatory fun emails: team dinners, birthday collections, and 'optional' social events that aren't optional.", category: "Corporate Humor", date: "2026-01-19", readTime: "5 min read" },
  { slug: "salary-negotiation-email-templates", title: "Salary Negotiation Email Templates", description: "Professional templates for asking for what you're worth. From initial ask to counter-offer to acceptance.", category: "Email Templates", date: "2026-01-16", readTime: "8 min read" },
  { slug: "remote-onboarding-communication", title: "Remote Onboarding: Email Templates for New Team Members", description: "Welcoming new hires when you can't do it in person. Templates that set the right tone from day one.", category: "Remote Work", date: "2026-01-13", readTime: "6 min read" },
  { slug: "feedback-email-templates", title: "Giving Feedback Over Email: Templates That Don't Destroy Morale", description: "The art of written constructive criticism. Be honest, be helpful, be human — without being HR-worthy.", category: "Professional Writing", date: "2026-01-10", readTime: "7 min read" },
  { slug: "meeting-agenda-templates", title: "Meeting Agendas That Prevent Meetings That Should Be Emails", description: "If you must have a meeting, at least make it worth everyone's time. Agenda templates that keep things focused.", category: "Productivity", date: "2026-01-07", readTime: "5 min read" },
  { slug: "end-of-year-email-roundup", title: "End-of-Year Emails: Templates for Wrapping Up and Looking Forward", description: "From year-end reviews to holiday messages to 'please finish this before January' — every template you need.", category: "Email Templates", date: "2026-01-04", readTime: "7 min read" },
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
