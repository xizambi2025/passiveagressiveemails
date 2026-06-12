import { Scenario } from './types';

export const clientScenarios: Scenario[] = [
  {
    id: "scope-creep-client-5",
    recipient: "client",
    situation: "Client asks for 'one small thing' that's actually a massive new feature",
    category: "clients",
    tone: 5,
    length: "long",
    subject: "Re: Quick Addition to the Project",
    body: "Hi Jonathan,\n\nThank you for your email requesting 'one small addition' to the website. I've reviewed your request and wanted to clarify the scope:\n\nYour 'small addition' includes:\n- A fully functional e-commerce platform\n- Integration with 4 payment gateways\n- A custom CRM\n- Real-time inventory management\n- An AI chatbot\n\nPer our original agreement, the project scope was a 5-page brochure website. What you're describing is closer to building Amazon.\n\nI'd be happy to provide a quote for this additional work. Alternatively, if you'd like to stay within the original scope, I can add a 'Shop Now' button that links to your existing eBay store.\n\nPlease let me know which direction you'd prefer.\n\nBest regards",
    aggressionScore: 75,
    damageAssessment: "They'll either approve the budget or quietly drop the request",
    corporateTranslation: {
      whatYouMean: "That's not a small addition, it's an entirely new project and it costs money.",
      corporateVersion: "I'd love to explore this enhancement opportunity and will prepare a scope assessment with associated investment requirements."
    },
    tags: ["scope-creep", "feature-request", "budget", "expectations"]
  },
  {
    id: "late-payment-client-4",
    recipient: "client",
    situation: "Client's invoice is 60 days overdue",
    category: "invoices",
    tone: 4,
    length: "medium",
    subject: "Invoice #4582 - Friendly Reminder (Third Notice)",
    body: "Hi Margaret,\n\nI hope you're well! I'm writing regarding Invoice #4582, which was due on March 15th. As it's now May 15th, the invoice has reached a milestone birthday \u2014 60 days old! Practically a senior citizen in invoice years.\n\nI wanted to check whether:\na) The payment is being processed and I should expect it soon\nb) The invoice was lost in the ether\nc) You're testing my patience as some kind of character-building exercise\n\nAs noted in our terms, a late fee applies after 30 days. I've held off applying it because I believe in the goodness of people, but my accountant is less optimistic.\n\nPlease advise on expected payment date.\n\nWarm regards",
    aggressionScore: 63,
    damageAssessment: "Professional enough to preserve the relationship, firm enough to prompt payment",
    corporateTranslation: {
      whatYouMean: "Pay me. It's been two months. I'm not running a charity.",
      corporateVersion: "I'd appreciate an update on the payment timeline to ensure our records remain aligned."
    },
    tags: ["late-payment", "invoice", "overdue", "accounts-receivable"]
  },
  {
    id: "not-reading-brief-client-6",
    recipient: "client",
    situation: "Client asks questions that are clearly answered in the document you sent",
    category: "clients",
    tone: 6,
    length: "medium",
    subject: "Re: Questions About the Project",
    body: "Hi Robert,\n\nThank you for your seven questions. I've answered each below:\n\n1. The timeline is 6 weeks. (Page 1, paragraph 2 of the brief)\n2. The budget is \u00a315,000. (Page 1, paragraph 3 of the brief)\n3. We'll use WordPress. (Page 2, Section 'Technical Approach')\n4. Yes, it includes mobile. (Page 3, highlighted in yellow)\n5. Two rounds of revisions. (Page 4, bold and underlined)\n6. The font is Inter. (Page 5, with a visual example)\n7. Delivery date is June 30. (Page 1, paragraph 1, sentence 1 \u2014 literally the first thing in the document)\n\nI've re-attached the brief for your convenience. Might I suggest a cup of tea and 10 uninterrupted minutes? It's a riveting read.\n\nBest regards",
    aggressionScore: 83,
    damageAssessment: "They'll read the next document you send. Probably.",
    corporateTranslation: {
      whatYouMean: "Everything you just asked is in the document you clearly didn't read.",
      corporateVersion: "I've compiled a quick reference guide to supplement the detailed brief for easy access."
    },
    tags: ["not-reading", "brief", "RTFM", "questions", "documentation"]
  },
  {
    id: "urgent-weekend-client-4",
    recipient: "client",
    situation: "Client emails at 9 PM Friday expecting work by Monday morning",
    category: "clients",
    tone: 4,
    length: "short",
    subject: "Re: Need This By Monday AM Please!",
    body: "Hi Deborah,\n\nI received your email at 9:17 PM on Friday requesting a complete brand redesign by Monday at 9 AM. That gives us... 60 hours, 48 of which constitute 'the weekend.'\n\nI'd love to help with this. My weekend rate is [attached]. Alternatively, I'm happy to begin this on Monday morning, with delivery by Wednesday, which aligns with both the laws of physics and my need to occasionally not work.\n\nPlease let me know which option works for you.\n\nBest",
    aggressionScore: 62,
    damageAssessment: "They'll either pay the premium or learn to plan ahead",
    corporateTranslation: {
      whatYouMean: "It's Friday night. This isn't happening for free over my weekend.",
      corporateVersion: "I'd like to discuss timeline options that balance urgency with quality delivery."
    },
    tags: ["weekend-work", "unrealistic-deadline", "rush-job", "boundaries"]
  },
  {
    id: "endless-revisions-client-5",
    recipient: "client",
    situation: "Client is on revision round 12 and keeps changing their mind",
    category: "clients",
    tone: 5,
    length: "long",
    subject: "Re: V12 - A Few More Changes",
    body: "Hi Stephanie,\n\nThank you for your feedback on V11. Per your request, I've now created V12, which I note looks remarkably similar to V3.\n\nFor transparency, here's our journey:\n- V1-V3: 'Make it more modern'\n- V4-V6: 'Actually, make it more classic'\n- V7-V9: 'Can we try modern again?'\n- V10-V11: 'Something in between'\n- V12: We've come full circle\n\nAs a reminder, our agreement includes 3 rounds of revisions. We are currently on round 12. I've been generously flexible, but my flexibility has a structural limit, much like a bridge or my sanity.\n\nI'd like to propose a final sign-off meeting where we agree on a direction, commit to it with the gravity of a blood oath, and deliver the final version. Thoughts?\n\nBest regards",
    aggressionScore: 78,
    damageAssessment: "A masterclass in documented evidence that they can't argue with",
    corporateTranslation: {
      whatYouMean: "You've changed your mind 12 times and I'm about to lose mine.",
      corporateVersion: "I'd love to establish a definitive creative direction to ensure we deliver maximum value efficiently."
    },
    tags: ["revisions", "indecisive", "scope-creep", "sign-off", "changes"]
  },
  {
    id: "competitor-comparison-client-3",
    recipient: "client",
    situation: "Client sends you a competitor's work and says 'do this but cheaper'",
    category: "clients",
    tone: 3,
    length: "medium",
    subject: "Re: Reference Examples",
    body: "Hi Nathan,\n\nThank you for sending over the competitor's website as a reference. I've reviewed it and I agree \u2014 it's excellent work. It should be, given they charge approximately four times our agreed rate.\n\nI can absolutely create something of equivalent quality. However, I want to set realistic expectations: the budget we've agreed covers a Toyota. The reference you've sent is a Bentley. Both are cars. Both get you from A to B. But one has hand-stitched leather and the other has air freshener.\n\nI'm happy to discuss what's achievable within our current budget, or we can revisit the budget to match the aspiration. Either way works for me.\n\nBest",
    aggressionScore: 50,
    damageAssessment: "Educational without being insulting - they'll understand the equation",
    corporateTranslation: {
      whatYouMean: "You can't afford what you're asking for. Either pay more or expect less.",
      corporateVersion: "I'd love to explore how we can maximise impact within our current investment parameters."
    },
    tags: ["budget", "expectations", "competitor", "value", "pricing"]
  },
  {
    id: "design-by-committee-client-4",
    recipient: "client",
    situation: "Client has 8 stakeholders all giving conflicting feedback",
    category: "clients",
    tone: 4,
    length: "medium",
    subject: "Re: Consolidated Feedback",
    body: "Hi Paula,\n\nThank you for the 'consolidated' feedback from your team. I've reviewed all 8 responses and wanted to highlight some minor inconsistencies:\n\n- Sarah wants it 'bold and vibrant.' Tom wants it 'minimal and muted.'\n- James says 'more white space.' Linda says 'fill the gaps.'\n- Marketing wants 'playful.' Legal wants 'conservative.'\n- The CEO wants 'something like Apple' and the CTO wants 'something like nothing else.'\n\nIn the interest of moving forward without creating a design that satisfies no one (which is the current trajectory), might I suggest we identify one decision-maker? Someone whose word is final? A benevolent design dictator, if you will.\n\nOtherwise, I'll need to create 8 separate websites.\n\nBest regards",
    aggressionScore: 65,
    damageAssessment: "Forces them to sort out their internal chaos before wasting more of your time",
    corporateTranslation: {
      whatYouMean: "Your team can't agree on anything and it's making this project impossible.",
      corporateVersion: "I'd suggest streamlining the approval workflow to one decision-maker for efficiency."
    },
    tags: ["design-by-committee", "conflicting-feedback", "stakeholders", "decision-making"]
  },
  {
    id: "ghosting-client-5",
    recipient: "client",
    situation: "Client disappears for 3 months then asks where the project is",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: Where Are We With the Project?",
    body: "Hi William,\n\nWhat a pleasure to hear from you! It's been 94 days since your last communication, but who's counting? (Me. I'm counting.)\n\nTo answer your question: the project is exactly where it was on February 12th, when I sent you the designs for approval. And February 19th, when I followed up. And March 3rd. And March 15th. And the three emails after that, all of which went into what I can only assume is a digital Bermuda Triangle.\n\nThe project requires your approval to proceed. It has required your approval for 94 days. I am ready to continue the moment you provide it, which based on current response times should be approximately July.\n\nLooking forward to reconnecting.\n\nBest regards",
    aggressionScore: 79,
    damageAssessment: "They can't argue - you have timestamps for every ignored email",
    corporateTranslation: {
      whatYouMean: "You disappeared for 3 months and now you're surprised nothing happened?",
      corporateVersion: "I'm thrilled to re-engage and am ready to accelerate upon receiving the outstanding approvals."
    },
    tags: ["ghosting", "unresponsive", "approval", "waiting", "follow-up"]
  },
  {
    id: "free-work-client-6",
    recipient: "client",
    situation: "Client asks for extensive free work as a 'test'",
    category: "clients",
    tone: 6,
    length: "medium",
    subject: "Re: Trial Project Proposal",
    body: "Hi Gerald,\n\nThank you for the opportunity to complete a 'small trial project' to 'see if we're a good fit.' I've reviewed the scope of your trial:\n\n- Full brand strategy document\n- 3 logo concepts with rationale\n- Brand guidelines\n- Social media templates\n\nIn my industry, we have a technical term for this. It's called 'the entire project.' You've essentially asked me to do all the work for free, after which I assume you'll decide whether to pay me for having already done it.\n\nI'd be happy to provide portfolio examples, case studies, and references instead. Alternatively, I can complete a paid discovery session at my day rate, which gives you a taste of my approach without me giving away the meal.\n\nLet me know which works for you.\n\nBest",
    aggressionScore: 81,
    damageAssessment: "They'll either respect you or find someone willing to work for exposure",
    corporateTranslation: {
      whatYouMean: "I don't work for free. That's not a trial, that's unpaid labour.",
      corporateVersion: "I'd love to explore paid discovery options that demonstrate our capabilities while respecting mutual investment."
    },
    tags: ["free-work", "spec-work", "trial", "value", "boundaries"]
  },
  {
    id: "asap-client-4",
    recipient: "client",
    situation: "Client marks everything ASAP but takes weeks to respond to your questions",
    category: "clients",
    tone: 4,
    length: "short",
    subject: "Re: ASAP - Updated Copy Needed",
    body: "Hi Christine,\n\nI'd be happy to get this to you ASAP! For context, my ASAP is typically 24-48 hours.\n\nI do want to gently note that the questions I sent you (marked 'awaiting your response' in the project tracker) have been pending for 19 days. It seems we may have different definitions of 'as soon as possible.'\n\nMy ASAP starts the moment you provide the information I need. Your move!\n\nBest regards",
    aggressionScore: 60,
    damageAssessment: "Politely mirrors their own behaviour back at them",
    corporateTranslation: {
      whatYouMean: "You want things instantly but take 3 weeks to reply to me. The hypocrisy.",
      corporateVersion: "I'm keen to maintain momentum and will prioritise delivery upon receiving outstanding inputs."
    },
    tags: ["ASAP", "double-standards", "response-time", "urgency", "hypocrisy"]
  },
  {
    id: "nephew-design-client-3",
    recipient: "client",
    situation: "Client's nephew 'knows Photoshop' and has 'improved' your designs",
    category: "clients",
    tone: 3,
    length: "medium",
    subject: "Re: Updated Designs from Our Side",
    body: "Hi Monica,\n\nThank you for sending over the 'updated' versions of the designs. I can see a lot of... creative choices have been made. The Comic Sans is bold. The WordArt is nostalgic. The stock photo watermarks add a certain artistic flair.\n\nI want to ensure we're aligned on quality expectations. The original designs were created to professional standards, while these revisions appear to have been made in what I diplomatically call a 'different creative direction.'\n\nWould you like me to incorporate any specific elements your nephew suggested into the professional files, or shall we proceed with the originals?\n\nI'm flexible either way, though I should note my portfolio cannot include the WordArt version.\n\nBest",
    aggressionScore: 55,
    damageAssessment: "Diplomatic enough to not insult the nephew but clear enough to save the project",
    corporateTranslation: {
      whatYouMean: "Your nephew has destroyed my professional work with Comic Sans and watermarked clip art.",
      corporateVersion: "I'd love to align on the creative direction and ensure final assets meet the agreed quality benchmarks."
    },
    tags: ["nephew", "amateur", "design-feedback", "quality", "client-edits"]
  },
  {
    id: "can-you-just-client-5",
    recipient: "client",
    situation: "Client says 'can you just...' about something that will take days",
    category: "clients",
    tone: 5,
    length: "short",
    subject: "Re: Quick Favour",
    body: "Hi Daniel,\n\nPer your email, you asked if I could 'just quickly' rebuild the database architecture, 'while I'm in there.'\n\nI want to set expectations: there is no 'quickly' in database architecture. This is the digital equivalent of asking a plumber to 'just quickly' replumb your house while fixing a dripping tap.\n\nI estimate 3-4 weeks and \u00a38,000. Happy to scope this properly if you'd like to proceed. The 'quick' version would involve prayer and crossed fingers, which I don't charge for but also don't recommend.\n\nBest",
    aggressionScore: 72,
    damageAssessment: "They'll think twice before saying 'can you just' again",
    corporateTranslation: {
      whatYouMean: "That's not a quick favour, it's a major project with a major price tag.",
      corporateVersion: "I'd be happy to scope this enhancement as a separate workstream with appropriate resourcing."
    },
    tags: ["can-you-just", "underestimation", "scope", "quick-favour"]
  }
];
