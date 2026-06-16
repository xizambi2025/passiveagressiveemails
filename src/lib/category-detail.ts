export const CATEGORY_SLUGS = [
  "clients",
  "coworkers",
  "managers",
  "suppliers",
  "meetings",
  "deadlines",
  "invoices",
  "corporate-buzzwords",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type CategoryExample = {
  subject: string;
  preview: string;
  tone: number;
  score: number;
};

export type CategoryFaq = {
  question: string;
  answer: string;
};

export type CategoryDetail = {
  emoji: string;
  label: string;
  description: string;
  longDescription: string;
  examplesHeading: string;
  faqHeading: string;
  generateCta: string;
  faqs: CategoryFaq[];
  examples: CategoryExample[];
};

export const CATEGORY_DETAILS: Record<CategorySlug, CategoryDetail> = {
  clients: {
    emoji: "🤝",
    label: "Clients",
    description:
      "Passive-aggressive email templates for client situations: scope creep, late payments, unclear briefs, and endless revisions.",
    longDescription:
      "Navigate the delicate art of client communication when briefs change daily, payments vanish, and scope creep becomes an extreme sport. These templates help you maintain professionalism while subtly reminding clients that your patience has limits.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I follow up on an unpaid invoice without being rude?",
        answer:
          "Use a tone level 3-4 email that references the invoice number, original due date, and your continued availability — while subtly noting the passage of time.",
      },
      {
        question: "What's the best way to handle scope creep?",
        answer:
          "A 'Per My Previous Email' tone works best. Reference the original brief, note the number of revisions, and attach the change order form.",
      },
      {
        question: "How do I tell a client their feedback makes no sense?",
        answer:
          "Try the 'Concerned' tone level. Ask clarifying questions that gently reveal the contradictions in their requests.",
      },
    ],
    examples: [
      {
        subject: "Re: Just One More Small Change",
        preview:
          "I'd be happy to accommodate this additional revision. I've attached an updated timeline and cost estimate reflecting the 23 'small changes' we've incorporated since the original brief.",
        tone: 5,
        score: 78,
      },
      {
        subject: "Invoice #3847 - Friendly Quarterly Reminder",
        preview:
          "I trust you've been well! I'm reaching out regarding the above invoice, which has now matured like a fine wine over the past 90 days.",
        tone: 4,
        score: 72,
      },
      {
        subject: "Re: Can You Make It Pop More?",
        preview:
          "Absolutely! To ensure alignment, could you clarify what 'pop' means in this context? I've attached 47 interpretations for your review.",
        tone: 3,
        score: 55,
      },
      {
        subject: "Regarding Our Agreed Timeline",
        preview:
          "Per the signed contract (attached for convenience), the delivery date was May 15. Today is July 3. I wanted to check if there's a timezone discrepancy I'm not aware of.",
        tone: 6,
        score: 89,
      },
    ],
  },
  coworkers: {
    emoji: "💼",
    label: "Coworkers",
    description:
      "Passive-aggressive email templates for coworkers: reply-all abusers, credit stealers, lunch thieves, and loud talkers.",
    longDescription:
      "For the daily indignities of shared workspace life: the reply-all abusers, the lunch thieves, the credit stealers, and the people who think 'quick sync' means a 90-minute unstructured conversation. These templates preserve workplace relationships while establishing boundaries.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I address someone taking credit for my work?",
        answer:
          "The 'Corporate Assassin' level works well here. CC the relevant managers, attach original file metadata showing your authorship, and use phrases like 'building on the work I initiated.'",
      },
      {
        question: "What should I say to a coworker who keeps reply-all?",
        answer:
          "A level 3-4 response noting the thread length and suggesting a direct message for items relevant to specific individuals tends to be effective.",
      },
      {
        question: "How do I tell someone their music is too loud?",
        answer:
          "Start with level 2 'Slightly Annoyed' — mention how you 'admire their taste' while noting the impact on your concentration.",
      },
    ],
    examples: [
      {
        subject: "Re: Re: Re: Re: All - Lunch Plans",
        preview:
          "While I appreciate being kept informed of the team's culinary preferences, I wonder if this particular discussion might benefit from a smaller distribution list. Perhaps one that doesn't include the CEO.",
        tone: 4,
        score: 62,
      },
      {
        subject: "Kitchen Etiquette - A Gentle Reminder",
        preview:
          "To whoever borrowed my clearly-labeled yogurt: I hope you enjoyed it. I've now begun storing my lunch in a combination safe. The code is available upon request.",
        tone: 5,
        score: 81,
      },
      {
        subject: "Re: Great Work on the Q3 Report!",
        preview:
          "Thank you for the recognition! I'd also like to acknowledge the original author of that analysis—me. I've attached the commit history for transparency.",
        tone: 6,
        score: 93,
      },
      {
        subject: "Noise Levels - Open Plan Considerations",
        preview:
          "I couldn't help but notice your afternoon playlist reaches volumes typically reserved for stadium concerts. My noise-canceling headphones have filed for early retirement.",
        tone: 2,
        score: 38,
      },
    ],
  },
  managers: {
    emoji: "👔",
    label: "Managers",
    description:
      "Passive-aggressive email templates for managers: micromanagement, unrealistic deadlines, pointless meetings, and vague feedback.",
    longDescription:
      "When your manager schedules a meeting to discuss whether you need a meeting, sends 'quick question' messages at 11pm, or uses the phrase 'going forward' as if the past never happened. Navigate upward communication with surgical precision.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I push back on a manager who micromanages?",
        answer:
          "Use level 3-4 with proactive status updates that make their check-ins redundant. Phrases like 'as I'll detail in my already-scheduled update' work well.",
      },
      {
        question: "What do I say when my manager schedules meetings during lunch?",
        answer:
          "A level 3 'Concerned' tone works. Reference team wellbeing, productivity research, and your 'enthusiasm for contributing when fully nourished.'",
      },
      {
        question: "How do I respond to unrealistic deadlines?",
        answer:
          "Level 4 'Passive Aggressive' — provide a detailed breakdown of all current tasks, their deadlines, and ask which ones should be deprioritized to accommodate the new request.",
      },
    ],
    examples: [
      {
        subject: "Re: Quick Sync? (15 min)",
        preview:
          "Happy to connect! I noticed this 'quick sync' has been allocated 2 hours in the calendar. Should I prepare a dissertation or will bullet points suffice?",
        tone: 4,
        score: 67,
      },
      {
        subject: "Re: Can You Take This On? (Urgent)",
        preview:
          "I appreciate your confidence in my bandwidth. Attached is my current workload across 14 projects. Please advise which 3 should be paused to accommodate this urgent request.",
        tone: 5,
        score: 76,
      },
      {
        subject: "Re: Status Update Request",
        preview:
          "Here's my hourly breakdown as requested. I've also included bathroom breaks and blink frequency in case those metrics prove relevant to the sprint review.",
        tone: 6,
        score: 88,
      },
      {
        subject: "Re: Friday 5pm Meeting - Team Building",
        preview:
          "I'm thrilled about the team building opportunity. I should note that several team members may need to 'build' their commute home during rush hour. Just flagging for logistics.",
        tone: 3,
        score: 52,
      },
    ],
  },
  suppliers: {
    emoji: "📦",
    label: "Suppliers",
    description:
      "Passive-aggressive email templates for suppliers: wrong orders, late deliveries, quality issues, and creative excuses.",
    longDescription:
      "For when 'express delivery' apparently means 'whenever the stars align,' and 'as described' is a loose interpretation. These templates help maintain vendor relationships while making your expectations crystalline.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I address repeated wrong orders?",
        answer:
          "Use level 4-5 with a detailed table showing ordered vs received items across multiple orders. The data speaks volumes.",
      },
      {
        question: "What's the best approach for late deliveries?",
        answer:
          "Reference the original delivery date, the number of follow-ups sent, and the impact on your business operations. Level 4 'Passive Aggressive' maintains the relationship while expressing urgency.",
      },
      {
        question: "How do I escalate a supplier issue professionally?",
        answer:
          "Level 5 'Per My Previous Email' with CC to their management, attaching the entire email trail as 'context for your review.'",
      },
    ],
    examples: [
      {
        subject: "Order #4471 - A Study in Creative Fulfillment",
        preview:
          "We ordered blue widgets. We received red sprockets. While I admire the creative interpretation, I must insist on the items we actually purchased.",
        tone: 4,
        score: 68,
      },
      {
        subject: "Re: Delivery ETA (Asked 8 Times)",
        preview:
          "I'm following up on my follow-up to my follow-up regarding delivery ETAs. At this point, I've written more emails about this shipment than the package weighs.",
        tone: 5,
        score: 79,
      },
      {
        subject: "Quality Concern - Batch #2847",
        preview:
          "I wanted to flag that the latest batch appears to have been quality-checked by someone who may have been facing the wrong direction at the time.",
        tone: 3,
        score: 54,
      },
      {
        subject: "Re: 'Express' Shipping Update",
        preview:
          "I notice the tracking shows my 'express' shipment has been 'in transit' for 3 weeks. I believe even continental drift moves faster. Please advise.",
        tone: 6,
        score: 85,
      },
    ],
  },
  meetings: {
    emoji: "📅",
    label: "Meetings",
    description:
      "Passive-aggressive email templates about meetings: the ones that should be emails, no-agenda meetings, and overtime culprits.",
    longDescription:
      "For the meeting that should have been an email, the meeting about the previous meeting, and the recurring 'optional' meeting that is somehow mandatory. Templates for protecting your calendar and sanity.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I decline a meeting politely?",
        answer:
          "Use level 2-3 with a suggestion for an alternative format (email summary, async doc) and note your 'focus time commitments.'",
      },
      {
        question: "What do I say about meetings with no agenda?",
        answer:
          "Level 4 works well — express enthusiasm for the meeting while requesting an agenda 'to ensure I can prepare appropriately and contribute meaningfully.'",
      },
      {
        question: "How do I address meetings that always run over?",
        answer:
          "Send a level 3 email beforehand noting your 'hard stop' and suggesting that agenda items be prioritized in case 'time doesn't permit full coverage.'",
      },
    ],
    examples: [
      {
        subject: "Re: Meeting About the Meeting Recap",
        preview:
          "I want to confirm: this is a meeting to discuss the outcomes of yesterday's meeting, which was scheduled to plan next week's meeting? Just want to ensure I have the correct meta-level.",
        tone: 4,
        score: 71,
      },
      {
        subject: "Calendar Invite: 7:00 AM Brainstorm - Declining",
        preview:
          "I appreciate the ambition of an early brainstorm! Unfortunately, my brain doesn't arrive at the office until approximately 9:30 AM regardless of where my body is.",
        tone: 5,
        score: 74,
      },
      {
        subject: "Re: Optional Team Sync (Mandatory)",
        preview:
          "I noticed this meeting is marked 'optional' yet my absence was flagged in yesterday's review. Could you clarify the working definition of 'optional' in this context?",
        tone: 3,
        score: 58,
      },
      {
        subject: "Agenda Request for Tomorrow's 2-Hour 'Quick Chat'",
        preview:
          "Looking forward to our quick chat! Given the 2-hour duration, could you share an agenda? I'd like to pace my participation accordingly.",
        tone: 2,
        score: 42,
      },
    ],
  },
  deadlines: {
    emoji: "⏰",
    label: "Deadlines",
    description:
      "Passive-aggressive email templates for deadline management: missed dates, serial offenders, and creative excuses for delays.",
    longDescription:
      "For when 'end of day' is treated as a suggestion, 'ASAP' means 'whenever you get around to it,' and project timelines are viewed as aspirational fiction. Hold people accountable with style.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How do I follow up on a missed deadline?",
        answer:
          "Reference the original date agreed upon, note the impact of the delay, and request a new realistic timeline — all while maintaining level 4-5 diplomatic hostility.",
      },
      {
        question: "What's an effective way to set deadline expectations?",
        answer:
          "Use level 3 'Concerned' to set expectations early. Reference past patterns without direct accusation: 'Given the timeline sensitivity, I wanted to confirm our alignment on the delivery date.'",
      },
      {
        question: "How do I escalate repeated deadline misses?",
        answer:
          "Level 5-6 with documentation of all missed deadlines, original agreements, and business impact. CC relevant stakeholders 'for visibility.'",
      },
    ],
    examples: [
      {
        subject: "Re: Deliverable Due Last Month - Status Check",
        preview:
          "I'm reaching out about the deliverable due on April 15. Since we're now comfortably into June, I wanted to check if there's been a calendar system malfunction I should be aware of.",
        tone: 5,
        score: 79,
      },
      {
        subject: "Timeline Adherence - A Historical Perspective",
        preview:
          "I've attached a spreadsheet tracking our last 12 project deadlines alongside actual delivery dates. I thought the data visualization might be... illuminating.",
        tone: 6,
        score: 91,
      },
      {
        subject: "Re: Need More Time (3rd Extension Request)",
        preview:
          "Absolutely, take all the time you need. I've preemptively pushed back the client delivery, my vacation, and possibly my retirement date to accommodate.",
        tone: 4,
        score: 73,
      },
      {
        subject: "EOD Friday - A Clarification",
        preview:
          "When we agreed to 'EOD Friday,' I wanted to confirm we're operating under the same definition. Specifically: this Friday. In the current calendar year. On planet Earth.",
        tone: 3,
        score: 61,
      },
    ],
  },
  invoices: {
    emoji: "💰",
    label: "Invoices",
    description:
      "Passive-aggressive email templates for overdue invoices: payment follow-ups from polite reminders to the nuclear option.",
    longDescription:
      "For the delicate art of asking for money you're already owed. From gentle first reminders to emails that could serve as legal exhibits. Get paid without burning bridges (completely).",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "How many follow-ups is appropriate before escalating?",
        answer:
          "Three at increasing tone levels (2, 4, 5) with 7-day intervals. After that, level 6 with legal team CC is warranted.",
      },
      {
        question: "What's the most effective passive-aggressive payment follow-up?",
        answer:
          "Reference the invoice number, original due date, accumulated late days, and casually mention your company's late payment policy — all in a tone that's technically friendly.",
      },
      {
        question: "Should I CC accounts payable or the CEO?",
        answer:
          "Start with accounts payable. If no response after 2 attempts, CC the contact who signed the contract. The CEO CC is your nuclear option.",
      },
    ],
    examples: [
      {
        subject: "Invoice #7721 - Day 60 - Still Optimistic!",
        preview:
          "Just a friendly reminder that Invoice #7721 has been outstanding since approximately the last ice age. My accountant is concerned. My landlord is concerned. I remain professionally optimistic.",
        tone: 4,
        score: 69,
      },
      {
        subject: "Payment Terms: Net 30 (Not Net ∞)",
        preview:
          "Our standard payment terms are Net 30, which I've helpfully converted to various units: 720 hours, 43,200 minutes, or approximately one-quarter of the time since this invoice was issued.",
        tone: 5,
        score: 83,
      },
      {
        subject: "Re: Payment Processing - An Archaeological Inquiry",
        preview:
          "I'm reaching out about Invoice #3391, which at 120 days outstanding has now exceeded the gestation period of several mammalian species. Is your accounts payable team perhaps hibernating?",
        tone: 6,
        score: 92,
      },
      {
        subject: "Friendly Payment Reminder #4",
        preview:
          "Hi! Just circling back on this. I've attached the original invoice, a receipt of our previous correspondence, and a calendar highlighting the 67 days since the due date. No rush!",
        tone: 3,
        score: 56,
      },
    ],
  },
  "corporate-buzzwords": {
    emoji: "🗣️",
    label: "Corporate Buzzwords",
    description:
      "Passive-aggressive email templates loaded with corporate buzzwords: synergy, circle back, leverage, and maximum jargon.",
    longDescription:
      "When you want to say absolutely nothing while appearing to say something profound. Master the art of corporate vocabulary: synergy, alignment, leverage, circle back, and other words that make people update their LinkedIn profiles.",
    examplesHeading: "Example Emails",
    faqHeading: "Frequently Asked Questions",
    generateCta: "Generate a {label} Email",
    faqs: [
      {
        question: "What are the most passive-aggressive corporate phrases?",
        answer:
          "'As per my last email,' 'going forward,' 'just to clarify,' 'for future reference,' and 'I trust this is helpful' are the power five of corporate hostility.",
      },
      {
        question: "How do I use buzzwords to sound professional while being mean?",
        answer:
          "Stack buzzwords to create an impenetrable wall of corporate speak that technically can't be reported to HR. 'Let's leverage this opportunity to realign our synergistic deliverables going forward.'",
      },
      {
        question: "What's the difference between passive-aggressive and corporate speak?",
        answer:
          "Corporate speak is the socially acceptable framework through which passive aggression is delivered. It's the difference between 'you're wrong' and 'I appreciate your perspective, however upon further analysis...'",
      },
    ],
    examples: [
      {
        subject: "Re: Let's Leverage Our Synergies Going Forward",
        preview:
          "I'd love to circle back on this opportunity to align our cross-functional deliverables with the strategic imperatives outlined in the paradigm shift document. Let's take this offline and socialize the concept.",
        tone: 4,
        score: 64,
      },
      {
        subject: "Action Items from Our Deep Dive",
        preview:
          "Per our bandwidth assessment, I'm flagging some low-hanging fruit for immediate traction. Let's right-size our expectations and boil the ocean in Q3 instead.",
        tone: 2,
        score: 35,
      },
      {
        subject: "Re: Thought Leadership Opportunity",
        preview:
          "I appreciate the invite to 'thought lead' on this initiative. I've been doing some blue-sky thinking and believe we should pivot our North Star metric to better capture our value proposition. In other words: no.",
        tone: 5,
        score: 77,
      },
      {
        subject: "Regarding Our Ecosystem Alignment",
        preview:
          "After deep-diving into our holistic ecosystem, I've identified several pain points in our customer journey touchpoints that require immediate ideation sprints. Translation: everything is broken.",
        tone: 6,
        score: 86,
      },
    ],
  },
};
