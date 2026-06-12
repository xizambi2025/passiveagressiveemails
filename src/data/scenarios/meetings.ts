import { Scenario } from './types';

export const meetingScenarios: Scenario[] = [
  {
    id: "meeting-about-meeting-coworker-4",
    recipient: "coworker",
    situation: "Someone scheduled a meeting to plan another meeting",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Pre-Meeting Alignment Session",
    body: "Hi Karen,\n\nI want to make sure I understand: you've scheduled a meeting to plan the meeting that will plan the project. That's a meeting about a meeting about work, which is two layers of abstraction away from actually doing anything.\n\nAt this rate, we'll need a pre-pre-meeting to prepare for the pre-meeting, and a post-meeting to discuss how the pre-meeting went. By my calculations, the actual work will begin sometime in Q7.\n\nCould we perhaps just... start the project? Radical suggestion, I know.\n\nBest",
    aggressionScore: 66,
    damageAssessment: "They'll feel the absurdity and hopefully cancel one of the meetings",
    corporateTranslation: {
      whatYouMean: "Meetings about meetings are the reason nothing gets done here.",
      corporateVersion: "I'd like to explore whether we could consolidate preparation and execution into a single session."
    },
    tags: ["meta-meeting", "planning", "productivity", "absurdity"]
  },
  {
    id: "recurring-meeting-no-purpose-3",
    recipient: "manager",
    situation: "A recurring weekly meeting has had no agenda for months",
    category: "meetings",
    tone: 3,
    length: "medium",
    subject: "Weekly Sync - Purpose Check",
    body: "Hi Laura,\n\nI've been reflecting on our Wednesday weekly sync. For the past 8 weeks, the meeting has followed a consistent pattern:\n\n1. We all join\n2. Someone asks 'so, anything to discuss?'\n3. Silence\n4. Someone mentions something that could be a Slack message\n5. We agree there's 'nothing major'\n6. We all say 'well, good to check in!'\n7. We leave, having spent 30 minutes achieving the emotional equivalent of a group hug\n\nI value the team connection, but I wonder if we could achieve step 7 without steps 1-6? Perhaps we could make this fortnightly, or on-demand, or replace it with a standing desk and good intentions?\n\nJust a thought.\n\nBest",
    aggressionScore: 52,
    damageAssessment: "So relatable that every attendee will secretly forward this to their friends",
    corporateTranslation: {
      whatYouMean: "This meeting has no purpose. It's been pointless for two months. Kill it.",
      corporateVersion: "I'd love to optimise our meeting cadence to ensure each session drives clear outcomes."
    },
    tags: ["recurring-meeting", "pointless", "no-agenda", "productivity"]
  },
  {
    id: "could-be-slack-meeting-5",
    recipient: "coworker",
    situation: "Coworker booked a 30-min meeting for a yes/no question",
    category: "meetings",
    tone: 5,
    length: "short",
    subject: "Re: Quick Sync - 30 Minutes",
    body: "Hi Pete,\n\nPer your meeting invite for a '30-minute quick sync,' I called ahead to ask the agenda. Your question is: 'Are we using the blue template or the green template?'\n\nPete. That's a Slack message. That's an email. That's a text message. That's a question you could shout across the office and receive an answer before the echo faded.\n\nThe answer is blue. Meeting cancelled. You're welcome for the 30 minutes I've just given back to your life.\n\nBest regards",
    aggressionScore: 72,
    damageAssessment: "Brutal but efficient - they'll message first next time",
    corporateTranslation: {
      whatYouMean: "This did not need a meeting. Stop booking meetings for things that need a text message.",
      corporateVersion: "I've resolved this asynchronously to free up calendar space for items requiring real-time collaboration."
    },
    tags: ["unnecessary-meeting", "could-be-email", "time-saving", "efficiency"]
  },
  {
    id: "no-show-meeting-4",
    recipient: "client",
    situation: "Client didn't show up to a meeting they arranged",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Missed Our 2 PM Call Today",
    body: "Hi Victoria,\n\nI joined our 2 PM call today at 1:58 PM (keen, I know) and waited until 2:15 PM in an empty virtual room. It was peaceful but unproductive.\n\nI appreciate things come up! However, as this is the second time, I wanted to mention that a quick 'can't make it' message is always welcome. My time between 2 and 2:15 was spent staring at a 'waiting for host' screen and questioning my existence.\n\nHappy to reschedule. Perhaps we could also set a calendar reminder? I find they help.\n\nBest",
    aggressionScore: 59,
    damageAssessment: "The 'questioning my existence' line adds just enough guilt",
    corporateTranslation: {
      whatYouMean: "You wasted my time by not showing up and not even telling me.",
      corporateVersion: "I wanted to check in and find a time that works better for your schedule."
    },
    tags: ["no-show", "meeting", "time-wasting", "courtesy"]
  },
  {
    id: "camera-off-meeting-2",
    recipient: "coworker",
    situation: "No one turns cameras on in video calls and you're talking to black squares",
    category: "meetings",
    tone: 2,
    length: "short",
    subject: "Cameras in Meetings?",
    body: "Hi Team,\n\nI'd like to propose something revolutionary for our video calls: using the video part.\n\nCurrently, I'm delivering presentations to a grid of black rectangles with names on them. I have no idea if anyone is nodding, confused, eating lunch, or has walked away entirely. For all I know, I'm performing a one-man show to an empty theatre.\n\nI appreciate not everyone wants to be on camera every time, but could we aim for cameras on at least during discussions? I promise not to judge your backgrounds or WFH attire.\n\nThanks!",
    aggressionScore: 30,
    damageAssessment: "Light and funny enough that people will actually turn cameras on next time",
    corporateTranslation: {
      whatYouMean: "I can't tell if anyone is even listening. Turn your cameras on.",
      corporateVersion: "I'd love to enhance engagement and non-verbal communication in our virtual sessions."
    },
    tags: ["camera-off", "video-call", "engagement", "remote-work"]
  },
  {
    id: "overtime-meeting-coworker-4",
    recipient: "coworker",
    situation: "Meeting consistently runs 15-20 minutes over the scheduled time",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Team Standup (Running Over)",
    body: "Hi Jessica,\n\nI wanted to raise a recurring theme: our 15-minute standup has averaged 37 minutes over the past three weeks. This is impressive \u2014 we've achieved a 147% efficiency rate in exceeding our time allocation.\n\nUnfortunately, I have back-to-back meetings, which means every overrun creates a cascade of lateness throughout my day. By 4 PM, I'm joining meetings so late that they're nearly over, which some might call efficient.\n\nCould we implement a hard stop at 15 minutes? Topics that need more time can be taken offline, which is corporate for 'discussed by the people who actually need to discuss them.'\n\nThanks",
    aggressionScore: 61,
    damageAssessment: "The 147% efficiency line makes the problem undeniable and funny",
    corporateTranslation: {
      whatYouMean: "Your meeting always runs over and it ruins my entire afternoon.",
      corporateVersion: "I'd suggest implementing time-boxing to respect everyone's calendar commitments."
    },
    tags: ["overtime", "running-late", "standup", "time-management"]
  },
  {
    id: "ambush-meeting-manager-5",
    recipient: "manager",
    situation: "Manager surprises you with a meeting that turns out to be a performance review",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Today's 'Catch Up'",
    body: "Hi Martin,\n\nThank you for the 'informal chat' this afternoon. I use quotes because the chat contained a printed performance framework, a scoring rubric, and the phrase 'areas for development,' which is HR for 'criticism.'\n\nPer your invite, this was described as a 'quick catch up.' In my experience, catch-ups involve coffee and pleasant small talk. They do not involve a formal evaluation grid that you'd clearly prepared in advance.\n\nI'm happy to engage in the performance process. I would simply appreciate advance notice next time, so I can prepare rather than being ambushed with a competency matrix while mentally still thinking about lunch.\n\nCould we schedule the formal review for next week with the proper agenda?\n\nBest regards",
    aggressionScore: 71,
    damageAssessment: "They'll never ambush-review you again - you've made the boundary clear",
    corporateTranslation: {
      whatYouMean: "That wasn't a catch-up, it was a stealth performance review, and that's not okay.",
      corporateVersion: "I'd appreciate formal notice for evaluation discussions to ensure I can contribute meaningfully."
    },
    tags: ["ambush-meeting", "performance-review", "surprises", "trust"]
  },
  {
    id: "monday-morning-brainstorm-coworker-3",
    recipient: "coworker",
    situation: "Someone scheduled a creative brainstorm for 8 AM Monday",
    category: "meetings",
    tone: 3,
    length: "short",
    subject: "Re: Monday 8 AM - Creative Brainstorm!",
    body: "Hi Amy,\n\nI admire your optimism in scheduling a creative brainstorm for 8 AM on a Monday. I want to set expectations: at 8 AM on Monday, my brain is roughly as creative as a brick.\n\nStudies show peak creative thinking happens mid-morning to early afternoon. At 8 AM on Monday, the only thing most people are brainstorming is how to appear awake while sipping coffee and staring into the middle distance.\n\nMight I suggest Tuesday at 10 AM? By then, we'll all have remembered our own names and might even produce ideas worth writing down.\n\nThanks!",
    aggressionScore: 47,
    damageAssessment: "Funny enough that they'll laugh and move the meeting",
    corporateTranslation: {
      whatYouMean: "No one is creative at 8 AM Monday. Move this to a time when brains work.",
      corporateVersion: "I'd love to optimise the session timing for peak cognitive performance."
    },
    tags: ["monday-morning", "brainstorm", "creativity", "scheduling"]
  }
];
