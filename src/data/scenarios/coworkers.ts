import { Scenario } from './types';

export const coworkerScenarios: Scenario[] = [
  {
    id: "late-reply-coworker-4",
    recipient: "coworker",
    situation: "Coworker hasn't replied to important email for 2 weeks",
    category: "coworkers",
    tone: 4,
    length: "medium",
    subject: "Re: Following Up (Third Attempt)",
    body: "Hi Sarah,\n\nI hope this email finds you well \u2014 though at this point, I'm genuinely uncertain if my emails find you at all.\n\nI'm reaching out regarding the budget figures I requested on the 3rd. I understand things get busy, but as we're now approaching the heat death of the universe, I wanted to gently bump this up your priority list.\n\nPlease let me know if there's a better method of communication. I'm happy to try smoke signals or interpretive dance if email isn't working.\n\nBest regards",
    aggressionScore: 68,
    damageAssessment: "They'll feel guilty enough to reply within the hour",
    corporateTranslation: {
      whatYouMean: "I know you've been ignoring me and I'm done being polite about it.",
      corporateVersion: "I wanted to ensure my previous communication was received and to offer alternative coordination methods."
    },
    tags: ["follow-up", "ignored", "waiting", "delayed-response"]
  },
  {
    id: "credit-theft-coworker-5",
    recipient: "coworker",
    situation: "Coworker presented your work as their own in a meeting",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Great Presentation Today!",
    body: "Hi Mark,\n\nGreat presentation today! I was particularly impressed by slides 4 through 17 \u2014 the ones I created and sent you last Tuesday at 2:47 PM (I have the timestamp, naturally).\n\nI'm thrilled my work resonated so well with leadership. In future, perhaps we could present together? That way I can be in the room when my ideas are shared, rather than hearing about their success secondhand.\n\nPer my previous email (the one containing all that content you presented), I'm always happy to collaborate.\n\nWarmly",
    aggressionScore: 82,
    damageAssessment: "Career-limiting move for them once leadership reads this",
    corporateTranslation: {
      whatYouMean: "You stole my work and I have receipts.",
      corporateVersion: "I'd love to explore co-presentation opportunities to maximize our collaborative impact."
    },
    tags: ["credit-theft", "presentation", "receipts", "collaboration"]
  },
  {
    id: "loud-coworker-3",
    recipient: "coworker",
    situation: "Coworker takes all calls on speakerphone in open office",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Quick Note About Our Shared Space",
    body: "Hi Dave,\n\nI couldn't help but overhear your call this morning. And the one at 10. And 11. And the one after lunch where you negotiated your car insurance.\n\nI was wondering if you'd considered using headphones? The rest of us have involuntarily become experts in your quarterly targets and your mother's hip replacement recovery.\n\nWishing your mum well,\nThanks",
    aggressionScore: 55,
    damageAssessment: "Mildly embarrassing but they'll buy headphones tomorrow",
    corporateTranslation: {
      whatYouMean: "The entire floor can hear your personal calls and we all hate it.",
      corporateVersion: "I wanted to flag a potential acoustic consideration in our collaborative workspace."
    },
    tags: ["noise", "speakerphone", "open-office", "headphones"]
  },
  {
    id: "lunch-theft-coworker-5",
    recipient: "coworker",
    situation: "Someone keeps stealing your clearly labeled lunch from the fridge",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "RE: Shared Kitchen Etiquette",
    body: "Dear Valued Colleague,\n\nI'm writing to report a recurring miracle in our kitchen: my clearly labeled Tuesday lunch has, for the fourth consecutive week, achieved sentience and walked itself into someone else's stomach.\n\nPer my previous Post-it notes (all four of them, each progressively larger and more capitalised), the container marked 'JAMES - DO NOT EAT - THIS MEANS YOU' is, in fact, not communal.\n\nI've attached a photo of this week's label for reference. I've also CC'd HR, not because I'm escalating, but because I want witnesses when my lunch inevitably disappears again tomorrow.\n\nRegards,\nJames (The Hungry One)",
    aggressionScore: 75,
    damageAssessment: "The lunch thief will switch to a different fridge",
    corporateTranslation: {
      whatYouMean: "Stop eating my food, you absolute goblin.",
      corporateVersion: "I'd like to collaboratively establish clearer shared-resource guidelines."
    },
    tags: ["lunch-theft", "kitchen", "fridge", "labels", "food"]
  },
  {
    id: "reply-all-coworker-4",
    recipient: "coworker",
    situation: "Coworker keeps hitting Reply All on company-wide emails",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Re: Re: Re: Building Maintenance Notice",
    body: "Hi Kevin,\n\nJust a friendly heads-up: the 'Reply All' button and the 'Reply' button are different buttons. One of them sends your message to you and me. The other sends it to 4,700 people who did not need to know that you also find the lift situation 'a bit annoying.'\n\nI've attached a helpful diagram.\n\nBest,\n(One of 4,700)",
    aggressionScore: 62,
    damageAssessment: "Public enough to ensure it never happens again",
    corporateTranslation: {
      whatYouMean: "You're clogging everyone's inbox and we all judge you for it.",
      corporateVersion: "I wanted to share some email best practices that might streamline our communication flow."
    },
    tags: ["reply-all", "email-etiquette", "company-wide", "inbox"]
  },
  {
    id: "early-meeting-coworker-6",
    recipient: "coworker",
    situation: "Coworker scheduled a 7am meeting without asking",
    category: "meetings",
    tone: 6,
    length: "medium",
    subject: "Re: 7:00 AM Sync - Tomorrow",
    body: "Hi Priya,\n\nI see you've scheduled a meeting for 7 AM tomorrow. I want to confirm \u2014 is that 7 AM in our timezone, or were you hoping to accommodate a colleague in a timezone that doesn't exist?\n\nI should let you know that at 7 AM, I am not a functioning professional. I am a barely sentient collection of molecules searching for coffee. Any decisions I make before 8:30 are legally non-binding.\n\nI've taken the liberty of proposing 10 AM instead. I trust that works, as I've already moved it.\n\nBest regards,\n(A Morning Person I Am Not)",
    aggressionScore: 71,
    damageAssessment: "They'll think twice before booking early meetings with you again",
    corporateTranslation: {
      whatYouMean: "7 AM? Are you insane? I'm moving this meeting.",
      corporateVersion: "I'd like to propose an alternative time that better accommodates optimal team productivity windows."
    },
    tags: ["early-meeting", "scheduling", "morning", "calendar"]
  },
  {
    id: "friday-meeting-coworker-5",
    recipient: "coworker",
    situation: "Coworker scheduled a 4:30 PM Friday meeting",
    category: "meetings",
    tone: 5,
    length: "short",
    subject: "Re: Friday 4:30 PM - Q3 Planning Discussion",
    body: "Hi Tom,\n\nPer my understanding of both workplace norms and basic human decency, I wanted to flag that you've scheduled a meeting at 4:30 PM on a Friday.\n\nI'm sure this was an oversight, as no one would deliberately choose to discuss Q3 planning at a time when the collective mental capacity of the team is equivalent to a houseplant.\n\nShall I suggest Monday morning instead? We'll all pretend to be just as enthusiastic.\n\nRegards",
    aggressionScore: 72,
    damageAssessment: "They'll reschedule and never make this mistake again",
    corporateTranslation: {
      whatYouMean: "You've committed a crime against work-life balance.",
      corporateVersion: "I wonder if we could explore a time slot that maximizes attendee engagement and cognitive availability."
    },
    tags: ["friday-meeting", "scheduling", "work-life-balance", "late-afternoon"]
  },
  {
    id: "cc-everyone-coworker-4",
    recipient: "coworker",
    situation: "Coworker CC'd your manager on a minor question",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Quick Question (CC: Director, VP, CEO, The Queen)",
    body: "Hi Rachel,\n\nThanks for your email asking where the printer paper is stored. I notice you've CC'd my manager, their manager, and the Head of Operations.\n\nTo answer your question: it's in the supply cupboard, third shelf. I trust this matter can now be de-escalated from board-level urgency.\n\nFor future reference, questions about stationery can usually be resolved without executive oversight.\n\nBest",
    aggressionScore: 65,
    damageAssessment: "They'll be too embarrassed to CC unnecessarily for at least a month",
    corporateTranslation: {
      whatYouMean: "Why are you trying to get me in trouble over nothing?",
      corporateVersion: "I appreciate the transparency and have resolved this operational query at the appropriate level."
    },
    tags: ["cc-abuse", "escalation", "manager", "trivial"]
  },
  {
    id: "meeting-couldve-been-email-3",
    recipient: "coworker",
    situation: "After a 1-hour meeting that could have been a 2-line email",
    category: "meetings",
    tone: 3,
    length: "medium",
    subject: "Follow-Up: Key Takeaways from Today's Session",
    body: "Hi Team,\n\nThank you all for making time in your busy schedules for today's hour-long meeting. I've summarised the key outcomes below:\n\n1. The deadline is still Friday.\n\nThat's it. That's the entire takeaway from 60 minutes and 12 attendees. For those keeping score, that's 12 person-hours to communicate 5 words.\n\nIn future, might I humbly suggest the revolutionary technology known as 'email' for single-item updates? I hear it's quite efficient.\n\nLooking forward to our next meeting about whether we need fewer meetings.\n\nBest",
    aggressionScore: 58,
    damageAssessment: "The meeting organiser will lie awake tonight reconsidering their life choices",
    corporateTranslation: {
      whatYouMean: "You wasted everyone's time. An email would have taken 30 seconds.",
      corporateVersion: "I'd love to explore more efficient communication channels for streamlined information sharing."
    },
    tags: ["unnecessary-meeting", "time-wasting", "could-be-email", "productivity"]
  },
  {
    id: "desk-mess-coworker-2",
    recipient: "coworker",
    situation: "Coworker's desk is overflowing onto your workspace",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Desk Boundary Situation",
    body: "Hi Alex,\n\nI hope you're well! I wanted to gently mention that your desk territory has expanded slightly into mine. Specifically, your coffee mug collection (I count seven) and what appears to be a small archive of 2019 print-outs are now firmly in my airspace.\n\nNo rush, but if you could repatriate your belongings to their homeland at some point this week, I'd appreciate it.\n\nThanks!",
    aggressionScore: 35,
    damageAssessment: "Light enough to maintain friendship, firm enough to reclaim territory",
    corporateTranslation: {
      whatYouMean: "Your mess is literally on my desk now.",
      corporateVersion: "I'd like to discuss optimizing our shared workspace allocation."
    },
    tags: ["desk", "mess", "boundaries", "shared-space"]
  },
  {
    id: "microwave-coworker-3",
    recipient: "coworker",
    situation: "Coworker heats up extremely smelly fish in the microwave",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "A Friendly Note About the Kitchen",
    body: "Hi Marcus,\n\nI wanted to reach out about your lunch today. I'm sure the salmon was delicious \u2014 and thanks to the microwave, all 47 of us on this floor now know that intimately.\n\nThe aroma has achieved things I didn't think possible. It's permeated the conference room, the supply closet, and potentially my will to live.\n\nWould you consider the toaster oven as an alternative? Or perhaps eating outside? Or on a different continent?\n\nKind regards",
    aggressionScore: 52,
    damageAssessment: "They'll switch to sandwiches for at least two weeks",
    corporateTranslation: {
      whatYouMean: "Your fish has chemical-weaponised the entire floor.",
      corporateVersion: "I'd like to suggest some alternative food preparation approaches that support our shared environment."
    },
    tags: ["kitchen", "microwave", "fish", "smell", "office-etiquette"]
  },
  {
    id: "meeting-no-agenda-coworker-4",
    recipient: "coworker",
    situation: "Coworker sent a meeting invite with no agenda or context",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Meeting - 30 min",
    body: "Hi Jordan,\n\nThanks for the meeting invite. I notice it contains a time, a date, and absolutely nothing else. No agenda, no context, no topic \u2014 just the ominous promise of 30 minutes of my life I'll never get back.\n\nShould I prepare anything? Should I bring anything? Should I be worried? The vagueness has me convinced I'm either being promoted or fired.\n\nPlease advise.\n\nRegards",
    aggressionScore: 60,
    damageAssessment: "They'll add agendas to every meeting invite from now on",
    corporateTranslation: {
      whatYouMean: "What do you want? Tell me before I waste my time showing up.",
      corporateVersion: "Could you share a brief agenda so I can prepare effectively and add maximum value to our discussion?"
    },
    tags: ["meeting", "no-agenda", "vague", "scheduling"]
  },
  {
    id: "constant-interruptions-coworker-5",
    recipient: "coworker",
    situation: "Coworker keeps interrupting your work with non-urgent questions",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Office Hours Proposal",
    body: "Hi Jake,\n\nPer my previous attempts at maintaining focus, I wanted to propose a new system.\n\nToday you visited my desk 11 times. I know this because I started counting after visit #4 (\"do you know where the stapler is?\") and visit #5 (\"never mind, found it\").\n\nI've drafted a schedule of 'office hours' during which I'm available for questions. Outside these windows, please imagine there is a crocodile-filled moat around my desk. Urgent matters can be communicated via email, which I will address in the order received, like a civilised professional.\n\nThe headphones mean I'm busy. They have always meant I'm busy.\n\nKind regards",
    aggressionScore: 73,
    damageAssessment: "They'll text before approaching for at least the next quarter",
    corporateTranslation: {
      whatYouMean: "Stop showing up at my desk every 20 minutes. I'm begging you.",
      corporateVersion: "I'd like to establish structured collaboration windows to optimize both our productivity flows."
    },
    tags: ["interruptions", "focus", "boundaries", "headphones", "productivity"]
  },
  {
    id: "passive-aggressive-smiley-coworker-6",
    recipient: "coworker",
    situation: "Coworker uses passive-aggressive smiley faces in Slack",
    category: "coworkers",
    tone: 6,
    length: "short",
    subject: "Re: Communication Styles",
    body: "Hi Emma,\n\nI'd like to discuss your Slack communication style, specifically your use of ':)' at the end of messages like 'Per the process we discussed, this needs to be redone :)' and 'I've fixed your mistakes again :)'\n\nI want you to know that I see those smiley faces for what they are. They are not smiles. They are tiny typographical acts of war.\n\nI respect the craft. But I want you to know: I notice.\n\nBest :)",
    aggressionScore: 78,
    damageAssessment: "Mutually assured destruction - you've both acknowledged the game",
    corporateTranslation: {
      whatYouMean: "Your fake smileys are more threatening than any direct insult.",
      corporateVersion: "I appreciate your consistent positivity in digital communications."
    },
    tags: ["slack", "smiley-face", "passive-aggressive", "communication", "emoji"]
  },
  {
    id: "last-minute-changes-coworker-4",
    recipient: "coworker",
    situation: "Coworker sends 'small changes' to a project the night before deadline",
    category: "deadlines",
    tone: 4,
    length: "medium",
    subject: "Re: Just a Few Tiny Tweaks! :)",
    body: "Hi Lisa,\n\nThank you for your email at 11:47 PM last night containing 'a few tiny tweaks' to the project due this morning.\n\nI've reviewed your 'tiny tweaks' and wanted to confirm: you're asking me to restructure 60% of the deliverable, add three new sections, and change the colour scheme. In 9 hours. While sleeping.\n\nI want you to know I admire your optimism. It takes real confidence to describe a complete overhaul as 'tiny.' In that spirit, I have a 'tiny' response: no.\n\nI've submitted the original version. Happy to discuss your suggestions for V2.\n\nBest",
    aggressionScore: 70,
    damageAssessment: "They'll learn what 'deadline' means or they won't, either way you've submitted",
    corporateTranslation: {
      whatYouMean: "Your 'small changes' are a complete redo and it's too late. I'm ignoring them.",
      corporateVersion: "I've prioritised the current deliverable timeline and am happy to incorporate feedback in subsequent iterations."
    },
    tags: ["last-minute", "deadline", "scope-creep", "changes", "late-night"]
  }
];
