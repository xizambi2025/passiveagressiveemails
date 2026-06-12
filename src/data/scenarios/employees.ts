import { Scenario } from './types';

export const employeeScenarios: Scenario[] = [
  {
    id: "missed-deadline-employee-3",
    recipient: "employee",
    situation: "Employee missed a deadline without telling anyone",
    category: "deadlines",
    tone: 3,
    length: "medium",
    subject: "Checking In - Report Due Yesterday",
    body: "Hi Marcus,\n\nI hope you're having a good morning! I wanted to check in about the quarterly report that was due yesterday at 5 PM. I noticed it hasn't appeared in my inbox, the shared drive, or indeed anywhere in the known digital universe.\n\nI'm sure there's a good reason, and I'd love to hear it \u2014 ideally along with a realistic revised timeline. What's more concerning than the delay is the silence. A quick 'running behind, will have it by X' is always better than me discovering the absence through the medium of an empty folder.\n\nCould you update me by end of day?\n\nThanks",
    aggressionScore: 48,
    damageAssessment: "Firm but fair - they'll know silence isn't acceptable but won't feel attacked",
    corporateTranslation: {
      whatYouMean: "You missed the deadline and didn't even tell me. That's worse than being late.",
      corporateVersion: "I'd appreciate proactive communication on timeline adjustments going forward."
    },
    tags: ["missed-deadline", "communication", "silence", "expectations"]
  },
  {
    id: "always-late-employee-4",
    recipient: "employee",
    situation: "Employee arrives 20-30 minutes late every single day",
    category: "coworkers",
    tone: 4,
    length: "medium",
    subject: "Start Time Discussion",
    body: "Hi Jade,\n\nI wanted to have a quick conversation about start times. Our agreed hours are 9:00 AM. Your average arrival time over the past month, based on building access logs (yes, those exist), is 9:27 AM.\n\nI appreciate that everyone has different body clocks, and I'm genuinely open to discussing flexible arrangements if 9 AM doesn't work for you. What I'm less open to is the current arrangement, which appears to be 'arrive whenever, and hope no one notices.'\n\nI've noticed. Can we discuss?\n\nThis isn't a formal conversation \u2014 yet. I'd much prefer we solve it informally with a coffee and an honest chat.\n\nBest",
    aggressionScore: 58,
    damageAssessment: "The 'yet' does all the heavy lifting here",
    corporateTranslation: {
      whatYouMean: "You're late every day and I have data to prove it. Fix it before I have to make it official.",
      corporateVersion: "I'd like to align on scheduling expectations to ensure we're supporting both flexibility and team needs."
    },
    tags: ["punctuality", "late", "attendance", "flexible-working"]
  },
  {
    id: "bare-minimum-employee-5",
    recipient: "employee",
    situation: "Employee does the absolute bare minimum and nothing more",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Project Contribution Review",
    body: "Hi Tyler,\n\nPer our quarterly review conversation, I wanted to follow up on something I've observed. When assigned tasks, you complete them precisely as specified \u2014 not one pixel more, not one sentence extra. This is technically not a problem, and yet somehow, it is.\n\nFor example, when I asked you to 'create a summary of the client meeting,' you sent me a single sentence: 'The meeting went well.' While factually accurate, this isn't what anyone means by 'summary.'\n\nI want to be direct: I believe you're capable of much more. The quality of your work when you choose to engage fully is excellent. I'm curious what would help you choose to engage fully more often.\n\nCan we chat this week?\n\nRegards",
    aggressionScore: 70,
    damageAssessment: "Direct enough to be unmissable, complimentary enough to not be demoralizing",
    corporateTranslation: {
      whatYouMean: "You're phoning it in and we both know you could do better.",
      corporateVersion: "I'd love to explore how we can unlock your full potential and align on growth-oriented expectations."
    },
    tags: ["bare-minimum", "quiet-quitting", "motivation", "performance"]
  },
  {
    id: "excessive-breaks-employee-4",
    recipient: "employee",
    situation: "Employee takes extremely long and frequent breaks",
    category: "coworkers",
    tone: 4,
    length: "short",
    subject: "Break Schedule Discussion",
    body: "Hi Connor,\n\nI wanted to touch base about break patterns. Company policy allows for a 1-hour lunch and two 15-minute breaks. By my observation, your current schedule is closer to:\n\n- 10:00 AM: Coffee break (35 mins)\n- 11:30 AM: Snack break (20 mins)\n- 12:00 PM: Lunch (1.5 hours)\n- 2:30 PM: Second coffee (30 mins)\n- 4:00 PM: 'Stretching my legs' (25 mins)\n\nThat's roughly 3 hours of breaks in an 8-hour day. I admire your commitment to work-life balance, but some of the 'life' part is meant to happen outside working hours.\n\nLet's chat.\n\nBest",
    aggressionScore: 63,
    damageAssessment: "The itemised list is both funny and impossible to deny",
    corporateTranslation: {
      whatYouMean: "You spend half the day not at your desk and I've been tracking it.",
      corporateVersion: "I'd like to discuss schedule management to ensure we're meeting output expectations."
    },
    tags: ["breaks", "time-management", "attendance", "productivity"]
  },
  {
    id: "excuse-machine-employee-5",
    recipient: "employee",
    situation: "Employee always has elaborate excuses for not delivering",
    category: "deadlines",
    tone: 5,
    length: "long",
    subject: "Re: Report Delay - Updated Timeline",
    body: "Hi Ashley,\n\nThank you for your explanation regarding the delayed report. Per your email, the delay was caused by a combination of: your laptop overheating, a power cut, a family emergency, your internet going down, and a Windows update.\n\nAll in one day.\n\nI want to be sympathetic \u2014 life does throw curveballs. However, I also want to share some pattern data:\n\n- January: Report late (laptop stolen)\n- February: Report late (food poisoning)\n- March: Report late (building evacuated)\n- April: Report late (today's email)\n\nYou've had more laptop incidents than anyone in the company's 15-year history. At this point, I'm less concerned about the report and more concerned about what appears to be an elaborate curse.\n\nShall we discuss how I can support you in meeting deadlines consistently? Perhaps a backup laptop. Or an exorcist.\n\nBest",
    aggressionScore: 74,
    damageAssessment: "The pattern data is devastating - they can't excuse their way out of this one",
    corporateTranslation: {
      whatYouMean: "Your excuses are getting more creative but I don't believe any of them anymore.",
      corporateVersion: "I'd like to identify systemic barriers and implement reliability measures together."
    },
    tags: ["excuses", "reliability", "pattern", "deadlines", "accountability"]
  },
  {
    id: "passing-buck-employee-4",
    recipient: "employee",
    situation: "Employee blames everyone else for their own mistakes",
    category: "coworkers",
    tone: 4,
    length: "medium",
    subject: "Re: Clarification on the Pricing Error",
    body: "Hi Olivia,\n\nThank you for your email explaining that the pricing error was caused by 'unclear instructions from marketing,' 'the system being confusing,' and 'Laura not double-checking.'\n\nI've looked into this. Marketing's instructions were a clear email with the correct prices highlighted in yellow. The 'confusing system' has an input field labeled 'Price' where you type the price. And Laura's role doesn't include checking your work \u2014 that's your responsibility.\n\nI mention this not to be difficult, but because mistakes are fine. They happen to everyone. What concerns me is the instinct to identify three other reasons before considering 'I made an error.' That's the part I'd like us to work on.\n\nCan we chat tomorrow?\n\nBest",
    aggressionScore: 65,
    damageAssessment: "Methodical dismantling of every excuse - firm but developmental",
    corporateTranslation: {
      whatYouMean: "Stop blaming everyone else. You made a mistake. Just own it.",
      corporateVersion: "I'd like to foster a culture of ownership where errors become learning opportunities rather than attribution exercises."
    },
    tags: ["blame", "accountability", "mistakes", "ownership"]
  },
  {
    id: "over-promising-employee-3",
    recipient: "employee",
    situation: "Employee promises clients things without checking feasibility",
    category: "clients",
    tone: 3,
    length: "medium",
    subject: "Re: Client Expectations - Henderson Account",
    body: "Hi Ryan,\n\nI've just finished a call with Henderson Corp where they excitedly told me about the 'AI-powered dashboard with real-time analytics and predictive forecasting' you promised them by next Friday.\n\nA few observations:\n1. We don't have an AI team\n2. Our dashboard takes 6 weeks minimum\n3. Next Friday is in 5 days\n4. This would cost approximately \u00a380,000 to build properly\n\nI appreciate the enthusiasm for exceeding client expectations. However, there's a meaningful difference between 'exceeding expectations' and 'promising magic.' One delights clients. The other creates very uncomfortable follow-up calls like the one I now need to make.\n\nBefore committing to deliverables, please run them past me or anyone with a calendar and a calculator.\n\nThanks",
    aggressionScore: 55,
    damageAssessment: "Clear enough to prevent future incidents without crushing their spirit",
    corporateTranslation: {
      whatYouMean: "You promised impossible things and now I have to be the bad guy. Stop doing this.",
      corporateVersion: "I'd like to establish a pre-commitment review process to ensure we set achievable expectations."
    },
    tags: ["over-promising", "client-management", "feasibility", "expectations"]
  },
  {
    id: "ignoring-process-employee-5",
    recipient: "employee",
    situation: "Employee ignores established processes because they 'know a better way'",
    category: "coworkers",
    tone: 5,
    length: "medium",
    subject: "Re: Alternative Approach to Client Onboarding",
    body: "Hi Zack,\n\nPer your email, you've decided to 'streamline' the client onboarding process by skipping steps 3, 5, 7, and 8 because they're 'redundant.'\n\nI want to share what those steps do:\n- Step 3: Legal compliance check (keeps us out of court)\n- Step 5: Data backup (prevents catastrophic data loss)\n- Step 7: Client verification (ensures we're not onboarding fraudsters)\n- Step 8: Security audit (prevents breaches)\n\nYour streamlined process is faster, I'll give you that. It's also a compliance violation, a data risk, a fraud vulnerability, and a security gap. Other than that, great initiative.\n\nPlease revert to the established process immediately. If you genuinely believe improvements can be made, propose them through the proper channel (which is not 'just stop doing things').\n\nBest regards",
    aggressionScore: 76,
    damageAssessment: "The sarcastic 'great initiative' at the end is the cherry on top",
    corporateTranslation: {
      whatYouMean: "You broke critical processes because you think you know better. You don't.",
      corporateVersion: "I'd appreciate adherence to established procedures while proposing enhancements through our formal improvement process."
    },
    tags: ["process", "compliance", "cowboy", "procedures", "risk"]
  }
];
