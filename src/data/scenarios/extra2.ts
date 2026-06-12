import { Scenario } from './types';

export const extra2Scenarios: Scenario[] = [
  {
    id: "unsubscribe-coworker-4",
    recipient: "coworker",
    situation: "Coworker adds you to group chats and newsletters without asking",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Added to 'Fun Committee' Chat",
    body: "Hi Lisa,\n\nI notice I've been added to 7 new group chats this month, all without my consent. These include:\n- 'Fun Committee' (168 unread messages)\n- 'Lunch Ideas' (daily polls I never vote in)\n- 'Office Banter' (I am not bantering)\n- 'Fitness Challenge' (I am absolutely not challenging)\n\nI appreciate the inclusivity, but being silently enrolled in group chats is the digital equivalent of someone signing you up for a marathon while you sleep.\n\nCould you ask before adding me to things? A simple 'interested?' would suffice. The answer will often be 'no,' but I'd like the dignity of saying it.\n\nBest",
    aggressionScore: 60,
    damageAssessment: "They'll ask permission next time (and accept 'no' gracefully)",
    corporateTranslation: {
      whatYouMean: "Stop adding me to things without asking. I don't want to be in your group chats.",
      corporateVersion: "I'd appreciate an opt-in approach to group communications for channel management."
    },
    tags: ["group-chats", "consent", "notifications", "boundaries"]
  },
  {
    id: "late-joiners-meeting-coworker-3",
    recipient: "coworker",
    situation: "Someone consistently joins meetings 10 minutes late and asks 'what did I miss?'",
    category: "meetings",
    tone: 3,
    length: "short",
    subject: "Re: Meeting Start Times",
    body: "Hi Claire,\n\nQuick thought: you've joined the last 6 meetings approximately 10 minutes late and opened with 'sorry, what did I miss?' Each time, we've then spent 5 minutes recapping for you what the punctual attendees already covered.\n\nThat's 30 minutes over 6 meetings of the group repeating themselves because one person missed the start. If this were a play, you'd miss the first act and ask the entire cast to rewind.\n\nCould we try being on time, or \u2014 if that's not possible \u2014 catching up from the meeting notes rather than the meeting participants?\n\nThanks!",
    aggressionScore: 52,
    damageAssessment: "The theatre analogy is relatable enough to change behavior",
    corporateTranslation: {
      whatYouMean: "Stop being late and making everyone repeat themselves.",
      corporateVersion: "I'd love to ensure we maximise everyone's time by starting promptly."
    },
    tags: ["late", "meetings", "recap", "punctuality", "respect"]
  },
  {
    id: "backhanded-compliment-coworker-5",
    recipient: "coworker",
    situation: "Coworker gives you a backhanded compliment in front of others",
    category: "coworkers",
    tone: 5,
    length: "short",
    subject: "Re: Today's Presentation",
    body: "Hi Victoria,\n\nThank you for your feedback after my presentation today. Specifically: 'That was really good! Way better than I expected from you!'\n\nI want to unpack that slightly. The compliment is appreciated. The 'from you' part less so. It implies a baseline expectation of mediocrity that I've momentarily exceeded, which is simultaneously praise and an insult.\n\nIn future, might I suggest simply 'That was really good!' and stopping there? The second half undid the first half, like a compliment sandwich where both bread slices are insults.\n\nBest regards",
    aggressionScore: 71,
    damageAssessment: "They'll think about their phrasing much more carefully in future",
    corporateTranslation: {
      whatYouMean: "Your 'compliment' was actually an insult and I'm not letting it slide.",
      corporateVersion: "I appreciate the feedback and would welcome direct, constructive observations."
    },
    tags: ["backhanded-compliment", "insult", "feedback", "respect"]
  },
  {
    id: "password-sharing-coworker-4",
    recipient: "coworker",
    situation: "Coworker asks for your login credentials because theirs 'aren't working'",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Re: Can I Borrow Your Login?",
    body: "Hi James,\n\nPer your request for my login credentials because yours 'aren't working' \u2014 I'm going to have to decline. Not because I don't trust you (though that's also true of anyone asking for passwords), but because:\n\n1. IT policy explicitly forbids this\n2. Security training (which we both completed last month) explicitly forbids this\n3. Everything done under my login looks like me doing it\n\nI've CC'd IT support who can reset your access in approximately 10 minutes. Which is faster than the disciplinary hearing we'd both enjoy if I shared my credentials.\n\nHappy to help in other ways!\n\nBest",
    aggressionScore: 58,
    damageAssessment: "Protects you while educating them, CC'ing IT closes the conversation",
    corporateTranslation: {
      whatYouMean: "No. I'm not giving you my password. Contact IT like a normal person.",
      corporateVersion: "I've escalated to IT support who can restore your access through proper channels."
    },
    tags: ["security", "password", "credentials", "policy", "IT"]
  },
  {
    id: "wrong-format-delivery-supplier-4",
    recipient: "supplier",
    situation: "Supplier keeps sending files in the wrong format despite multiple requests",
    category: "suppliers",
    tone: 4,
    length: "medium",
    subject: "Re: Monthly Report - Format Request (Attempt #4)",
    body: "Hi Diana,\n\nThank you for this month's report. I'm writing to request, for the fourth time, that it be sent in Excel format rather than PDF.\n\nOur conversation history:\n- January: 'Could you send as Excel?' - 'Sure!' (PDF received)\n- February: 'Excel please, not PDF' - 'Of course!' (PDF received)\n- March: 'Just to be clear: .xlsx not .pdf' - 'Got it!' (PDF received)\n- April: We are here. (PDF received)\n\nI appreciate the consistency, even if it's consistently wrong. The PDF is useless to us because we need to manipulate the data. A PDF of data is like a photograph of food \u2014 you can look at it but you can't eat it.\n\nPlease. Excel. .xlsx. The green icon. The one with cells.\n\nBest regards",
    aggressionScore: 64,
    damageAssessment: "The photograph of food analogy is so perfect they'll remember it every time they export",
    corporateTranslation: {
      whatYouMean: "How many times do I need to ask for Excel before you stop sending PDF?",
      corporateVersion: "I'd appreciate receiving the data in editable format to support our analytical requirements."
    },
    tags: ["file-format", "repeated-request", "pdf", "excel", "data"]
  },
  {
    id: "toxic-positivity-manager-4",
    recipient: "manager",
    situation: "Manager responds to every genuine concern with 'stay positive!'",
    category: "managers",
    tone: 4,
    length: "medium",
    subject: "Re: Team Concerns (Not a Positivity Issue)",
    body: "Hi Wendy,\n\nThank you for your response to my email about the team being understaffed, overworked, and approaching burnout. Your advice to 'stay positive and focus on what we can control!' is noted.\n\nHowever, I'd like to suggest that some problems require solutions rather than attitude adjustments. The team isn't struggling because we're insufficiently optimistic. We're struggling because we're 3 people doing the work of 7.\n\nPositive thinking cannot complete a project plan. Good vibes cannot write code. And 'staying positive' while drowning is just smiling underwater.\n\nCould we discuss actual solutions? Like hiring, or reducing scope, or redistributing work? Things that change circumstances rather than feelings about circumstances?\n\nBest regards",
    aggressionScore: 70,
    damageAssessment: "The 'smiling underwater' line will haunt them into taking action",
    corporateTranslation: {
      whatYouMean: "Stop telling us to be positive and actually fix the problem.",
      corporateVersion: "I'd appreciate discussing structural solutions alongside our resilience-building approach."
    },
    tags: ["toxic-positivity", "burnout", "understaffed", "solutions", "action"]
  },
  {
    id: "email-formatting-coworker-3",
    recipient: "coworker",
    situation: "Coworker sends emails in 7 different fonts, sizes, and colors",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Email Formatting Quick Note",
    body: "Hi Barbara,\n\nA small observation about your emails: they arrive in what I can only describe as 'chaotic rainbow.' Today's message contained Comic Sans, Times New Roman, AND Arial Bold \u2014 in red, blue, and green \u2014 across three different font sizes.\n\nReading them is like decoding a ransom note assembled from different newspapers.\n\nMight I suggest a single font? Any font. At a single size. In a single colour (black, traditionally). Outlook has a default setting that handles all of this automatically.\n\nI appreciate the artistic expression, but it does make the content slightly challenging to take seriously.\n\nThanks!",
    aggressionScore: 46,
    damageAssessment: "The ransom note comparison is devastating but not aggressive",
    corporateTranslation: {
      whatYouMean: "Your emails look insane. Use normal formatting please.",
      corporateVersion: "I'd like to suggest standardised email formatting for professional consistency."
    },
    tags: ["email-formatting", "fonts", "professionalism", "readability"]
  },
  {
    id: "competitive-one-upping-coworker-5",
    recipient: "coworker",
    situation: "Coworker one-ups everything you say in conversations",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "A Friendly Observation",
    body: "Hi Grant,\n\nI've noticed a pattern in our conversations and wanted to flag it with warmth:\n\n- Me: 'I'm tired today.' You: 'You think you're tired? I only got 3 hours.'\n- Me: 'Big workload this week.' You: 'Mine's twice yours, easily.'\n- Me: 'I had a nice holiday.' You: 'Oh we went somewhere better.'\n- Me: 'I stubbed my toe.' You: (probably) 'I once lost an entire leg.'\n\nPer my observation, every shared experience becomes a competition in which you've done it more, harder, or better. It's Olympic-level one-upmanship.\n\nI'm not competing. I'm just sharing. It's possible for two people to be tired simultaneously without ranking the tiredness.\n\nJust a thought.\n\nBest",
    aggressionScore: 68,
    damageAssessment: "The pattern documentation makes it impossible to deny",
    corporateTranslation: {
      whatYouMean: "Everything is a competition with you and it's exhausting. Stop one-upping people.",
      corporateVersion: "I'd love to foster more collaborative and empathetic exchanges in our conversations."
    },
    tags: ["one-upping", "competition", "empathy", "conversation", "pattern"]
  },
  {
    id: "unnecessary-urgency-supplier-5",
    recipient: "supplier",
    situation: "Supplier marks their marketing emails as 'High Priority'",
    category: "suppliers",
    tone: 5,
    length: "short",
    subject: "Re: [HIGH PRIORITY] Summer Sale - 10% Off Binders!",
    body: "Hi Sales Team,\n\nI received your email about a 10% discount on binders, marked as HIGH PRIORITY. I want to address the priority classification:\n\nHigh priority: Building on fire. Data breach. Medical emergency.\nNot high priority: Binders being slightly cheaper than usual.\n\nPer my inbox settings, high priority emails trigger an urgent notification on my phone. I was in a client meeting. My phone buzzed urgently. I excused myself thinking something was wrong. It was binders. Discounted binders.\n\nPlease remove the priority flag from promotional emails. My nervous system would appreciate it.\n\nRegards",
    aggressionScore: 70,
    damageAssessment: "They'll take you off the marketing list entirely (bonus outcome)",
    corporateTranslation: {
      whatYouMean: "Stop marking your junk mail as urgent. A binder sale is not an emergency.",
      corporateVersion: "I'd appreciate standard priority settings on promotional communications."
    },
    tags: ["urgency", "marketing", "priority-abuse", "email", "notifications"]
  },
  {
    id: "dress-code-commentary-coworker-3",
    recipient: "coworker",
    situation: "Coworker comments on what you wear every single day",
    category: "coworkers",
    tone: 3,
    length: "short",
    subject: "Morning Greetings and Outfit Reviews",
    body: "Hi Sandra,\n\nI appreciate your daily interest in my wardrobe! This week's commentary has included:\n\n- Monday: 'Ooh, fancy today!'\n- Tuesday: 'Dressed down today, are we?'\n- Wednesday: 'Is that new?'\n- Thursday: 'Didn't you wear that last week?'\n\nI want to clarify: I'm not a fashion show. There's no audience participation element to my getting dressed. I simply put on clothes each morning without expecting a review.\n\nCould we try 'good morning' without the sartorial analysis? My self-consciousness and I would appreciate it.\n\nThanks!",
    aggressionScore: 44,
    damageAssessment: "Light enough to seem friendly but clear enough to stop the commentary",
    corporateTranslation: {
      whatYouMean: "Stop commenting on my clothes every day. It's weird and makes me self-conscious.",
      corporateVersion: "I'd prefer our greetings focus on professional matters rather than personal appearance."
    },
    tags: ["appearance", "commentary", "boundaries", "daily", "clothing"]
  },
  {
    id: "blame-email-trail-manager-6",
    recipient: "manager",
    situation: "Manager threw you under the bus in front of senior leadership but you have email proof",
    category: "managers",
    tone: 6,
    length: "long",
    subject: "Clarification on Today's Leadership Meeting",
    body: "Hi Stephen,\n\nI'd like to address what happened in today's leadership meeting, specifically the moment you said: 'Unfortunately, the delay was due to [my name]'s team missing the handoff window.'\n\nI've attached the following for your records:\n1. Your email (March 3) approving the revised timeline\n2. Your email (March 10) requesting we delay the handoff to accommodate your stakeholder review\n3. The Slack message (March 14) where you wrote 'no rush on the handoff, next week is fine'\n4. My email (March 20) confirming the adjusted handoff date YOU requested\n\nTo summarise: the handoff was on time. It was on the time you set. The delay occurred because you moved the goalposts, forgot you'd moved them, and then blamed us for being where you told us to be.\n\nI'd like to discuss how we correct the record with leadership. I trust that won't be necessary twice.\n\nBest regards",
    aggressionScore: 92,
    damageAssessment: "This is the email equivalent of bringing a bazooka to a knife fight. Nuclear.",
    corporateTranslation: {
      whatYouMean: "You blamed me publicly for something you caused. I have proof. Fix it or I escalate.",
      corporateVersion: "I'd like to ensure leadership has accurate context regarding the timeline and would welcome a correction."
    },
    tags: ["blame", "under-the-bus", "receipts", "leadership", "accountability"]
  },
  {
    id: "unnecessary-meeting-invite-coworker-3",
    recipient: "coworker",
    situation: "Invited to a meeting that has nothing to do with your role",
    category: "meetings",
    tone: 3,
    length: "short",
    subject: "Re: Facilities Team Budget Planning - Quarterly Review",
    body: "Hi Diane,\n\nI've received the invite for the Facilities Budget Planning meeting. Quick question: I'm a software developer. Is my attendance required for a discussion about... bathroom soap suppliers and carpet cleaning schedules?\n\nI ask with genuine curiosity, not sarcasm (okay, slight sarcasm). If there's a technology component I'm missing, I'm happy to attend. If I'm invited because the meeting system auto-includes everyone in the building, perhaps I could be removed?\n\nI say this with love for both facilities and carpets. I just can't meaningfully contribute to either.\n\nThanks!",
    aggressionScore: 43,
    damageAssessment: "Funny enough that they'll double-check invite lists going forward",
    corporateTranslation: {
      whatYouMean: "Why am I invited to this? It has nothing to do with me.",
      corporateVersion: "I wanted to confirm my attendance is required given the agenda seems outside my functional scope."
    },
    tags: ["irrelevant-meeting", "wrong-invite", "role", "time-wasting"]
  },
  {
    id: "instant-reply-expectation-manager-5",
    recipient: "manager",
    situation: "Manager expects instant replies to Slack messages during deep work",
    category: "managers",
    tone: 5,
    length: "medium",
    subject: "Re: Response Time Expectations",
    body: "Hi Daniel,\n\nPer your message 'Are you there??' sent 4 minutes after your first message, I want to address response time expectations.\n\nThe reason I didn't reply instantly is that I was doing the thing you pay me to do: writing code. This requires concentration. Concentration requires not checking Slack every 4 minutes. These facts are in tension with your expectation that I respond within the time it takes to make a cup of tea.\n\nI propose a system:\n- Slack message: I'll respond within 1-2 hours\n- Urgent Slack: Mark it with \ud83d\udea8 and I'll respond within 15 mins\n- Building on fire: Call me\n\n4 minutes of silence does not mean I'm dead, ignoring you, or job hunting. It means I'm working.\n\nBest regards",
    aggressionScore: 71,
    damageAssessment: "The 'doing the thing you pay me to do' line is undeniable",
    corporateTranslation: {
      whatYouMean: "Stop expecting instant replies. I'm busy doing actual work.",
      corporateVersion: "I'd like to align on response time expectations that balance deep work with team communication."
    },
    tags: ["response-time", "slack", "deep-work", "focus", "expectations"]
  },
  {
    id: "unprompted-advice-coworker-4",
    recipient: "coworker",
    situation: "Coworker gives unsolicited life advice constantly",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Regarding Your Advice",
    body: "Hi Dave,\n\nThank you for today's unsolicited suggestion that I should 'try meditation' because I looked 'a bit stressed.' This follows last week's advice to 'drink more water,' Monday's recommendation to 'try the 5 AM club,' and the ongoing suggestion that I 'really should read that book.'\n\nI appreciate the concern! However, I want to gently establish that looking slightly tired on a Thursday is not an invitation for a wellness intervention.\n\nI'm fine. I'm just a person at work with a face that sometimes looks how it looks.\n\nCould we try just 'morning!' tomorrow? No diagnostics required.\n\nBest",
    aggressionScore: 57,
    damageAssessment: "They'll keep their wellness tips to themselves going forward",
    corporateTranslation: {
      whatYouMean: "I didn't ask for your advice. Stop diagnosing me based on my face.",
      corporateVersion: "I appreciate the concern and will seek guidance when needed."
    },
    tags: ["unsolicited-advice", "boundaries", "wellness", "personal-space"]
  },
  {
    id: "scope-definition-client-5",
    recipient: "client",
    situation: "Client says 'we never agreed to that' about something clearly in the signed contract",
    category: "clients",
    tone: 5,
    length: "medium",
    subject: "Re: Scope Disagreement",
    body: "Hi Martin,\n\nPer your email stating 'we never agreed to that,' I'd like to direct your attention to:\n\n- The signed contract (attached), page 4, clause 3.2\n- Your signature at the bottom (that's definitely your name)\n- The date (4 months ago, when we apparently did agree to that)\n\nI appreciate that memories fade and details blur, which is precisely why we have contracts. They're like a diary for agreements \u2014 a place where decisions go so they can be remembered later, ideally without dispute.\n\nThe clause in question is clear. We agreed to it. It was signed. I'd like to proceed as contracted.\n\nShall we schedule a call to review the document together?\n\nBest regards",
    aggressionScore: 76,
    damageAssessment: "The contract does the talking - impossible to argue with your own signature",
    corporateTranslation: {
      whatYouMean: "It's in the contract. Your signature is on it. You agreed to it. End of discussion.",
      corporateVersion: "I've referenced the relevant clause in our agreement for clarity on the deliverable scope."
    },
    tags: ["contract", "denial", "agreement", "signature", "scope"]
  }
];
