import { Scenario } from './types';

export const deadlineScenarios: Scenario[] = [
  {
    id: "moving-goalposts-deadline-4",
    recipient: "manager",
    situation: "Deadline keeps getting moved forward without adjusting scope",
    category: "deadlines",
    tone: 4,
    length: "medium",
    subject: "Re: Updated Timeline - Now Due Thursday",
    body: "Hi Simon,\n\nThank you for the updated deadline. To track our journey:\n\n- Original deadline: March 31st (4 weeks)\n- First update: March 24th (3 weeks)\n- Second update: March 17th (2 weeks)\n- Today's update: March 13th (this Thursday)\n\nThe scope, meanwhile, has remained unchanged. This creates an interesting mathematical situation where the deadline approaches faster than time itself, while the work required stays constant.\n\nI want to deliver excellent work. I also want to not invent a time machine. Could we discuss either extending the timeline or reducing the scope? These are the only two levers that exist in this reality.\n\nBest regards",
    aggressionScore: 66,
    damageAssessment: "Can't argue with maths - they'll have to pick: time or scope",
    corporateTranslation: {
      whatYouMean: "You keep making the deadline earlier without cutting anything. That's not how time works.",
      corporateVersion: "I'd like to align on a scope-timeline balance that ensures quality delivery."
    },
    tags: ["deadline", "scope", "timeline", "unrealistic", "moving-goalposts"]
  },
  {
    id: "end-of-day-ambiguity-deadline-3",
    recipient: "coworker",
    situation: "Coworker said 'end of day' but meant their end of day in a different timezone",
    category: "deadlines",
    tone: 3,
    length: "short",
    subject: "Clarification: 'End of Day' Definition",
    body: "Hi Raj,\n\nQuick clarification question: when you said you needed the designs 'by end of day,' whose end of day did you mean?\n\nI delivered at 5:30 PM GMT (my end of day) and received an email at 6 AM asking where they were. You appear to be in PST, where 'end of day' is 8 hours after my consciousness has shut down for the night.\n\nCould we agree on a timezone for future deadlines? Or better yet, an actual time? 'End of day' is a beautiful concept but falls apart spectacularly across international date lines.\n\nThanks!",
    aggressionScore: 45,
    damageAssessment: "Educational and lighthearted - they'll specify timezones from now on",
    corporateTranslation: {
      whatYouMean: "We're in different timezones. 'End of day' means nothing. Be specific.",
      corporateVersion: "I'd like to establish timezone-aware deadline protocols to prevent miscommunication."
    },
    tags: ["timezone", "deadline", "end-of-day", "communication", "remote"]
  },
  {
    id: "artificial-urgency-deadline-5",
    recipient: "manager",
    situation: "Manager created false urgency for something that sat on their desk for weeks",
    category: "deadlines",
    tone: 5,
    length: "medium",
    subject: "Re: URGENT - Need by 3 PM Today",
    body: "Hi Patricia,\n\nPer your urgent email requesting the budget analysis by 3 PM today, I have a question about the timeline.\n\nThe original request was sent to you by finance on January 8th. You forwarded it to me today, February 5th, marked 'URGENT - need immediately.' The urgency appears to have developed during the 28 days it spent in your inbox, much like how cheese develops flavour but less delightfully.\n\nI'm happy to prioritise this, but I want to set expectations: creating a thorough budget analysis in 4 hours will produce something different from creating one in the 28 days I could have had.\n\nShall I proceed with the 4-hour version, or would you like to negotiate a realistic timeline with finance?\n\nBest",
    aggressionScore: 76,
    damageAssessment: "The cheese metaphor will live rent-free in their head forever",
    corporateTranslation: {
      whatYouMean: "This is only urgent because you sat on it for a month. That's your problem, not mine.",
      corporateVersion: "I'd like to discuss optimal workflow routing to prevent last-minute escalations."
    },
    tags: ["artificial-urgency", "procrastination", "forwarding", "unrealistic"]
  },
  {
    id: "deadline-day-feedback-deadline-4",
    recipient: "client",
    situation: "Client sends critical feedback on the day the project is supposed to launch",
    category: "deadlines",
    tone: 4,
    length: "medium",
    subject: "Re: Launch Day Feedback",
    body: "Hi Gemma,\n\nThank you for your feedback! I want to make sure I understand the timeline correctly:\n\n- Project completion: Today\n- Launch: Today at 5 PM\n- Your feedback requesting 'fundamental changes to the core structure': Also today, at 11:47 AM\n\nYou've had the staging site for review since March 1st. There were three scheduled review points. None of which generated this feedback. It has instead chosen to emerge six hours before we go live.\n\nI can implement minor cosmetic adjustments before 5 PM. 'Fundamental structural changes' will require a revised launch date. Please confirm which path you'd prefer in the next hour.\n\nBest regards",
    aggressionScore: 68,
    damageAssessment: "Documents their failure to review on time without directly saying 'this is your fault'",
    corporateTranslation: {
      whatYouMean: "You had months to give this feedback and you waited until launch day. Unbelievable.",
      corporateVersion: "I'd like to triage the feedback by urgency to determine what's achievable within our launch window."
    },
    tags: ["last-minute-feedback", "launch-day", "review-process", "timing"]
  },
  {
    id: "weekend-deadline-everyone-knew-5",
    recipient: "manager",
    situation: "Project has a Monday deadline that everyone knew about but no one started",
    category: "deadlines",
    tone: 5,
    length: "short",
    subject: "Re: Weekend Work Needed for Monday Delivery",
    body: "Hi Ben,\n\nPer your Friday 4 PM email suggesting 'we might need to put in some hours this weekend' to meet Monday's deadline:\n\nThis deadline was set six weeks ago. It has not moved. It has not changed. Monday has been consistently scheduled after Sunday for several millennia. This is not a surprise.\n\nI'm curious about what happened between 'six weeks ago' and 'Friday at 4 PM' that prevented any work from being done during, say, the thirty working days in between.\n\nI'm not available this weekend. I'll be available Monday at 9 AM with fresh ideas about project planning.\n\nBest regards",
    aggressionScore: 78,
    damageAssessment: "Refuses to absorb poor planning consequences while questioning how we got here",
    corporateTranslation: {
      whatYouMean: "You had six weeks. I'm not sacrificing my weekend for your procrastination.",
      corporateVersion: "I'd like to discuss proactive project planning approaches to prevent last-minute resource crunches."
    },
    tags: ["weekend-work", "procrastination", "poor-planning", "boundaries"]
  },
  {
    id: "retrospective-deadline-coworker-3",
    recipient: "coworker",
    situation: "Coworker blames you for missing a deadline they never communicated",
    category: "deadlines",
    tone: 3,
    length: "medium",
    subject: "Re: Missed Deliverable",
    body: "Hi Tanya,\n\nI've received your email expressing concern that I 'missed' the deadline for the competitor analysis. I want to clarify a few things:\n\n1. I was not informed of this deadline\n2. I was not informed of this task\n3. I learned of both today, via your email expressing disappointment\n\nI've searched my inbox, Slack, and our project management tool. There is no record of this being assigned to me. If it was communicated verbally, I unfortunately wasn't present for that conversation.\n\nI'm absolutely happy to complete this \u2014 could you confirm the new deadline, now that I'm aware the task exists?\n\nThanks",
    aggressionScore: 48,
    damageAssessment: "Polite but firm evidence that this is their communication failure, not your performance failure",
    corporateTranslation: {
      whatYouMean: "You never told me about this. You can't blame me for missing a deadline I didn't know existed.",
      corporateVersion: "I'd appreciate clarification on the assignment chain, as I don't have a record of this being delegated."
    },
    tags: ["communication", "blame", "undocumented", "invisible-deadline"]
  }
];
