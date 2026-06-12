import { Scenario } from './types';

export const freelancerScenarios: Scenario[] = [
  {
    id: 'freelancer-vanished-mid-project',
    recipient: 'freelancer',
    situation: 'Freelancer disappeared mid-project without warning',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Project Status? (Day 14 of Silence)',
    body: `Hi Alex,

It's been 14 days since your last communication. The project is approximately 60% complete, our deadline is in 5 days, and you have vanished like a developer into a vim terminal with no exit strategy.

I've tried:
- 6 emails (read receipts show you opened 4 of them)
- 3 Slack messages (you were "active" on Tuesday)
- 1 LinkedIn message (desperate times)
- Briefly considered a private investigator (partially joking)

I need one of two things from you within 24 hours:
1. A status update and confirmation you'll deliver by Friday
2. All project files, credentials, and work-in-progress so I can engage someone else

Silence is not an option anymore. Please respond.

Regards`,
    aggressionScore: 72,
    damageAssessment: 'Freelancer given firm ultimatum with documented attempts to reach them',
    corporateTranslation: {
      whatYouMean: 'WHERE ARE YOU? I can see you\'re reading these. Respond or I\'m finding someone else.',
      corporateVersion: 'I need to assess project continuity and determine next steps given the communication gap.',
    },
    tags: ['ghosting', 'mid-project', 'deadline', 'ultimatum', 'silence'],
  },
  {
    id: 'freelancer-delivered-different-thing',
    recipient: 'freelancer',
    situation: 'Freelancer delivered something completely different from what was briefed',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Deliverable Received - Is This the Right Project?',
    body: `Hi Jordan,

I received your deliverable and... I have questions.

We briefed: A minimalist landing page for a B2B SaaS product, dark theme, professional tone.
You delivered: A colorful e-commerce template with a cartoon mascot and "Shop Now!" buttons.

I've double-checked the brief (attached), the mood board (attached), the reference sites (attached), and our call recording (available upon request). At no point did anyone mention shopping carts or cartoon animals.

Did you perhaps send me another client's project? That would be the charitable interpretation, and I'm choosing to go with it.

Could you deliver the correct project by Wednesday? The one in the brief we discussed for 45 minutes?

Thanks`,
    aggressionScore: 70,
    damageAssessment: 'Freelancer embarrassed but given benefit of doubt (briefly)',
    corporateTranslation: {
      whatYouMean: 'This is wrong. Completely wrong. Did you even read the brief?',
      corporateVersion: 'I\'d like to flag a significant misalignment between the brief and the delivered asset.',
    },
    tags: ['wrong-deliverable', 'brief', 'misalignment', 'confusion'],
  },
  {
    id: 'freelancer-quality-nosedive',
    recipient: 'freelancer',
    situation: 'Freelancer\'s quality dropped significantly after securing the contract',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Quality Discussion - Portfolio vs. Reality',
    body: `Hi Nina,

I wanted to have an honest conversation about the recent deliverables. When we hired you, your portfolio showed meticulous, award-winning work. What we've been receiving is... different.

A comparison:
- Portfolio piece: Pixel-perfect, thoughtful typography, masterful spacing
- Our deliverables: Misaligned elements, Comic Sans (was this ironic?), exported at 72 DPI

It's like hiring a Michelin-star chef and receiving microwave meals. Both are technically "food," but the resemblance ends there.

I want to be fair: is something going on? Are you overloaded? Burning out? Using an intern? Because the work that sold us and the work we're receiving appear to be from different planets.

Let's discuss how to get back to portfolio quality. We're paying portfolio rates.

Best`,
    aggressionScore: 62,
    damageAssessment: 'Freelancer confronted but given chance to explain or correct',
    corporateTranslation: {
      whatYouMean: 'The work you showed us was amazing. The work you\'re giving us is terrible. What happened?',
      corporateVersion: 'I\'d like to align expectations around quality standards based on the caliber demonstrated in our initial evaluation.',
    },
    tags: ['quality-drop', 'portfolio', 'bait-and-switch', 'standards'],
  },
  {
    id: 'freelancer-overcharging-hours',
    recipient: 'freelancer',
    situation: 'Freelancer logging suspicious number of hours for simple tasks',
    category: 'invoices',
    tone: 5,
    length: 'medium',
    subject: 'Timesheet Review - Some Questions About Math',
    body: `Hi Patrick,

I'm reviewing this month's timesheet and have some questions:

- "Update button color": 8 hours
- "Fix typo on homepage": 4 hours
- "Add email to footer": 6 hours
- "Resize logo": 3 hours

For context, I just changed a button color on another project. It took 4 minutes. And the typo fix — are we talking about a typo, or rewriting War and Peace?

I'm not suggesting anything nefarious! Maybe your workflow involves extensive meditation before each CSS change. Or perhaps there's context I'm missing, like the button was trapped in a nested dependency matrix that required archaeology to access.

Could you provide a brief breakdown of what each task entailed? I want to understand the complexity I might be overlooking.

Thanks`,
    aggressionScore: 70,
    damageAssessment: 'Freelancer caught padding hours. Will need to justify or reduce invoice.',
    corporateTranslation: {
      whatYouMean: '8 hours to change a button color? You\'re either incompetent or padding your invoice.',
      corporateVersion: 'I\'d like to review time allocations against task complexity to ensure we\'re estimating effectively.',
    },
    tags: ['time-padding', 'overcharging', 'timesheet', 'accountability', 'hours'],
  },
  {
    id: 'freelancer-no-revisions-policy',
    recipient: 'freelancer',
    situation: 'Freelancer refuses to make any revisions at all',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: "No Revisions" Policy - A Concern',
    body: `Hi Drake,

I received your response that the deliverable is "final and no revisions will be made." Interesting stance!

A few thoughts:
1. Our contract includes 2 rounds of revisions
2. The deliverable has 3 factual errors, a misspelled company name, and a broken link
3. These aren't "revisions" so much as "corrections to make the thing functional"

I'm not asking you to redesign it. I'm asking you to spell our company name correctly. It's in the email signature. Right there. You can see it.

Please make the corrections outlined in my previous email. Per our contract. Which you signed.

Thanks`,
    aggressionScore: 65,
    damageAssessment: 'Freelancer\'s refusal met with contract evidence. Must comply.',
    corporateTranslation: {
      whatYouMean: 'Fix your mistakes. This isn\'t optional. You literally spelled our name wrong.',
      corporateVersion: 'I want to reference our agreement regarding revision rounds to ensure the final deliverable meets baseline quality.',
    },
    tags: ['revisions', 'contract', 'errors', 'quality', 'corrections'],
  },
  {
    id: 'freelancer-subcontracted-secretly',
    recipient: 'freelancer',
    situation: 'Freelancer secretly subcontracted the work to someone less qualified',
    category: 'clients',
    tone: 6,
    length: 'medium',
    subject: 'Re: Deliverable - A Question About Authorship',
    body: `Hi Melissa,

Interesting situation. The document you delivered has metadata showing it was created by "Rajesh_Fiverr2023." The code commits are from a GitHub account called "cheapcodefast." And the design files list a different Adobe Creative Cloud user entirely.

Now, I hired YOU — specifically because of YOUR portfolio, YOUR experience, and YOUR hourly rate of $150/hour. If the work is being done by someone else, I have questions:

1. Who actually did this work?
2. What are they being paid? (I suspect less than $150/hour)
3. Why am I paying premium rates for outsourced work?

This is a breach of our agreement (Section 2: no subcontracting without written approval). We need to discuss this immediately.

If you've been outsourcing our project, we'll need to have a very different conversation about our engagement going forward.

Regards`,
    aggressionScore: 90,
    damageAssessment: 'Freelancer caught in deception. Relationship likely over. Legal options open.',
    corporateTranslation: {
      whatYouMean: 'You outsourced my project to someone on Fiverr while charging me premium rates. You are a fraud.',
      corporateVersion: 'I\'d like to discuss some inconsistencies in the deliverable authorship that raise questions about our subcontracting clause.',
    },
    tags: ['subcontracting', 'deception', 'outsourcing', 'breach', 'nuclear'],
  },
  {
    id: 'freelancer-invoice-before-delivery',
    recipient: 'freelancer',
    situation: 'Freelancer sends invoice before completing the work',
    category: 'invoices',
    tone: 4,
    length: 'short',
    subject: 'Re: Invoice Received - But Where\'s the Work?',
    body: `Hi Connor,

Thank you for the invoice! Very efficient of you. Quick question: where's the deliverable it's for?

Our agreement is payment upon delivery. The delivery was due yesterday. The delivery has not arrived. But the invoice has! The invoice is very punctual. I wish the work shared its enthusiasm for deadlines.

I'd love to pay this invoice! I'm genuinely excited to pay it. But I'd like to receive the thing I'm paying for first. Call me old-fashioned, but I find this sequence (receive goods → pay for goods) works best for both parties.

Deliverable first, then payment. In that order. Every time.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Freelancer gently reminded that payment follows delivery, not precedes it',
    corporateTranslation: {
      whatYouMean: 'You invoiced me before delivering anything. That\'s not how this works.',
      corporateVersion: 'I want to align our invoicing schedule with our agreed payment milestones.',
    },
    tags: ['invoice-before-delivery', 'payment-terms', 'deliverable', 'sequence'],
  },
  {
    id: 'freelancer-scope-creep-reverse',
    recipient: 'freelancer',
    situation: 'Freelancer delivers less than agreed scope and claims it\'s complete',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: "Project Complete!" - A Checklist Review',
    body: `Hi Samantha,

Congratulations on completing the project! Or rather, on completing approximately 60% of it and calling it done. Bold strategy!

Let me compare your "complete" delivery against our agreed scope:

✅ Homepage design — Done
✅ About page — Done  
✅ Contact form — Done
❌ Blog section — Missing
❌ Portfolio page — Missing
❌ E-commerce integration — Missing
❌ Mobile responsive design — It... kind of works? On one phone? Sideways?

The last three items represent about 40% of the project scope and, coincidentally, 40% of the budget. So either we're not done, or I'm overpaying by 40%.

Which of these two interpretations would you prefer to discuss?

Looking forward to the ACTUAL completion!`,
    aggressionScore: 72,
    damageAssessment: 'Freelancer caught delivering incomplete work with clear documentation',
    corporateTranslation: {
      whatYouMean: 'This is not done. You skipped 40% of the work. Finish it.',
      corporateVersion: 'I\'d like to reconcile the delivered scope against our agreement to identify remaining items.',
    },
    tags: ['incomplete', 'scope', 'checklist', 'delivery', 'accountability'],
  },
  {
    id: 'freelancer-communication-one-word',
    recipient: 'freelancer',
    situation: 'Freelancer responds with one-word answers to detailed questions',
    category: 'clients',
    tone: 3,
    length: 'short',
    subject: 'Re: Project Questions - Could Use a Bit More Detail',
    body: `Hi Marcus,

Thank you for your responses to my 5 detailed questions:

My question: "What's the status of the database migration, and are there any blockers?"
Your answer: "Fine."

My question: "Can you walk me through your approach to the API authentication?"
Your answer: "Sure."

My question: "When do you expect to have the test suite completed?"
Your answer: "Soon."

I appreciate the brevity! But I need actual information. "Fine," "Sure," and "Soon" don't help me plan, report to stakeholders, or understand what's happening.

Could you try full sentences? Maybe even two of them? I believe in you.

Thanks`,
    aggressionScore: 45,
    damageAssessment: 'Freelancer humorously prodded to communicate with actual substance',
    corporateTranslation: {
      whatYouMean: 'Your one-word answers are useless. Give me real information.',
      corporateVersion: 'I need more detailed status updates to maintain project visibility with stakeholders.',
    },
    tags: ['communication', 'one-word', 'brevity', 'information', 'updates'],
  },
  {
    id: 'freelancer-availability-mismatch',
    recipient: 'freelancer',
    situation: 'Freelancer said they were full-time available but clearly isn\'t',
    category: 'deadlines',
    tone: 4,
    length: 'medium',
    subject: 'Re: Availability Discussion - "Full-Time" Definition',
    body: `Hi Rachel,

When we discussed availability, you mentioned being "full-time dedicated" to our project. I'd love to explore what "full-time" means to you, because our definitions may differ:

My definition: ~40 hours/week focused on our project
Your apparent definition: ~8 hours/week, usually Tuesdays

Evidence:
- Average response time: 2-3 days
- Available for calls: Only Tuesday/Thursday afternoons
- Commits in the repository: Exclusively between 11 PM - 2 AM on random nights
- Progress rate: Consistent with ~2 hours/day maximum

I don't mind if you have other commitments! But I need you to be honest about your capacity so I can plan accordingly. Our timeline was built around 40 hours/week. At 8 hours/week, we'll deliver in approximately 5 months instead of 5 weeks.

Can we discuss realistic availability?

Best`,
    aggressionScore: 62,
    damageAssessment: 'Freelancer confronted with evidence of limited availability claims',
    corporateTranslation: {
      whatYouMean: 'You said full-time but you\'re clearly working 2 hours a day max. Be honest.',
      corporateVersion: 'I want to recalibrate our timeline based on realistic capacity allocation to set appropriate expectations.',
    },
    tags: ['availability', 'full-time', 'deception', 'capacity', 'timeline'],
  },
];
