import { Scenario } from './types';

export const miscScenarios: Scenario[] = [
  {
    id: "ac-wars-coworker-3",
    recipient: "coworker",
    situation: "Office temperature war - someone keeps changing the thermostat",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Office Temperature Situation",
    body: "Hi Team,\n\nI've noticed the office thermostat has been adjusted 14 times today. We appear to be locked in an invisible war between the 'arctic tundra' faction and the 'surface of the sun' contingent.\n\nCurrently, my side of the office requires a parka while accounts are working in what appears to be a sauna. The thermostat is not a toy. It is not a democracy. And changing it when you walk past is not a constitutional right.\n\nCan we agree on 21\u00b0C and invest in personal fans/cardigans as needed?\n\nThanks,\n(Currently: freezing)",
    aggressionScore: 42,
    damageAssessment: "Relatable enough that the whole office will laugh and agree to a truce",
    corporateTranslation: {
      whatYouMean: "Stop touching the thermostat. You're all driving me insane.",
      corporateVersion: "I'd like to propose a shared environmental comfort agreement."
    },
    tags: ["thermostat", "office-temperature", "shared-space", "war"]
  },
  {
    id: "printer-coworker-2",
    recipient: "coworker",
    situation: "Someone left the printer jammed and walked away",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Printer on Floor 3",
    body: "Hi Team,\n\nA gentle PSA: if you jam the printer, the protocol is to unjam it \u2014 not slowly back away and pretend it never happened. The printer is currently displaying an error that roughly translates to 'someone crumpled paper into my guts and fled.'\n\nI've fixed it this time, but for future reference, the instructions are literally printed on the inside of the paper tray door. It takes 30 seconds and saves the next person (me, always me) from performing printer surgery.\n\nThanks!",
    aggressionScore: 35,
    damageAssessment: "Light and communal - the culprit will feel quietly guilty",
    corporateTranslation: {
      whatYouMean: "Fix the printer when you break it. Don't just walk away like a coward.",
      corporateVersion: "I'd like to remind everyone of our shared equipment maintenance responsibilities."
    },
    tags: ["printer", "shared-equipment", "responsibility", "office"]
  },
  {
    id: "unnecessary-cc-coworker-5",
    recipient: "coworker",
    situation: "Coworker CC'd your manager on an email about a typo",
    category: "coworkers",
    tone: 5,
    length: "short",
    subject: "Re: Typo on Page 3 (CC: Your Manager, HR, The FBI)",
    body: "Hi Eleanor,\n\nThank you for flagging the typo on page 3. You're right \u2014 'teh' should indeed be 'the.' Well spotted. I've fixed it. It took approximately 3 seconds.\n\nI couldn't help but notice you CC'd my manager on this correction. I want to confirm: you've escalated a two-letter typo to senior management level. Was this a misclick, or do you genuinely believe that my typing 'teh' instead of 'the' requires directorial oversight?\n\nFor future reference, typos can typically be resolved at ground level. Between you and me. Without involving the chain of command.\n\nBest regards",
    aggressionScore: 75,
    damageAssessment: "They'll think twice before CC'ing your manager on trivial matters",
    corporateTranslation: {
      whatYouMean: "Why did you involve my boss over a typo? That's petty and we both know it.",
      corporateVersion: "I appreciate the attention to detail and have resolved the item at the appropriate level."
    },
    tags: ["cc-abuse", "escalation", "typo", "petty", "manager"]
  },
  {
    id: "meeting-multitasking-coworker-4",
    recipient: "coworker",
    situation: "Coworker clearly doing other work during a meeting and gets caught",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Today's Sync",
    body: "Hi Dan,\n\nI enjoyed today's meeting, particularly the moment when I asked for your thoughts on the Q3 roadmap and you responded with, 'Sorry, can you repeat that?' followed by the unmistakable sound of you unmuting your keyboard.\n\nFor the record, everyone can tell when you're typing during a call. The mute button hides sound, not the 15-second delay before every response and the gentle clacking audible during others' speaking time.\n\nI'm happy to excuse you from meetings where you're not needed. But if you're in the meeting, I'd appreciate you being in the meeting.\n\nBest",
    aggressionScore: 61,
    damageAssessment: "Embarrassing enough to ensure full attention next time",
    corporateTranslation: {
      whatYouMean: "Everyone knows you were doing other work. It's disrespectful and obvious.",
      corporateVersion: "I'd love to ensure meetings are attended with full engagement or attendance is made optional."
    },
    tags: ["multitasking", "distracted", "meeting", "respect", "mute"]
  },
  {
    id: "passive-aggressive-email-trail-coworker-6",
    recipient: "coworker",
    situation: "Coworker forwarded an email chain to your manager to make you look bad",
    category: "coworkers",
    tone: 6,
    length: "medium",
    subject: "Re: Fwd: Project Timeline (Forwarded to Helen Without Context)",
    body: "Hi Craig,\n\nI noticed you forwarded our email chain to Helen (my manager) with the note 'FYI - concerns about timeline.'\n\nWhat's interesting is that you forwarded emails 4 through 7 of an 11-email chain. You omitted emails 1-3, where you agreed to the timeline and confirmed resourcing. You also omitted emails 8-11, where I flagged the delay was caused by your team missing their deliverable.\n\nThe selective forwarding is creative. In journalism, we'd call it 'editorial.' In this context, I'd call it something else.\n\nI've replied-all with the complete chain for Helen's benefit. Context is important, don't you think?\n\nBest regards",
    aggressionScore: 89,
    damageAssessment: "Full context reply-all is the professional equivalent of pulling out receipts in court",
    corporateTranslation: {
      whatYouMean: "You tried to throw me under the bus by cherry-picking emails. I've exposed the full picture.",
      corporateVersion: "I've provided the complete correspondence for full transparency and context."
    },
    tags: ["forwarding", "manipulation", "context", "receipts", "politics"]
  },
  {
    id: "parking-spot-coworker-3",
    recipient: "coworker",
    situation: "Someone keeps parking in your designated spot",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Parking Bay 47",
    body: "Hi Team,\n\nA gentle note about Parking Bay 47: it's mine. It has my name on it. Literally \u2014 there's a sign with my name printed on it, bolted to the wall at eye level.\n\nDespite this, I've arrived to find it occupied three times this week by a silver Audi. I don't know whose Audi this is, but I'd love to meet them, partly to resolve this, and partly because I'm impressed by their ability to ignore a sign that's directly in their line of sight.\n\nIf the Audi owner could relocate to one of the many unassigned bays, I'd be grateful. Otherwise, I'll be forced to involve facilities, which feels absurd for what is essentially 'reading a sign.'\n\nThanks",
    aggressionScore: 48,
    damageAssessment: "The 'impressed by their ability to ignore a sign' line is devastating politeness",
    corporateTranslation: {
      whatYouMean: "Stop parking in my spot. My name is literally on the sign. Can you not read?",
      corporateVersion: "I'd like to flag a recurring parking allocation issue for resolution."
    },
    tags: ["parking", "assigned-space", "inconsiderate", "facilities"]
  },
  {
    id: "email-sign-off-coworker-2",
    recipient: "coworker",
    situation: "Replying to an email where someone used 'Regards' (the cold version)",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Re: Q3 Numbers",
    body: "Hi Karen,\n\nThanks for the Q3 numbers! All looks good from my end.\n\nAlso, I notice your sign-off has evolved from 'Best wishes' to 'Kind regards' to 'Regards' over our last three exchanges. Should I be concerned? In email semiotics, bare 'Regards' is approximately one step above 'Noted.' and one step below 'Thanks.'\n\nIf I've offended you somehow, please let me know directly rather than through the gradual cooling of your valediction.\n\nWarm wishes (deliberately warm),\nTom",
    aggressionScore: 38,
    damageAssessment: "So cheeky that they'll laugh and realize their cold sign-off was noticed",
    corporateTranslation: {
      whatYouMean: "Your emails are getting progressively colder and I've noticed.",
      corporateVersion: "I hope everything is well between us \u2014 happy to discuss any concerns!"
    },
    tags: ["sign-off", "email-tone", "passive-aggressive", "communication"]
  },
  {
    id: "slack-novel-coworker-4",
    recipient: "coworker",
    situation: "Coworker sends 15 separate Slack messages instead of one coherent paragraph",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Your Slack Messages",
    body: "Hi Leo,\n\nI received your Slack communication this morning. All 23 messages of it. Each containing between 2 and 7 words. Arriving one. At. A. Time. Like a telegram from 1892.\n\nMy phone buzzed 23 times. My focus shattered 23 times. And the complete message, when reconstructed, was: 'Hey, do you have the Henderson file? I need it for a meeting at 2.'\n\nThat's one sentence. One message. One notification. Could we perhaps try that approach next time?\n\nMy notification sound is now associated with mild dread.\n\nBest",
    aggressionScore: 63,
    damageAssessment: "They'll compose full thoughts before hitting enter from now on",
    corporateTranslation: {
      whatYouMean: "Stop sending 20 messages when one would do. My phone is vibrating off the desk.",
      corporateVersion: "I'd love to discuss asynchronous communication best practices to minimize notification fatigue."
    },
    tags: ["slack", "notifications", "messages", "communication", "focus"]
  },
  {
    id: "open-plan-phone-call-coworker-3",
    recipient: "coworker",
    situation: "Coworker takes personal calls at their desk in the open plan office",
    category: "coworkers",
    tone: 3,
    length: "medium",
    subject: "A Gentle Note About Phone Calls",
    body: "Hi Charlotte,\n\nI hope you're well! I wanted to gently raise something. Over the past few weeks, I've become inadvertently invested in several chapters of your personal life, including:\n\n- The ongoing dispute with your energy provider\n- Your feelings about your sister's new boyfriend (I also think he sounds suspicious)\n- The detailed breakdown of your weekend plans\n\nWhile I find this more entertaining than my actual work, I'm not sure it's intentional. The phone booths on floor 2 are specifically designed for calls that you wouldn't want 40 colleagues overhearing.\n\nNo judgment on the content \u2014 just the volume and venue!\n\nBest",
    aggressionScore: 46,
    damageAssessment: "The sister's boyfriend detail shows exactly how much they've overheard",
    corporateTranslation: {
      whatYouMean: "The whole floor can hear your personal calls. Use a phone booth.",
      corporateVersion: "I wanted to flag the availability of private call spaces for sensitive conversations."
    },
    tags: ["phone-calls", "personal", "open-plan", "noise", "privacy"]
  },
  {
    id: "calendar-tetris-coworker-4",
    recipient: "coworker",
    situation: "Coworker books the only free slot in your packed calendar without asking",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Catch Up - Booked for 12:15",
    body: "Hi James,\n\nI see you've found and claimed the 15-minute gap in my calendar between meetings. Like a heat-seeking missile targeting my only moment of peace today.\n\nThat 15-minute slot was not unused time. It was buffer time. It was 'walk to the next meeting room' time. It was 'briefly remember what my own name is' time. It was, frankly, 'use the bathroom' time.\n\nCould you move this to Thursday where I have actual availability? My bladder and I would appreciate it.\n\nBest",
    aggressionScore: 64,
    damageAssessment: "The bladder reference makes it impossible to decline the reschedule request",
    corporateTranslation: {
      whatYouMean: "Don't book into my only gap. That's my breathing space and I need it.",
      corporateVersion: "I'd appreciate selecting from my explicitly available time slots for scheduling."
    },
    tags: ["calendar", "booking", "boundaries", "buffer-time"]
  },
  {
    id: "email-at-5pm-friday-manager-4",
    recipient: "manager",
    situation: "Manager sends important project brief at 5 PM on Friday",
    category: "managers",
    tone: 4,
    length: "short",
    subject: "Re: New Project Brief - For Monday Discussion",
    body: "Hi Andrew,\n\nI received the 47-page project brief at 5:02 PM on Friday, with the note 'let's discuss Monday morning.' This gives me the weekend to review it \u2014 or as I prefer to call it, my unpaid time off.\n\nI want to confirm: should I review this during hours I'm not paid for, or shall we schedule the discussion for Monday afternoon, giving me actual work hours to read it?\n\nI ask because the answer reveals quite a lot about expectations around boundaries in this team. No wrong answer! (There is a wrong answer.)\n\nBest",
    aggressionScore: 66,
    damageAssessment: "The 'no wrong answer (there is a wrong answer)' is peak passive aggression",
    corporateTranslation: {
      whatYouMean: "I'm not reading this over the weekend. Send things earlier or push the meeting.",
      corporateVersion: "I'd like to ensure adequate review time within business hours for thorough preparation."
    },
    tags: ["friday-email", "work-life-balance", "boundaries", "preparation"]
  },
  {
    id: "stealing-ideas-meeting-coworker-5",
    recipient: "coworker",
    situation: "Coworker repeats your idea 5 minutes later in a meeting and gets praised",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Great Discussion Today!",
    body: "Hi Michael,\n\nGreat meeting today! I particularly enjoyed the part where I suggested restructuring the client onboarding flow, received silence, and then five minutes later you said 'What if we restructured the client onboarding flow?' and received applause.\n\nIt's a fascinating phenomenon. My idea, spoken through my mouth, was invisible. The same idea, spoken through yours, was 'brilliant thinking.' I've started to wonder if my voice is at a frequency only certain people can hear.\n\nGoing forward, perhaps we could try crediting ideas to their original source? Something like 'Building on what [my name] said...' would be a nice touch. Or I could wear a sign that says 'I said it first' \u2014 whichever feels more natural.\n\nBest regards",
    aggressionScore: 77,
    damageAssessment: "They'll either credit you next time or avoid sitting near you in meetings",
    corporateTranslation: {
      whatYouMean: "You stole my idea in real-time, in front of my face, and got credit for it.",
      corporateVersion: "I'd love to establish clearer attribution practices in our collaborative discussions."
    },
    tags: ["idea-theft", "meeting", "credit", "recognition", "invisible"]
  },
  {
    id: "read-receipt-coworker-6",
    recipient: "coworker",
    situation: "Coworker has read receipts on and clearly reads your messages but doesn't reply",
    category: "coworkers",
    tone: 6,
    length: "short",
    subject: "Re: Quick Question (Read 3 Days Ago)",
    body: "Hi Sophie,\n\nI hope you're well! I'm following up on my Slack message from Tuesday, which your read receipts confirm you opened at 2:34 PM on Tuesday. It is now Friday.\n\nI mention the read receipts not to be confrontational, but because they've robbed you of the 'I didn't see it' defence. The technology has betrayed you. You saw it. We both know you saw it. The blue ticks know you saw it.\n\nA simple 'I'll get back to you' would genuinely suffice. The silence, combined with confirmed receipt, is creating a narrative that's worse than any actual answer could be.\n\nBest :)",
    aggressionScore: 79,
    damageAssessment: "The 'technology has betrayed you' line is perfect - they can't deny it",
    corporateTranslation: {
      whatYouMean: "I know you read my message 3 days ago. The ticks don't lie. Reply.",
      corporateVersion: "I'm following up to ensure my query didn't get lost in your message queue."
    },
    tags: ["read-receipts", "ignored", "blue-ticks", "follow-up"]
  },
  {
    id: "jargon-email-new-starter-2",
    recipient: "coworker",
    situation: "Responding to a company-wide email full of unexplained acronyms",
    category: "corporate-buzzwords",
    tone: 2,
    length: "short",
    subject: "Re: FYI - EOD Update on BAU KPIs for the PMO",
    body: "Hi Team,\n\nQuick question: could we include a glossary with company-wide emails? I've just spent 15 minutes trying to decode this message and I'm still not sure if the PMO is a team, a tool, or a medical condition.\n\nI count 12 acronyms in a 3-paragraph email. For those of us who haven't been here since the acronyms were born, a brief translation would be incredibly helpful.\n\nAlternatively: full words. They're longer but self-explanatory.\n\nThanks!",
    aggressionScore: 33,
    damageAssessment: "Gentle enough to seem helpful, pointed enough to highlight the absurdity",
    corporateTranslation: {
      whatYouMean: "I can't understand anything you write because it's all acronyms.",
      corporateVersion: "I'd appreciate acronym definitions for inclusivity and clarity in cross-team communications."
    },
    tags: ["acronyms", "jargon", "clarity", "communication", "new-starter"]
  },
  {
    id: "working-from-home-suspicion-manager-4",
    recipient: "manager",
    situation: "Manager implies you're not actually working when WFH",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: WFH Productivity Check-In",
    body: "Hi Paul,\n\nThank you for your email asking me to 'confirm what I accomplished yesterday while working from home.' I notice this email was not sent to office-based colleagues. Interesting.\n\nHere's yesterday's output:\n- Completed the Henderson proposal (4 hours)\n- Client call with Meridian Corp (1 hour)\n- Revised the budget spreadsheet (1.5 hours)\n- Responded to 34 emails (throughout)\n- Wrote this response to your check-in (5 minutes of mild irritation)\n\nFor comparison, my most unproductive days tend to be office days, where I lose approximately 2 hours to commuting, 45 minutes to 'quick chats,' and 30 minutes to whoever microwaves fish at 11:30.\n\nI'm happy to provide daily reports if required. For everyone. Equally. Regardless of location.\n\nBest regards",
    aggressionScore: 69,
    damageAssessment: "Flips the productivity narrative with data they can't argue with",
    corporateTranslation: {
      whatYouMean: "You don't trust me to work from home and it's insulting. I produce more at home than in the office.",
      corporateVersion: "I'm happy to provide visibility into output metrics across all working locations."
    },
    tags: ["WFH", "trust", "productivity", "micromanaging", "remote-work"]
  },
  {
    id: "volunteered-for-task-coworker-5",
    recipient: "manager",
    situation: "Manager volunteered you for a task without asking first",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Charity Bake Sale Coordinator (!)",
    body: "Hi Helen,\n\nPer your email to the department: 'Great news! [My name] has kindly volunteered to coordinate the charity bake sale!'\n\nI want to clarify a subtle but important distinction: I did not volunteer. I was volunteered. These are different verbs involving different levels of consent.\n\nTo be clear, I support charity. I support bake sales. What I don't support is being enrolled in voluntary activities involuntarily. The word for that is... well, it's not 'volunteering.'\n\nIf someone does need to coordinate this, I'm happy to discuss. But perhaps we could try the radical approach of asking first? I believe the phrase is 'would you be willing to...' rather than 'you will be doing this.'\n\nBest",
    aggressionScore: 72,
    damageAssessment: "The 'different verbs' line is something they'll remember every time they think of volunteering someone",
    corporateTranslation: {
      whatYouMean: "You signed me up without asking. That's not volunteering, that's being voluntold.",
      corporateVersion: "I'd appreciate being consulted on additional commitments before they're communicated to the team."
    },
    tags: ["voluntold", "consent", "additional-tasks", "boundaries"]
  },
  {
    id: "instructions-not-followed-client-5",
    recipient: "client",
    situation: "Client ignored your detailed instructions then asks why something doesn't work",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: URGENT - Website is Broken!",
    body: "Hi Penny,\n\nPer your email reporting the website is 'completely broken,' I've investigated. The issue is that you uploaded a 4GB video file to the 'logo' field. The logo field is designed for logos. It expects a small image. It received a feature-length film.\n\nFor reference, the upload guide I sent you on March 1st states:\n- Page 3: 'Logo field: PNG or SVG only, max 500KB'\n- Page 3 (bold): 'Do NOT upload video files'\n- Page 3 (highlighted): 'Video files will crash the page'\n\nThe website is not broken. It is performing exactly as expected when someone uploads a wedding video to a logo field. I've removed the file and normal service has resumed.\n\nPerhaps a quick re-read of the guide would prevent future emergencies?\n\nBest regards",
    aggressionScore: 76,
    damageAssessment: "They'll actually read the guide next time (probably)",
    corporateTranslation: {
      whatYouMean: "You broke it by ignoring my very clear instructions. RTFM.",
      corporateVersion: "I've resolved the issue and recommend reviewing the CMS guide to prevent similar incidents."
    },
    tags: ["instructions", "user-error", "support", "documentation", "RTFM"]
  },
  {
    id: "email-novel-coworker-3",
    recipient: "coworker",
    situation: "Coworker writes 2000-word emails for simple questions",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Re: Re: Re: Various Points to Discuss (Long Email Below)",
    body: "Hi Derek,\n\nThank you for your comprehensive email. I've read all 2,100 words and identified the question buried in paragraph 7: 'Should we use Zoom or Teams for Friday's call?'\n\nTeams.\n\nFor future reference, I'm very happy receiving short emails. One-line emails, even. The context, background, historical overview, and three analogies are appreciated but not required for logistical questions.\n\nYour brevity will be my joy.\n\nBest",
    aggressionScore: 47,
    damageAssessment: "Educational and funny - they might actually write shorter emails",
    corporateTranslation: {
      whatYouMean: "Your emails are so long that the actual question gets lost. Please be brief.",
      corporateVersion: "I'd suggest leading with the action item for quick-reference accessibility."
    },
    tags: ["long-emails", "brevity", "communication", "questions"]
  },
  {
    id: "diet-commentary-coworker-2",
    recipient: "coworker",
    situation: "Coworker always comments on what you're eating for lunch",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Lunchtime Observations",
    body: "Hi Gillian,\n\nI wanted to have a light-hearted word about our lunch routine. Specifically, your commentary on mine. This week's reviews include:\n\n- Monday: 'Ooh, that's a big portion!'\n- Tuesday: 'Pizza again?'\n- Wednesday: 'You're so good with your salads!'\n- Thursday: 'Treating yourself today!'\n\nI appreciate the attention, but I'm not a food critic's experiment. Could we perhaps establish a lunch-commentary-free zone? I'll enjoy my food in peace, and you'll enjoy yours, and neither of us will narrate the other's choices.\n\nDeal?\n\nThanks!",
    aggressionScore: 37,
    damageAssessment: "Lighthearted enough to not damage the relationship, clear enough to stop the behaviour",
    corporateTranslation: {
      whatYouMean: "Stop commenting on my food. Every day. It's weird.",
      corporateVersion: "I'd appreciate maintaining personal boundaries around individual meal choices."
    },
    tags: ["food-commentary", "lunch", "boundaries", "personal-space"]
  },
  {
    id: "scheduling-over-holiday-manager-5",
    recipient: "manager",
    situation: "Manager scheduled important meeting during your approved holiday",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: All-Hands Thursday - Mandatory Attendance",
    body: "Hi Sandra,\n\nPer the meeting invite marked 'mandatory,' I wanted to flag that I'll be in Portugal on Thursday. On annual leave. Which you approved. On March 3rd. It's in the system. There was a form. You signed it.\n\nI appreciate the meeting is mandatory for those who are, by definition, at work. I will not be at work. I will be at a pool, reading a book, and not thinking about quarterly objectives.\n\nI'm happy to receive the minutes and catch up on my return. Alternatively, I can attend via video call from the pool, though I suspect my swim trunks violate the dress code.\n\nBest regards from my upcoming out-of-office",
    aggressionScore: 73,
    damageAssessment: "The pool imagery makes it clear you will absolutely not be attending",
    corporateTranslation: {
      whatYouMean: "I'm on approved holiday. I will not be joining. Don't even think about asking.",
      corporateVersion: "I'll be utilising my approved leave on this date and will review materials upon return."
    },
    tags: ["holiday", "annual-leave", "boundaries", "mandatory-meeting"]
  },
  {
    id: "pronouncing-name-wrong-coworker-2",
    recipient: "coworker",
    situation: "Coworker keeps mispronouncing your name after being corrected multiple times",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Quick Note on Pronunciation",
    body: "Hi Greg,\n\nJust a friendly reminder: my name is Siobhan (pronounced 'Shi-vawn'). Not 'See-oh-ban,' not 'Sy-oh-ban,' and definitely not 'Shobbo' (though I admire the creativity on that last one).\n\nThis is the fourth time I've mentioned it, and I promise it's not personal \u2014 but every mispronunciation chips away at my soul just a tiny bit.\n\nI've attached an audio clip. Feel free to save it as a ringtone if that helps with retention.\n\nThanks!",
    aggressionScore: 34,
    damageAssessment: "The audio clip offer is both helpful and wonderfully passive aggressive",
    corporateTranslation: {
      whatYouMean: "Learn my name. It's not hard. I've told you four times.",
      corporateVersion: "I'd appreciate ensuring correct pronunciation for professional interactions."
    },
    tags: ["name", "pronunciation", "respect", "identity", "correction"]
  }
];
