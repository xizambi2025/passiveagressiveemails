import { Scenario } from './types';

export const extraScenarios: Scenario[] = [
  {
    id: "wrong-name-email-client-3",
    recipient: "client",
    situation: "Client keeps calling you the wrong name in emails",
    category: "clients",
    tone: 3,
    length: "short",
    subject: "Re: Quick Update, Rebecca!",
    body: "Hi Martin,\n\nThank you for your email! Just a small note: my name is Rachel. Not Rebecca. This is the sixth email in a row, and while Rebecca sounds like a lovely person, she doesn't work here.\n\nI only mention it because we've worked together for eight months and I'd hate for you to call me Rebecca in front of others and have no one know who you're talking to.\n\nAll the best from Rachel (not Rebecca, Ruth, Rosie, or Rihanna),\nRachel",
    aggressionScore: 42,
    damageAssessment: "They'll quadruple-check the name in every future email",
    corporateTranslation: {
      whatYouMean: "You've called me the wrong name for months and I'm starting to take it personally.",
      corporateVersion: "I'd like to ensure our records reflect the correct contact name."
    },
    tags: ["wrong-name", "identity", "clients", "correction"]
  },
  {
    id: "meeting-notes-nobody-reads-coworker-4",
    recipient: "coworker",
    situation: "You send detailed meeting notes and no one reads them, then asks the same questions",
    category: "meetings",
    tone: 4,
    length: "medium",
    subject: "Re: Quick Question About the Anderson Project",
    body: "Hi Ben,\n\nYou've asked when the Anderson project is launching. The answer is June 15th. I know this because:\n\n1. I said it in the meeting on Monday\n2. I wrote it in the meeting notes sent at 3:47 PM Monday\n3. You replied to those meeting notes with 'Thanks!'\n4. You are now, on Wednesday, asking the question that was answered in the document you replied 'Thanks!' to\n\nI've highlighted the relevant section and re-attached the notes. May I gently suggest that 'Thanks!' is perhaps replaced with actually reading the document before replying to it?\n\nJune 15th. It's in bold now.\n\nBest",
    aggressionScore: 64,
    damageAssessment: "The 'you replied Thanks' evidence is devastating and hilarious",
    corporateTranslation: {
      whatYouMean: "You replied to my notes without reading them and are now asking what they said.",
      corporateVersion: "The answer is in the meeting notes \u2014 I've highlighted the relevant section for convenience."
    },
    tags: ["meeting-notes", "not-reading", "duplicate-questions", "documentation"]
  },
  {
    id: "vague-requirements-client-5",
    recipient: "client",
    situation: "Client's project brief is 'make it modern and fresh, you'll know what I mean'",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: Website Design - Creative Direction",
    body: "Hi Warren,\n\nPer your brief, you'd like the website to be 'modern, fresh, clean, with a wow factor.' You've added that I'll 'know what you mean' and should 'use my creativity.'\n\nI want to be transparent: I do not know what you mean. 'Modern' in web design could mean 500 different things. 'Fresh' is subjective. 'Clean' ranges from minimalist to completely blank. And 'wow factor' is doing a lot of heavy lifting as a creative direction.\n\nTo help translate your vision into pixels, could you:\n1. Share 3 websites you like (and what you like about them)\n2. Share 3 you hate (equally useful)\n3. Tell me who your audience is\n\nOtherwise, I'll produce something I think is modern and fresh, and you'll tell me it's not what you meant, and we'll be in revision limbo until the sun explodes.\n\nBest regards",
    aggressionScore: 72,
    damageAssessment: "Forces them to give actual direction or accept responsibility for vagueness",
    corporateTranslation: {
      whatYouMean: "'Make it nice' is not a brief. Tell me what you actually want or accept what I make.",
      corporateVersion: "I'd love to gather some visual references to ensure our creative direction aligns with your vision."
    },
    tags: ["vague-requirements", "brief", "creative-direction", "clarity"]
  },
  {
    id: "reply-to-wrong-person-coworker-2",
    recipient: "coworker",
    situation: "Coworker sent you a message clearly intended for someone else (complaining about you)",
    category: "coworkers",
    tone: 2,
    length: "short",
    subject: "Re: [Message About Me, Sent to Me]",
    body: "Hi Katie,\n\nI think you may have sent this to the wrong person. Specifically, you've sent it to me \u2014 the person you're describing as 'so annoying in meetings.'\n\nI wanted to let you know before you realise at 3 AM and have a panic attack. These things happen! Auto-complete is a menace.\n\nI'm happy to pretend this didn't happen if you are. Though if I'm genuinely annoying in meetings, I'm open to feedback through... more intentional channels.\n\nBest (and apparently annoying),\nDaniel",
    aggressionScore: 36,
    damageAssessment: "Gracious enough to seem like the bigger person while the sender dies of embarrassment",
    corporateTranslation: {
      whatYouMean: "You sent me a message complaining about me. Awkward.",
      corporateVersion: "I believe this message was misdirected and wanted to flag for your awareness."
    },
    tags: ["wrong-recipient", "embarrassing", "complaint", "mistake"]
  },
  {
    id: "humble-brag-email-coworker-4",
    recipient: "coworker",
    situation: "Coworker sends company-wide email humble-bragging about an achievement",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Sharing a Small Win!",
    body: "Hi Marcus,\n\nCongratulations on your 'small win' of landing the company's largest ever client, which you've shared with all 200 staff in an email that took 7 paragraphs to be humble about.\n\nI particularly enjoyed the phrase 'I don't usually share things like this but...' followed by sharing it with literally everyone in the company.\n\nGenuinely \u2014 well done. But next time, perhaps let your manager announce it? The false modesty of self-reported humility hitting 200 inboxes is a unique genre.\n\nBest,\n(One of 200 recipients of your small win)",
    aggressionScore: 63,
    damageAssessment: "They'll ask their manager to announce the next one instead",
    corporateTranslation: {
      whatYouMean: "Your humble brag fooled no one. Well done on the win, but the self-promotion is cringe.",
      corporateVersion: "Great achievement! Might be nice to have leadership formally recognise this."
    },
    tags: ["humble-brag", "self-promotion", "company-wide", "achievement"]
  },
  {
    id: "delegating-up-employee-4",
    recipient: "employee",
    situation: "Employee keeps coming to you with problems without trying to solve them first",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: Problem with the Analytics Report",
    body: "Hi Josh,\n\nThank you for flagging the problem with the analytics report. I notice this is the third time this week you've come to me with a problem framed as a question for me to solve.\n\nI'd like to try something new. Before bringing me the problem, could you bring me:\n1. The problem\n2. Two possible solutions you've considered\n3. Which one you'd recommend\n\nThis isn't because I don't want to help \u2014 it's because you're smarter than you think, and I believe you already know the answer to most of these. You're just outsourcing the decision to me because it feels safer.\n\nWhat would you do if I were on holiday?\n\nBest",
    aggressionScore: 55,
    damageAssessment: "Developmental without being cruel - actually helps them grow",
    corporateTranslation: {
      whatYouMean: "Stop dumping problems on my desk. Try solving them yourself first.",
      corporateVersion: "I'd love to develop your decision-making confidence through a solutions-first approach."
    },
    tags: ["delegation", "problem-solving", "empowerment", "initiative"]
  },
  {
    id: "out-of-office-ignored-coworker-5",
    recipient: "coworker",
    situation: "Coworker ignores your out-of-office and keeps emailing urgently",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: URGENT (You're On Holiday But...)",
    body: "Hi Priya,\n\nI'm replying from my holiday to acknowledge your 5 emails marked URGENT, sent despite receiving my out-of-office reply. The out-of-office that says: 'I am on annual leave until June 20th. I will not be checking emails. For urgent matters, contact Sarah.'\n\nLet me highlight the key parts:\n- 'Will not be checking' (I lied, clearly, but the intent stands)\n- 'Contact Sarah' (Did you contact Sarah? I suspect not)\n\nPer my out-of-office, which you received and apparently interpreted as a personal challenge, I'm not available. Please contact Sarah. She is available. She is expecting your call. She wonders why you haven't called.\n\nI'm going back to my sunlounger.\n\nBest",
    aggressionScore: 74,
    damageAssessment: "They'll actually read and respect out-of-office replies from now on",
    corporateTranslation: {
      whatYouMean: "I'm on holiday. My OOO told you who to contact. Why are you emailing me?",
      corporateVersion: "As noted in my out-of-office, please direct urgent matters to Sarah during my absence."
    },
    tags: ["out-of-office", "holiday", "boundaries", "urgent", "respect"]
  },
  {
    id: "last-minute-cancel-client-4",
    recipient: "client",
    situation: "Client cancels meeting 5 minutes before after you prepped for hours",
    category: "clients",
    tone: 4,
    length: "short",
    subject: "Re: Sorry - Need to Reschedule!",
    body: "Hi Amanda,\n\nNo worries about the reschedule! Things happen.\n\nJust for context, in preparation for our 2 PM meeting (cancelled at 1:55 PM), I:\n- Prepared a 15-page presentation (3 hours)\n- Rearranged two other client calls (1 hour of admin)\n- Skipped lunch (priceless, apparently)\n\nI'm flexible for rescheduling. Could I ask that future cancellations come with more than 5 minutes' notice? Even 5 hours would be transformative. My lunch, my calendar, and my blood sugar would all benefit.\n\nLooking forward to the new time.\n\nBest",
    aggressionScore: 59,
    damageAssessment: "They'll feel terrible and never cancel last-minute again",
    corporateTranslation: {
      whatYouMean: "You cancelled 5 minutes before. I'd prepped for hours. That's incredibly disrespectful.",
      corporateVersion: "I'd appreciate earlier notice for reschedules to manage preparation time effectively."
    },
    tags: ["cancellation", "last-minute", "preparation", "respect"]
  },
  {
    id: "condescending-explanation-coworker-5",
    recipient: "coworker",
    situation: "Coworker explains something to you that you literally invented",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Helpful Explanation of the CRM System",
    body: "Hi Brad,\n\nThank you for your detailed email explaining how the CRM system works. I particularly appreciated the bullet points, the screenshots, and the suggestion to 'ask me if you have questions.'\n\nI want to share a fun fact: I built that system. In 2021. Over 6 months. Every feature you've described was designed, developed, and deployed by me. The documentation you've summarised? I wrote it.\n\nI'm genuinely touched that you thought I needed a tutorial on my own creation. It's like explaining water to a fish, or gravity to Newton, or email to whoever invented email.\n\nBut truly \u2014 thank you for the thought. If you have any questions about the system, you know where I am. Because I made it.\n\nBest regards",
    aggressionScore: 78,
    damageAssessment: "They will never explain anything to you again without checking first",
    corporateTranslation: {
      whatYouMean: "You just explained my own work to me. The audacity.",
      corporateVersion: "Thank you for the overview \u2014 happy to share deeper technical context given my involvement in the system's development."
    },
    tags: ["mansplaining", "condescending", "expertise", "ownership"]
  },
  {
    id: "scheduling-conflict-coworker-3",
    recipient: "coworker",
    situation: "Coworker books meeting at same time as your visible calendar block",
    category: "meetings",
    tone: 3,
    length: "short",
    subject: "Re: Team Planning - Wednesday 2 PM",
    body: "Hi Emily,\n\nI'd love to join Wednesday's planning session! Unfortunately, I have a client call at 2 PM, which you may have noticed as the large purple block in my calendar labeled 'CLIENT CALL - DO NOT BOOK OVER.'\n\nCalendar transparency only works if we look at each other's calendars before booking. Mine is colour-coded, up-to-date, and apparently invisible.\n\nCould we try 3:30 PM instead? I'll be free, willing, and not on the phone to someone paying us money.\n\nThanks!",
    aggressionScore: 49,
    damageAssessment: "They'll actually check calendars before booking from now on",
    corporateTranslation: {
      whatYouMean: "You booked over my calendar block. It was clearly marked. Look before you book.",
      corporateVersion: "I have a conflict at that time \u2014 happy to suggest alternatives that accommodate existing commitments."
    },
    tags: ["calendar-conflict", "scheduling", "visibility", "booking"]
  },
  {
    id: "ghosting-interview-manager-4",
    recipient: "manager",
    situation: "Applied for internal promotion with no response for 6 weeks",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Internal Promotion Application - Status Update?",
    body: "Hi Catherine,\n\nI'm following up on my application for the Senior Developer position, submitted 6 weeks ago. I've heard nothing since, which is either:\n\na) A rejection communicated via the medium of silence\nb) An administrative oversight\nc) A psychological endurance test\n\nI'd appreciate knowing which, as the uncertainty is interfering with my ability to pretend everything is fine in our 1:1s. If it's (a), I'd value feedback. If it's (b), a quick update would be lovely. If it's (c), please let me know how many more weeks of stoic uncertainty are required to pass.\n\nLooking forward to any form of acknowledgment.\n\nBest",
    aggressionScore: 62,
    damageAssessment: "They'll reply today with profuse apologies and an update",
    corporateTranslation: {
      whatYouMean: "It's been 6 weeks with no response on my promotion application. Am I dead to you?",
      corporateVersion: "I'd appreciate a status update on my application to support my professional development planning."
    },
    tags: ["promotion", "ghosting", "application", "internal", "feedback"]
  },
  {
    id: "passive-noted-coworker-6",
    recipient: "coworker",
    situation: "Responding to someone who replied 'Noted.' to your detailed proposal",
    category: "coworkers",
    tone: 6,
    length: "short",
    subject: "Re: Q4 Proposal",
    body: "Hi Jason,\n\nThank you for your response to my 12-page proposal. 'Noted.' A word that conveys so much while saying so little. The period at the end is particularly powerful \u2014 it creates a finality that Shakespeare himself would envy.\n\nI'm curious: was it noted with approval? Noted with disagreement? Noted with indifference? Noted in the same way one might note a cloud passing overhead \u2014 observed but fundamentally unimportant?\n\nI spent 40 hours on that proposal. 'Noted.' contains 5 letters and a full stop. The asymmetry is breathtaking.\n\nCould you perhaps elaborate? Even one additional word would double your output.\n\nRegards.",
    aggressionScore: 82,
    damageAssessment: "They'll never reply 'Noted.' to you again without PTSD flashbacks",
    corporateTranslation: {
      whatYouMean: "'Noted' is the most dismissive response possible and you know it.",
      corporateVersion: "I'd appreciate detailed feedback on the proposal to understand your position and next steps."
    },
    tags: ["noted", "dismissive", "effort", "response", "minimal"]
  },
  {
    id: "surprise-deadline-coworker-4",
    recipient: "coworker",
    situation: "Coworker mentions a deadline in passing that you're supposed to be part of",
    category: "deadlines",
    tone: 4,
    length: "short",
    subject: "Re: The Friday Submission",
    body: "Hi Lewis,\n\nIn today's meeting you mentioned 'the submission due Friday' that apparently requires my contribution. I have a few concerns:\n\n1. Today is Wednesday\n2. No one told me about this\n3. 'Your section' implies I have a section\n4. I do not have a section because (see point 2)\n\nI'm delighted to contribute! However, this requires two things: knowing the task exists, and having more than 48 hours to complete it. We've failed on both counts.\n\nPlease send me the brief immediately and a realistic timeline. 'Friday' is not realistic. 'Next Friday' might be.\n\nBest",
    aggressionScore: 63,
    damageAssessment: "Impossible to argue with the logic - they clearly failed to communicate",
    corporateTranslation: {
      whatYouMean: "No one told me about this and now you want it in 2 days? That's insane.",
      corporateVersion: "I'd appreciate earlier visibility on shared deliverables to ensure quality contributions."
    },
    tags: ["surprise-deadline", "communication", "notice", "assignment"]
  },
  {
    id: "kitchen-mess-coworker-3",
    recipient: "coworker",
    situation: "Someone leaves dirty dishes in the kitchen sink every day",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Kitchen Sink Archaeology",
    body: "Hi Team,\n\nThe kitchen sink currently contains 4 mugs, 2 plates, a fork, and what I believe is a bowl from last Wednesday. We have a dishwasher. It is 3 feet from the sink. It is not full. It takes 4 seconds to open and place items inside.\n\nThe sink is not a staging area. It is not a 'I'll deal with it later' zone. It is not a museum of abandoned crockery.\n\nI've started naming the mugs. Brian (the one with coffee residue that's achieved sentience) has been there since Monday. He deserves to go home \u2014 to the dishwasher.\n\nPlease collect your items.\n\nThanks",
    aggressionScore: 44,
    damageAssessment: "Brian the mug will haunt the culprit into action",
    corporateTranslation: {
      whatYouMean: "Wash your dishes. You're not children. The dishwasher is RIGHT THERE.",
      corporateVersion: "I'd like to reinforce our shared kitchen protocols for everyone's benefit."
    },
    tags: ["kitchen", "dishes", "mess", "shared-space", "etiquette"]
  },
  {
    id: "emotional-labor-coworker-5",
    recipient: "coworker",
    situation: "Coworker always dumps emotional problems on you then ignores your work questions",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Our Communication Dynamic",
    body: "Hi Natalie,\n\nI've noticed an interesting pattern in our interactions and wanted to flag it:\n\nWhen you need to vent: 40-minute conversations at my desk about your frustrations\nWhen I need a one-line answer to a work question: 'Sorry, super busy right now!'\n\nYou've spent approximately 6 hours this month telling me about inter-departmental politics. I've spent approximately 3 weeks waiting for you to confirm which template we're using.\n\nI value our friendship! But I'd like the emotional support to be roughly... bilateral? And the work communication to be... existent?\n\nCoffee Thursday? We can discuss this and also, finally, the template question.\n\nBest",
    aggressionScore: 70,
    damageAssessment: "Direct enough to shift the dynamic without destroying the friendship",
    corporateTranslation: {
      whatYouMean: "You use me as a therapist but can't answer a simple work question. That's not fair.",
      corporateVersion: "I'd like to ensure our professional communication is as strong as our personal rapport."
    },
    tags: ["emotional-labor", "one-sided", "boundaries", "communication"]
  },
  {
    id: "passive-aggressive-thumbs-up-coworker-4",
    recipient: "coworker",
    situation: "Coworker responds to your detailed Slack message with just a thumbs up emoji",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: The Thumbs Up",
    body: "Hi Kate,\n\nI sent you a 4-paragraph Slack message outlining the revised project plan, including timeline changes, budget implications, and three questions requiring your input.\n\nYou responded: \ud83d\udc4d\n\nI need to understand what the thumb approves of. Does it approve the timeline? The budget? The existential questions about our strategic direction? Does the thumb mean 'yes to all,' 'acknowledged,' or 'I'm too busy to engage but didn't want to leave you on read'?\n\nOne thumb cannot carry this much interpretive weight. Could you use words? Even small ones. Even 'yes' would be an upgrade.\n\nBest",
    aggressionScore: 62,
    damageAssessment: "They'll write actual responses from now on (or at least use more specific emojis)",
    corporateTranslation: {
      whatYouMean: "A thumbs up is not a response to questions that need actual answers.",
      corporateVersion: "I'd appreciate written confirmation on the specific decision points raised."
    },
    tags: ["emoji-response", "minimal-effort", "questions", "engagement"]
  },
  {
    id: "unpaid-trial-shift-freelancer-6",
    recipient: "freelancer",
    situation: "Company asks for unpaid 'trial day' of work to 'assess fit'",
    category: "invoices",
    tone: 6,
    length: "medium",
    subject: "Re: Trial Day Opportunity",
    body: "Hi Richard,\n\nThank you for inviting me to complete an unpaid trial day. I've reviewed the scope: 8 hours of design work, a presentation to your leadership team, and a completed deliverable you'll keep regardless of outcome.\n\nI have a counter-proposal. How about you complete an unpaid trial day for me? Spend 8 hours demonstrating you're a client worth working for. Present evidence to my leadership team (my cat). Produce a deliverable (payment) that I'll keep regardless.\n\nNo? That feels exploitative? Interesting.\n\nI'm happy to provide portfolio work, references, and a paid 2-hour workshop that gives you a taste of my approach. I'm less happy providing a free working day disguised as an 'opportunity.'\n\nBest regards",
    aggressionScore: 85,
    damageAssessment: "The counter-proposal mirror technique is so perfect they'll feel ridiculous",
    corporateTranslation: {
      whatYouMean: "Unpaid trial days are exploitation. I don't work for free.",
      corporateVersion: "I'd suggest a paid discovery session as an alternative assessment approach."
    },
    tags: ["unpaid-trial", "exploitation", "free-work", "boundaries", "value"]
  },
  {
    id: "vague-feedback-round-two-client-4",
    recipient: "client",
    situation: "Client's only feedback is 'I'll know it when I see it'",
    category: "clients",
    tone: 4,
    length: "short",
    subject: "Re: Design Direction",
    body: "Hi Miranda,\n\nPer our call, your creative direction is: 'I'll know it when I see it.'\n\nWhile I appreciate the air of mystery, this approach essentially means I'm playing a guessing game where you hold the answer, I provide unlimited attempts, and each wrong guess costs both of us time and money.\n\nMight I suggest an alternative: you tell me three things you definitely want, three things you definitely don't want, and I'll produce something in that territory? This way, at least 6 variables are locked in and I'm guessing within a finite space rather than the entire universe of possible designs.\n\nBest regards",
    aggressionScore: 60,
    damageAssessment: "Forces them to articulate something - anything - concrete",
    corporateTranslation: {
      whatYouMean: "'I'll know it when I see it' is not direction. Give me something to work with.",
      corporateVersion: "I'd love to establish some creative guardrails to ensure our exploration is productive."
    },
    tags: ["vague-feedback", "unclear-direction", "creative", "guessing"]
  },
  {
    id: "linkedin-notification-coworker-3",
    recipient: "coworker",
    situation: "Coworker who sits next to you sends a LinkedIn connection request",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Your LinkedIn Request",
    body: "Hi Steve,\n\nI received your LinkedIn connection request this morning. I accepted, of course \u2014 though I should mention you're currently sitting 4 feet away from me. We spoke 20 minutes ago. About lunch.\n\nI'm curious about the LinkedIn message: 'I'd love to connect and explore potential synergies.' Steve, we share a printer. We've discussed your dog's surgery in detail. Our synergies are well-established.\n\nI look forward to endorsing your skills from my desk, which is, again, 4 feet from yours.\n\nBest,\nYour connection (and neighbour)",
    aggressionScore: 40,
    damageAssessment: "So funny they'll share it with the whole office (including you)",
    corporateTranslation: {
      whatYouMean: "We sit next to each other. Why are you sending me LinkedIn requests like we're strangers?",
      corporateVersion: "Connected! Always happy to strengthen professional networks."
    },
    tags: ["linkedin", "social-media", "proximity", "formal", "funny"]
  },
  {
    id: "status-update-meeting-coworker-4",
    recipient: "coworker",
    situation: "Team lead wants to go around the room for updates when everyone already posted them in Slack",
    category: "meetings",
    tone: 4,
    length: "short",
    subject: "Re: Daily Standup Format",
    body: "Hi Mike,\n\nQuick thought on our daily standup: we spend 25 minutes going around the room verbally sharing updates that every single person already posted in the #standup Slack channel at 9 AM.\n\nThe current format is: write update, then read update aloud, to people who've already read the update. It's like a book club where everyone reads the book and then someone reads it to them again, slower.\n\nCould we trial an async standup? Updates in Slack, meeting only if something needs discussion? The revolutionary idea being: if no one has anything to add beyond what they've written, we could all have 25 minutes back.\n\nThoughts?\n\nBest",
    aggressionScore: 58,
    damageAssessment: "So logical that they can't argue, so funny that they won't be offended",
    corporateTranslation: {
      whatYouMean: "Why do we read aloud what we already wrote down? This meeting is redundant.",
      corporateVersion: "I'd like to propose an async-first standup model to respect everyone's time."
    },
    tags: ["standup", "async", "redundant", "slack", "productivity"]
  },
  {
    id: "delivery-tracking-supplier-3",
    recipient: "supplier",
    situation: "Tracking shows 'delivered' but nothing arrived",
    category: "suppliers",
    tone: 3,
    length: "medium",
    subject: "Order #6654 - Tracking Says Delivered, Reality Disagrees",
    body: "Hi Mark,\n\nI'm writing about Order #6654, which according to your tracking system was 'delivered and signed for' on Tuesday. I have a concern: it wasn't.\n\nI've checked the reception area, the loading bay, the post room, under my desk, and (in a moment of desperation) the car park. Nothing. No package, no attempted delivery card, no evidence that a courier visited our building at all.\n\nYour tracking says it was signed for by 'M. Jones.' We don't have an M. Jones. We've never had an M. Jones. I'm beginning to think M. Jones is either fictional or receiving a lot of packages that aren't theirs.\n\nCould you investigate with your courier? Happy to confirm our delivery address again.\n\nBest regards",
    aggressionScore: 50,
    damageAssessment: "Evidence-based and slightly funny - they'll investigate immediately",
    corporateTranslation: {
      whatYouMean: "Your tracking is wrong. It wasn't delivered. Find my package.",
      corporateVersion: "I'd appreciate a courier investigation as the delivery confirmation doesn't match our records."
    },
    tags: ["delivery", "tracking", "missing-package", "courier"]
  },
  {
    id: "double-booking-coworker-5",
    recipient: "coworker",
    situation: "Coworker double-booked a meeting room and insists their meeting is more important",
    category: "meetings",
    tone: 5,
    length: "short",
    subject: "Re: Room 4B - 2 PM Conflict",
    body: "Hi Oliver,\n\nPer your email stating that your 2 PM meeting in Room 4B is 'more important' than mine and suggesting I 'find another space':\n\nI booked Room 4B two weeks ago. You booked it yesterday. The booking system shows this clearly, with timestamps, because that's how booking systems work. They establish who was first. I was first.\n\n'Importance' is not a valid override for 'I booked it after you.' Otherwise, every meeting would devolve into a philosophical debate about relative significance.\n\nYou're welcome to use the smaller room on Floor 3. It's available, adequate, and doesn't belong to me.\n\nRegards",
    aggressionScore: 74,
    damageAssessment: "Undeniable logic backed by system timestamps - they'll back down",
    corporateTranslation: {
      whatYouMean: "I booked it first. Your meeting isn't more important. Find your own room.",
      corporateVersion: "I'd suggest checking room availability as my booking predates your request."
    },
    tags: ["room-booking", "conflict", "priority", "scheduling"]
  },
  {
    id: "weekend-slack-coworker-4",
    recipient: "coworker",
    situation: "Coworker Slacks you on Saturday morning about non-urgent work",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Saturday Message",
    body: "Hi Tom,\n\nI received your Slack message at 8:47 AM on Saturday asking about the font size in the Henderson deck.\n\nI want to address two things:\n1. It's 14pt\n2. It's Saturday\n\nOne of these things could have waited until Monday. I'll let you figure out which one. (It's the question about font size. The font doesn't change over the weekend. It'll still be 14pt on Monday. Fonts are patient like that.)\n\nEnjoy the rest of your weekend!\n\nBest",
    aggressionScore: 58,
    damageAssessment: "Answers the question while making clear this was not OK timing",
    corporateTranslation: {
      whatYouMean: "Don't message me about font sizes on a Saturday morning.",
      corporateVersion: "I'll address non-urgent queries during business hours to maintain sustainable work practices."
    },
    tags: ["weekend", "boundaries", "non-urgent", "work-life-balance"]
  },
  {
    id: "feature-request-as-bug-client-5",
    recipient: "client",
    situation: "Client reports a 'bug' that is actually a feature they want but never paid for",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: BUG - Calendar Feature Not Working",
    body: "Hi Greg,\n\nPer your bug report: 'The calendar doesn't show events in multiple timezones simultaneously.' I've investigated thoroughly and can confirm \u2014 this is not a bug.\n\nA bug is when something that should work doesn't work. A feature request is when something you'd like to exist doesn't exist yet. These are different things. One I fix for free. The other I build for money.\n\nYour website was scoped as a single-timezone calendar. It performs this function perfectly. Multi-timezone support is a feature we'd be happy to build, for approximately \u00a33,200 and 2 weeks of development.\n\nShall I prepare a formal quote, or shall we close this 'bug'?\n\nBest regards",
    aggressionScore: 73,
    damageAssessment: "Clear distinction that prevents this tactic from working again",
    corporateTranslation: {
      whatYouMean: "That's not a bug, it's a feature you didn't pay for. Nice try.",
      corporateVersion: "I've reclassified this from a defect to an enhancement opportunity and can provide a scope estimate."
    },
    tags: ["bug-vs-feature", "scope-creep", "definition", "paid-work"]
  },
  {
    id: "expense-policy-manager-3",
    recipient: "manager",
    situation: "Manager rejected your reasonable expense claim with no explanation",
    category: "managers",
    tone: 3,
    length: "short",
    subject: "Re: Expense Claim #2247 - Rejected",
    body: "Hi Laura,\n\nI notice my expense claim for \u00a312.50 (client lunch, pre-approved) was rejected. The system just says 'Declined by L. Mitchell' with no further comment.\n\nI'm curious about the reason, as this falls within policy, was pre-approved via email (attached), and is considerably less than the \u00a342 team dinner expense you approved for Kevin last week (visible on the shared expense tracker).\n\nI'm sure there's a rational explanation, and I'd love to hear it before I resubmit.\n\nThanks!",
    aggressionScore: 50,
    damageAssessment: "The Kevin comparison makes favouritism impossible to deny",
    corporateTranslation: {
      whatYouMean: "You rejected my cheap expense but approved Kevin's expensive one. Explain that.",
      corporateVersion: "I'd appreciate understanding the rejection criteria to ensure future compliance."
    },
    tags: ["expenses", "rejection", "inconsistency", "favouritism"]
  }
];
