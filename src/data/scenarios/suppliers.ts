import { Scenario } from './types';

export const supplierScenarios: Scenario[] = [
  {
    id: "late-delivery-supplier-4",
    recipient: "supplier",
    situation: "Supplier missed delivery date for the third time",
    category: "suppliers",
    tone: 4,
    length: "medium",
    subject: "Re: Delivery Update - Order #7891",
    body: "Hi Frank,\n\nThank you for your email informing me the delivery will be 'slightly delayed.' I want to confirm my understanding of 'slightly':\n\n- Original delivery: March 1st\n- First revised date: March 8th\n- Second revised date: March 15th\n- Current estimate: 'End of month'\n\nWe're approaching what I'd call a 'significantly delayed' situation, which is different from 'slightly' in both dictionary terms and impact on my business.\n\nI appreciate the challenges of logistics, but I also appreciate my clients not leaving me because I can't deliver what I've promised them. Could we have a candid conversation about whether this order is actually coming, or whether I should be making alternative arrangements?\n\nRegards",
    aggressionScore: 64,
    damageAssessment: "Clear enough to either get the delivery moving or free you to find alternatives",
    corporateTranslation: {
      whatYouMean: "You've lied about the delivery date three times. Are you even going to deliver this?",
      corporateVersion: "I'd appreciate a realistic delivery timeline to manage downstream commitments effectively."
    },
    tags: ["late-delivery", "missed-deadline", "reliability", "supply-chain"]
  },
  {
    id: "wrong-order-supplier-5",
    recipient: "supplier",
    situation: "Supplier sent completely wrong items for the second time",
    category: "suppliers",
    tone: 5,
    length: "medium",
    subject: "Re: Order #5523 - Received Incorrect Items (Again)",
    body: "Hi Gary,\n\nPer my previous email on March 3rd regarding Order #5412 (wrong items received), I'm writing about Order #5523, which has also arrived with incorrect items.\n\nTo summarise:\n- Ordered: 500 units of A4 white card stock, 250gsm\n- Received: 500 units of A3 cream tissue paper, 80gsm\n\nThese are not similar items. They differ in size, colour, weight, and fundamental material composition. It's the paper equivalent of ordering a golden retriever and receiving a hamster.\n\nI'm beginning to wonder if there's a parallel universe where someone ordered tissue paper and received my card stock. If you find them, please swap us.\n\nReturn shipping details required at your expense.\n\nRegards",
    aggressionScore: 73,
    damageAssessment: "They'll triple-check your next order or lose your business",
    corporateTranslation: {
      whatYouMean: "How do you keep getting this wrong? It's literally written on the order form.",
      corporateVersion: "I'd appreciate a quality assurance review to prevent fulfilment discrepancies going forward."
    },
    tags: ["wrong-order", "fulfilment-error", "quality", "returns"]
  },
  {
    id: "price-increase-supplier-3",
    recipient: "supplier",
    situation: "Supplier increased prices with 2 days notice",
    category: "suppliers",
    tone: 3,
    length: "medium",
    subject: "Re: Price Adjustment Notice - Effective Immediately",
    body: "Hi Sandra,\n\nThank you for the notification of a 23% price increase effective Thursday \u2014 which, for context, is in two days.\n\nI want to ensure I understand correctly: you're giving us 48 hours to absorb a cost increase that will significantly impact our margins? Our contract specifies 60 days notice for price changes, which I've attached for reference.\n\nI appreciate that costs rise, and I'm happy to discuss pricing in a reasonable timeframe. However, I'm unable to accept an immediate increase that contradicts our agreement. Shall we schedule a call to discuss a transition plan that honours our contract terms?\n\nI look forward to hearing from you before Thursday.\n\nBest regards",
    aggressionScore: 52,
    damageAssessment: "Firm but fair - the contract reference does the heavy lifting",
    corporateTranslation: {
      whatYouMean: "This violates our contract and you know it. I'm not paying more without proper notice.",
      corporateVersion: "I'd like to discuss a pricing transition approach that aligns with our contractual framework."
    },
    tags: ["price-increase", "contract", "notice-period", "negotiation"]
  },
  {
    id: "quality-decline-supplier-4",
    recipient: "supplier",
    situation: "Quality of supplied goods has steadily declined over 6 months",
    category: "suppliers",
    tone: 4,
    length: "long",
    subject: "Quality Concerns - Urgent Discussion Needed",
    body: "Hi Terry,\n\nI'm writing regarding a trend I've observed over the past six months. I've attached photos documenting the quality of your product from January through June, arranged chronologically. You'll notice it tells a story \u2014 one that starts hopeful and ends in disappointment.\n\nJanuary: Excellent quality, as agreed in our SLA\nFebruary: Good, minor inconsistencies\nMarch: Acceptable\nApril: Below acceptable\nMay: Concerning\nJune: I showed my team and someone asked if we'd switched to a budget supplier\n\nWe haven't switched suppliers. Same order, same specs, same price. Just steadily declining quality. I mention the price because we're paying premium rates for what is now demonstrably not a premium product.\n\nI value our business relationship, which is why I'm raising this directly before exploring alternatives. Can we schedule a call this week to discuss remediation?\n\nRegards",
    aggressionScore: 68,
    damageAssessment: "Documented evidence with an implicit threat - they'll either fix it or lose the account",
    corporateTranslation: {
      whatYouMean: "Your product has gone from great to terrible and I'm about to find someone else.",
      corporateVersion: "I'd value a quality alignment discussion to ensure continued partnership success."
    },
    tags: ["quality-decline", "SLA", "documentation", "standards"]
  },
  {
    id: "no-communication-supplier-5",
    recipient: "supplier",
    situation: "Supplier is impossible to reach when there's a problem",
    category: "suppliers",
    tone: 5,
    length: "medium",
    subject: "Attempt #7 to Reach You Regarding Order Issues",
    body: "Hi Marcus,\n\nThis is my seventh attempt to reach someone \u2014 anyone \u2014 at your company regarding the damaged shipment from two weeks ago.\n\nPer my records:\n- Emails sent: 4 (no reply)\n- Phone calls: 6 (voicemail each time)\n- Contact form submissions: 2 (auto-reply only)\n- LinkedIn messages: 1 (seen, not replied)\n\nI'm running out of communication methods. I haven't yet tried carrier pigeon or showing up in person, but I'm considering both.\n\nI have a damaged shipment worth \u00a34,200 that needs resolution. Please respond to confirm you are, in fact, still a functioning business. Silence by Friday will be taken as instruction to pursue this through formal channels.\n\nRegards",
    aggressionScore: 77,
    damageAssessment: "The formal channels threat usually does the trick",
    corporateTranslation: {
      whatYouMean: "You've been ignoring me for two weeks and I'm about to escalate this formally.",
      corporateVersion: "I'd appreciate confirmation of receipt and a resolution timeline for this outstanding matter."
    },
    tags: ["unresponsive", "communication", "escalation", "damaged-goods"]
  },
  {
    id: "hidden-fees-supplier-4",
    recipient: "supplier",
    situation: "Invoice contains unexpected charges not discussed or agreed",
    category: "invoices",
    tone: 4,
    length: "medium",
    subject: "Re: Invoice #8834 - Queries on Line Items",
    body: "Hi Deborah,\n\nI've reviewed Invoice #8834 and have a few questions about some creative line items I don't recall agreeing to:\n\n- 'Administrative processing fee': \u00a3150\n- 'Logistics coordination surcharge': \u00a375\n- 'Priority handling': \u00a3200 (we didn't request priority)\n- 'Environmental compliance levy': \u00a350\n\nThese fees total \u00a3475 and appear on precisely zero of our previous invoices, our contract, or any communication prior to this bill. They seem to have materialised from thin air, like a magician's rabbit but less entertaining and more expensive.\n\nI'll be paying the agreed amount minus these items. If you'd like to discuss why I should pay fees I never agreed to, I'm all ears.\n\nRegards",
    aggressionScore: 66,
    damageAssessment: "They'll remove the fees or explain them - either way you're not paying mystery charges",
    corporateTranslation: {
      whatYouMean: "You've added made-up charges and I'm not paying them.",
      corporateVersion: "I'd appreciate clarification on some line items that don't appear in our agreed terms."
    },
    tags: ["hidden-fees", "invoice-dispute", "surprise-charges", "contract"]
  },
  {
    id: "minimum-order-supplier-3",
    recipient: "supplier",
    situation: "Supplier retroactively changed minimum order quantities",
    category: "suppliers",
    tone: 3,
    length: "short",
    subject: "Re: Updated Minimum Order Requirements",
    body: "Hi Phil,\n\nI received your notice that minimum orders have increased from 100 to 500 units. I have two concerns:\n\n1. We've been ordering 200 units monthly for two years without issue\n2. Our contract doesn't mention a minimum of 500\n\nI appreciate businesses evolve, but this effectively prices out smaller orders that have been the basis of our relationship since 2022. Could we discuss a transition period or grandfathered arrangement?\n\nAlternatively, if this is non-negotiable, I'll need to begin evaluating alternative suppliers, which I'd rather not do.\n\nBest regards",
    aggressionScore: 45,
    damageAssessment: "Professional enough to negotiate from a position of strength",
    corporateTranslation: {
      whatYouMean: "You can't change the rules mid-game. Either honour our arrangement or I'll find someone who will.",
      corporateVersion: "I'd like to explore flexible ordering arrangements that support our continued partnership."
    },
    tags: ["minimum-order", "policy-change", "contract", "negotiation"]
  },
  {
    id: "substitution-supplier-5",
    recipient: "supplier",
    situation: "Supplier substituted items without asking and says 'it's basically the same'",
    category: "suppliers",
    tone: 5,
    length: "medium",
    subject: "Re: Substitution Notice - Order #9912",
    body: "Hi Craig,\n\nPer your email, you've substituted our order of premium Italian marble tiles with 'a comparable alternative' that you describe as 'basically the same thing.'\n\nI've received the alternative. It is linoleum. With a marble pattern printed on it. These are not basically the same thing in any universe. One is natural stone quarried from Carrara. The other is vinyl floor covering you'd find in a budget bathroom.\n\nThe difference between these items is approximately \u00a3200 per square metre and 4.5 billion years of geological formation.\n\nPlease confirm when the actual marble will arrive, or process a full refund. I will not be installing printed linoleum in a luxury kitchen renovation.\n\nRegards",
    aggressionScore: 80,
    damageAssessment: "Absolutely devastating comparison that they can't possibly defend",
    corporateTranslation: {
      whatYouMean: "You sent cheap garbage instead of what I ordered and tried to pretend it's equivalent.",
      corporateVersion: "The substituted product doesn't meet the specified requirements. Please fulfil the original order."
    },
    tags: ["substitution", "quality", "wrong-item", "specifications"]
  }
];
