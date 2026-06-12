import { Scenario } from './types';

export const invoiceScenarios: Scenario[] = [
  {
    id: 'invoice-6-months-overdue',
    recipient: 'client',
    situation: 'Invoice is 6 months overdue with no response',
    category: 'invoices',
    tone: 6,
    length: 'medium',
    subject: 'Invoice #3847 - 180 Days Outstanding (A Love Letter)',
    body: `Dear Helen,

Happy 6-month anniversary to Invoice #3847! I can't believe it's been half a year already. Time really flies when you're waiting for payment.

In the time since this invoice was due, I've:
- Sent 12 follow-up emails (this being the 13th — lucky!)
- Left 4 voicemails  
- Considered carrier pigeons
- Briefly contemplated showing up at your office with a ukulele and singing about accounts payable

I want to be transparent: my next step is engaging a collections agency, which neither of us wants. They're much less charming than I am, and they don't use exclamation marks in their emails!

The amount owed is $8,750. I'm available to discuss payment plans if needed. What I'm not available for is another month of silence.

Please respond within 5 business days.

Still warmly (for now)`,
    aggressionScore: 85,
    damageAssessment: 'Client knows collections is next. Maximum pressure with humor.',
    corporateTranslation: {
      whatYouMean: 'Pay me or I\'m sending this to collections. I am not asking again.',
      corporateVersion: 'I\'d like to resolve this outstanding balance proactively before it escalates to our formal recovery process.',
    },
    tags: ['overdue', 'collections', 'final-warning', 'long-overdue', 'money'],
  },
  {
    id: 'invoice-check-is-in-the-mail',
    recipient: 'client',
    situation: 'Client keeps saying "the check is in the mail" but it never arrives',
    category: 'invoices',
    tone: 5,
    length: 'short',
    subject: 'Re: The Legendary Check - A Missing Persons Report',
    body: `Hi Derek,

You mentioned the check was mailed on March 1st. It's now April 15th. I'm beginning to think the postal service has lost it — along with the previous two checks you sent on January 15th and February 10th.

What terrible luck! Three checks lost by the postal service. That's statistically remarkable, actually. You should file a complaint.

Alternatively — and I'm just spitballing here — we could try a bank transfer? Those tend to arrive faster than checks that were definitely, absolutely, 100% mailed. I've attached our bank details for your convenience.

Would you be able to send the transfer today?

Regards`,
    aggressionScore: 72,
    damageAssessment: 'Client caught in obvious lie with graceful off-ramp (bank transfer)',
    corporateTranslation: {
      whatYouMean: 'We both know you never mailed a check. Wire the money or stop lying.',
      corporateVersion: 'To avoid further postal delays, I\'d like to suggest an electronic payment method for reliability.',
    },
    tags: ['check-in-mail', 'lie', 'bank-transfer', 'persistence'],
  },
  {
    id: 'invoice-partial-payment-no-explanation',
    recipient: 'client',
    situation: 'Client paid only half the invoice with no explanation',
    category: 'invoices',
    tone: 4,
    length: 'short',
    subject: 'Invoice #5522 - Partial Payment Received (The Other Half?)',
    body: `Hi Vanessa,

Thank you for your payment of $3,500! I was delighted to receive it. However, the invoice total is $7,000, which means we appear to be experiencing a 50% shortfall.

I checked with my accounting team (me) and confirmed that the service was provided in full — not in half. We didn't deliver half a website or half a strategy document. So I'm a bit confused about the half payment.

Could you clarify whether:
a) This is an installment (and part 2 is coming when?)
b) There was a banking error
c) You've invented a new payment methodology I'm not familiar with

The remaining $3,500 is still outstanding. Any timeline on that?

Thanks!`,
    aggressionScore: 58,
    damageAssessment: 'Client confronted but given multiple face-saving options',
    corporateTranslation: {
      whatYouMean: 'You only paid half. I did all the work. Pay the rest.',
      corporateVersion: 'I\'d like to reconcile a discrepancy between the invoice amount and the payment received.',
    },
    tags: ['partial-payment', 'shortfall', 'accountability', 'follow-up'],
  },
  {
    id: 'invoice-disputing-after-delivery',
    recipient: 'client',
    situation: 'Client tries to negotiate price down AFTER work is delivered',
    category: 'invoices',
    tone: 6,
    length: 'medium',
    subject: 'Re: Invoice Discussion - An Interesting Negotiation Strategy',
    body: `Hi Roger,

Fascinating! You'd like to negotiate the price down by 40% — after the work is complete, approved, delivered, and live on your website. That's certainly a unique approach to business.

I'm trying to imagine this in other contexts:
- Eating an entire meal, then asking for 40% off
- Living in a house for a month, then offering less rent
- Wearing the suit home from the store, then disputing the tag price

The agreed price was $12,000. You signed the contract (attached). You approved each milestone. You published the work. The time to negotiate was before all of that, not after.

I'll expect the full $12,000 within 14 days per our agreement. After that, my attorney is considerably less fun to email with.

Kind regards`,
    aggressionScore: 92,
    damageAssessment: 'Client given firm boundary. Legal escalation threat clear.',
    corporateTranslation: {
      whatYouMean: 'You cannot haggle after receiving the goods. Pay what you agreed or see you in court.',
      corporateVersion: 'I appreciate your interest in discussing value, but I\'d like to reference our signed agreement regarding the committed investment.',
    },
    tags: ['negotiation', 'post-delivery', 'contract', 'legal', 'boundaries'],
  },
  {
    id: 'invoice-payment-terms-ignored',
    recipient: 'client',
    situation: 'Client ignoring Net-30 terms, paying at Net-90 or later',
    category: 'invoices',
    tone: 4,
    length: 'medium',
    subject: 'Payment Terms Refresher - Net-30 ≠ Net-90',
    body: `Hi Catherine,

I wanted to touch base about our payment terms! When we agreed to Net-30, this means payment within 30 days of invoice. I want to clarify this because your payments have been arriving at what I'd describe as "Net-whenever-you-feel-like-it."

Recent payment history:
- Invoice Jan: Paid Day 67
- Invoice Feb: Paid Day 84
- Invoice Mar: Paid Day 72
- Invoice Apr: Outstanding (Day 45 and counting)

Starting next month, I'll be implementing a 2% late fee for payments received after Day 30, as outlined in our contract (Section 5.1, which I've highlighted and attached).

Alternatively, if Net-30 genuinely doesn't work for your cash flow, let's discuss upfront. I'd rather set realistic terms than chase payments every month.

Looking forward to finding a rhythm that works!

Best`,
    aggressionScore: 62,
    damageAssessment: 'Client aware of documented pattern with consequences now attached',
    corporateTranslation: {
      whatYouMean: 'You consistently pay 2-3 months late. I\'m adding late fees now.',
      corporateVersion: 'I\'d like to revisit our payment timeline to ensure alignment and prevent any administrative fees from applying.',
    },
    tags: ['payment-terms', 'late-payment', 'net-30', 'late-fees', 'pattern'],
  },
  {
    id: 'invoice-expenses-disputed',
    recipient: 'client',
    situation: 'Client disputes pre-approved expenses',
    category: 'invoices',
    tone: 5,
    length: 'medium',
    subject: 'Re: Expense Dispute - Shall I Forward Your Approval Email?',
    body: `Hi Nathan,

I understand you're questioning the $2,400 in expenses on this month's invoice. I'd be happy to clarify!

These expenses were:
1. Stock photography licenses ($800) — Approved via email March 3
2. Premium font license ($400) — Approved via email March 7
3. Hosting setup ($600) — Approved in our March 10 call (notes attached)
4. SSL certificate ($200) — Approved via Slack March 12
5. Domain registration ($400) — Approved in project kickoff (minutes attached)

Every single expense was pre-approved in writing. I have receipts for the expenses AND receipts for your approvals. Would you like me to forward all of them, or would you prefer to withdraw the dispute?

I'm nothing if not well-documented.

Best regards`,
    aggressionScore: 76,
    damageAssessment: 'Client\'s dispute demolished by thorough documentation',
    corporateTranslation: {
      whatYouMean: 'You approved every single one of these. Don\'t pretend you didn\'t.',
      corporateVersion: 'I\'d like to share the approval documentation for each expense to resolve this discrepancy.',
    },
    tags: ['expenses', 'dispute', 'documentation', 'receipts', 'approved'],
  },
  {
    id: 'invoice-wanting-discount-for-future-work',
    recipient: 'client',
    situation: 'Client wants a discount on current invoice promising "lots of future work"',
    category: 'invoices',
    tone: 4,
    length: 'short',
    subject: 'Re: Discount Request for "Ongoing Partnership"',
    body: `Hi Maria,

Thank you for the offer of "lots of work in the future" in exchange for a 30% discount today! That's a compelling proposition.

Unfortunately, my landlord doesn't accept "future work promises" as rent payment, and the grocery store has a strict "no IOUs" policy. I've checked.

Here's what I can offer: full price for this project, and once we've completed 3 projects together, I'll happily discuss a loyalty discount for project #4 onward. That way, the "future work" actually materializes before the discount does.

Sound fair?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Client educated on how discounts work without aggression',
    corporateTranslation: {
      whatYouMean: 'I don\'t give discounts for imaginary future work. Pay full price now.',
      corporateVersion: 'I\'d love to explore partnership pricing! Let me propose a tiered structure that rewards demonstrated commitment.',
    },
    tags: ['discount', 'future-work', 'promise', 'negotiation', 'pricing'],
  },
  {
    id: 'invoice-paid-wrong-person',
    recipient: 'client',
    situation: 'Client claims they already paid but paid the wrong person/company',
    category: 'invoices',
    tone: 4,
    length: 'short',
    subject: 'Re: "Already Paid" - To Whom, Exactly?',
    body: `Hi Gerald,

You mentioned you "already paid this invoice." That's great news! However, the payment doesn't appear in my bank account, my PayPal, my Stripe, or under my couch cushions.

Could you send the payment confirmation? I'd love to see the recipient name, because if it's not "Sarah Mitchell" or "Mitchell Creative LLC," you may have paid someone else. Which would be generous of you, but doesn't resolve our situation.

If you paid the wrong entity, I'm sure they're thrilled! But I still need payment. My bank balance doesn't accept "I paid someone" as a deposit.

Payment details reattached for convenience.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Humorous enough to not offend while clearly requesting proof',
    corporateTranslation: {
      whatYouMean: 'You didn\'t pay me. Prove it or pay me.',
      corporateVersion: 'I\'d like to reconcile our records. Could you share the payment confirmation for my reference?',
    },
    tags: ['wrong-payment', 'proof', 'accountability', 'confusion'],
  },
  {
    id: 'invoice-nickel-diming',
    recipient: 'freelancer',
    situation: 'Freelancer bills for every tiny 5-minute task separately',
    category: 'invoices',
    tone: 3,
    length: 'short',
    subject: 'Re: Invoice for Email Response (0.1 hours)',
    body: `Hi Kevin,

I received your invoice for $15 for "responding to client email - 6 minutes." And the previous invoice for $12 for "reviewing Slack message - 5 minutes." And the one before that for $15 for "opening document and confirming receipt - 6 minutes."

I appreciate the granular time tracking! However, at this rate, you'll be invoicing me for the time it takes to send the invoice.

Could we perhaps discuss a minimum billing increment that doesn't require me to process a new invoice for the cost of a sandwich? Perhaps group small tasks into weekly summaries?

My accountant will thank you. And me.

Best`,
    aggressionScore: 40,
    damageAssessment: 'Freelancer gets the message without feeling criticized',
    corporateTranslation: {
      whatYouMean: 'Stop billing me $12 for reading a Slack message. Bundle your invoices.',
      corporateVersion: 'I\'d like to discuss billing efficiency to reduce administrative overhead for both of us.',
    },
    tags: ['micro-billing', 'invoicing', 'efficiency', 'overhead'],
  },
  {
    id: 'invoice-scope-increase-no-budget',
    recipient: 'manager',
    situation: 'Manager approves scope increase but says there\'s no additional budget',
    category: 'invoices',
    tone: 5,
    length: 'medium',
    subject: 'Re: Added Features, Same Budget - A Thought Experiment',
    body: `Hi Richard,

I love the new features you've added to the project! Three new modules, a mobile app, and an API integration — very exciting.

However, I noticed that the budget remains at the original $50,000. Let me illustrate why this is... creative:

Original scope: 5 features = $50,000 ($10,000/feature)
New scope: 8 features = $50,000 ($6,250/feature)

So either:
a) Features got 37.5% cheaper overnight (they didn't)
b) We cut quality by 37.5% (you won't want that)
c) The team works 37.5% more hours for free (we won't do that)
d) We adjust the budget to match the scope (ding ding ding!)

The revised estimate for the expanded scope is $80,000. Shall I send the formal change request, or would you like to remove some features?

Ball's in your court!`,
    aggressionScore: 70,
    damageAssessment: 'Manager forced to make a choice with clear math',
    corporateTranslation: {
      whatYouMean: 'More work costs more money. This is basic math. Approve the budget or cut the scope.',
      corporateVersion: 'I want to align the project budget with the expanded scope to maintain quality and team sustainability.',
    },
    tags: ['budget', 'scope-increase', 'no-budget', 'trade-offs', 'math'],
  },
];
