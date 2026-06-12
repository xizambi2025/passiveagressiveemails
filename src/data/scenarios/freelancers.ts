import { Scenario } from './types';

export const freelancerScenarios: Scenario[] = [
  {
    id: "exposure-payment-freelancer-6",
    recipient: "freelancer",
    situation: "Someone offers to pay in 'exposure' instead of money",
    category: "invoices",
    tone: 6,
    length: "medium",
    subject: "Re: Collaboration Opportunity!",
    body: "Hi Bradley,\n\nThank you for the 'opportunity' to design your entire brand identity in exchange for 'exposure to our 340 Instagram followers.'\n\nI've given this careful thought. Unfortunately, my landlord has informed me that she does not accept exposure as rent payment. My electricity provider similarly refuses to power my home with the warm glow of your social media mentions. Even my cat, who works for free, expects payment in the form of actual food.\n\nMy rate card is attached. If the budget is zero, might I suggest Canva? It's free and offers templates that are, frankly, better than what exposure would buy.\n\nWishing you and your 340 followers all the best.\n\nKind regards",
    aggressionScore: 84,
    damageAssessment: "They'll either pay or never ask another creative for free work again",
    corporateTranslation: {
      whatYouMean: "Exposure doesn't pay bills. Pay me or go away.",
      corporateVersion: "I appreciate the partnership opportunity but require monetary compensation aligned with market rates."
    },
    tags: ["exposure", "free-work", "payment", "value", "creative"]
  },
  {
    id: "scope-creep-freelancer-5",
    recipient: "freelancer",
    situation: "Client keeps adding tasks beyond the original freelance agreement",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: One More Thing...",
    body: "Hi Pamela,\n\nPer our original agreement, I was hired to write 5 blog posts. Since then, you've requested I also:\n\n- Rewrite your About page\n- Draft 20 social media captions\n- 'Just quickly' proofread your 40-page annual report\n- Create an email newsletter template\n- Write your CEO's LinkedIn bio\n\nI'm delighted to do all of these things. I do them professionally. For money. Which is different from 'as a favour because you already paid me for something else.'\n\nI've attached a quote for the additional work. Alternatively, I can complete the original 5 posts as agreed and we can scope a separate project for the extras.\n\nBest regards",
    aggressionScore: 74,
    damageAssessment: "Clear boundary that protects the relationship while protecting your income",
    corporateTranslation: {
      whatYouMean: "These extras aren't included and I'm not doing them for free.",
      corporateVersion: "I'd love to support these additional initiatives and have prepared a supplementary scope proposal."
    },
    tags: ["scope-creep", "boundaries", "additional-work", "contract"]
  },
  {
    id: "revision-hell-freelancer-4",
    recipient: "freelancer",
    situation: "Client requests revisions that undo all previous revisions",
    category: "clients",
    tone: 4,
    length: "short",
    subject: "Re: Revision Round 6 Feedback",
    body: "Hi Graham,\n\nI've reviewed your latest round of revisions. You've asked me to revert the logo to the style from V2, use the colours from V4, the font from V1, and the layout from V5.\n\nI've created a Frankenstein's monster of your preferences as requested. I want to flag that we've now used all 3 included revision rounds plus 3 additional rounds at \u00a375 each.\n\nMight I gently suggest that V7 be the final version? My creative soul and your budget would both benefit from closure.\n\nBest",
    aggressionScore: 60,
    damageAssessment: "The 'Frankenstein's monster' line will haunt them into a decision",
    corporateTranslation: {
      whatYouMean: "You're going in circles and it's costing us both. Please just pick one.",
      corporateVersion: "I'd recommend we finalise the creative direction to optimise remaining budget allocation."
    },
    tags: ["revisions", "indecisive", "budget", "creative"]
  },
  {
    id: "late-payment-freelancer-6",
    recipient: "freelancer",
    situation: "Client is 90 days late on payment and keeps saying 'it's being processed'",
    category: "invoices",
    tone: 6,
    length: "long",
    subject: "Invoice #0042 - Final Notice Before Legal Action",
    body: "Hi Veronica,\n\nI'm writing about Invoice #0042, which has celebrated several milestones since its issue date:\n\n- 30 days: 'It's being processed' (your words, April 3rd)\n- 60 days: 'Finance is backed up' (your words, May 5th)\n- 90 days: Silence (your current approach)\n\nI've been patient. I've been understanding. I've been professional. I am now being direct: this invoice is 90 days overdue. The work was completed and delivered on time, was approved, and has been live on your website generating revenue for three months while I've been generating follow-up emails.\n\nThis is my final communication before I pass this to my collections service. I'd much prefer we resolve this between ourselves. Payment within 7 days avoids the late fee (per contract), the collections process, and the awkwardness of me leaving a Google review about my experience.\n\nI await your immediate response.\n\nRegards",
    aggressionScore: 87,
    damageAssessment: "The Google review threat is the nuclear button. They'll pay.",
    corporateTranslation: {
      whatYouMean: "Pay me right now or I'm going to collections and trashing your reputation.",
      corporateVersion: "I'd appreciate immediate resolution to maintain our positive business relationship."
    },
    tags: ["late-payment", "invoice", "collections", "overdue", "final-notice"]
  },
  {
    id: "rush-job-freelancer-4",
    recipient: "freelancer",
    situation: "Client wants rush delivery but won't pay rush fees",
    category: "deadlines",
    tone: 4,
    length: "medium",
    subject: "Re: Need This by Tomorrow - URGENT",
    body: "Hi Keith,\n\nI'd be happy to complete this by tomorrow. My rush fee for 24-hour turnaround is 50% on top of the standard rate, as outlined in my terms.\n\nYour reply of 'surely we can work something out, we're partners' is noted. However, partnership typically implies mutual benefit. In this scenario, the benefit to you is receiving work urgently. The benefit to me is... also receiving work urgently? That doesn't quite work.\n\nI can deliver by tomorrow at the rush rate, or by Friday at the standard rate. Both are genuine offers made with professional warmth.\n\nWhich would you prefer?\n\nBest",
    aggressionScore: 64,
    damageAssessment: "Politely dismantles the 'we're partners' manipulation while offering clear options",
    corporateTranslation: {
      whatYouMean: "Rush work costs more money. We're not 'partners,' you're a client who wants a discount.",
      corporateVersion: "I've outlined delivery options at appropriate price points to meet your timeline needs."
    },
    tags: ["rush-job", "pricing", "boundaries", "urgency", "negotiation"]
  },
  {
    id: "ghosting-after-delivery-freelancer-5",
    recipient: "freelancer",
    situation: "Client received the work, went silent, and is now using it without paying",
    category: "invoices",
    tone: 5,
    length: "medium",
    subject: "Re: Invoice & Usage of Delivered Materials",
    body: "Hi Diana,\n\nI hope you're well! I noticed something interesting today \u2014 the website copy I delivered three weeks ago (and invoiced for, still unpaid) is now live on your website. How exciting! For one of us.\n\nPer our agreement, ownership of the work transfers upon payment. Until payment is received, I retain all intellectual property rights. The work currently on your website is, legally speaking, mine.\n\nI'm sure this is an oversight in your accounts department and not a deliberate attempt to use work without paying for it. I'd hate to have to issue a takedown notice \u2014 it seems so formal for what I'm confident is just a delayed payment.\n\nInvoice re-attached. Payment within 5 business days would be lovely.\n\nBest regards",
    aggressionScore: 79,
    damageAssessment: "The 'how exciting, for one of us' is chef's kiss passive aggression",
    corporateTranslation: {
      whatYouMean: "You're using my work without paying for it. That's theft. Pay up or I'm sending lawyers.",
      corporateVersion: "I'd appreciate payment processing to formalise the IP transfer for the materials currently in use."
    },
    tags: ["unpaid", "IP-rights", "ghosting", "usage-without-payment"]
  },
  {
    id: "friends-and-family-discount-freelancer-4",
    recipient: "freelancer",
    situation: "Acquaintance asks for 'mates rates' on a major project",
    category: "invoices",
    tone: 4,
    length: "short",
    subject: "Re: Quick Job - Mates Rates?",
    body: "Hi Steve,\n\nThanks for thinking of me for your company's website! I'm flattered.\n\nRegarding 'mates rates' \u2014 I should clarify: we met once at Dave's barbecue in 2019. You asked me what I do, I said 'web design,' and you said 'oh nice, I might need that someday.' I wouldn't characterise us as mates so much as 'acquaintances who've shared proximity to the same sausages.'\n\nMy standard rate is attached. I offer a 10% loyalty discount for repeat clients, which requires being a client at least once first.\n\nHappy to chat if you'd like to proceed!\n\nBest",
    aggressionScore: 67,
    damageAssessment: "The sausage line is so specific they can't possibly argue they're close friends",
    corporateTranslation: {
      whatYouMean: "We're not friends and you don't get a discount for having met me once.",
      corporateVersion: "I'd be happy to provide my standard pricing for this project."
    },
    tags: ["mates-rates", "discount", "boundaries", "pricing", "acquaintance"]
  },
  {
    id: "do-it-in-five-minutes-freelancer-5",
    recipient: "freelancer",
    situation: "Client insists something 'should only take 5 minutes' when it takes hours",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: Small Update to the Website (5 min job)",
    body: "Hi Carol,\n\nPer your email, you've described the task as a '5-minute job.' Let me walk through what's actually involved:\n\n- Back up the current site (10 mins)\n- Navigate to the correct template file (5 mins)\n- Make the structural change you've described as 'just move this bit' (2 hours)\n- Test across 4 browsers (30 mins)\n- Test across 3 device sizes (20 mins)\n- Fix the things that broke (1-2 hours)\n- Deploy to staging for your review (15 mins)\n- Deploy to production (10 mins)\n\nTotal: approximately 5 hours. Or as I prefer to call it, sixty of your 5-minute estimates stacked together.\n\nI'm happy to do this! It'll be quoted at my hourly rate for approximately half a day. Shall I proceed?\n\nBest",
    aggressionScore: 73,
    damageAssessment: "They'll never say '5 minutes' again without wincing",
    corporateTranslation: {
      whatYouMean: "It's not 5 minutes. You don't know what you're talking about. This costs money.",
      corporateVersion: "I've scoped the technical requirements and prepared an accurate estimate for your review."
    },
    tags: ["underestimation", "scope", "time-estimate", "education", "expectations"]
  }
];
