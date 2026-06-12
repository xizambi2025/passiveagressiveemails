import { Scenario } from './types';

export const employeeScenarios: Scenario[] = [
  {
    id: 'employee-sick-day-monday-friday',
    recipient: 'employee',
    situation: 'Employee always calls in sick on Mondays and Fridays',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Attendance Pattern - An Observation',
    body: `Hi Justin,

Hope you're feeling better! I noticed you were out sick again this Friday — that makes it 6 Fridays and 4 Mondays in the past quarter. What a peculiar illness that exclusively strikes on days adjacent to weekends!

I'm genuinely concerned. Should I contact our health insurer about this mysterious long-weekend virus? Perhaps they have specialists.

Going forward, I'll need a doctor's note for any Friday/Monday absences. Not because I don't trust you — just because I want to make sure you're getting the medical attention this very specific pattern requires.

Feel better! (Until next Friday, presumably.)

Best`,
    aggressionScore: 65,
    damageAssessment: 'Employee knows the pattern has been noticed and documented',
    corporateTranslation: {
      whatYouMean: 'I know you\'re not sick. You just want 3-day weekends. Bring a doctor\'s note or show up.',
      corporateVersion: 'I want to ensure we\'re supporting your health needs while also maintaining team coverage requirements.',
    },
    tags: ['attendance', 'sick-days', 'pattern', 'weekend', 'documentation'],
  },
  {
    id: 'employee-bare-minimum',
    recipient: 'employee',
    situation: 'Employee does the absolute bare minimum and nothing more',
    category: 'coworkers',
    tone: 3,
    length: 'medium',
    subject: 'Growth Opportunities - Let\'s Chat',
    body: `Hi Taylor,

I wanted to discuss your career trajectory! Over the past quarter, I've noticed that you consistently deliver exactly what's asked — nothing more, nothing less. Every task completed to the precise letter of the requirement. It's like watching someone fill a glass to exactly the brim without a single extra drop.

While meeting expectations is... fine, I want to make sure you're fulfilled here. Are you bored? Disengaged? Philosophically opposed to going above and beyond? All are valid — I just want to understand.

The reason I ask: there are some exciting stretch opportunities coming up that could lead to promotion. But they require people who occasionally do things they weren't specifically asked to do. Revolutionary concept, I know.

Want to grab coffee and discuss your goals?

Best`,
    aggressionScore: 45,
    damageAssessment: 'Employee prompted to reflect on effort level with promotion dangled as carrot',
    corporateTranslation: {
      whatYouMean: 'You do the absolute minimum. That\'s technically fine but you\'ll never get promoted this way.',
      corporateVersion: 'I want to explore how we can unlock your potential and align your contributions with growth opportunities.',
    },
    tags: ['bare-minimum', 'engagement', 'motivation', 'growth', 'promotion'],
  },
  {
    id: 'employee-disappearing-act',
    recipient: 'employee',
    situation: 'Employee is unreachable during work hours for long stretches',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Availability During Working Hours - A Mystery',
    body: `Hi Sophie,

I have a question that's been puzzling me: where do you go between 2 PM and 4 PM every day?

During this window, you're not:
- At your desk
- Online on Slack (gray dot)
- Responding to emails
- In any meeting room
- In the kitchen (I checked)

You simply... vanish. Like a workplace Bermuda Triangle.

I'm sure there's a reasonable explanation! But given that these are working hours, I'd love to know what it is. Even a vague "I exist somewhere" would be comforting.

Could we chat about this?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Employee caught disappearing but given chance to explain',
    corporateTranslation: {
      whatYouMean: 'Where do you go for 2 hours every day? I know you\'re not working.',
      corporateVersion: 'I want to discuss availability expectations during core hours to ensure team accessibility.',
    },
    tags: ['unreachable', 'availability', 'missing', 'accountability'],
  },
  {
    id: 'employee-blaming-others',
    recipient: 'employee',
    situation: 'Employee always blames others when things go wrong',
    category: 'coworkers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Bug Report - Accountability Discussion',
    body: `Hi Marcus,

I received your explanation for the production outage. Let me summarize your position: it was the QA team's fault for not catching it, the DevOps team's fault for deploying it, the PM's fault for prioritizing it, and the designer's fault for requesting it.

Interesting! So everyone is responsible except the person who wrote the code that caused the crash. That's certainly one interpretation of accountability.

Let me offer an alternative narrative: the code that brought down production was committed by your GitHub account, from your machine, during your working hours. The git log is... not ambiguous about this.

Taking ownership of mistakes isn't a punishment — it's a prerequisite for senior-level work. Can we discuss this in our 1:1?

Best`,
    aggressionScore: 75,
    damageAssessment: 'Employee directly confronted with evidence. Blame-shifting not accepted.',
    corporateTranslation: {
      whatYouMean: 'It was your code. Stop blaming everyone else. Own your mistakes.',
      corporateVersion: 'I want to discuss our incident response culture and individual accountability in the development process.',
    },
    tags: ['blame', 'accountability', 'ownership', 'production-bug', 'evidence'],
  },
  {
    id: 'employee-long-lunches',
    recipient: 'employee',
    situation: 'Employee takes 2-hour lunches regularly',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Lunch Break Duration - Quick Alignment',
    body: `Hi Alex,

I wanted to check in about lunch timing! Our lunch break is 1 hour, but I've noticed you've been returning closer to the 2-hour mark recently. I mention this not because I'm watching the clock (okay, maybe a little), but because the team had questions about availability during the 1-2 PM window.

If you need flexibility — a longer lunch offset by starting earlier or staying later — I'm open to discussing it! I just need to know the plan so the team can coordinate.

Let me know what works for you and we'll figure out an arrangement.

Best`,
    aggressionScore: 30,
    damageAssessment: 'Employee gently corrected with offer of flexibility',
    corporateTranslation: {
      whatYouMean: 'Your lunches are twice as long as they should be. Come back on time.',
      corporateVersion: 'I want to align on schedule expectations to ensure team coverage and communication.',
    },
    tags: ['lunch-break', 'time-management', 'schedule', 'flexibility'],
  },
  {
    id: 'employee-excuse-machine',
    recipient: 'employee',
    situation: 'Employee has a different excuse every single time a task is late',
    category: 'deadlines',
    tone: 4,
    length: 'medium',
    subject: 'Re: Project Update - The Excuse Collection',
    body: `Hi Ryan,

Thank you for your update! I've noticed that the quarterly report is delayed again, this time due to "internet issues." Allow me to present your excuse hall of fame:

- January: "Computer crashed" 
- February: "Wasn't clear on requirements" (despite 3 briefing calls)
- March: "Waiting on input from Tom" (Tom says he wasn't asked)
- April: "Family emergency" (fair, no judgment there)
- May: "Internet issues"

I'm genuinely curious what June will bring. I'm running a small pool with the team — current favorites are "alien abduction" and "temporary amnesia."

Joking aside: I need the report by Friday. No extensions, no excuses. If there's a genuine blocker, tell me NOW so we can solve it together. Otherwise, Friday EOD, please.

Thanks`,
    aggressionScore: 65,
    damageAssessment: 'Employee confronted with documented pattern of excuses',
    corporateTranslation: {
      whatYouMean: 'You always have an excuse and I don\'t believe them anymore. Just do the work.',
      corporateVersion: 'I want to proactively address any blockers to ensure consistent on-time delivery.',
    },
    tags: ['excuses', 'pattern', 'accountability', 'documentation', 'deadlines'],
  },
  {
    id: 'employee-over-promising',
    recipient: 'employee',
    situation: 'Employee promises deliverables they can\'t actually complete',
    category: 'deadlines',
    tone: 4,
    length: 'short',
    subject: 'Re: "I\'ll Have It By Tomorrow" - A Pattern Discussion',
    body: `Hi Sarah,

I appreciate your enthusiasm! "I'll have the full migration done by tomorrow" is a bold commitment. Especially given that:

1. The previous "tomorrow" was 3 weeks ago
2. The migration has 47 remaining tickets
3. Tomorrow is Saturday

I would genuinely prefer a realistic estimate over an optimistic one. If it's going to take 2 weeks, tell me 2 weeks. I can plan for 2 weeks. I cannot plan for "tomorrow" that turns into "next month."

Under-promise and over-deliver beats over-promise and under-deliver every time. Can we try that approach?

Best`,
    aggressionScore: 52,
    damageAssessment: 'Employee coached on realistic estimation without harsh criticism',
    corporateTranslation: {
      whatYouMean: 'Stop saying tomorrow when you mean next month. Give me real timelines.',
      corporateVersion: 'I want to support more accurate estimation to improve our planning reliability.',
    },
    tags: ['over-promising', 'estimation', 'reliability', 'timelines'],
  },
  {
    id: 'employee-meeting-multitasker',
    recipient: 'employee',
    situation: 'Employee clearly not paying attention in meetings (shopping online, etc.)',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Re: Today\'s Sprint Planning - Your Screen Share',
    body: `Hi Olivia,

Quick note about today's sprint planning: when you accidentally shared your screen for 3 seconds before the presentation, the whole team caught a glimpse of your Amazon cart. The velvet throw pillows look lovely, by the way!

I mention this not to embarrass you (too late?) but because when I asked for your estimate on the authentication feature, you said "add to cart" before correcting yourself.

I totally understand meetings can drag. But perhaps the shopping could happen during the meetings you're NOT speaking in? Just a thought.

The pillow in teal would match your office decor, by the way.

Best`,
    aggressionScore: 55,
    damageAssessment: 'Employee mortified but told with humor rather than anger',
    corporateTranslation: {
      whatYouMean: 'We all saw you shopping on Amazon during the meeting. Pay attention.',
      corporateVersion: 'I want to ensure full engagement during our collaborative sessions for optimal outcomes.',
    },
    tags: ['distracted', 'multitasking', 'meetings', 'screen-share', 'shopping'],
  },
  {
    id: 'employee-passive-aggressive-to-team',
    recipient: 'employee',
    situation: 'Employee is passive-aggressive to other team members',
    category: 'coworkers',
    tone: 5,
    length: 'medium',
    subject: 'Communication Style - A Direct Conversation',
    body: `Hi Hannah,

I want to discuss something that's come up in feedback from three team members this month. It's about communication style — specifically, yours.

Some examples that were flagged:
- "Oh, you're doing it THAT way? Interesting choice..." (to Jake, re: code architecture)
- "No worries, I'll just fix it myself. Like always." (in team Slack)
- "Must be nice to leave at 5!" (to Maria, who works 7-5)

I recognize the irony of having this conversation as someone who manages a passive-aggressive email website. But there's a difference between weaponized politeness in jest and creating a hostile team environment.

Could we discuss constructive alternatives? Direct feedback > coded messages. Always.

Happy to chat in person whenever works.

Best`,
    aggressionScore: 65,
    damageAssessment: 'Employee directly addressed with specific examples. Clear expectation set.',
    corporateTranslation: {
      whatYouMean: 'Your passive-aggressive comments are making people uncomfortable. Stop it.',
      corporateVersion: 'I want to discuss communication approaches that support a positive team dynamic.',
    },
    tags: ['passive-aggressive', 'team-dynamics', 'feedback', 'communication-style'],
  },
  {
    id: 'employee-resume-on-printer',
    recipient: 'employee',
    situation: 'Employee left their resume on the shared printer',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Found Something on the Printer',
    body: `Hi Chris,

I found a document on the shared printer that I believe belongs to you. It's a two-page PDF with your name, work history, and skills section. Looks like it's been recently updated — congratulations on adding "proficient in Tableau" to your skillset!

I've placed it face-down on your desk. No one else saw it. (Probably.)

Two pieces of unsolicited advice:
1. Use the printer on Floor 3 — less foot traffic
2. Your "Objective" section could be stronger. Happy to workshop it over coffee if you'd like.

Your secret's safe with me!

Best`,
    aggressionScore: 40,
    damageAssessment: 'Employee embarrassed but treated with humor and discretion',
    corporateTranslation: {
      whatYouMean: 'I know you\'re job hunting. Your resume was on the public printer.',
      corporateVersion: 'I wanted to privately return a document and offer support if there\'s anything about your role we should discuss.',
    },
    tags: ['resume', 'printer', 'job-hunting', 'discretion', 'funny'],
  },
];
