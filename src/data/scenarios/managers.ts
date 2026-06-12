import { Scenario } from './types';

export const managerScenarios: Scenario[] = [
  {
    id: 'manager-lunch-meetings',
    recipient: 'manager',
    situation: 'Manager schedules meetings during lunch every day',
    category: 'meetings',
    tone: 4,
    length: 'medium',
    subject: 'Quick Question About Tomorrow\'s Lunch Meeting',
    body: `Hi Karen,

I noticed tomorrow's "Quick Sync" is scheduled for 12:00-1:00 PM — the same slot as Monday's, Tuesday's, Wednesday's, and today's meetings. What a fun pattern!

I wanted to check if this is intentional, or if your calendar might have a recurring event that's possessed by a demon that hates lunch breaks.

If it IS intentional, could I suggest we explore some alternative times? I've heard rumors that other teams occasionally eat food during that hour, and I'd love to participate in that cultural tradition.

I've blocked 12-1 PM going forward as "Biological Necessities" — I hope that's descriptive enough.

Thanks for understanding!`,
    aggressionScore: 58,
    damageAssessment: 'Manager made aware of pattern without direct confrontation',
    corporateTranslation: {
      whatYouMean: 'I need to eat food to survive. Stop booking every single lunch hour.',
      corporateVersion: 'I want to discuss meeting scheduling optimization to ensure the team maintains peak performance throughout the day.',
    },
    tags: ['lunch', 'meetings', 'scheduling', 'boundaries', 'recurring'],
  },
  {
    id: 'manager-micromanaging',
    recipient: 'manager',
    situation: 'Manager asks for hourly status updates',
    category: 'managers',
    tone: 4,
    length: 'medium',
    subject: 'Re: 3 PM Status Update Request',
    body: `Hi David,

Here's my 3 PM update as requested:

3:00 PM - Wrote this status update
2:45 PM - Began preparing to write this status update
2:30 PM - Finished writing my 2:30 PM status update
2:15 PM - Did 12 minutes of actual work before preparing the 2:30 status update
2:00 PM - Wrote the 2:00 PM status update

I'm starting to notice that approximately 60% of my day is spent documenting what I'm doing for the other 40% of the day. It's a fascinating productivity paradox!

Would you be open to switching to daily end-of-day summaries? I have a hunch my output might improve if I spent more time working and less time writing about working.

Happy to discuss!

Best`,
    aggressionScore: 65,
    damageAssessment: 'Manager confronted with absurdity of own request through compliance',
    corporateTranslation: {
      whatYouMean: 'Your constant check-ins are why I can\'t get anything done. Trust me or fire me.',
      corporateVersion: 'I\'d like to propose a reporting cadence that maximizes both transparency and productive output.',
    },
    tags: ['micromanaging', 'status-updates', 'trust', 'productivity'],
  },
  {
    id: 'manager-friday-5pm-request',
    recipient: 'manager',
    situation: 'Manager sends urgent request at 5 PM on Friday',
    category: 'deadlines',
    tone: 4,
    length: 'short',
    subject: 'Re: Need This By Monday Morning (Sent Friday 5:02 PM)',
    body: `Hi Steve,

Got your message! Just to clarify the timeline:

You sent this at 5:02 PM on Friday. "Monday morning" is approximately 63 hours away, but only about 16 of those are working hours (if we don't count the weekend, which is a fascinating concept you may want to research).

This looks like approximately 12 hours of work. I have two options for you:

1. I deliver this Tuesday EOD during my normal working hours
2. I work this weekend at overtime rates (1.5x), pre-approved in writing

Which would you prefer? I'm easy either way — well, "easy" is perhaps the wrong word for option 2.

Have a great weekend!`,
    aggressionScore: 60,
    damageAssessment: 'Manager forced to confront unrealistic timeline or pay for it',
    corporateTranslation: {
      whatYouMean: 'I am not working this weekend for free because you forgot about this until 5 PM Friday.',
      corporateVersion: 'I want to set realistic delivery expectations while exploring options that work within our resource constraints.',
    },
    tags: ['friday', 'urgent', 'weekend', 'overtime', 'boundaries'],
  },
  {
    id: 'manager-changing-priorities',
    recipient: 'manager',
    situation: 'Manager changes project priorities every other day',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Priority Clarification - Updated Version 7.0',
    body: `Hi Michelle,

Thanks for the new priority update! I want to make sure I have the current version straight:

- Monday: "Drop everything, Project Alpha is #1"
- Tuesday: "Actually, shift focus to the Q3 report"
- Wednesday: "Client Beta needs attention ASAP"
- Thursday (today): "Why isn't Project Alpha done yet?"

I've started keeping a priority changelog (attached as a Google Sheet). We're at Version 7.0 this week alone, which I believe is a new personal record. Congratulations!

Would it be possible to have ONE priorities meeting per week and then... stick with it? I know "consistency" is a big word, but I believe in us.

Currently working on: [awaiting your next email to determine this]

Best`,
    aggressionScore: 75,
    damageAssessment: 'Manager confronted with pattern through documentation',
    corporateTranslation: {
      whatYouMean: 'Pick a priority and stick with it for more than 24 hours. This is chaos.',
      corporateVersion: 'I\'d like to implement a more structured prioritization framework to ensure alignment and maximize team output.',
    },
    tags: ['priorities', 'changing', 'chaos', 'documentation', 'whiplash'],
  },
  {
    id: 'manager-credit-to-themselves',
    recipient: 'manager',
    situation: 'Manager presents your work as their own to leadership',
    category: 'managers',
    tone: 6,
    length: 'medium',
    subject: 'Congratulations on "Your" Presentation!',
    body: `Hi Richard,

I watched the leadership presentation today and wanted to say how proud I am of the strategy deck. The data analysis, the market research, the recommended action items — all looked very familiar! Almost like I'd seen it before. Perhaps because I created it.

I'm glad you found my work compelling enough to present to the C-suite! I would have loved to have been there to answer questions, given that I, you know, did the analysis and know the methodology.

For future reference, I'm happy to be credited as a contributor. Or even just acknowledged in the room. Or literally anything beyond being completely invisible while watching someone else take credit for my work on the company-wide stream.

Just some food for thought for next quarter's presentation. (Which I assume you'll also need me to create.)

Best wishes`,
    aggressionScore: 90,
    damageAssessment: 'Career-limiting email. Manager knows you know. Power dynamic shifted.',
    corporateTranslation: {
      whatYouMean: 'You stole my work and passed it off as yours to the CEO. I am furious.',
      corporateVersion: 'I\'d love to discuss how we can better showcase team contributions in leadership presentations going forward.',
    },
    tags: ['credit-stealing', 'leadership', 'visibility', 'presentation', 'nuclear'],
  },
  {
    id: 'manager-vague-feedback',
    recipient: 'manager',
    situation: 'Manager gives vague unhelpful feedback like "make it pop"',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Make It Pop - Clarification Request',
    body: `Hi Janet,

Thank you for the feedback "make it pop more"! I want to make sure I nail this.

Could you help me understand what "pop" means to you? I want to calibrate my pop-meter correctly. For reference, here's my current interpretation scale:

1. Pop = more contrast?
2. Pop = brighter colors?
3. Pop = larger font?
4. Pop = add confetti animations?
5. Pop = the sound a balloon makes?

Any guidance on which flavor of "pop" you're envisioning would be incredibly helpful in avoiding another round of "not quite what I meant."

Standing by for pop clarification!`,
    aggressionScore: 55,
    damageAssessment: 'Manager sees their own vagueness reflected back at them',
    corporateTranslation: {
      whatYouMean: '"Make it pop" is not real feedback. Give me something I can actually work with.',
      corporateVersion: 'I want to ensure my revisions align perfectly with your vision. Could we discuss specific design elements?',
    },
    tags: ['vague-feedback', 'make-it-pop', 'design', 'unclear-direction'],
  },
  {
    id: 'manager-meeting-about-meeting',
    recipient: 'manager',
    situation: 'Manager schedules a meeting to prepare for another meeting',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Pre-Meeting Meeting Invite',
    body: `Hi Alan,

Just to make sure I understand the calendar correctly:

- Monday 2 PM: Pre-meeting to discuss the Wednesday meeting agenda
- Wednesday 10 AM: The actual meeting
- Wednesday 3 PM: Post-meeting debrief about the meeting

That's 3 hours of meetings about one topic. The topic being: our Q3 numbers, which I can summarize in one sentence: "We're 8% above target."

Would you like me to also schedule a meeting to discuss whether we need the pre-meeting meeting? I want to make sure we're being thorough.

Available whenever!`,
    aggressionScore: 62,
    damageAssessment: 'Manager sees the absurdity but may double down out of habit',
    corporateTranslation: {
      whatYouMean: 'A meeting about a meeting is peak corporate insanity and we all know it.',
      corporateVersion: 'I\'d like to propose a leaner meeting structure to maximize our productive time.',
    },
    tags: ['meetings', 'meta-meeting', 'time-waste', 'bureaucracy'],
  },
  {
    id: 'manager-unrealistic-deadline',
    recipient: 'manager',
    situation: 'Manager promises client an impossible deadline without consulting the team',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: Great News! We Promised the Client Thursday!',
    body: `Hi Paul,

What exciting news! You've promised the client a full platform rebuild by Thursday. That's... four days for what our project estimate says is six weeks of work. How creative of you!

I just want to confirm: did you mean THIS Thursday, or a Thursday in some distant future where the laws of physics work differently? Because I want to be prepared either way.

For this Thursday to work, I'll need:
- A time machine
- Three additional senior developers (hired yesterday)
- No sleep, food, or human contact until Thursday
- The laws of software development to be temporarily suspended

Alternatively, we could go back to the client with a realistic timeline. I know that's less exciting than the thriller narrative you've created, but it does have the advantage of being possible.

Which approach should I take?

Best`,
    aggressionScore: 78,
    damageAssessment: 'Manager forced to either fix the timeline or own the failure',
    corporateTranslation: {
      whatYouMean: 'You promised something impossible without asking us. This is YOUR problem to fix.',
      corporateVersion: 'I want to align on a delivery timeline that maintains our quality standards while meeting stakeholder expectations.',
    },
    tags: ['deadline', 'unrealistic', 'promise', 'client-management', 'impossible'],
  },
  {
    id: 'manager-performance-review',
    recipient: 'manager',
    situation: 'Manager gives negative review despite praising you all year',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Performance Review Feedback - Some Confusion',
    body: `Hi Catherine,

Thank you for my performance review! I have to say, reading "meets expectations" was a surprise — particularly given the following emails from you over the past 12 months:

- "You're crushing it!" (March 14)
- "Best work I've seen on this team" (May 22)
- "I don't know what we'd do without you" (August 3)
- "Going to nominate you for the excellence award" (October 15)

I've attached all 47 emails containing positive feedback for reference. Could you help me understand what happened between "I don't know what we'd do without you" and "meets expectations"?

I'm sure there's a perfectly logical explanation, and it definitely has nothing to do with budget constraints affecting raise allocations. That would be too cynical, and I'm an optimist.

Looking forward to our calibration discussion!`,
    aggressionScore: 82,
    damageAssessment: 'Manager caught in documented hypocrisy. HR may become involved.',
    corporateTranslation: {
      whatYouMean: 'You praised me all year and then sandbagged my review to avoid giving me a raise. I have receipts.',
      corporateVersion: 'I\'d like to discuss some discrepancies between ongoing feedback and the annual assessment to ensure calibration accuracy.',
    },
    tags: ['performance-review', 'receipts', 'hypocrisy', 'raises', 'documentation'],
  },
  {
    id: 'manager-open-door-policy',
    recipient: 'manager',
    situation: 'Manager says they have open door policy but is never available',
    category: 'managers',
    tone: 3,
    length: 'short',
    subject: 'Open Door Policy - Scheduling Request',
    body: `Hi Frank,

I wanted to take you up on your "open door policy" that you mentioned in last month's all-hands! I've attempted to use it on the following occasions:

- Monday: Door closed, in a meeting
- Tuesday: Door closed, on a call
- Wednesday: Working from home
- Thursday: Door open but you were at lunch
- Friday: You left early

Could we perhaps schedule an "open door appointment"? I know that somewhat defeats the purpose, but I'm running out of days in the week.

Available whenever your door is!

Thanks`,
    aggressionScore: 45,
    damageAssessment: 'Manager made aware of gap between promise and reality',
    corporateTranslation: {
      whatYouMean: 'Your "open door policy" is a lie. You are never available.',
      corporateVersion: 'I want to find a reliable way to connect on some items that need your input.',
    },
    tags: ['open-door', 'unavailable', 'accessibility', 'leadership'],
  },
  {
    id: 'manager-buzzword-bingo',
    recipient: 'manager',
    situation: 'Manager sends incomprehensible email full of corporate jargon',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'medium',
    subject: 'Re: Synergizing Our Value Proposition - Translation Request',
    body: `Hi Barbara,

Thank you for your email about "leveraging synergistic alignment to optimize cross-functional value propositions in the context of our go-forward paradigm shift."

I want to make sure I action this correctly. Could you translate that into approximately 1-2 sentences of plain English? I've run it through Google Translate (English to English) and it came back as "ERROR: Meaning not found."

My best guess is: "We need to work together better?" But I don't want to assume, because last time I interpreted your jargon incorrectly, we ended up with a 40-slide deck nobody asked for.

Happy to circle back on this once we've aligned on what the words mean!

Best`,
    aggressionScore: 55,
    damageAssessment: 'Manager may feel called out but it\'s too funny to be angry about',
    corporateTranslation: {
      whatYouMean: 'I literally do not know what you are saying. Use human words.',
      corporateVersion: 'I want to ensure alignment on the specific action items so I can execute effectively.',
    },
    tags: ['buzzwords', 'jargon', 'clarity', 'communication', 'translation'],
  },
  {
    id: 'manager-volunteer-voluntold',
    recipient: 'manager',
    situation: 'Manager volunteers you for extra work without asking',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Great News - You\'re Leading the Charity Gala!',
    body: `Hi Patricia,

What a wonderful surprise to learn via company-wide email that I'm "excitedly volunteering" to lead the annual charity gala! My excitement must have been so palpable that you could sense it without actually asking me.

Before I dive into planning this event (which is apparently happening in three weeks?), I wanted to flag a few minor details:

1. I already have a full project load with deadlines in that period
2. I wasn't consulted, asked, or informed before the announcement
3. "Volunteer" traditionally implies a choice was involved

I'm sure this was just an enthusiastic oversight! Could we discuss how this fits into my current workload? Or perhaps find someone who actually... volunteered?

Eagerly (and voluntarily) awaiting your response!`,
    aggressionScore: 72,
    damageAssessment: 'Manager called out for voluntelling. May backtrack or apologize.',
    corporateTranslation: {
      whatYouMean: 'You signed me up for something without asking me. That is not volunteering, that is conscription.',
      corporateVersion: 'I appreciate the confidence in my abilities! I\'d like to discuss workload allocation to ensure I can deliver quality across all commitments.',
    },
    tags: ['voluntold', 'extra-work', 'consent', 'boundaries', 'overloaded'],
  },
  {
    id: 'manager-working-from-home-guilt',
    recipient: 'manager',
    situation: 'Manager guilt-trips you about working from home on approved WFH day',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: "Working" From Home Today?',
    body: `Hi Greg,

I noticed the quotation marks around "working" in your message about my WFH day. Very creative punctuation!

Just for reference, here's what I accomplished from home today:
- Closed 3 support tickets
- Shipped the API update (2 days ahead of schedule)
- Reviewed 4 pull requests
- Attended all 3 meetings (camera on!)

For comparison, last Tuesday in-office, I spent 2 hours in transit, 45 minutes searching for a meeting room, and 30 minutes discussing who keeps stealing the good markers from the whiteboard.

But you're right, there's definitely something magical about being physically present in a chair. I'll be in tomorrow!

Best`,
    aggressionScore: 65,
    damageAssessment: 'Manager\'s WFH skepticism met with productivity receipts',
    corporateTranslation: {
      whatYouMean: 'I get more done at home and your scare quotes are insulting. Here\'s proof.',
      corporateVersion: 'I want to ensure full visibility into my remote productivity. Here\'s my output summary for today.',
    },
    tags: ['wfh', 'remote-work', 'guilt-trip', 'productivity', 'trust'],
  },
];
