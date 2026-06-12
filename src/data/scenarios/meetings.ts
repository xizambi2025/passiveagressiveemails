import { Scenario } from './types';

export const meetingScenarios: Scenario[] = [
  {
    id: 'meeting-could-be-email',
    recipient: 'manager',
    situation: 'Invited to a meeting that is clearly just an email',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Team Sync Tomorrow - Quick Question',
    body: `Hi Sarah,

Before I accept the meeting invite, could I ask what we'll be covering that can't be communicated in writing? The agenda reads "Share Q4 update" — which sounds suspiciously like something that could be an email. Or a Slack message. Or a post-it note.

I ask because I have back-to-back meetings all day and would love to protect the one 30-minute slot I was planning to use for actual work.

If it absolutely must be synchronous, I'm there! If not, happy to read a doc at my leisure.

Thanks!`,
    aggressionScore: 40,
    damageAssessment: 'Manager might actually cancel the meeting. Win-win.',
    corporateTranslation: {
      whatYouMean: 'This does not need to be a meeting. Please just send an email.',
      corporateVersion: 'I want to ensure we\'re using our synchronous time optimally. Is there an async alternative?',
    },
    tags: ['could-be-email', 'meetings', 'time-management', 'efficiency'],
  },
  {
    id: 'meeting-no-agenda',
    recipient: 'coworker',
    situation: 'Meeting invite with no agenda or context',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Meeting - What\'s This About?',
    body: `Hi Chris,

I received your meeting invite titled "Meeting" for Tuesday at 2 PM. The description field is blank, the agenda is absent, and the invite offers no clue whatsoever about the topic.

Am I being fired? Promoted? Invited to a surprise party? The mystery is genuinely stressful.

Could you add a brief agenda so I can prepare appropriately? "Meeting" as a title tells me only that chairs might be involved.

Thanks!`,
    aggressionScore: 38,
    damageAssessment: 'Recipient will likely add context without feeling attacked',
    corporateTranslation: {
      whatYouMean: 'What is this meeting about? I cannot prepare for "Meeting."',
      corporateVersion: 'Could you share a brief agenda so I can come prepared with the right materials?',
    },
    tags: ['no-agenda', 'mystery-meeting', 'preparation', 'context'],
  },
  {
    id: 'meeting-overruns-always',
    recipient: 'coworker',
    situation: 'Meeting organizer always runs 15-30 minutes over time',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Team Retrospective (Scheduled: 30 min, Actual: 75 min)',
    body: `Hi Dave,

Thank you for yesterday's "30-minute" retrospective! I have a few observations about time:

- The meeting was scheduled for 30 minutes
- The meeting ran for 75 minutes
- That's a 150% overrun
- My next meeting started 45 minutes ago when you were still talking

This is the fourth consecutive meeting you've run over time. I'm beginning to think your relationship with clocks is purely decorative.

Could we implement a hard stop going forward? I'll volunteer as timekeeper. I have a very loud timer.

Best`,
    aggressionScore: 60,
    damageAssessment: 'Meeting organizer confronted with measurable pattern',
    corporateTranslation: {
      whatYouMean: 'Your meetings never end on time and it ruins everyone else\'s schedule.',
      corporateVersion: 'I\'d like to propose stricter time management for our recurring meetings to respect everyone\'s commitments.',
    },
    tags: ['overrun', 'time-management', 'meetings', 'schedule-conflict'],
  },
  {
    id: 'meeting-back-to-back-no-breaks',
    recipient: 'manager',
    situation: 'Schedule has back-to-back meetings all day with zero breaks',
    category: 'meetings',
    tone: 4,
    length: 'medium',
    subject: 'Calendar Audit - A Concerning Discovery',
    body: `Hi Rebecca,

I just reviewed my calendar for next week and made an interesting discovery: I am scheduled in meetings from 8 AM to 6 PM, Monday through Friday, with zero breaks. That's 50 hours of meetings in a 40-hour work week.

Some questions this raises:
- When am I supposed to do the work we discuss in these meetings?
- When do biological functions occur? (Eating, hydration, etc.)
- Is this a scheduling error or an endurance test?
- Am I being punished for something?

I'd love to implement a "speedy meetings" setting (25/50 min instead of 30/60) and protect at least ONE lunch hour per day. My doctor says I need food at least once daily to remain alive.

Could we review which of these I actually need to attend?

Thank you for your consideration of my continued existence.`,
    aggressionScore: 58,
    damageAssessment: 'Manager confronted with unsustainable schedule in humorous way',
    corporateTranslation: {
      whatYouMean: 'I have 50 hours of meetings and 0 hours to work. This is insanity.',
      corporateVersion: 'I\'d like to optimize my calendar allocation to balance collaboration time with execution time.',
    },
    tags: ['back-to-back', 'calendar', 'overloaded', 'breaks', 'burnout'],
  },
  {
    id: 'meeting-recurring-pointless',
    recipient: 'coworker',
    situation: 'Recurring meeting that no one gets value from but nobody cancels',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Regarding Our Weekly "Status Update" Meeting',
    body: `Hi team,

I'd like to propose something radical about our Wednesday 10 AM status meeting: what if we stopped having it?

In the last 8 weeks, the meeting has gone like this:
- Everyone says "nothing new"
- We sit in silence for 10 seconds
- Someone says "well, if there's nothing else..."
- We all leave

That's 30 minutes × 8 people × 8 weeks = 32 hours of collective human life spent confirming that nothing is happening.

I propose a Slack thread instead. If anyone has something to discuss, we meet. If not, we all get 30 minutes of our lives back.

Who's with me?`,
    aggressionScore: 50,
    damageAssessment: 'Team likely agrees. Meeting creator might be embarrassed.',
    corporateTranslation: {
      whatYouMean: 'This meeting is a waste of everyone\'s time and has been for months.',
      corporateVersion: 'I\'d like to propose transitioning to an exception-based sync model to maximize our team\'s productive time.',
    },
    tags: ['recurring', 'pointless', 'waste-of-time', 'status-update'],
  },
  {
    id: 'meeting-camera-police',
    recipient: 'manager',
    situation: 'Manager insists everyone has cameras on for every meeting',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Camera On Policy - A Question',
    body: `Hi Janet,

Thank you for the new "cameras always on" policy! Quick question: does this apply to the 7:30 AM standup as well? Asking for those of us who look like we've been raised by wolves until at least 9 AM.

I'm curious about the reasoning — is it engagement? Trust? A desire to see my unmade bed in the background? I want to understand the goal so I can achieve it, potentially while looking presentable.

Would a "cameras on for client meetings, optional for internal" compromise work? That way everyone gets visibility when it matters, and I get to attend the early meetings without traumatizing the team.

Open to discussion!

Best`,
    aggressionScore: 38,
    damageAssessment: 'Light push-back that may lead to reasonable compromise',
    corporateTranslation: {
      whatYouMean: 'Not every meeting needs my face. Some of us have bad lighting and worse hair.',
      corporateVersion: 'I want to discuss a nuanced camera policy that balances engagement with practicality.',
    },
    tags: ['camera-on', 'video-calls', 'wfh', 'appearance', 'policy'],
  },
  {
    id: 'meeting-hijacked-off-topic',
    recipient: 'coworker',
    situation: 'Someone always derails meetings with off-topic stories',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Sprint Planning Notes (and Your Vacation Photos)',
    body: `Hi Mark,

Thanks for today's sprint planning session! I especially enjoyed the 20-minute detour about your trip to Portugal. The photos were lovely, truly. But I'm not sure they were relevant to our Q3 release timeline.

I noticed a pattern: in the last 4 meetings, we've covered approximately 12 minutes of agenda per hour, with the remaining 48 minutes dedicated to your anecdotes.

Could we implement a "parking lot" for non-agenda items? That way your Portugal stories get their own dedicated time (perhaps lunch?) and we can ship software during the meeting about shipping software.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Coworker gently told their stories are derailing productivity',
    corporateTranslation: {
      whatYouMean: 'Please stop hijacking every meeting with irrelevant stories. We have work to do.',
      corporateVersion: 'I\'d like to introduce a meeting structure that ensures we cover all agenda items while leaving room for team bonding.',
    },
    tags: ['off-topic', 'derailing', 'stories', 'time-wasting', 'agenda'],
  },
  {
    id: 'meeting-last-minute-cancel-pattern',
    recipient: 'coworker',
    situation: 'Person cancels meetings at the last minute repeatedly',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Sorry, Something Came Up! (Again)',
    body: `Hi Nina,

No problem at all! Things come up. They especially seem to come up exactly 5 minutes before our scheduled meetings. Specifically, our last 5 scheduled meetings. What are the odds?

I've now prepared for this conversation 5 times, blocked 5 calendar slots, and turned down 3 other meeting requests that conflicted with our time. That's approximately 4 hours of my life invested in meetings that didn't happen.

I'd love to actually connect! When works for you? And by "works," I mean "you'll genuinely be available and not cancel 5 minutes before." I'm flexible — just looking for commitment.

Let me know a time that's truly convenient!`,
    aggressionScore: 60,
    damageAssessment: 'Pattern made visible with documentation of impact',
    corporateTranslation: {
      whatYouMean: 'You cancel on me every single time. Either meet with me or stop pretending you will.',
      corporateVersion: 'I want to find a meeting time that genuinely works for both our schedules to avoid further rescheduling.',
    },
    tags: ['cancellation', 'last-minute', 'pattern', 'disrespect', 'time'],
  },
  {
    id: 'meeting-invited-not-needed',
    recipient: 'manager',
    situation: 'Included in meetings where you have nothing to contribute',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Finance Review Meeting - My Role?',
    body: `Hi Tom,

Thanks for including me in tomorrow's finance review! Quick question: why?

I'm a frontend developer. The agenda covers budget allocation, vendor contracts, and fiscal year planning. I'm not sure what I bring to this conversation beyond moral support and a warm body in a chair.

If there's a specific item where my input is needed, I'm happy to attend for that portion. Otherwise, could I be removed from the invite? Those 2 hours would be wonderfully spent on the project you asked me to deliver by Friday.

Let me know!

Best`,
    aggressionScore: 35,
    damageAssessment: 'Manager realizes the invite was unnecessary — time saved for both',
    corporateTranslation: {
      whatYouMean: 'I have nothing to do with this meeting. Please remove me.',
      corporateVersion: 'I want to ensure my attendance is adding value. Could you clarify my expected contribution?',
    },
    tags: ['irrelevant-meeting', 'time-waste', 'role-clarity', 'decline'],
  },
  {
    id: 'meeting-standup-45-minutes',
    recipient: 'coworker',
    situation: 'Daily standup that should be 15 minutes takes 45',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Standup Optimization Proposal',
    body: `Hi team,

Fun fact: our "15-minute standup" has averaged 43 minutes over the past two weeks. That's a standup in name only. At 43 minutes, it's more of a "sit-down," both literally and figuratively.

The standup format is simple: What did you do? What will you do? Any blockers? That's three sentences per person, not three paragraphs.

Proposal: I'll facilitate tomorrow's standup with a strict 2-minute-per-person timer. Anyone who goes over gets their audio muted and replaced with hold music. (Kidding. Mostly.)

Are we aligned on getting this back to 15 minutes?

Thanks!`,
    aggressionScore: 50,
    damageAssessment: 'Team embarrassed about standup inflation but will likely comply',
    corporateTranslation: {
      whatYouMean: 'This standup is three times too long. Everyone needs to shut up faster.',
      corporateVersion: 'I\'d like to propose a standup format refresh to improve our daily sync efficiency.',
    },
    tags: ['standup', 'too-long', 'efficiency', 'format', 'daily'],
  },
];
