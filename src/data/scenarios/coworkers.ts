import { Scenario } from './types';

export const coworkerScenarios: Scenario[] = [
  {
    id: 'coworker-stealing-lunch',
    recipient: 'coworker',
    situation: 'Coworker keeps stealing lunch from the fridge',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Office Fridge - A Mystery for the Ages',
    body: `Hi team,

I wanted to bring attention to a peculiar phenomenon in our office kitchen. It appears we have a hungry ghost that exclusively targets clearly labeled containers. My Tuesday lunch, lovingly marked "SARAH'S - DO NOT EAT," vanished again.

If anyone has information about this paranormal activity, or if someone accidentally mistook my name for theirs (we all look alike in Tupperware, I suppose), please let me know.

I'll be at the vending machine again today. No big deal.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Lunch thief publicly shamed without direct accusation',
    corporateTranslation: {
      whatYouMean: 'I know it\'s you, Kevin. Stop eating my food or I will put laxatives in it.',
      corporateVersion: 'I\'d like to raise awareness about our shared kitchen protocols to ensure everyone\'s belongings are respected.',
    },
    tags: ['lunch-thief', 'office-kitchen', 'passive-aggressive', 'team-email'],
  },
  {
    id: 'coworker-reply-all',
    recipient: 'coworker',
    situation: 'Someone keeps replying all unnecessarily',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Quick Tip - Reply vs Reply All',
    body: `Hi Brad,

Hope you're well! Just a quick thought — I noticed that your "Thanks!" reply went to all 47 people on the distribution list. I'm sure everyone appreciated the positivity, but I thought you might want to know about the "Reply" button (the one without "All" next to it).

It's right there next to Reply All. Tiny button. Easy to miss. Only sends to one person instead of triggering 47 email notifications.

No worries at all! Just sharing in case it's helpful.

Cheers`,
    aggressionScore: 42,
    damageAssessment: 'Mildly embarrassing but ultimately helpful',
    corporateTranslation: {
      whatYouMean: 'Stop replying all to say "thanks." 47 people do not need that notification.',
      corporateVersion: 'I wanted to share a quick communication efficiency tip that might streamline our email workflows.',
    },
    tags: ['reply-all', 'email-etiquette', 'annoying', 'notifications'],
  },
  {
    id: 'coworker-taking-credit',
    recipient: 'coworker',
    situation: 'Coworker taking credit for your work in a meeting',
    category: 'coworkers',
    tone: 5,
    length: 'medium',
    subject: 'Great Presentation Today! One Small Clarification',
    body: `Hi Jason,

Loved your presentation today! The Q3 strategy you outlined was really compelling. I especially enjoyed the part where you presented the market analysis I spent three weeks creating — you really brought my PowerPoint slides to life with your delivery!

I noticed you forgot to mention our collaboration on this. Totally understandable — public speaking is stressful and it's easy to forget little details like "who actually did the work."

I've gone ahead and CC'd our manager on this email just so the record reflects our teamwork accurately. I'd hate for anyone to get the wrong impression about individual contributions.

Maybe next time we can present together? That way neither of us has to worry about accidentally forgetting to credit the other!

Best`,
    aggressionScore: 82,
    damageAssessment: 'Coworker exposed with receipts. Manager now aware. Nuclear option deployed.',
    corporateTranslation: {
      whatYouMean: 'You stole my work and presented it as yours. I have proof and our boss is now copied.',
      corporateVersion: 'I wanted to ensure proper attribution for our collaborative effort so that all contributions are recognized.',
    },
    tags: ['credit-stealing', 'presentations', 'receipts', 'cc-manager'],
  },
  {
    id: 'coworker-loud-calls',
    recipient: 'coworker',
    situation: 'Coworker takes loud personal calls at their desk',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Phone Rooms Available - FYI!',
    body: `Hi Melissa,

Hope your mom's dental surgery goes well! (And that your sister sorts out the custody situation, and that your boyfriend figures out the apartment lease — I'm rooting for everyone in your life at this point.)

Just wanted to let you know that we have three phone rooms on this floor that are specifically designed for calls. They're soundproof, private, and would give you the space to discuss personal matters without... sharing them with the entire open office.

I booked Room B for you for your usual 2 PM call time. You're welcome!

Best`,
    aggressionScore: 58,
    damageAssessment: 'Coworker realizes everyone can hear everything. Mild mortification.',
    corporateTranslation: {
      whatYouMean: 'I now know your entire family\'s medical history. Please take your calls elsewhere.',
      corporateVersion: 'I wanted to make you aware of our available phone rooms for enhanced privacy during calls.',
    },
    tags: ['noise', 'phone-calls', 'open-office', 'personal-calls'],
  },
  {
    id: 'coworker-meeting-dominator',
    recipient: 'coworker',
    situation: 'Coworker dominates every meeting and never lets others speak',
    category: 'meetings',
    tone: 4,
    length: 'medium',
    subject: 'Meeting Structure Suggestion',
    body: `Hi Derek,

I really admire your passion in our team meetings! You clearly have a lot of thoughts, and the energy you bring to sharing all of them — every single one, at length, in every meeting — is truly something to behold.

I had an idea that might help us be even more productive: what if we implemented a round-robin format where everyone gets 3 minutes to share their updates? I've noticed that some team members (specifically everyone who isn't you) haven't been able to get a word in during our last several meetings.

I ran the numbers, and you spoke for approximately 43 of the 45 minutes in Tuesday's standup. That's impressive stamina! But I think the rest of the team might also have valuable contributions if given the opportunity.

Thoughts? (Please limit response to one paragraph.)

Thanks!`,
    aggressionScore: 65,
    damageAssessment: 'Coworker confronted with their monopoly on airtime',
    corporateTranslation: {
      whatYouMean: 'Shut up. Other people exist in this meeting.',
      corporateVersion: 'I\'d like to propose a meeting structure that ensures equitable participation and diverse input from all team members.',
    },
    tags: ['meetings', 'dominating', 'interrupting', 'speaking-time'],
  },
  {
    id: 'coworker-passive-aggressive-slack',
    recipient: 'coworker',
    situation: 'Coworker leaves snarky comments in team chat',
    category: 'coworkers',
    tone: 5,
    length: 'short',
    subject: 'Re: Your Slack Comments',
    body: `Hi Tom,

I noticed your "interesting choice 🙂" comment on my project update in the team channel today. I'm curious — was the smiley face meant to soften the implied criticism, or enhance it? Because honestly, it could go either way and I want to respond appropriately.

If you have constructive feedback, my DMs are always open. If you're just practicing for a career in cryptic subtweets, I'd say you're doing great.

Let me know which it is!

Regards`,
    aggressionScore: 70,
    damageAssessment: 'Coworker forced to either own their snark or back down',
    corporateTranslation: {
      whatYouMean: 'Say it to my face or say nothing. Your vague snarky comments are cowardly.',
      corporateVersion: 'I\'d appreciate direct feedback through appropriate channels so we can collaborate effectively.',
    },
    tags: ['slack', 'snarky', 'passive-aggressive', 'team-chat', 'confrontation'],
  },
  {
    id: 'coworker-dumping-work',
    recipient: 'coworker',
    situation: 'Coworker constantly delegates their work to you',
    category: 'coworkers',
    tone: 4,
    length: 'medium',
    subject: 'Re: Can You Handle This One Too?',
    body: `Hi Linda,

I appreciate you thinking of me! You must really trust my capabilities, given that this is the 7th task you've "quickly" sent my way this month.

I've been keeping a little spreadsheet (just for fun!) of our respective workloads, and I noticed an interesting pattern: you seem to have about 4 hours of free time per day that perfectly coincides with the tasks you forward to me. What a funny coincidence!

Unfortunately, I'm completely swamped with my own responsibilities — you know, the ones on MY job description. Perhaps our manager could help redistribute the workload if you're feeling overwhelmed? I'd be happy to loop them in.

Or, alternatively, you could just... do your own work? Just a wild thought!

Best`,
    aggressionScore: 72,
    damageAssessment: 'Coworker caught in pattern. Manager threat deployed as deterrent.',
    corporateTranslation: {
      whatYouMean: 'Do your own job. I am not your personal assistant.',
      corporateVersion: 'I think we should align with our manager on task allocation to ensure balanced workloads and optimal productivity.',
    },
    tags: ['work-dumping', 'delegation', 'boundaries', 'workload'],
  },
  {
    id: 'coworker-sick-but-present',
    recipient: 'coworker',
    situation: 'Coworker comes to office visibly sick and contagious',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Wellness Check - Please Go Home',
    body: `Hi Martin,

I couldn't help but notice you're in the office today despite sounding like you're auditioning for a zombie movie. Your dedication is... a choice.

Just a friendly reminder that we have unlimited sick days and a remote work policy for exactly this reason. I'm sure the entire team (all of whom are eyeing you nervously from behind their monitors) would support your recovery from home.

The spreadsheets will still be here tomorrow. Our collective health, however, is not guaranteed if you keep sneezing on the shared keyboard.

Feel better soon — from home, ideally!`,
    aggressionScore: 45,
    damageAssessment: 'Coworker sent home for collective good with minimal shame',
    corporateTranslation: {
      whatYouMean: 'Go home. You are a biohazard. No one wants your plague.',
      corporateVersion: 'I wanted to remind you of our wellness-first culture and encourage you to take advantage of our remote work options.',
    },
    tags: ['sick', 'contagious', 'office', 'work-from-home', 'health'],
  },
  {
    id: 'coworker-cc-manager-everything',
    recipient: 'coworker',
    situation: 'Coworker CCs your manager on every trivial email',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: Printer Paper (CC: CEO, Board of Directors)',
    body: `Hi Patricia,

Thanks for letting me know we're low on printer paper! And thanks for copying our manager, their manager, and the VP of Operations on this critical intel.

I have to ask — is there a reason you feel a paper shortage requires executive oversight? Do you also CC leadership when the coffee runs out, or is printer paper the threshold for escalation?

I'll order more paper today. No C-suite intervention required, I promise.

Best`,
    aggressionScore: 60,
    damageAssessment: 'Coworker embarrassed by obvious over-escalation pattern',
    corporateTranslation: {
      whatYouMean: 'Stop tattling to my boss about absolutely nothing. It makes you look insane.',
      corporateVersion: 'I think we can streamline our communication by reserving leadership visibility for strategic-level items.',
    },
    tags: ['cc-manager', 'escalation', 'tattling', 'trivial', 'annoying'],
  },
  {
    id: 'coworker-calendar-stalking',
    recipient: 'coworker',
    situation: 'Coworker books meetings on your only free slots',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Meeting Invite - My Last Free 30 Minutes',
    body: `Hi Rachel,

I see you've found my one remaining free slot this week — impressive detective work! Between 2:30 and 3:00 on Thursday was where I was planning to do things like "eat" and "use the restroom," but sure, let's discuss the font choice for the internal newsletter.

Could this be an email instead? Or a Slack message? Or perhaps a thought you keep to yourself?

If it absolutely must be a meeting, can we do 15 minutes instead of 30? I'd like to maintain at least some relationship with my basic human needs.

Thanks!`,
    aggressionScore: 62,
    damageAssessment: 'Coworker confronted about calendar aggression, may feel awkward',
    corporateTranslation: {
      whatYouMean: 'Stop booking my only free time for things that don\'t need meetings.',
      corporateVersion: 'I\'d like to discuss meeting efficiency and whether we can explore asynchronous alternatives for some discussions.',
    },
    tags: ['calendar', 'meetings', 'no-free-time', 'could-be-email'],
  },
  {
    id: 'coworker-gossip-central',
    recipient: 'coworker',
    situation: 'Coworker spreading rumors about you',
    category: 'coworkers',
    tone: 6,
    length: 'medium',
    subject: 'A Quick Chat About Information Accuracy',
    body: `Hi Rebecca,

A little bird told me (well, actually, three separate colleagues told me) that you've been sharing some creative narratives about my departure from the Jenkins project. How thoughtful of you to keep my name in conversations I'm not part of!

I wanted to offer you the actual facts, in case accuracy matters to you (jury's still out on that one):

1. I was reassigned, not removed
2. By my own request, not due to performance
3. The documentation is in our HR system, which I'm happy to have pulled up

I'm sure this was all just a misunderstanding. But just in case it wasn't — I'd gently suggest that spending less time discussing my career and more time focusing on your Q3 deliverables (which I hear are behind schedule) might be a better use of your energy.

Let's not make this a thing. Shall we?

Warmly`,
    aggressionScore: 85,
    damageAssessment: 'Nuclear deterrent deployed. Gossip will likely stop immediately.',
    corporateTranslation: {
      whatYouMean: 'I know you\'re talking about me behind my back. Stop, or I will make your life difficult.',
      corporateVersion: 'I wanted to address some information discrepancies to ensure alignment across the team narrative.',
    },
    tags: ['gossip', 'rumors', 'confrontation', 'reputation', 'nuclear'],
  },
  {
    id: 'coworker-smelly-food',
    recipient: 'coworker',
    situation: 'Coworker microwaves extremely smelly food in the office',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Kitchen Ventilation Suggestion',
    body: `Hi team,

I'd like to propose we invest in a better ventilation system for our kitchen area. Or perhaps a hermetically sealed chamber specifically designed for reheating fish curry at 11:30 AM in an open-plan office.

In the meantime, might I suggest the kitchen on Floor 3, which has an actual window? Or perhaps the revolutionary technology known as a "cold lunch"?

Just brainstorming solutions here! Open to ideas.

Thanks`,
    aggressionScore: 48,
    damageAssessment: 'Fish microwaver publicly identified without being named',
    corporateTranslation: {
      whatYouMean: 'Whoever is microwaving fish: the entire floor hates you.',
      corporateVersion: 'I\'d like to discuss shared space courtesy regarding food preparation to maintain a pleasant working environment.',
    },
    tags: ['smelly-food', 'microwave', 'kitchen', 'office-etiquette', 'fish'],
  },
  {
    id: 'coworker-never-on-time',
    recipient: 'coworker',
    situation: 'Coworker is always 15 minutes late to meetings they called',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Time Zone Confusion?',
    body: `Hi Jake,

I wanted to check — are you perhaps working from a different time zone than the rest of us? I only ask because you've been consistently 15 minutes late to the last 8 meetings you organized, and I thought maybe there was a clock situation happening.

If your time zone is correct, I have another theory: perhaps your calendar shows 10:00 AM but you read it as 10:15? A simple fonts issue, maybe?

Going forward, I'll plan to arrive 15 minutes after your stated start time. That way we'll both be "on time" by your standards!

See you at 10:15 (for the 10:00 meeting)!`,
    aggressionScore: 64,
    damageAssessment: 'Coworker called out with humor but the message is clear',
    corporateTranslation: {
      whatYouMean: 'You waste everyone\'s time by being late to your own meetings. Fix it.',
      corporateVersion: 'I\'d like to discuss meeting punctuality to optimize our collective time management.',
    },
    tags: ['late', 'meetings', 'time-management', 'punctuality', 'annoying'],
  },
  {
    id: 'coworker-unnecessary-meetings',
    recipient: 'coworker',
    situation: 'Coworker schedules meeting for something that could be an email',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Meeting Tomorrow - Alternative Suggestion',
    body: `Hi Alex,

Thanks for the meeting invite! I reviewed the agenda: "Discuss Q3 report status."

I have a revolutionary proposal. What if I just... told you the status? Right now? In this email?

Status: On track. Due Friday. No blockers.

There. Meeting complete! I just saved us both 30 minutes, a conference room booking, and the awkward small talk while we wait for the screen share to work.

If you need more detail, happy to send a 2-paragraph summary. If you truly need face-to-face time, I'm free Thursday.

Efficiently yours`,
    aggressionScore: 50,
    damageAssessment: 'Coworker may feel silly but appreciates the time saved',
    corporateTranslation: {
      whatYouMean: 'This meeting is completely unnecessary and we both know it.',
      corporateVersion: 'I want to propose an asynchronous alternative that respects everyone\'s time while still achieving our communication goals.',
    },
    tags: ['unnecessary-meeting', 'could-be-email', 'time-wasting', 'efficiency'],
  },
  {
    id: 'coworker-early-morning-pinger',
    recipient: 'coworker',
    situation: 'Coworker sends Slack messages at 6 AM expecting immediate response',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Slack Notification Settings - A Suggestion',
    body: `Hi Dave,

I wanted to let you know that I received your 6:07 AM Slack message, your 6:08 AM follow-up, your 6:12 AM "hello?", and your 6:15 AM "are you there??"

I was, in fact, there. "There" being "in bed, sleeping, like a human person at 6 AM."

Our working hours start at 9 AM. I'm happy to set up a scheduled send so my replies don't disturb YOUR morning routine, and perhaps you could do the same?

Alternatively, if you truly need something before 9 AM, I have a premium early-bird consulting rate I'd be happy to share.

Best`,
    aggressionScore: 52,
    damageAssessment: 'Coworker gently educated about time boundaries',
    corporateTranslation: {
      whatYouMean: 'I am sleeping at 6 AM. Stop pinging me. Wait until working hours like a normal person.',
      corporateVersion: 'I want to set expectations around async communication windows to ensure sustainable responsiveness.',
    },
    tags: ['early-morning', 'slack', 'boundaries', 'notifications', 'time'],
  },
];
