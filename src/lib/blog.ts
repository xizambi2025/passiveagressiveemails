export type BlogVisual = {
  label: string;
  accent: string;
  motif: "memo" | "dictionary" | "timeline" | "follow-up" | "scale" | "checking-in" | "no" | "deadline" | "scope" | "meeting";
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; columns: [string, string]; rows: Array<[string, string]> };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  visual: BlogVisual;
  content: BlogBlock[];
};

const AUTHOR = "The Dept. of Plausible Deniability";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ultimate-guide-passive-aggressive-emails",
    title: "Guide to Passive-Aggressive Emails",
    description:
      "Everything you need to know about crafting the perfect passive-aggressive workplace email. Tone selection, timing, CC strategy, and key phrases decoded.",
    category: "Workplace Communication",
    date: "2026-06-01",
    readTime: "8 min read",
    author: AUTHOR,
    visual: { label: "Field Guide", accent: "#b45309", motif: "memo" },
    content: [
      {
        type: "paragraph",
        text: "Passive-aggressive emails are an art form. They require the perfect balance of professionalism and subtext: the ability to communicate displeasure without ever technically being unprofessional.",
      },
      {
        type: "paragraph",
        text: "The foundation is plausible deniability. If someone read your email aloud in a meeting, it should sound perfectly reasonable. The tension lives between the lines, in the timing, word choice, and careful selection of who gets copied.",
      },
      { type: "heading", text: "The Anatomy of a Passive-Aggressive Email" },
      {
        type: "list",
        items: [
          "A warm opening that sounds generous but signals exhaustion.",
          "A reminder of context that should not need reminding.",
          "The request, repeated as if this were somehow the first time.",
          "A closing line that could be sincere or threatening, depending on the reader's conscience.",
        ],
      },
      { type: "heading", text: "Timing Is Everything" },
      {
        type: "paragraph",
        text: "A follow-up sent at 8:01 AM about something due yesterday sends a clear message. A response sent within three minutes of receiving an excuse demonstrates that you were, in fact, paying attention the entire time.",
      },
      { type: "heading", text: "The CC Strategy" },
      {
        type: "paragraph",
        text: "Strategic CC usage is the nuclear option of passive-aggressive communication. CC'ing someone's manager says, 'I need a witness.' CC'ing your own manager says, 'I'm building a case.'",
      },
      { type: "heading", text: "Key Phrases and Their Meanings" },
      {
        type: "table",
        columns: ["Phrase", "What it really means"],
        rows: [
          ["As per my last email", "I already told you this and you did not read it."],
          ["Going forward", "Do not do this again."],
          ["Just to clarify", "You clearly did not understand the first time."],
          ["I wanted to flag", "This is your fault and I am documenting it."],
          ["For your convenience", "Because you clearly could not find it yourself."],
        ],
      },
      {
        type: "quote",
        text: "Precision beats volume. One carefully chosen sentence can do more damage than a paragraph of obvious hostility.",
      },
    ],
  },
  {
    slug: "per-my-last-email-history",
    title: "The History of 'Per My Last Email'",
    description:
      "How four words became the most feared phrase in corporate communication. The origin, evolution, and cultural impact of passive-aggressive email language.",
    category: "Corporate Humor",
    date: "2026-05-28",
    readTime: "6 min read",
    author: AUTHOR,
    visual: { label: "Origin Story", accent: "#7c3aed", motif: "timeline" },
    content: [
      {
        type: "paragraph",
        text: "'Per my last email.' Four words that can make even the most confident professional break into a cold sweat. But where did this phrase come from, and how did it become the universal signal for barely contained frustration?",
      },
      {
        type: "paragraph",
        text: "The phrase is deceptively simple. It only references a previous communication. But context is everything: the sender is saying they already addressed this, the recipient did not read it, and a written record now exists.",
      },
      { type: "heading", text: "The Evolution of Corporate Hostility" },
      {
        type: "paragraph",
        text: "Before email, workplace passive aggression required creativity: memos with strategic highlighting, meeting minutes that accidentally omitted contributions, or printouts left exactly where they would be noticed. Email gave professionals a searchable archive.",
      },
      { type: "heading", text: "Why It Works" },
      {
        type: "paragraph",
        text: "The genius of 'per my last email' is its complete deniability. If challenged, the sender can claim they were simply being helpful and pointing to relevant prior context. The subtext is unmistakable, but the text itself is innocent.",
      },
      { type: "heading", text: "Variations in the Wild" },
      {
        type: "table",
        columns: ["Phrase", "Signal"],
        rows: [
          ["As I mentioned previously", "The formal variant."],
          ["Circling back on this", "The persistent variant."],
          ["Just bumping this", "The 'I know you are ignoring me' variant."],
          ["Reattaching for convenience", "The 'you lost it, did you not?' variant."],
        ],
      },
      {
        type: "paragraph",
        text: "The phrase has transcended email and become a cultural phenomenon because nearly every professional has experienced both sides: the frustration of being ignored and the guilt of being caught.",
      },
    ],
  },
  {
    slug: "corporate-buzzwords-decoded",
    title: "50 Corporate Buzzwords Decoded",
    description:
      "A dictionary of corporate speak and the passive-aggressive subtext behind each phrase. From synergy to circle back, decoded for clarity.",
    category: "Corporate Humor",
    date: "2026-05-25",
    readTime: "10 min read",
    author: AUTHOR,
    visual: { label: "Translation Desk", accent: "#374151", motif: "dictionary" },
    content: [
      {
        type: "paragraph",
        text: "Corporate language is a dialect designed to say very little while sounding extremely busy. Behind every buzzword is a simpler truth that someone decided was too direct for professional consumption.",
      },
      {
        type: "paragraph",
        text: "Here is the cleaner version: what people say in meetings, and what everyone quietly understands it to mean.",
      },
      {
        type: "table",
        columns: ["What is said", "What it really means"],
        rows: [
          ["Synergy", "We want one person, process, or budget to do the work of two."],
          ["Circle back", "I am ending this conversation now."],
          ["Low-hanging fruit", "The easy work we somehow still have not done."],
          ["Move the needle", "Please accomplish something measurable for once."],
          ["Deep dive", "Something is wrong and we need to look closer."],
          ["Going forward", "Do not do this again."],
          ["For future reference", "Remember this, because I will."],
          ["As discussed", "I have witnesses."],
          ["To be transparent", "I am about to say something inconvenient."],
          ["With all due respect", "I strongly disagree and am trying to remain employed."],
          ["Bandwidth", "Time, energy, or patience. Usually all three."],
          ["Leverage", "Use."],
          ["Ecosystem", "A pile of related things no one wants to map."],
          ["Ideation", "Thinking, but with a calendar invite."],
          ["Paradigm shift", "Something changed and we need it to sound expensive."],
          ["Take this offline", "Stop saying this in front of everyone."],
          ["Parking lot", "Your idea is not making it into this meeting."],
          ["Action items", "The things people will forget unless chased."],
          ["Stakeholder alignment", "Getting everyone to agree, which will take forever."],
          ["Quick sync", "A meeting that could have been a message."],
          ["Touch base", "I need an update but want to sound casual."],
          ["Looping in", "Someone else is now responsible too."],
          ["Visibility", "Management wants to watch this more closely."],
          ["Ownership", "This problem now belongs to you."],
          ["Accountability", "Someone is about to be blamed."],
          ["Streamline", "Remove steps, people, or budget."],
          ["Optimize", "Make it cheaper, faster, or both."],
          ["Rightsize", "Cut something while avoiding the word cut."],
          ["Resource allocation", "Who gets people, money, or excuses."],
          ["Best practice", "The way we prefer to do it, at least today."],
          ["Value-add", "Please justify why this exists."],
          ["North star", "The goal we mention when priorities are messy."],
          ["Roadmap", "A hopeful document pretending to be a promise."],
          ["Deliverables", "The actual things we can hold someone to."],
          ["Dependencies", "Reasons this may not be our fault."],
          ["Blockers", "Reasons this definitely is not moving."],
          ["Quick win", "Something small enough to survive approval."],
          ["Strategic", "Important, vague, or politically protected."],
          ["Tactical", "Useful but less glamorous."],
          ["Holistic", "We have not decided where the boundaries are."],
          ["Cross-functional", "Multiple teams will be confused together."],
          ["Socialize this", "Warn people before the official decision appears."],
          ["Buy-in", "Permission disguised as enthusiasm."],
          ["Change management", "Convincing people not to panic."],
          ["Learnings", "Mistakes, but formatted for a slide deck."],
          ["Postmortem", "A meeting about what went wrong, carefully phrased."],
          ["Run it up the flagpole", "Ask someone senior before taking a risk."],
          ["Boil the ocean", "Make the scope impossibly large."],
          ["Net-net", "The short version after too much talking."],
          ["At the end of the day", "I am about to oversimplify this."],
        ],
      },
      {
        type: "quote",
        text: "Buzzwords survive because they create distance from uncomfortable truths. They are tiny professional airbags.",
      },
      {
        type: "paragraph",
        text: "Use them sparingly. When everything is strategic, aligned, optimized, and cross-functional, the real message disappears under the lanyard.",
      },
    ],
  },
  {
    slug: "how-to-follow-up-without-sounding-desperate",
    title: "Follow Up Without Sounding Desperate",
    description:
      "How to write follow-up emails that sound calm, professional, and firm without begging for a reply or pretending not to be annoyed.",
    category: "Email Strategy",
    date: "2026-06-04",
    readTime: "7 min read",
    author: AUTHOR,
    visual: { label: "Follow-Up Lab", accent: "#0d9488", motif: "follow-up" },
    content: [
      {
        type: "paragraph",
        text: "A follow-up email has one job: make silence feel less comfortable than replying. The trick is to sound composed, not needy.",
      },
      { type: "heading", text: "The Follow-Up Formula" },
      {
        type: "list",
        items: [
          "Reference the original request clearly.",
          "State the decision or action you need.",
          "Add a deadline if timing matters.",
          "Make the next step easy to answer.",
        ],
      },
      {
        type: "table",
        columns: ["Weak version", "Sharper version"],
        rows: [
          ["Just checking in on this.", "Following up on the approval request below. Can you confirm by Thursday?"],
          ["Any update?", "Do you have an update on the timeline, or should I plan around a delay?"],
          ["Sorry to bother you again.", "Resurfacing this since it affects the next step."],
        ],
      },
      {
        type: "paragraph",
        text: "You do not need to apologize for needing an answer. If the work depends on a response, the follow-up is not a nuisance. It is project hygiene.",
      },
    ],
  },
  {
    slug: "email-tone-scale-polite-to-nuclear",
    title: "Email Tone Scale: Polite to Nuclear",
    description:
      "A practical breakdown of email tone levels, from gentle reminders to corporate thermonuclear wording, with examples for each stage.",
    category: "Tone Strategy",
    date: "2026-06-07",
    readTime: "7 min read",
    author: AUTHOR,
    visual: { label: "Tone Meter", accent: "#dc2626", motif: "scale" },
    content: [
      {
        type: "paragraph",
        text: "Tone is not just what you say. It is how much evidence, urgency, and implied disappointment you pack into the sentence.",
      },
      {
        type: "table",
        columns: ["Tone level", "Example"],
        rows: [
          ["Warm", "Hope you are well. Just wanted to check whether you had a chance to review this."],
          ["Clear", "Please send the revised file by 3 PM so we can keep the timeline intact."],
          ["Firm", "This is now blocking the next step. Please confirm ownership today."],
          ["Documented", "As noted in the previous thread, this was due Friday and remains outstanding."],
          ["Nuclear", "Looping in the broader team for visibility, as this has now missed two agreed deadlines."],
        ],
      },
      {
        type: "paragraph",
        text: "Most emails should live in the middle: direct enough to work, calm enough to forward.",
      },
    ],
  },
  {
    slug: "what-to-say-instead-of-just-checking-in",
    title: "What to Say Instead of Checking In",
    description:
      "Better alternatives to 'just checking in' that make follow-up emails clearer, more useful, and harder to ignore.",
    category: "Email Phrases",
    date: "2026-06-10",
    readTime: "6 min read",
    author: AUTHOR,
    visual: { label: "Phrase Clinic", accent: "#2563eb", motif: "checking-in" },
    content: [
      {
        type: "paragraph",
        text: "'Just checking in' sounds harmless, but it often gives the recipient no clear reason to act. A stronger follow-up names the thing, the impact, and the decision needed.",
      },
      {
        type: "table",
        columns: ["Instead of", "Try"],
        rows: [
          ["Just checking in.", "Following up on the budget approval so we can confirm next steps."],
          ["Wanted to see where this stands.", "Can you confirm whether this is approved, blocked, or still under review?"],
          ["Any thoughts?", "Do you prefer option A or option B?"],
          ["Bumping this.", "Resurfacing this because the deadline is now Friday."],
        ],
      },
      {
        type: "paragraph",
        text: "The best replacement is specific. If the recipient can answer in one sentence, your follow-up has done its job.",
      },
    ],
  },
  {
    slug: "professional-ways-to-say-no-by-email",
    title: "Professional Ways to Say No by Email",
    description:
      "How to say no at work without overexplaining, apologizing too much, or inviting a negotiation you never meant to start.",
    category: "Workplace Communication",
    date: "2026-06-13",
    readTime: "8 min read",
    author: AUTHOR,
    visual: { label: "The Polite No", accent: "#9333ea", motif: "no" },
    content: [
      {
        type: "paragraph",
        text: "A professional no should be clear, brief, and difficult to misinterpret. The more you overexplain, the more surface area you create for negotiation.",
      },
      {
        type: "table",
        columns: ["Situation", "Useful wording"],
        rows: [
          ["No bandwidth", "I cannot take this on this week without moving another priority."],
          ["Wrong owner", "This sits outside my scope, but the right contact is likely the operations team."],
          ["Bad timeline", "That timeline is not workable from my side. The earliest I can deliver is next Tuesday."],
          ["Unclear request", "I cannot commit until the scope and success criteria are clearer."],
        ],
      },
      {
        type: "quote",
        text: "A good no closes the door without slamming it.",
      },
    ],
  },
  {
    slug: "deadline-reminder-emails-that-work",
    title: "Deadline Reminder Emails That Work",
    description:
      "Deadline reminder email examples that are clear, calm, and firm enough to move work forward without sounding frantic.",
    category: "Deadlines",
    date: "2026-06-16",
    readTime: "7 min read",
    author: AUTHOR,
    visual: { label: "Deadline Desk", accent: "#ca8a04", motif: "deadline" },
    content: [
      {
        type: "paragraph",
        text: "A deadline reminder should make the timeline visible, not make you sound panicked. The goal is to reduce ambiguity before it becomes an excuse.",
      },
      {
        type: "list",
        items: [
          "Name the deliverable.",
          "Restate the due date.",
          "Explain what depends on it.",
          "Ask for confirmation or a revised timeline.",
        ],
      },
      {
        type: "table",
        columns: ["Need", "Reminder wording"],
        rows: [
          ["Gentle reminder", "Quick reminder that the draft is due tomorrow so we can review before Friday."],
          ["Firm reminder", "The draft is due today. Please confirm whether it will be sent by 5 PM."],
          ["Escalation", "This deadline has now passed and is affecting the launch timeline. Please confirm the recovery plan."],
        ],
      },
    ],
  },
  {
    slug: "client-scope-creep-email-examples",
    title: "Client Scope Creep Email Examples",
    description:
      "How to respond when a client keeps adding extra requests, with polite wording that protects the project scope and budget.",
    category: "Client Emails",
    date: "2026-06-19",
    readTime: "8 min read",
    author: AUTHOR,
    visual: { label: "Scope Patrol", accent: "#ea580c", motif: "scope" },
    content: [
      {
        type: "paragraph",
        text: "Scope creep usually arrives disguised as a tiny request. The email has to be friendly enough to preserve the relationship and clear enough to protect the project.",
      },
      {
        type: "table",
        columns: ["Client says", "You can say"],
        rows: [
          ["Can we also add this small thing?", "Happy to include this as an additional item. I can send over the revised scope and cost for approval."],
          ["This should be quick.", "It may be straightforward, but it is outside the agreed scope, so I want to document the added time before we proceed."],
          ["Can you just include it?", "I can either swap this with one of the current deliverables or add it as a separate change request."],
        ],
      },
      {
        type: "paragraph",
        text: "The phrase 'happy to' does useful work here. It keeps the tone cooperative while making it clear that extra work is still extra work.",
      },
    ],
  },
  {
    slug: "meeting-follow-up-emails-that-document-everything",
    title: "Meeting Follow-Ups That Document Everything",
    description:
      "How to write meeting follow-up emails that confirm decisions, assign ownership, and quietly prevent future confusion.",
    category: "Meetings",
    date: "2026-06-22",
    readTime: "7 min read",
    author: AUTHOR,
    visual: { label: "Minutes With Teeth", accent: "#7c3aed", motif: "meeting" },
    content: [
      {
        type: "paragraph",
        text: "The best meeting follow-up is not a recap. It is a receipt. It confirms what was decided, who owns what, and when everyone agreed it would happen.",
      },
      {
        type: "list",
        items: [
          "Start with the decisions, not the discussion.",
          "Assign owners by name.",
          "Include dates wherever possible.",
          "Flag unresolved questions before they become surprises.",
        ],
      },
      {
        type: "table",
        columns: ["Section", "Example wording"],
        rows: [
          ["Decision", "We agreed to proceed with option B for the first release."],
          ["Owner", "Marta will send the final copy by Wednesday."],
          ["Risk", "The launch date depends on approval by Friday."],
          ["Open question", "Still pending: confirmation on legal review timing."],
        ],
      },
      {
        type: "quote",
        text: "A meeting without a follow-up is just workplace theater with better lighting.",
      },
    ],
  },
];

export const BLOG_POST_MAP = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;

export const BLOG_SLUGS = BLOG_POSTS.map((post) => post.slug);

const RELATED_POSTS_MAP: Record<string, string[]> = {
  "ultimate-guide-passive-aggressive-emails": ["email-tone-scale-polite-to-nuclear", "per-my-last-email-history", "what-to-say-instead-of-just-checking-in"],
  "per-my-last-email-history": ["ultimate-guide-passive-aggressive-emails", "corporate-buzzwords-decoded", "email-tone-scale-polite-to-nuclear"],
  "corporate-buzzwords-decoded": ["per-my-last-email-history", "ultimate-guide-passive-aggressive-emails", "professional-ways-to-say-no-by-email"],
  "email-tone-scale-polite-to-nuclear": ["ultimate-guide-passive-aggressive-emails", "how-to-follow-up-without-sounding-desperate", "professional-ways-to-say-no-by-email"],
  "how-to-follow-up-without-sounding-desperate": ["what-to-say-instead-of-just-checking-in", "meeting-follow-up-emails-that-document-everything", "deadline-reminder-emails-that-work"],
  "what-to-say-instead-of-just-checking-in": ["how-to-follow-up-without-sounding-desperate", "meeting-follow-up-emails-that-document-everything", "email-tone-scale-polite-to-nuclear"],
  "professional-ways-to-say-no-by-email": ["client-scope-creep-email-examples", "email-tone-scale-polite-to-nuclear", "deadline-reminder-emails-that-work"],
  "deadline-reminder-emails-that-work": ["how-to-follow-up-without-sounding-desperate", "meeting-follow-up-emails-that-document-everything", "professional-ways-to-say-no-by-email"],
  "client-scope-creep-email-examples": ["professional-ways-to-say-no-by-email", "deadline-reminder-emails-that-work", "how-to-follow-up-without-sounding-desperate"],
  "meeting-follow-up-emails-that-document-everything": ["deadline-reminder-emails-that-work", "how-to-follow-up-without-sounding-desperate", "what-to-say-instead-of-just-checking-in"],
};

export const CATEGORY_RELATED_POST_SLUGS: Record<string, string[]> = {
  "clients": ["client-scope-creep-email-examples", "professional-ways-to-say-no-by-email", "deadline-reminder-emails-that-work"],
  "coworkers": ["ultimate-guide-passive-aggressive-emails", "email-tone-scale-polite-to-nuclear", "per-my-last-email-history"],
  "managers": ["how-to-follow-up-without-sounding-desperate", "professional-ways-to-say-no-by-email", "email-tone-scale-polite-to-nuclear"],
  "suppliers": ["deadline-reminder-emails-that-work", "professional-ways-to-say-no-by-email", "how-to-follow-up-without-sounding-desperate"],
  "meetings": ["meeting-follow-up-emails-that-document-everything", "what-to-say-instead-of-just-checking-in", "how-to-follow-up-without-sounding-desperate"],
  "deadlines": ["deadline-reminder-emails-that-work", "how-to-follow-up-without-sounding-desperate", "meeting-follow-up-emails-that-document-everything"],
  "invoices": ["deadline-reminder-emails-that-work", "client-scope-creep-email-examples", "professional-ways-to-say-no-by-email"],
  "corporate-buzzwords": ["corporate-buzzwords-decoded", "per-my-last-email-history", "ultimate-guide-passive-aggressive-emails"],
};

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return (RELATED_POSTS_MAP[currentSlug] ?? [])
    .map((s) => BLOG_POST_MAP[s])
    .filter(Boolean) as BlogPost[];
}

export function getRelatedPostSlugs(currentSlug: string): string[] {
  return RELATED_POSTS_MAP[currentSlug] ?? [];
}
