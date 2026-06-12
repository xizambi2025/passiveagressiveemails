import { Scenario } from './types';

export const deadlineScenarios: Scenario[] = [
  {
    id: 'deadline-freelancer-fourth-miss',
    recipient: 'freelancer',
    situation: 'Freelancer missed deadline for the 4th time',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: Running a Bit Behind (Deadline #4)',
    body: `Hi Tyler,

I hope you're well! I received your "running a bit behind" message, which at this point feels less like a notification and more like a catchphrase. You should trademark it!

Let's review our timeline together:
- Deadline 1 (March 1): Missed by 5 days — "family emergency"
- Deadline 2 (March 20): Missed by 8 days — "computer issues"
- Deadline 3 (April 10): Missed by 12 days — "scope was bigger than expected"
- Deadline 4 (May 1): Currently 6 days late — "running a bit behind"

I'm noticing a pattern where deadlines are treated as optimistic suggestions rather than commitments. This is a creative interpretation of the word "deadline" that I hadn't previously considered.

I need the deliverables by Friday EOD or I'll need to bring in someone else to complete the work. This is not a soft deadline, a flexible deadline, or a "deadline." It's a deadline.

Please confirm.

Regards`,
    aggressionScore: 75,
    damageAssessment: 'Freelancer given final warning with documented pattern',
    corporateTranslation: {
      whatYouMean: 'You\'ve missed four deadlines. Deliver by Friday or you\'re fired.',
      corporateVersion: 'I want to align on a firm delivery commitment to ensure project continuity. Please confirm feasibility.',
    },
    tags: ['missed-deadline', 'freelancer', 'pattern', 'final-warning', 'accountability'],
  },
  {
    id: 'deadline-employee-always-extension',
    recipient: 'employee',
    situation: 'Employee always asks for deadline extension at the last minute',
    category: 'deadlines',
    tone: 4,
    length: 'short',
    subject: 'Re: Extension Request - Pattern Recognition',
    body: `Hi James,

I received your extension request! This makes it 7 out of 7 projects where you've requested more time on the final day. That's a perfect score! Consistency like that takes real commitment.

I have a thought: what if we built the extension into the original deadline? Instead of "due Friday" becoming "actually due Wednesday the following week," we could just say "due Wednesday" and skip the middle step.

Or — and hear me out — we could try meeting the original deadline? I hear some people do this. They seem relaxed.

Let me know which approach works for you going forward.

Best`,
    aggressionScore: 58,
    damageAssessment: 'Employee confronted with pattern humorously — may self-correct',
    corporateTranslation: {
      whatYouMean: 'You always ask for extensions. At this point, your deadlines are meaningless.',
      corporateVersion: 'I\'d like to discuss timeline planning strategies to support more consistent on-time delivery.',
    },
    tags: ['extension', 'pattern', 'last-minute', 'accountability', 'planning'],
  },
  {
    id: 'deadline-moving-goalposts',
    recipient: 'manager',
    situation: 'Manager keeps adding requirements but not extending deadline',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: One More Thing (The 8th "One More Thing")',
    body: `Hi Sandra,

Of course! I'd love to add real-time analytics, a customer portal, and multi-language support to the project. These are great features!

Quick math:
- Original scope: 4 features, 3-week deadline ✓
- Current scope: 12 features, still 3-week deadline... ?

I want to make sure I understand: are we extending the deadline proportionally (to ~9 weeks), or am I expected to bend the laws of time and space to deliver 3x the work in the same period?

For reference, I have a "project scope vs. time" chart attached. The scope line is going up at 45 degrees. The deadline line is horizontal. These two things cannot coexist in reality.

Which would you like to adjust — scope, timeline, or my understanding of physics?

Let me know!`,
    aggressionScore: 72,
    damageAssessment: 'Manager forced to acknowledge scope/time trade-off',
    corporateTranslation: {
      whatYouMean: 'You keep adding work without adding time. That\'s not how projects work.',
      corporateVersion: 'I want to ensure we\'re aligned on the scope-timeline trade-off for this engagement.',
    },
    tags: ['scope-creep', 'moving-goalposts', 'unrealistic', 'trade-offs'],
  },
  {
    id: 'deadline-promised-without-asking',
    recipient: 'manager',
    situation: 'Someone promised a client your deliverable by tomorrow without telling you',
    category: 'deadlines',
    tone: 6,
    length: 'medium',
    subject: 'Re: Client Expects Report Tomorrow? News to Me!',
    body: `Hi Michael,

Fascinating! I just learned from the client that they're expecting the full market analysis report by 9 AM tomorrow. This is particularly interesting because:

1. No one told me about this deadline
2. The report doesn't exist yet
3. It typically takes 2 weeks to create
4. It's currently 4 PM

I'm trying to figure out the thought process: "Let's promise the client a 2-week deliverable overnight and not tell the person who makes it." Was this a dare? A bet? A fever dream that accidentally became a commitment?

I will not be delivering this report tomorrow. I can deliver it in 2 weeks, which is when I would have delivered it had anyone thought to, you know, ASK ME.

I'll leave it to you to manage the client's expectations — since you're the one who set them.

Best of luck`,
    aggressionScore: 88,
    damageAssessment: 'Nuclear but justified. Manager must own the mess they created.',
    corporateTranslation: {
      whatYouMean: 'You promised my work to a client without telling me. Fix it yourself.',
      corporateVersion: 'I want to flag a timeline misalignment so we can course-correct with the client proactively.',
    },
    tags: ['no-consultation', 'impossible-deadline', 'blame', 'client-promise'],
  },
  {
    id: 'deadline-delivered-on-time-no-review',
    recipient: 'manager',
    situation: 'You delivered on time but manager took 3 weeks to review it',
    category: 'deadlines',
    tone: 4,
    length: 'short',
    subject: 'Gentle Reminder - Deliverable Awaiting Review (Day 21)',
    body: `Hi Jennifer,

Three weeks ago, I delivered the Q3 strategy document ahead of deadline (March 1, due March 5 — I was early! A rare and beautiful thing).

It's now March 22 and the document sits unreviewed. I mention this not to nag, but because you mentioned "timeline concerns" in yesterday's all-hands about this very project.

The timeline concern is not me. The timeline concern is sitting in your inbox, aging like fine wine. Or like milk. Depending on how much longer it sits there.

Would love your feedback when you get a chance!

Thanks`,
    aggressionScore: 55,
    damageAssessment: 'Manager aware they are the bottleneck, documented gently',
    corporateTranslation: {
      whatYouMean: 'I delivered on time. YOU are the reason this is delayed. Don\'t blame me.',
      corporateVersion: 'I want to flag that the deliverable is awaiting your review to keep the project on track.',
    },
    tags: ['waiting', 'review', 'bottleneck', 'on-time', 'delay'],
  },
  {
    id: 'deadline-artificial-urgency',
    recipient: 'manager',
    situation: 'Manager creates artificial urgency for something not actually urgent',
    category: 'deadlines',
    tone: 3,
    length: 'short',
    subject: 'Re: ASAP - Internal Newsletter Font Choice',
    body: `Hi Paul,

I received your "ASAP" request regarding the font choice for next month's internal newsletter. Just to make sure I'm prioritizing correctly:

- The newsletter goes out in 4 weeks
- The font choice affects a newsletter that 12 people read
- You've marked this as higher priority than the client deliverable due Thursday

Is this correct? I want to make sure I'm not misreading the urgency here. Because if choosing between Helvetica and Arial is truly more urgent than our largest client's deadline, I want that in writing for when questions arise.

Happy to help with fonts once the client work is shipped!

Best`,
    aggressionScore: 48,
    damageAssessment: 'Manager may reconsider what qualifies as urgent',
    corporateTranslation: {
      whatYouMean: 'This is not urgent. A font for a newsletter nobody reads is not urgent.',
      corporateVersion: 'I want to align on prioritization to ensure critical-path items receive appropriate focus.',
    },
    tags: ['false-urgency', 'priorities', 'perspective', 'newsletter'],
  },
  {
    id: 'deadline-weekend-heroics-expected',
    recipient: 'manager',
    situation: 'Team expected to work weekends to meet deadline that was poorly planned',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: Weekend Work Required - Some Context',
    body: `Hi Brian,

I received the message that the team needs to work this weekend to meet Monday's deadline. I want to provide some context on how we arrived here:

- Week 1: Deadline was raised as aggressive. Response: "We'll make it work!"
- Week 2: Team flagged we were behind. Response: "Let's push harder!"
- Week 3: Formal risk escalation. Response: "I have faith in the team!"
- Week 4 (now): "Everyone needs to work the weekend."

I want to be transparent: I flagged this timeline concern four weeks ago (email attached, dated April 3). The weekend crunch isn't because the team was slow — it's because the plan was unrealistic and feedback was ignored.

I'll work this weekend because I'm committed to the project. But I'd like to discuss how we avoid the "ignore warning signs then panic" cycle for future projects.

Available for that chat Monday — after I've recovered.

Best`,
    aggressionScore: 78,
    damageAssessment: 'Manager confronted with their own planning failure with receipts',
    corporateTranslation: {
      whatYouMean: 'This is YOUR fault for ignoring our warnings. But fine, I\'ll sacrifice my weekend.',
      corporateVersion: 'I want to conduct a retrospective on our planning process to prevent future crunch situations.',
    },
    tags: ['weekend-work', 'crunch', 'planning-failure', 'receipts', 'burnout'],
  },
  {
    id: 'deadline-freelancer-ghosting',
    recipient: 'freelancer',
    situation: 'Freelancer went silent right before deadline',
    category: 'deadlines',
    tone: 5,
    length: 'short',
    subject: 'Are You Alive? (Deadline Was Yesterday)',
    body: `Hi Sam,

Quick wellness check! Our deadline was yesterday, and you've been unreachable for 5 days now. No emails, no Slack, no smoke signals.

I'm choosing to believe something dramatic happened — perhaps alien abduction or spontaneous witness protection enrollment — because the alternative (that you just disappeared on a deadline) would be professionally concerning.

If you ARE alive and able to respond: I need the deliverables by 5 PM today or I'm engaging another contractor to complete the work. Any outstanding payment will be adjusted accordingly.

If you're NOT alive: my condolences and I hope the afterlife has better WiFi.

Please respond.`,
    aggressionScore: 72,
    damageAssessment: 'Freelancer given clear ultimatum with consequences',
    corporateTranslation: {
      whatYouMean: 'Where are you?! You\'ve ghosted me on a deadline. Respond NOW or you\'re replaced.',
      corporateVersion: 'I need to confirm project status urgently to maintain our delivery commitments.',
    },
    tags: ['ghosting', 'no-response', 'deadline', 'replacement', 'accountability'],
  },
  {
    id: 'deadline-scope-done-wants-more',
    recipient: 'client',
    situation: 'Delivered everything on time but client says it\'s "not done" because they want more',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: "Not Complete" - A Respectful Disagreement',
    body: `Hi Patricia,

I received your email stating the project is "not complete." I'd like to respectfully present an alternative perspective: it is, in fact, extremely complete.

Here's our agreed scope document (attached). And here's what was delivered:
✅ Item 1 - Delivered March 3
✅ Item 2 - Delivered March 5
✅ Item 3 - Delivered March 8
✅ Item 4 - Delivered March 10
✅ Item 5 - Delivered March 12 (ahead of schedule!)

100% of agreed items delivered. 100% on time. That's what "complete" means in most dictionaries.

What you're describing as "not complete" is actually "additional work not included in our agreement." These are different concepts! The first one is done. The second one requires a new quote.

Shall I send a proposal for Phase 2?

Best`,
    aggressionScore: 74,
    damageAssessment: 'Client confronted with clear documentation of completed scope',
    corporateTranslation: {
      whatYouMean: 'I delivered everything we agreed on. You wanting more doesn\'t make the project incomplete.',
      corporateVersion: 'I\'d like to clarify scope boundaries to determine what falls under our current agreement versus a new engagement.',
    },
    tags: ['scope', 'complete', 'additional-work', 'documentation', 'boundaries'],
  },
  {
    id: 'deadline-double-standards',
    recipient: 'manager',
    situation: 'Manager has no deadline flexibility for you but always extends for others',
    category: 'deadlines',
    tone: 5,
    length: 'short',
    subject: 'Re: Deadline Policy - A Consistency Question',
    body: `Hi Karen,

Thank you for denying my one-day extension request for the quarterly report! I completely understand that "deadlines are deadlines."

I'm curious though: when Tom got a two-week extension last month, was that a different type of deadline? And when Marketing moved their deliverable by three weeks — was that a "soft deadline"? Is there a taxonomy I'm not aware of?

I just want to make sure I'm operating under the same rules as everyone else. If my deadlines are uniquely inflexible, I'd love to understand why so I can plan accordingly.

Happy to discuss!

Best`,
    aggressionScore: 70,
    damageAssessment: 'Manager confronted with visible inconsistency in standards',
    corporateTranslation: {
      whatYouMean: 'You give everyone else flexibility but not me. That\'s unfair and I\'ve noticed.',
      corporateVersion: 'I want to understand our deadline flexibility policy to ensure equitable treatment across the team.',
    },
    tags: ['double-standards', 'fairness', 'inconsistency', 'favoritism'],
  },
];
