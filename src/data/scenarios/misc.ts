import { Scenario } from './types';

export const miscScenarios: Scenario[] = [
  {
    id: 'misc-reply-all-complaint',
    recipient: 'coworker',
    situation: 'Someone replied all to complain about reply-all emails',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: Re: Re: PLEASE STOP REPLYING ALL',
    body: `Hi team,

I appreciate the irony of sending this to 200 people, but: please stop replying all to say "please stop replying all." You are now part of the problem you're trying to solve.

Current score: 47 reply-all emails about a birthday cake order. 12 of which are people asking others to stop replying all. Each reply-all complaint generated 3 more reply-alls.

The cake was chocolate, by the way. For anyone still wondering.

Please respond only to me if you have further questions. Or better yet, don't respond at all.

In silence,
Best`,
    aggressionScore: 52,
    damageAssessment: 'Everyone embarrassed. Reply-all chain may actually stop.',
    corporateTranslation: {
      whatYouMean: 'You\'re all replying all to complain about replying all. The irony is killing me.',
      corporateVersion: 'I\'d like to address our email communication norms to reduce noise.',
    },
    tags: ['reply-all', 'irony', 'team-email', 'mass-email', 'funny'],
  },
  {
    id: 'misc-out-of-office-aggressive',
    recipient: 'client',
    situation: 'Setting up an out-of-office that sets clear boundaries',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: '[Auto-Reply] Out of Office - Actually Out',
    body: `Thank you for your email! I am currently out of the office from December 23 to January 2 with LIMITED access to email.

When I say "limited," I mean "none." I will not be checking email. This is not a test. I am genuinely, physically, and emotionally unavailable.

If your matter is urgent:
- Truly urgent (production is on fire): Contact James at j.smith@company.com
- "Urgent" (you want something before I'm back): It can wait. I promise.
- "URGENT!!!!" (you always write this): It's never actually been urgent. Deep breath.

I will respond to all emails when I return on January 3. They will be addressed in the order of actual importance, not the number of exclamation marks in your subject line.

Happy holidays!`,
    aggressionScore: 60,
    damageAssessment: 'Crystal clear boundaries. Some clients may be offended. Most will respect it.',
    corporateTranslation: {
      whatYouMean: 'I am on vacation. Do not email me. I will not respond. Accept this.',
      corporateVersion: 'I\'m taking planned PTO and have arranged coverage for truly critical items.',
    },
    tags: ['out-of-office', 'vacation', 'boundaries', 'holidays', 'auto-reply'],
  },
  {
    id: 'misc-meeting-notes-never-read',
    recipient: 'coworker',
    situation: 'Sending meeting notes that you know nobody will read then being asked questions already answered in them',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Quick Question (Answered in Meeting Notes, Page 1, Line 3)',
    body: `Hi Laura,

Great question! The answer is in the meeting notes I sent on Monday. Page 1. Third paragraph. First sentence. It's bolded. And highlighted. And has a star emoji next to it.

But since I know reading is hard when there are so many other emails to not read, here's your answer: Yes, the deadline is March 15.

I'll continue sending meeting notes for the permanent record. Whether anyone reads them remains, as always, a beautiful mystery.

Best`,
    aggressionScore: 55,
    damageAssessment: 'Coworker mildly shamed for not reading readily available information',
    corporateTranslation: {
      whatYouMean: 'READ THE NOTES I SEND. The answer was RIGHT THERE.',
      corporateVersion: 'I\'ve included this in our meeting documentation for easy reference.',
    },
    tags: ['meeting-notes', 'unread', 'questions', 'documentation', 'reading'],
  },
  {
    id: 'misc-thermostat-wars',
    recipient: 'coworker',
    situation: 'Office thermostat being constantly adjusted by someone',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Office Temperature - A Peace Treaty Proposal',
    body: `Hi team,

I'm proposing a formal ceasefire in the Thermostat Wars of 2024. For those keeping score:

- 9:00 AM: Mystery person sets it to 66°F (arctic expedition vibes)
- 10:30 AM: Counter-strike to 76°F (tropical resort)
- 11:00 AM: Back to 66°F (penguins rejoice)
- Noon: Locked at 72°F by facilities (peace briefly achieved)
- 12:30 PM: Someone broke into the lock (chaos returns)

I propose 72°F and a blanket policy (literal blankets) for those who run cold. The alternative is continuing this Cold War until facilities removes the thermostat entirely.

Can we agree on 72 and end this?

Shiveringly yours`,
    aggressionScore: 35,
    damageAssessment: 'Office tension acknowledged with humor. May lead to resolution.',
    corporateTranslation: {
      whatYouMean: 'Stop changing the thermostat every 5 minutes. 72°F. Done.',
      corporateVersion: 'I\'d like to establish a shared workspace climate policy to support productivity.',
    },
    tags: ['thermostat', 'office', 'temperature', 'passive-aggressive', 'team'],
  },
  {
    id: 'misc-slack-status-lies',
    recipient: 'employee',
    situation: 'Employee\'s Slack status says "In a Meeting" for 6 hours straight',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Slack Status Check - Longest Meeting in History?',
    body: `Hi Tom,

I noticed your Slack status has said "In a Meeting 🟡" for the past 6 hours. I wanted to check: are you actually in a 6-hour meeting? Because if so, that's a human rights violation and I'd like to help.

If you're NOT in a 6-hour meeting and perhaps just forgot to update your status (while conveniently being unreachable), no judgment! Happens to the best of us. Every day. From 10 AM to 4 PM.

Just wanted to make sure you're okay in there.

Concerned,
Best`,
    aggressionScore: 48,
    damageAssessment: 'Employee caught using status as avoidance mechanism',
    corporateTranslation: {
      whatYouMean: 'Your status is a lie and we both know it. You\'re hiding.',
      corporateVersion: 'I want to check in about your availability today — noticed your status has been in meetings all day.',
    },
    tags: ['slack-status', 'unreachable', 'avoidance', 'hiding'],
  },
  {
    id: 'misc-parking-spot-steal',
    recipient: 'coworker',
    situation: 'Someone keeps taking your assigned parking spot',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Parking Spot #47 - A Territorial Discussion',
    body: `Hi team,

For the third time this week, I've arrived at my assigned parking spot (#47, clearly labeled with my name and department) to find it occupied by a silver Tesla with no permit.

To the owner of this Tesla: I admire your confidence. Pulling into a spot that has someone else's name physically painted on the ground takes a level of audacity I can only aspire to.

However, I'd appreciate it if you'd park in your own spot, a visitor space, or literally anywhere else in the state. I've attached the parking map with available spaces highlighted. There are 23 of them. None of them are #47.

Thank you for your future cooperation.

Regards`,
    aggressionScore: 55,
    damageAssessment: 'Spot-stealer publicly identified without direct naming',
    corporateTranslation: {
      whatYouMean: 'Get out of my parking spot. It has my NAME on it.',
      corporateVersion: 'I\'d like to address a recurring facility usage issue regarding assigned parking.',
    },
    tags: ['parking', 'territory', 'assigned-spot', 'office', 'annoyance'],
  },
  {
    id: 'misc-email-signature-novel',
    recipient: 'coworker',
    situation: 'Someone has an absurdly long email signature',
    category: 'corporate-buzzwords',
    tone: 3,
    length: 'short',
    subject: 'Re: Quick Question (Buried Beneath Your 47-Line Signature)',
    body: `Hi Rebecca,

I found your one-line response! It was hiding above your signature, which is currently longer than some of my actual emails. For reference:

- Your message: 8 words
- Your signature: 47 lines, including 3 logos, 2 legal disclaimers, a inspirational quote, your LinkedIn, Twitter, Instagram, TikTok, personal blog, podcast, pronouns, time zone, favorite color, and a small map to your office.

I appreciate thoroughness! But perhaps we could trim it for internal communications? I spend more time scrolling past your signature than reading your actual emails.

Just a thought!

Best
[Name]
[No other information needed because you know who I am]`,
    aggressionScore: 42,
    damageAssessment: 'Coworker may feel self-conscious but the point is valid',
    corporateTranslation: {
      whatYouMean: 'Your email signature is absurdly long. Nobody needs your TikTok in a work email.',
      corporateVersion: 'I have a suggestion about email communication efficiency that might streamline our internal correspondence.',
    },
    tags: ['email-signature', 'excessive', 'communication', 'funny', 'formatting'],
  },
  {
    id: 'misc-printer-always-broken',
    recipient: 'manager',
    situation: 'Office printer has been broken for weeks and no one fixes it',
    category: 'corporate-buzzwords',
    tone: 3,
    length: 'short',
    subject: 'Printer Status Update - Week 6 of the Uprising',
    body: `Hi IT team,

The printer on Floor 2 has now been broken for 6 weeks. It currently displays "PC LOAD LETTER" which I believe is printer for "I have given up on life."

During this time, I've:
- Filed 3 IT tickets (status: "In Progress" since Week 1)
- Offered it encouraging words
- Considered a candlelight vigil

12 people use this printer. That's 12 people walking to Floor 4 daily, which is great for our step counts but terrible for our productivity.

Could someone either fix it or formally declare it deceased so we can mourn and move on?

Hopefully yours`,
    aggressionScore: 40,
    damageAssessment: 'IT shamed gently with humor. Printer may finally get attention.',
    corporateTranslation: {
      whatYouMean: 'The printer has been broken for 6 weeks. Fix it or replace it. Please.',
      corporateVersion: 'I\'d like to escalate a recurring equipment issue affecting team productivity on Floor 2.',
    },
    tags: ['printer', 'broken', 'IT', 'facilities', 'waiting'],
  },
  {
    id: 'misc-promoted-over-you',
    recipient: 'manager',
    situation: 'Someone less qualified got promoted over you',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Career Development Discussion Request',
    body: `Hi Catherine,

Congratulations to Brad on his promotion to Senior! I'm genuinely happy for him.

I do have some questions about the decision criteria, given that I've been in the role 2 years longer, have higher performance ratings for 3 consecutive quarters, mentored 4 junior developers (including Brad), and led the two highest-revenue projects this year.

I'm not asking this to be bitter — I'm asking because I need to understand what I'm missing. If the criteria are clear, I can work toward them. If they're not... well, that's a different conversation.

Could we schedule time to discuss:
1. What Brad's promotion was based on
2. What specifically I need to do/demonstrate for the same advancement
3. A timeline for my path forward

I want to make sure I'm not running a race without knowing where the finish line is.

Best`,
    aggressionScore: 70,
    damageAssessment: 'Manager forced to justify the decision or acknowledge unfairness',
    corporateTranslation: {
      whatYouMean: 'Why did someone less qualified get promoted over me? Explain yourself.',
      corporateVersion: 'I\'d like to understand the promotion criteria and align my development plan with advancement opportunities.',
    },
    tags: ['promotion', 'passed-over', 'fairness', 'career', 'criteria'],
  },
  {
    id: 'misc-expense-report-rejected',
    recipient: 'manager',
    situation: 'Expense report rejected for legitimate business expenses',
    category: 'invoices',
    tone: 4,
    length: 'medium',
    subject: 'Re: Expense Report Rejection - Clarification Needed',
    body: `Hi Laura,

My expense report was rejected with the note: "Seems excessive." I'd love some context!

The rejected items:
- Client lunch ($85): The client chose the restaurant. I ordered a salad. The CLIENT had the steak. Should I have slapped the menu out of their hands?
- Taxi to airport ($45): Was I supposed to walk to the airport? With luggage? From downtown?
- Conference registration ($299): That you asked me to attend. Via email. Which I have.

For reference, these are all within our published expense policy limits. I checked. Twice.

Could you approve these, or let me know which specific policy they violate? "Seems excessive" isn't a category in the employee handbook — I looked there too.

Thanks!`,
    aggressionScore: 60,
    damageAssessment: 'Manager confronted with own approval + policy compliance evidence',
    corporateTranslation: {
      whatYouMean: 'These are legitimate expenses within policy. Approve them.',
      corporateVersion: 'I\'d like to discuss the rejection criteria for my recent expense submission to ensure future compliance.',
    },
    tags: ['expense-report', 'rejection', 'policy', 'legitimate', 'unfair'],
  },
  {
    id: 'misc-bathroom-break-tracking',
    recipient: 'manager',
    situation: 'Manager seems to be tracking bathroom break frequency',
    category: 'managers',
    tone: 5,
    length: 'short',
    subject: 'Re: "Away From Desk" Frequency - A Biological Explanation',
    body: `Hi Greg,

Thank you for your concern about my "away from desk" time. You're correct that I leave my desk approximately 3-4 times per day for 5-10 minutes.

This is because I drink water. Water, as you may know, is processed by the human body and must eventually be... released. This is not a personal failing or a productivity concern. It's biology.

If you'd like, I can hydrate less. My doctor advises against it, but I'm sure my UTI will understand it's for productivity metrics.

Alternatively, we could focus on my output (which is consistently above target) rather than my bladder schedule. Just a thought!

Best`,
    aggressionScore: 75,
    damageAssessment: 'Manager humiliated for monitoring bathroom usage. Likely won\'t bring it up again.',
    corporateTranslation: {
      whatYouMean: 'Are you seriously monitoring my bathroom breaks? This is unhinged.',
      corporateVersion: 'I want to discuss focus on output-based performance metrics rather than desk-time tracking.',
    },
    tags: ['micromanaging', 'bathroom', 'absurd', 'monitoring', 'biology'],
  },
  {
    id: 'misc-team-building-mandatory-fun',
    recipient: 'manager',
    situation: 'Mandatory "fun" team building event during personal time',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Mandatory Fun - Saturday Team Building!',
    body: `Hi Jessica,

I'm excited about the mandatory team building event on Saturday! A few questions:

1. If it's "mandatory," is it paid? (Our labor laws have thoughts on this)
2. If it's "fun," why is it mandatory? (Fun things don't need to be mandated)
3. Is "trust falls at 8 AM on a Saturday" genuinely anyone's idea of team bonding?

I'd love to participate in team building! During work hours. On a workday. When I'm being paid. This seems both legal and logical.

Could we move this to a Friday afternoon instead? Same bonding, fewer labor law concerns.

Eagerly yours (Monday-Friday, 9-5)`,
    aggressionScore: 60,
    damageAssessment: 'Manager confronted with legal and logical issues of mandatory weekend "fun"',
    corporateTranslation: {
      whatYouMean: 'I am not giving up my Saturday for unpaid "mandatory fun." Move it to a workday.',
      corporateVersion: 'I want to discuss scheduling and compensation structure for our upcoming team building initiative.',
    },
    tags: ['team-building', 'mandatory', 'weekend', 'boundaries', 'labor-law'],
  },
  {
    id: 'misc-open-plan-headphones',
    recipient: 'coworker',
    situation: 'Coworker taps you on shoulder when you have headphones on',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Headphone Protocol - A Public Service Announcement',
    body: `Hi team,

Quick PSA: when someone is wearing headphones in an open office, this is the international symbol for "I am concentrating and would prefer not to be interrupted."

It does NOT mean:
- "Please tap me on the shoulder repeatedly"
- "Hover behind me until I sense your presence"
- "Start talking at my back and get offended when I don't hear you"

If you need me and I'm headphone'd: Slack message, email, or carrier pigeon. I'll respond within 5 minutes. The headphones come off for meetings and emergencies. "Did you see the email from HR about the kitchen?" is neither.

Thank you for respecting the headphone forcefield!

Best`,
    aggressionScore: 38,
    damageAssessment: 'Team educated on office norms with minimal personal targeting',
    corporateTranslation: {
      whatYouMean: 'Stop interrupting me when I clearly have headphones on for a reason.',
      corporateVersion: 'I\'d like to establish communication norms for our open office to respect focus time.',
    },
    tags: ['headphones', 'open-office', 'interruptions', 'focus', 'etiquette'],
  },
  {
    id: 'misc-volunteered-for-party-planning',
    recipient: 'manager',
    situation: 'Always asked to plan office parties because you\'re the only woman on the team',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Can You Plan Dave\'s Farewell Party?',
    body: `Hi Robert,

I'd love to discuss this request! I've planned the last 6 office celebrations:
- Holiday party (Dec)
- Tom's birthday (Jan)
- New hire welcome (Feb)  
- Team anniversary (Mar)
- Client appreciation event (Apr)
- Spring social (May)

Interestingly, our team has 8 members, 7 of whom have never been asked to plan a single event. I'm curious about the selection criteria. Is it alphabetical? Seat location? Something else I'm not seeing?

I'm happy to take my turn in a ROTATION. But if I'm specifically being asked because of an assumption about who "naturally" handles this type of work, I'd love to discuss that assumption.

Who else on the team could lead Dave's farewell? I'll happily contribute as an attendee.

Best`,
    aggressionScore: 72,
    damageAssessment: 'Manager confronted with gendered labor pattern. May feel uncomfortable but message is important.',
    corporateTranslation: {
      whatYouMean: 'I\'m tired of being the default party planner because I\'m a woman. Ask someone else.',
      corporateVersion: 'I\'d like to discuss equitable distribution of non-role-specific tasks across the team.',
    },
    tags: ['gender', 'office-housework', 'fairness', 'party-planning', 'boundaries'],
  },
  {
    id: 'misc-linkedin-recruiter-current-job',
    recipient: 'coworker',
    situation: 'Your manager just connected with a recruiter on LinkedIn',
    category: 'coworkers',
    tone: 2,
    length: 'short',
    subject: 'LinkedIn Suggestion for You!',
    body: `Hi team,

Just a fun LinkedIn tip: if you're connecting with recruiters from competing companies, you might want to adjust your privacy settings so your team doesn't get "People You May Know" suggestions featuring those connections.

Not pointing any fingers! Just a general digital literacy observation I thought might be helpful for anyone currently... networking.

Happy to share more LinkedIn tips if needed!

Best`,
    aggressionScore: 45,
    damageAssessment: 'Person subtly warned their job-hunting is visible. May appreciate the heads-up.',
    corporateTranslation: {
      whatYouMean: 'I can see you\'re connecting with recruiters. Be more careful.',
      corporateVersion: 'Quick reminder about professional social media privacy settings!',
    },
    tags: ['linkedin', 'recruiter', 'privacy', 'job-hunting', 'subtle'],
  },
  {
    id: 'misc-email-at-11pm-expecting-response',
    recipient: 'manager',
    situation: 'Manager emails at 11 PM and follows up at 7 AM asking why you haven\'t responded',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Following Up on My 11 PM Email',
    body: `Hi David,

I saw your 7 AM follow-up asking why I hadn't responded to your 11 PM email. Let me explain the mystery:

At 11 PM, I was sleeping. This is a common human activity that typically occurs during nighttime hours. It involves closed eyes and unconsciousness, which makes email checking physically impossible.

I have now responded at 9 AM, which is when my working day begins. The turnaround time was 10 hours, 8 of which were dedicated to the biological necessity of sleep.

If you need same-night responses, we should discuss an on-call arrangement and its associated compensation. Otherwise, I'm happy to maintain my current response window of "when I'm awake and working."

Best`,
    aggressionScore: 62,
    damageAssessment: 'Manager boundaries clearly set with biological reality',
    corporateTranslation: {
      whatYouMean: 'I was ASLEEP at 11 PM like a normal person. Don\'t expect midnight responses.',
      corporateVersion: 'I want to align on communication expectations around response times outside business hours.',
    },
    tags: ['after-hours', 'boundaries', 'sleep', 'expectations', 'night-email'],
  },
  {
    id: 'misc-cc-world-minor-issue',
    recipient: 'coworker',
    situation: 'Coworker escalated a tiny issue by CCing your boss and their boss',
    category: 'coworkers',
    tone: 5,
    length: 'short',
    subject: 'Re: URGENT: Shared Drive Folder Name (CC: Everyone in Management)',
    body: `Hi Karen,

I see you've CC'd both our managers, the department head, and the VP on a discussion about... the shared drive folder naming convention. Bold move!

Just to be clear: you want a folder called "2024_Projects" and I suggested "Projects_2024." This is the matter requiring executive attention.

I'm happy to use whatever naming convention you'd like. It's a folder name. It affects nothing of consequence. You could call it "Banana_Hammock" and I would not have CC'd leadership about it.

Going forward, perhaps we could try resolving sub-VP-level disagreements between ourselves? Just a thought.

Best`,
    aggressionScore: 68,
    damageAssessment: 'Coworker embarrassed by obvious over-escalation of trivial matter',
    corporateTranslation: {
      whatYouMean: 'You CC\'d the VP over a folder name. You look insane and now I do too.',
      corporateVersion: 'I think we can resolve this directly without executive input — happy to align offline.',
    },
    tags: ['escalation', 'cc-manager', 'trivial', 'overreaction', 'folder'],
  },
  {
    id: 'misc-dress-code-inconsistent',
    recipient: 'manager',
    situation: 'Got dress coded but others wear the same thing without comment',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Dress Code Reminder - Some Questions',
    body: `Hi Lisa,

Thank you for the reminder about our "business casual" dress code regarding my dark jeans today. I want to make sure I understand the policy correctly.

For calibration, I noticed the following today:
- Mark: cargo shorts and flip-flops (no comment)
- Jake: wrinkled t-shirt with beer logo (no comment)
- Tom: athletic shorts (also no comment)

Are my dark jeans less "business casual" than cargo shorts? Is there a chart? A pantone of acceptability? Because I'm genuinely confused about where the line is and why it seems to shift depending on who's crossing it.

Happy to comply with a consistent standard! Key word: consistent.

Thanks`,
    aggressionScore: 60,
    damageAssessment: 'Manager confronted with inconsistent enforcement',
    corporateTranslation: {
      whatYouMean: 'Why am I getting dress-coded when other people literally wear shorts?',
      corporateVersion: 'I want to understand the dress code parameters to ensure consistent compliance across the team.',
    },
    tags: ['dress-code', 'inconsistency', 'double-standards', 'unfair'],
  },
  {
    id: 'misc-wifi-name-neighbor',
    recipient: 'coworker',
    situation: 'Someone changed the office WiFi name to something passive aggressive',
    category: 'coworkers',
    tone: 2,
    length: 'short',
    subject: 'WiFi Network Name Change?',
    body: `Hi IT,

Quick question: was the WiFi network name changed intentionally? Because "StopMicrowavingFishJEREMY" doesn't seem like a standard corporate SSID.

While I appreciate the creativity (and agree with the sentiment), clients can see our WiFi names when they visit. Perhaps we could address the fish issue through more... traditional channels?

Suggest renaming back to "CompanyName_5G" and sending Jeremy a direct message instead.

Thanks!`,
    aggressionScore: 30,
    damageAssessment: 'Funny situation defused. Jeremy may finally get the message.',
    corporateTranslation: {
      whatYouMean: 'Someone weaponized the WiFi name and it\'s unprofessional but also hilarious.',
      corporateVersion: 'I\'d like to flag an IT configuration change that may not align with our corporate presentation standards.',
    },
    tags: ['wifi', 'funny', 'fish', 'office', 'IT', 'creative'],
  },
  {
    id: 'misc-always-last-to-know',
    recipient: 'manager',
    situation: 'You find out about major changes affecting your role through company newsletter',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Org Restructure - Finding Out Via Newsletter',
    body: `Hi Patricia,

Interesting read in today's company newsletter! Particularly the part about our department being restructured and my team being merged with Operations. Fun way to find out!

I have to ask: was there a communication plan here that skipped me, or am I genuinely learning about changes to MY role through the same newsletter that announces the cafeteria menu?

Some things I'd love to have known before the general population:
- My team is being merged (affects me directly)
- My reporting line is changing (affects me very directly)
- My project is being "reprioritized" (is this a euphemism?)

In the future, could changes affecting my actual employment be communicated to me before, or at least simultaneously with, the 3,000 other people who also received this newsletter?

Appreciate it.

Regards`,
    aggressionScore: 75,
    damageAssessment: 'Manager embarrassed by clear communication failure. Will likely apologize.',
    corporateTranslation: {
      whatYouMean: 'I found out MY role is changing through a newsletter meant for all-staff. What the hell?',
      corporateVersion: 'I want to discuss communication cadence around changes that directly impact my role and team.',
    },
    tags: ['communication', 'last-to-know', 'restructure', 'disrespect', 'newsletter'],
  },
  {
    id: 'misc-calendar-invite-no-location',
    recipient: 'coworker',
    situation: 'Meeting invite with no location — physical or virtual',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Team Sync - WHERE?',
    body: `Hi Jason,

Quick logistical question about tomorrow's meeting: where is it?

The invite has:
- Date: ✓
- Time: ✓
- Attendees: ✓
- Location: [the void]
- Zoom link: [also the void]

Am I supposed to show up somewhere physical? Join a call? Astral project? Interpretive dance in the parking lot until I sense the meeting's energy?

Please advise. I'm flexible on format but I do need to know which physical or digital space to occupy.

Thanks!`,
    aggressionScore: 38,
    damageAssessment: 'Recipient mildly embarrassed, will add location. No lasting damage.',
    corporateTranslation: {
      whatYouMean: 'You forgot to include WHERE the meeting is. Basic logistics, please.',
      corporateVersion: 'Could you add the meeting location or dial-in details to the invite?',
    },
    tags: ['no-location', 'meeting-invite', 'logistics', 'forgetful'],
  },
  {
    id: 'misc-loud-typer',
    recipient: 'coworker',
    situation: 'Coworker types incredibly loudly on a mechanical keyboard',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Keyboard Volume - A Gentle Inquiry',
    body: `Hi Jason,

First: I want you to know I respect your commitment to mechanical keyboards. The clicky-clack is very satisfying. For you.

For the rest of us within a 20-foot radius, it sounds like a tiny army is tap-dancing on your desk for 8 hours a day. During calls, clients have asked if I'm "at a construction site."

Would you consider:
a) A keyboard with quieter switches (Cherry MX Silent Reds are great!)
b) A desk mat that absorbs some sound
c) O-ring dampeners (cheap and effective!)

I don't want you to give up what you love. I just want to hear my own thoughts occasionally.

Quietly yours`,
    aggressionScore: 35,
    damageAssessment: 'Coworker may be surprised but suggestion is constructive',
    corporateTranslation: {
      whatYouMean: 'Your keyboard is SO LOUD. Please make it quieter or I will lose my mind.',
      corporateVersion: 'I have a suggestion about shared workspace acoustics that might benefit the whole team.',
    },
    tags: ['keyboard', 'noise', 'open-office', 'mechanical-keyboard', 'considerate'],
  },
  {
    id: 'misc-shared-doc-no-permission',
    recipient: 'coworker',
    situation: 'Someone shares a doc but doesn\'t give you edit access when you need to edit',
    category: 'coworkers',
    tone: 2,
    length: 'short',
    subject: 'Re: Please Review and Edit - Access Request',
    body: `Hi Mike,

Got your message asking me to "edit the strategy doc and add my section by EOD." One small issue: you shared it as "view only."

I can view it beautifully! Very comprehensive. I can read every word. I just can't type any of mine.

Could you update my permissions to "editor"? That way I can fulfill the request that you sent me to edit the thing you won't let me edit.

The circle of Google Docs permissions continues.

Thanks!`,
    aggressionScore: 28,
    damageAssessment: 'Minimal — just pointing out an obvious oversight with light humor',
    corporateTranslation: {
      whatYouMean: 'You asked me to edit a doc you shared as view-only. Give me edit access.',
      corporateVersion: 'Could you update my document permissions so I can contribute as requested?',
    },
    tags: ['permissions', 'google-docs', 'access', 'oversight', 'mild'],
  },
  {
    id: 'misc-motivational-poster-response',
    recipient: 'manager',
    situation: 'Manager sends motivational quote instead of addressing a real problem you raised',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Re: Staffing Concerns - Quotes vs. Solutions',
    body: `Hi Richard,

Thank you for responding to my detailed email about our understaffing crisis with a quote from Henry Ford: "Whether you think you can or think you can't, you're right."

I appreciate the inspiration! However, I think Henry Ford also had more than 3 engineers trying to serve 2,000 customers. He likely would not have responded to "we need more people" with a motivational poster.

To be clear: the issue isn't my mindset. The issue is that we have the workload of 8 people and the headcount of 3. No amount of positive thinking adds 5 employees to our team.

Could we discuss hiring? With numbers? And a timeline? Instead of philosophy?

Gratefully (for solutions, specifically)`,
    aggressionScore: 65,
    damageAssessment: 'Manager called out for deflecting with motivation instead of action',
    corporateTranslation: {
      whatYouMean: 'A motivational quote is not a solution to understaffing. Hire people.',
      corporateVersion: 'I appreciate the encouragement! I\'d also love to discuss concrete resource allocation to address the capacity gap.',
    },
    tags: ['motivational', 'deflection', 'understaffing', 'hiring', 'solutions'],
  },
  {
    id: 'misc-not-my-job',
    recipient: 'manager',
    situation: 'Being asked to do something way outside your job description',
    category: 'managers',
    tone: 4,
    length: 'medium',
    subject: 'Re: Can You Fix the Toilet in the Men\'s Room?',
    body: `Hi Carol,

I received your request to fix the men's room toilet. I want to make sure this email was meant for me — I'm a Senior Software Engineer.

While I appreciate your faith in my problem-solving abilities, I want to clarify that "fixing toilets" doesn't appear anywhere in my job description, my offer letter, or the career path I envisioned when I got my Computer Science degree.

We have a facilities team for this. Their email is facilities@company.com. They are trained professionals who understand plumbing. I am trained in JavaScript, which, despite its many capabilities, cannot flush a toilet.

Is there a software engineering task I can help with instead?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Manager realizes the absurdity of the request. Facilities contacted.',
    corporateTranslation: {
      whatYouMean: 'I am not a plumber. I am an engineer. Please contact the correct department.',
      corporateVersion: 'I want to ensure this request reaches the team best equipped to address it. Shall I redirect to facilities?',
    },
    tags: ['not-my-job', 'absurd', 'job-description', 'boundaries', 'facilities'],
  },
];
