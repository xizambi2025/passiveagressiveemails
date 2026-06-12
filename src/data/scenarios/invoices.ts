import { Scenario } from './types';

export const invoiceScenarios: Scenario[] = [
  {
    id: "payment-terms-change-client-4",
    recipient: "client",
    situation: "Client unilaterally changed payment terms from 30 to 90 days",
    category: "invoices",
    tone: 4,
    length: "medium",
    subject: "Re: Updated Payment Terms",
    body: "Hi Andrew,\n\nThank you for informing me that your company has 'moved to 90-day payment terms.' I appreciate the transparency, though I notice this wasn't discussed so much as declared.\n\nA few thoughts:\n1. Our contract specifies 30-day terms\n2. Unilateral changes to contracts aren't typically how contracts work\n3. I'd like to propose a counteroffice: I'll move to 90-day payment terms when my landlord, my utility companies, and my supermarket do the same\n\nI'm happy to discuss reasonable adjustments to our arrangement. What I'm unable to accept is having my payment delayed by two months without agreement. Shall we find a middle ground?\n\nBest regards",
    aggressionScore: 66,
    damageAssessment: "The landlord/utilities parallel makes the absurdity impossible to ignore",
    corporateTranslation: {
      whatYouMean: "You can't just decide to pay me 2 months late. That's not how this works.",
      corporateVersion: "I'd like to discuss payment terms that work for both parties within our contractual framework."
    },
    tags: ["payment-terms", "contract", "cash-flow", "negotiation"]
  },
  {
    id: "lost-invoice-client-5",
    recipient: "client",
    situation: "Client claims they 'never received' the invoice you've sent four times",
    category: "invoices",
    tone: 5,
    length: "medium",
    subject: "Invoice #3341 - Fifth Sending (Confirmed Receipt Requested)",
    body: "Hi Geoffrey,\n\nPer our phone call, you mentioned you 'never received' Invoice #3341. This is curious, as I have:\n\n- Email send confirmation: February 1st (opened 3:42 PM)\n- Second send confirmation: February 15th (opened 9:17 AM)\n- Third send via your accounts@: March 1st (opened 11:03 AM)\n- Postal copy tracking: Delivered March 8th, signed by 'G. Richards'\n\nI'm attaching it again \u2014 this will be sending number five. I've also CC'd your accounts department, your PA, and the email address from your LinkedIn, because at this point I'm determined to exhaust every possible delivery method before accepting that invoices simply cannot find you.\n\nPlease confirm receipt. Ideally with payment.\n\nRegards",
    aggressionScore: 79,
    damageAssessment: "They absolutely cannot claim they didn't receive it now. Checkmate.",
    corporateTranslation: {
      whatYouMean: "You've received it every time. Stop lying and pay me.",
      corporateVersion: "I've resent via multiple channels to ensure seamless receipt and processing."
    },
    tags: ["lost-invoice", "avoidance", "receipts", "payment", "proof"]
  },
  {
    id: "partial-payment-client-4",
    recipient: "client",
    situation: "Client paid less than invoiced without explanation",
    category: "invoices",
    tone: 4,
    length: "short",
    subject: "Invoice #4421 - Payment Discrepancy",
    body: "Hi Samantha,\n\nThank you for the payment received on Invoice #4421. However, I notice the amount is \u00a32,100 against an invoice of \u00a33,500 \u2014 a discrepancy of \u00a31,400.\n\nI'm curious about what happened to the remaining amount. Did it get lost in transit? Was there a rounding error of historic proportions? Or is this your way of providing feedback on which parts of my work you felt were worth paying for?\n\nJokes aside, the full amount is due per our agreement. Could you advise when the outstanding \u00a31,400 will be processed?\n\nBest regards",
    aggressionScore: 62,
    damageAssessment: "Light enough to maintain rapport but clear that the shortage is noticed and unacceptable",
    corporateTranslation: {
      whatYouMean: "You underpaid me. Was that deliberate? Pay the rest.",
      corporateVersion: "I'd appreciate clarification on the payment variance to reconcile our accounts."
    },
    tags: ["partial-payment", "underpayment", "discrepancy", "accounts"]
  },
  {
    id: "budget-excuse-client-5",
    recipient: "client",
    situation: "Client says they 'don't have budget' after work is completed",
    category: "invoices",
    tone: 5,
    length: "medium",
    subject: "Re: Budget Constraints",
    body: "Hi Nigel,\n\nPer your email, you've informed me that 'budget has been reallocated' and you're 'unable to process the invoice at this time.'\n\nI want to make sure we're on the same page: the work is complete. It was delivered. You approved it. It's live. The time to discuss budget constraints was before you commissioned the work \u2014 not after it's been delivered and deployed.\n\nTo use a restaurant metaphor: you've eaten the meal. The waiter has arrived with the bill. 'I've reallocated my food budget' is not an accepted payment method.\n\nPlease confirm a payment date within our contractual terms. I remain optimistic that your budget will be re-reallocated in the direction of my invoice.\n\nBest regards",
    aggressionScore: 77,
    damageAssessment: "The restaurant metaphor is so perfect they'll feel ridiculous not paying",
    corporateTranslation: {
      whatYouMean: "You can't just refuse to pay after the work is done. That's not how commerce works.",
      corporateVersion: "I'd like to discuss payment scheduling within our agreed terms, as the deliverables have been accepted."
    },
    tags: ["no-budget", "payment-refusal", "completed-work", "contract"]
  },
  {
    id: "invoice-queries-stalling-client-4",
    recipient: "client",
    situation: "Client keeps raising minor invoice queries to delay payment",
    category: "invoices",
    tone: 4,
    length: "medium",
    subject: "Re: Invoice Query #7 - Line Item 3",
    body: "Hi Heather,\n\nThank you for your seventh query on this invoice. For context, here's the query timeline:\n\n- Query 1: 'Can you resend in PDF?' (Resent. Day 5)\n- Query 2: 'Can you add a PO number?' (Added. Day 12)\n- Query 3: 'The date format is wrong.' (Fixed. Day 18)\n- Query 4: 'Who should I make payable to?' (Same as always. Day 25)\n- Query 5: 'Can you split into two invoices?' (Split. Day 31)\n- Query 6: 'Actually, can you recombine them?' (Recombined. Day 38)\n- Query 7: Today's question about line item 3\n\nI'm beginning to sense a pattern. Each query arrives precisely when payment is about to be processed. If I didn't know better, I'd think these queries were less about accuracy and more about... timing.\n\nI've answered Query 7 below. Perhaps this could be the final one before payment is released?\n\nBest",
    aggressionScore: 71,
    damageAssessment: "The documented pattern is impossible to deny - they've been caught stalling",
    corporateTranslation: {
      whatYouMean: "Stop making up excuses to delay paying me. I see what you're doing.",
      corporateVersion: "I'd appreciate finalising all outstanding queries in a single communication to expedite processing."
    },
    tags: ["stalling", "invoice-queries", "delay-tactics", "payment"]
  },
  {
    id: "discount-after-completion-client-6",
    recipient: "client",
    situation: "Client asks for a discount after the work is already done",
    category: "invoices",
    tone: 6,
    length: "medium",
    subject: "Re: Thoughts on Pricing Adjustment",
    body: "Hi Theodore,\n\nThank you for your email suggesting a 'pricing adjustment' on the completed project. To translate: you'd like to pay less than we agreed, after I've already done the work.\n\nI want to share an analogy. Imagine hiring a builder to construct an extension. They build it. You move your furniture in. Then you ask if they'd accept 70% because 'it's a bit over what we budgeted internally.' The builder would look at you in a very specific way. That's how I'm looking at this email.\n\nThe price was agreed before work commenced. The work was delivered to specification. The price remains the price.\n\nHappy to discuss rates on future projects, but retrospective discounts aren't a service I offer.\n\nBest regards",
    aggressionScore: 83,
    damageAssessment: "The builder analogy is so clear they'll pay without further negotiation",
    corporateTranslation: {
      whatYouMean: "Absolutely not. We agreed on a price. The work is done. Pay what you owe.",
      corporateVersion: "Our agreed pricing remains as scoped. I'd be happy to discuss future project investment levels."
    },
    tags: ["retrospective-discount", "negotiation", "completed-work", "pricing"]
  }
];
