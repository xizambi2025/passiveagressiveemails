import { Scenario } from './types';

export const managerScenarios: Scenario[] = [
  {
    id: "micromanaging-manager-5",
    recipient: "manager",
    situation: "Manager asks for hourly updates on a simple task",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Status Update Request (Hourly)",
    body: "Hi Claire,\n\nPer your request for hourly updates on the spreadsheet I'm formatting, here is my 2 PM report:\n\n- 1:00 PM: Opened spreadsheet\n- 1:15 PM: Adjusted column B width\n- 1:32 PM: Wrote this email\n- 1:45 PM: Contemplated whether this level of oversight is strictly necessary for a task that takes 20 minutes but now takes 3 hours due to the time spent reporting on it\n\nShall I continue providing updates, or would you prefer I simply finish the task? I'm happy either way, though one of these options results in the work actually getting done.\n\nBest regards",
    aggressionScore: 74,
    damageAssessment: "Manager will either back off or double down - either way, you've made your point",
    corporateTranslation: {
      whatYouMean: "Your micromanaging is the only thing preventing me from finishing this.",
      corporateVersion: "I'd love to discuss reporting cadence to find the optimal balance between visibility and execution velocity."
    },
    tags: ["micromanaging", "status-updates", "autonomy", "trust"]
  },
  {
    id: "vague-feedback-manager-4",
    recipient: "manager",
    situation: "Manager gave feedback saying 'make it pop more'",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: Feedback on Proposal Draft",
    body: "Hi David,\n\nThank you for your feedback on the proposal. I've noted your comment to 'make it pop more' and 'give it more energy.'\n\nIn the interest of delivering exactly what you envision, I have a few clarifying questions:\n\n1. When you say 'pop,' are we talking visual pop, intellectual pop, or literal popping sounds?\n2. On a scale of 'library whisper' to 'fireworks display,' how much energy are we targeting?\n3. Would it help if I added confetti? I'm not joking. I genuinely don't know what you want.\n\nI've attached three versions: one with bolder fonts, one with brighter colours, and one that's identical to the original because I want to see if that's actually what 'pop' meant.\n\nLooking forward to your clarification,\nThanks",
    aggressionScore: 64,
    damageAssessment: "They might actually learn to give specific feedback",
    corporateTranslation: {
      whatYouMean: "'Make it pop' is not feedback. Give me something I can actually work with.",
      corporateVersion: "I'd love to align on specific elements to enhance so I can deliver precisely to your vision."
    },
    tags: ["vague-feedback", "make-it-pop", "unclear-direction", "revisions"]
  },
  {
    id: "cancelled-meeting-manager-3",
    recipient: "manager",
    situation: "Manager cancelled your 1:1 for the fifth week running",
    category: "managers",
    tone: 3,
    length: "short",
    subject: "Re: 1:1 Cancelled (Again)",
    body: "Hi Susan,\n\nNo worries at all about cancelling our 1:1 again! That's five consecutive weeks now \u2014 I believe that qualifies us for some sort of record.\n\nI just wanted to flag that I do have several items to discuss, some of which have evolved from 'minor questions' to 'significant concerns' to 'things I've just decided on my own because no one was available to consult.'\n\nWhenever you have 15 minutes free in the next fiscal year, I'm flexible.\n\nThanks",
    aggressionScore: 55,
    damageAssessment: "Guilt-trip level: moderate. They'll probably reschedule... maybe.",
    corporateTranslation: {
      whatYouMean: "You clearly don't care about managing me so I've started managing myself.",
      corporateVersion: "I'd appreciate the opportunity to sync on accumulated items at your earliest convenience."
    },
    tags: ["cancelled-meeting", "1-on-1", "neglect", "management"]
  },
  {
    id: "weekend-email-manager-5",
    recipient: "manager",
    situation: "Manager emails at 11 PM expecting an immediate response",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Quick Question (Sent at 11:47 PM)",
    body: "Hi Richard,\n\nI'm replying to your email from last night at 11:47 PM. Per my employment contract, my working hours are 9 to 5:30, Monday to Friday. Per my personal boundaries, I am a human person who sleeps.\n\nI noticed your follow-up at 11:52 PM asking if I'd seen the first email. And your third at 12:03 AM flagged as urgent. To confirm: I was unconscious for all three.\n\nI'm happy to address your question now, during business hours, when my brain is contractually obligated to function. For future reference, unless the building is literally on fire, I'll respond the next working day.\n\nBest regards",
    aggressionScore: 76,
    damageAssessment: "Bold boundary-setting that'll either earn respect or a 'quick chat'",
    corporateTranslation: {
      whatYouMean: "Stop emailing me at midnight. I was sleeping like a normal person.",
      corporateVersion: "I want to ensure I'm providing timely responses within our agreed collaboration windows."
    },
    tags: ["after-hours", "boundaries", "work-life-balance", "midnight-email"]
  },
  {
    id: "buzzword-manager-6",
    recipient: "manager",
    situation: "Manager's brief is entirely corporate buzzwords with no actual direction",
    category: "corporate-buzzwords",
    tone: 6,
    length: "long",
    subject: "Re: Q4 Synergy Alignment & Blue-Sky Ideation Sprint",
    body: "Hi Patricia,\n\nThank you for the brief. I've read it three times and run it through two translation services. I'd like to confirm my understanding:\n\nYou've asked us to 'leverage cross-functional synergies to ideate blue-sky solutions that move the needle on our value proposition while remaining aligned with our north star metrics.'\n\nHere are my clarifying questions:\n1. What are we actually making?\n2. For whom?\n3. By when?\n4. With what budget?\n\nI apologise if these questions seem basic. I realise they lack the strategic dynamism of your original brief. But I find that answering them helps me 'deliver actionable outcomes' \u2014 which I believe is corporate for 'do my job.'\n\nPlease feel free to respond in plain English. I promise not to tell anyone.\n\nBest regards",
    aggressionScore: 80,
    damageAssessment: "You've just told your boss their communication style is incomprehensible. Bold.",
    corporateTranslation: {
      whatYouMean: "I have no idea what you're asking for because you speak entirely in buzzwords.",
      corporateVersion: "I'd love to drill down on the tactical specifics to ensure maximum execution alignment."
    },
    tags: ["buzzwords", "unclear-direction", "corporate-speak", "jargon"]
  },
  {
    id: "unpaid-overtime-manager-4",
    recipient: "manager",
    situation: "Manager hints at needing you to work the weekend 'voluntarily'",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: Weekend Availability",
    body: "Hi Greg,\n\nThank you for your email asking if I had 'any exciting plans this weekend' followed immediately by asking if I could 'pop in for a few hours to wrap up the Henderson account.'\n\nI want you to know I appreciated the attempt at a casual segue. Very smooth.\n\nTo answer both questions: Yes, I do have exciting plans (sleeping, existing as a person with a life outside work), and no, I'm not available this weekend. I am, however, available Monday through Friday during the hours outlined in my contract \u2014 a document I've recently re-read with great interest.\n\nHappy to prioritise Henderson first thing Monday.\n\nBest",
    aggressionScore: 67,
    damageAssessment: "A firm but diplomatic 'no' wrapped in just enough passive aggression to be memorable",
    corporateTranslation: {
      whatYouMean: "I'm not working for free on my weekend. Stop asking.",
      corporateVersion: "I'd like to propose a prioritisation approach that accommodates delivery within our standard operating hours."
    },
    tags: ["overtime", "weekend-work", "boundaries", "work-life-balance"]
  },
  {
    id: "contradictory-feedback-manager-5",
    recipient: "manager",
    situation: "Manager gives completely opposite feedback to what they said last time",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Revisions Needed on Campaign Brief",
    body: "Hi Angela,\n\nThank you for the feedback on V4 of the campaign brief. You've asked me to 'keep it simple and strip back the detail.'\n\nI wanted to flag \u2014 and I mean this with complete professional respect \u2014 that your feedback on V3 was 'add more detail and flesh this out.' V2 feedback was 'too much detail, simplify.' V1 was 'not enough substance.'\n\nI've created a helpful table:\n- V1: Not enough \u2192 Added more\n- V2: Too much \u2192 Removed some\n- V3: Not enough \u2192 Added more\n- V4: Too much \u2192 We are here\n\nI'd love to align on a consistent direction before V5, which at this rate will need 'more detail' again. Perhaps we could schedule a brief call to establish exactly what we're aiming for? I'll bring the table.\n\nBest regards",
    aggressionScore: 77,
    damageAssessment: "Undeniable evidence of their inconsistency, delivered with surgical precision",
    corporateTranslation: {
      whatYouMean: "You keep changing your mind and wasting my time. Pick a direction.",
      corporateVersion: "I'd value the opportunity to establish consistent evaluation criteria to streamline our iteration process."
    },
    tags: ["contradictory-feedback", "revisions", "indecisive", "scope-creep"]
  },
  {
    id: "open-door-policy-manager-3",
    recipient: "manager",
    situation: "Manager says they have an 'open door policy' but is never available",
    category: "managers",
    tone: 3,
    length: "short",
    subject: "Booking Time with You",
    body: "Hi Neil,\n\nI've tried to take advantage of your open door policy this week. Unfortunately, on Monday the door was closed. On Tuesday you were in back-to-back meetings. Wednesday you were working from home. Thursday you were 'in a focus block.'\n\nI'm starting to think the open door policy refers to a specific door, in a specific building, that I have not yet located.\n\nCould I book 10 minutes through your PA? Or should I try smoke signals?\n\nThanks",
    aggressionScore: 50,
    damageAssessment: "Light enough to be endearing, pointed enough to make them check their calendar",
    corporateTranslation: {
      whatYouMean: "Your open door policy is a lie and we both know it.",
      corporateVersion: "I'd love to find a reliable channel to connect on operational items."
    },
    tags: ["open-door", "availability", "inaccessible", "management"]
  },
  {
    id: "take-ownership-manager-6",
    recipient: "manager",
    situation: "Manager asks you to 'take ownership' of a problem they created",
    category: "managers",
    tone: 6,
    length: "medium",
    subject: "Re: Ownership of Client Situation",
    body: "Hi Derek,\n\nThank you for asking me to 'take ownership' of the situation with Meridian Corp. I want to make sure I understand the full scope of what I'm owning:\n\n1. The promise you made to deliver in 2 weeks (without consulting the team)\n2. The budget you approved (without checking feasibility)\n3. The scope you agreed to (without reading the requirements)\n4. The timeline you communicated (without consulting a calendar, apparently)\n\nI'm delighted to take ownership of the solution. I just want to be transparent that the ownership of how we arrived here belongs to someone with a corner office and a fondness for saying 'yes' to clients without checking first.\n\nI'll have a recovery plan by Thursday.\n\nRegards",
    aggressionScore: 85,
    damageAssessment: "Career-defining email. Either you're getting promoted or updating LinkedIn.",
    corporateTranslation: {
      whatYouMean: "This is your mess and we both know it. But fine, I'll fix it.",
      corporateVersion: "I'm committed to driving the solution forward and would value alignment on how to prevent similar situations."
    },
    tags: ["ownership", "blame", "accountability", "cleanup", "manager-mistake"]
  },
  {
    id: "meeting-during-lunch-manager-2",
    recipient: "manager",
    situation: "Manager keeps scheduling meetings over your lunch break",
    category: "meetings",
    tone: 2,
    length: "short",
    subject: "Lunchtime Meeting Slots",
    body: "Hi Karen,\n\nI noticed our team sync has been booked at 12:30 for the past three weeks. I'm sure this wasn't intentional, but that's typically when the team eats lunch \u2014 the meal between breakfast and dinner that keeps humans operational.\n\nWould it be possible to shift to 11:30 or 1:30? My stomach and I would both appreciate it.\n\nThanks!",
    aggressionScore: 32,
    damageAssessment: "Gentle enough that they'll move it without taking offence",
    corporateTranslation: {
      whatYouMean: "Stop booking meetings during lunch. People need to eat.",
      corporateVersion: "I'd like to explore alternative time slots that support team wellbeing and sustained energy."
    },
    tags: ["lunch-meeting", "scheduling", "wellbeing", "break"]
  },
  {
    id: "urgent-not-urgent-manager-4",
    recipient: "manager",
    situation: "Manager marks everything as urgent when nothing is",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: URGENT: Team Social Venue Preferences",
    body: "Hi Brian,\n\nI received your email marked URGENT regarding our team social venue preferences. I want to confirm \u2014 this is the fourth 'urgent' email this week, following:\n\n- URGENT: Printer Toner Order (Monday)\n- URGENT: Where Are the Post-Its? (Tuesday)\n- URGENT: Someone Left the Kitchen Light On (Wednesday)\n\nI'm writing to respectfully suggest that perhaps we've been using 'urgent' quite liberally. When everything is urgent, nothing is urgent. This is both a philosophical observation and a practical concern, as I nearly missed an actually urgent client deadline because it was buried between your Post-It emergency and the light situation.\n\nPerhaps we could reserve URGENT for things that are, you know, urgent?\n\nBest",
    aggressionScore: 66,
    damageAssessment: "They'll feel called out but can't argue with the logic",
    corporateTranslation: {
      whatYouMean: "Stop crying wolf with your urgent tags. I ignore them all now.",
      corporateVersion: "I'd love to co-create a prioritisation framework that ensures critical items receive appropriate attention."
    },
    tags: ["urgent", "priority", "boy-who-cried-wolf", "email-flags"]
  },
  {
    id: "public-criticism-manager-6",
    recipient: "manager",
    situation: "Manager criticized your work in front of the whole team in a meeting",
    category: "managers",
    tone: 6,
    length: "medium",
    subject: "Follow-Up to Today's Meeting",
    body: "Hi Victoria,\n\nI wanted to follow up on today's meeting, specifically the portion where you described my client proposal as 'not quite what we discussed' in front of 14 colleagues and two external stakeholders.\n\nFor context, it was exactly what we discussed. I have the brief, the email thread, and the notes from our 1:1 where you approved the direction. I'm happy to share these artifacts with you privately, as I'd hate for you to feel uninformed in front of the same audience.\n\nIn future, I'd appreciate any feedback being shared privately first. As they say in HR training: praise publicly, criticize privately. I'm sure that was covered in the management course you mentioned attending last quarter.\n\nLooking forward to aligning.\n\nBest regards",
    aggressionScore: 88,
    damageAssessment: "Nuclear option deployed. You've drawn a line in the sand with receipts.",
    corporateTranslation: {
      whatYouMean: "You humiliated me publicly and you were wrong. I have proof. Don't ever do that again.",
      corporateVersion: "I'd value establishing a private feedback loop to ensure alignment before broader team discussions."
    },
    tags: ["public-criticism", "humiliation", "receipts", "boundaries", "respect"]
  }
];
