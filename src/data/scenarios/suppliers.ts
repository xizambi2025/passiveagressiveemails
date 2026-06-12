import { Scenario } from './types';

export const supplierScenarios: Scenario[] = [
  {
    id: 'supplier-wrong-order-third-time',
    recipient: 'supplier',
    situation: 'Supplier sent wrong order for the third time',
    category: 'suppliers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Order #7834 - Third Time\'s a Charm?',
    body: `Hi Marcus,

I'm writing to let you know that we received today's shipment! And, in keeping with tradition, it's wrong. Again. For the third consecutive time.

Here's our fun little scorecard:
- Order 1: Requested blue widgets, received red widgets
- Order 2: Requested blue widgets, received green widgets  
- Order 3: Requested blue widgets, received... purple widgets?

I'm starting to think either "blue" means something different in your warehouse, or someone there is just picking colors based on their mood that day. Which is creative, I'll admit.

I've reattached the original PO (for the THIRD time) with "BLUE" highlighted, bolded, underlined, and circled in red. If it helps, I can also send a paint swatch, a Pantone reference, or perhaps a physical blueberry for comparison.

When can I expect the correct order?

Regards`,
    aggressionScore: 72,
    damageAssessment: 'Supplier embarrassed by documented incompetence, will likely prioritize correction',
    corporateTranslation: {
      whatYouMean: 'Three wrong orders in a row. Are you doing this on purpose? Send me the right thing or I\'m finding a new supplier.',
      corporateVersion: 'I\'d like to flag a recurring fulfillment discrepancy to ensure we resolve this and maintain our strong partnership.',
    },
    tags: ['wrong-order', 'fulfillment', 'repeated', 'incompetence'],
  },
  {
    id: 'supplier-delivery-date-fiction',
    recipient: 'supplier',
    situation: 'Supplier keeps pushing back delivery date',
    category: 'suppliers',
    tone: 4,
    length: 'medium',
    subject: 'Re: Updated Delivery Timeline (Version 6)',
    body: `Hi Sandra,

Thank you for the sixth revision to our delivery timeline! I'm keeping a collection at this point — it's like watching a delivery date migrate slowly into the future, one week at a time.

For my records, here's the journey so far:
- Original date: March 15
- "Slight delay": March 22
- "Supply chain issue": April 1 (fitting)
- "Just a few more days": April 15
- "Almost there": May 1
- Today's update: May 15

At this rate, I'm projecting delivery somewhere around 2027. Should I adjust my business plans accordingly?

I appreciate your optimism with each new date, but could we perhaps get one that's based on reality rather than hope? My operations team is starting to think this order is imaginary.

Best regards`,
    aggressionScore: 65,
    damageAssessment: 'Supplier confronted with pattern of delays in documented timeline',
    corporateTranslation: {
      whatYouMean: 'Every date you give us is a lie. Give me a real date or I\'m cancelling.',
      corporateVersion: 'I need to set accurate expectations with my stakeholders. Could we align on a firm, committed delivery date?',
    },
    tags: ['delivery', 'delays', 'timeline', 'unreliable', 'pattern'],
  },
  {
    id: 'supplier-quality-issues',
    recipient: 'supplier',
    situation: 'Supplier quality has been declining steadily',
    category: 'suppliers',
    tone: 4,
    length: 'medium',
    subject: 'Quality Assurance - An Observation',
    body: `Hi Frank,

I wanted to share some observations about recent shipments. I've noticed a fascinating trend in our quality data:

January: 2% defect rate ✓
February: 5% defect rate 
March: 12% defect rate
April: 23% defect rate

If I extrapolate this curve, by July we'll be receiving boxes of pure defects with a small sprinkling of usable product. It's like a reverse quality improvement program!

I know these conversations aren't fun, but I'd love to understand what's changed on your end. New staff? New materials? New approach to quality control that involves closing your eyes and hoping for the best?

We value this partnership and would love to see us trend back toward the January numbers. Can we schedule a call to discuss corrective actions?

Thank you`,
    aggressionScore: 60,
    damageAssessment: 'Supplier aware of documented decline, opportunity to correct before escalation',
    corporateTranslation: {
      whatYouMean: 'Your quality has gone from acceptable to garbage in four months. Fix it now.',
      corporateVersion: 'I\'d like to collaborate on a quality improvement initiative based on some trending data I\'ve observed.',
    },
    tags: ['quality', 'decline', 'defects', 'data', 'corrective-action'],
  },
  {
    id: 'supplier-price-increase-again',
    recipient: 'supplier',
    situation: 'Supplier raising prices again after already raising them twice this year',
    category: 'suppliers',
    tone: 5,
    length: 'medium',
    subject: 'Re: 2024 Pricing Adjustment (The Third One)',
    body: `Hi Angela,

Wonderful news — another price increase! That makes three this year, and it's only July. At this rate, by December I'll need to take out a mortgage to order paper clips.

Let me just review the narrative:
- January: "Due to market conditions" — 8% increase
- April: "Supply chain challenges" — 12% increase
- Today: "Continued cost pressures" — 10% increase

That's a cumulative 33% increase in 7 months. Meanwhile, your product hasn't changed, improved, or even arrived on time (see my previous emails about delivery issues).

I appreciate that costs rise, but I'm now gathering quotes from alternative suppliers. Not as a threat — just as responsible business planning. I'm sure you understand.

Would you like to discuss volume discount options, or shall I proceed with my research?

Regards`,
    aggressionScore: 70,
    damageAssessment: 'Supplier given clear warning that contract is at risk',
    corporateTranslation: {
      whatYouMean: 'Three price hikes in seven months is absurd and I\'m looking at your competitors.',
      corporateVersion: 'I want to ensure our partnership remains competitive. Could we explore pricing structures that reflect our long-term commitment?',
    },
    tags: ['pricing', 'increase', 'competition', 'negotiation', 'budget'],
  },
  {
    id: 'supplier-no-communication',
    recipient: 'supplier',
    situation: 'Supplier goes silent for weeks with no order update',
    category: 'suppliers',
    tone: 4,
    length: 'short',
    subject: 'Wellness Check - Are You Still a Company?',
    body: `Hi team,

I'm reaching out because we placed an order 3 weeks ago and have received:
- 0 confirmation emails
- 0 shipping updates
- 0 responses to my 4 follow-up emails
- 0 answers to my 2 phone calls

I'm starting to worry. Has your company been absorbed into a black hole? Did everyone go on vacation simultaneously? Is this an elaborate social experiment?

Please confirm that (a) you exist, (b) our order exists, and (c) these two things will eventually intersect in the form of a delivery.

Any sign of life would be appreciated.

Hopefully yours`,
    aggressionScore: 58,
    damageAssessment: 'Humorous enough to get a response without burning bridges',
    corporateTranslation: {
      whatYouMean: 'ANSWER YOUR EMAILS. Where is my order?!',
      corporateVersion: 'I\'d like a status update on PO #4521 to ensure alignment with our operational timeline.',
    },
    tags: ['no-response', 'ghosting', 'order-status', 'communication'],
  },
  {
    id: 'supplier-hidden-fees',
    recipient: 'supplier',
    situation: 'Supplier invoice has mysterious additional charges not in quote',
    category: 'invoices',
    tone: 5,
    length: 'medium',
    subject: 'Re: Invoice #8834 - Some Creative Line Items',
    body: `Hi Robert,

I received your invoice and noticed a few line items that weren't part of our original quote. Let me address them:

- "Processing fee" — $450 (Processing what? Feelings?)
- "Handling surcharge" — $200 (You handled the items? As opposed to what, telekinesis?)
- "Administrative overhead" — $375 (Administrating what, exactly?)
- "Convenience charge" — $150 (Convenient for whom?)

That's $1,175 in mystery fees on top of the agreed $8,000. Nowhere in our signed agreement, purchase order, or the 14 emails confirming pricing do these appear.

I'll be processing payment for the agreed amount of $8,000. If you'd like to discuss why your company requires $1,175 to perform basic business functions (processing, handling, administrating, and being convenient), I'm all ears.

Best regards`,
    aggressionScore: 75,
    damageAssessment: 'Supplier caught padding invoice — fees will likely be waived',
    corporateTranslation: {
      whatYouMean: 'These fees are made up and we both know it. I\'m not paying them.',
      corporateVersion: 'I\'d like to reconcile some discrepancies between our agreed pricing and the current invoice.',
    },
    tags: ['hidden-fees', 'invoice', 'padding', 'unauthorized-charges'],
  },
  {
    id: 'supplier-different-rep-every-time',
    recipient: 'supplier',
    situation: 'Different account rep every time you call with no context',
    category: 'suppliers',
    tone: 3,
    length: 'short',
    subject: 'Account Continuity Request',
    body: `Hi team,

Quick question: is there one specific person assigned to our account, or do you operate on a "whoever answers the phone" system?

In the past month, I've explained our situation to: Mark, Lisa, Darren, someone named "probably Kevin," and today's delightful mystery representative who asked me to "start from the beginning."

I would love to not start from the beginning. I've started from the beginning six times. I could recite our account history in my sleep at this point.

Could we get an assigned account manager? Or at the very least, could people there read the notes from previous calls?

Hopeful but realistic,
Thanks`,
    aggressionScore: 45,
    damageAssessment: 'Supplier aware of service gap without personal attack',
    corporateTranslation: {
      whatYouMean: 'I am so tired of explaining myself to a new person every single time I call.',
      corporateVersion: 'I\'d like to discuss account management structure to improve our communication efficiency.',
    },
    tags: ['account-management', 'continuity', 'support', 'frustration'],
  },
  {
    id: 'supplier-partial-shipment-no-warning',
    recipient: 'supplier',
    situation: 'Supplier sent partial shipment without warning, billed for full order',
    category: 'suppliers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Shipment Received - The Invisible Half',
    body: `Hi team,

Great news! Your shipment arrived today. Well, approximately half of it did. The other half is presumably still at your warehouse, enjoying a vacation it didn't tell us about.

What's particularly creative is that you invoiced us for the FULL order. So we've paid for 1,000 units and received 500. That's a fascinating business model — I wonder if I can apply the same principle to my rent.

To summarize what I need:
1. The remaining 500 units delivered by Friday
2. A credit note for the difference until delivery is complete
3. An explanation of why partial shipment wasn't communicated in advance

I know surprises are fun at birthday parties, but in procurement, we generally prefer to know what's coming and when.

Regards`,
    aggressionScore: 68,
    damageAssessment: 'Supplier caught in billing/fulfillment discrepancy with clear documentation',
    corporateTranslation: {
      whatYouMean: 'You sent half my order and charged for all of it. This is unacceptable.',
      corporateVersion: 'I\'d like to resolve a discrepancy between our order, the delivered quantity, and the associated invoice.',
    },
    tags: ['partial-shipment', 'billing', 'communication', 'expectations'],
  },
  {
    id: 'supplier-outdated-product',
    recipient: 'supplier',
    situation: 'Supplier shipped discontinued/outdated version of product',
    category: 'suppliers',
    tone: 4,
    length: 'short',
    subject: 'Re: Order Received - From Which Decade?',
    body: `Hi Lisa,

We received today's shipment and I have some exciting archaeological news: you've sent us the 2019 version of the product. We ordered the 2024 version. Specifically. In writing. With the model number clearly stated.

I'm guessing these were found in the back of a warehouse somewhere, gathering dust and stories about a simpler time before the pandemic.

Unfortunately, we need the current version — the one that's actually compatible with modern systems and, you know, available to customers who read your catalog.

Could you arrange a swap? I'll have the museum pieces ready for return pickup.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Supplier embarrassed but given graceful path to correction',
    corporateTranslation: {
      whatYouMean: 'You sent us obsolete product. Do you even read purchase orders?',
      corporateVersion: 'I believe there was a version mismatch with our recent order. Could we arrange a replacement?',
    },
    tags: ['wrong-version', 'outdated', 'fulfillment-error', 'swap'],
  },
  {
    id: 'supplier-minimum-order-absurd',
    recipient: 'supplier',
    situation: 'Supplier suddenly imposes unreasonably high minimum order quantity',
    category: 'suppliers',
    tone: 4,
    length: 'medium',
    subject: 'Re: New Minimum Order Policy - A Few Questions',
    body: `Hi James,

Thank you for informing us about your new minimum order quantity of 10,000 units. That's quite the jump from our usual orders of 200-500 units.

A few questions:
1. Do you think I run a warehouse the size of an aircraft hangar?
2. Is this policy designed for companies that are... larger than they are?
3. Where would you suggest I store 9,500 units of surplus inventory? My apartment?

I've been a loyal customer for 4 years ordering consistently at our current volume. If this policy stands, I'll need to find a supplier who acknowledges that not every business is Amazon.

Could we discuss a more reasonable minimum that reflects our actual needs and our history together?

Best`,
    aggressionScore: 58,
    damageAssessment: 'Supplier aware of potential customer loss due to unreasonable policy',
    corporateTranslation: {
      whatYouMean: 'Your new minimum is absurd for a business our size. Change it or lose us.',
      corporateVersion: 'I\'d like to discuss minimum order flexibility given our long-standing partnership and consistent order history.',
    },
    tags: ['minimum-order', 'policy-change', 'unreasonable', 'loyalty'],
  },
];
