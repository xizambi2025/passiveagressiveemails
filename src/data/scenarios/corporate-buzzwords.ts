import { Scenario } from './types';

export const corporateBuzzwordScenarios: Scenario[] = [
  {
    id: "circle-back-buzzword-5",
    recipient: "coworker",
    situation: "Coworker says 'let's circle back' to avoid making a decision",
    category: "corporate-buzzwords",
    tone: 5,
    length: "medium",
    subject: "Re: Circling Back on Circling Back",
    body: "Hi Nathan,\n\nPer our meeting today, you suggested we 'circle back' on the vendor decision. I want to flag that we've now circled back 4 times. We are, quite literally, going in circles.\n\nFor reference:\n- January: 'Let's circle back next week'\n- February: 'Let's park this and circle back'\n- March: 'Good discussion \u2014 let's circle back when we have more data'\n- Today: 'Let's circle back once everyone's aligned'\n\nI'm dizzy from the circling. The vendor we're evaluating has now launched two new products, hired 50 people, and gone public \u2014 all while we've been preparing to circle back.\n\nMight I propose a radical alternative: making a decision? Today? In this reality?\n\nBest",
    aggressionScore: 73,
    damageAssessment: "They can never say 'circle back' in your presence again without feeling shame",
    corporateTranslation: {
      whatYouMean: "Stop saying 'circle back.' Just make the decision. It's been months.",
      corporateVersion: "I'd love to drive this to resolution today to maintain our competitive positioning."
    },
    tags: ["circle-back", "indecision", "buzzwords", "procrastination"]
  },
  {
    id: "synergy-overload-manager-4",
    recipient: "manager",
    situation: "Manager's presentation was entirely buzzwords with zero substance",
    category: "corporate-buzzwords",
    tone: 4,
    length: "medium",
    subject: "Re: Q3 Strategy Presentation - Clarifying Questions",
    body: "Hi Douglas,\n\nThank you for today's Q3 strategy presentation. I've reviewed my notes and have some clarifying questions:\n\nSlide 3: 'Leverage synergies across verticals' \u2014 which departments are working together on what?\nSlide 7: 'Move the needle on our North Star metrics' \u2014 which metrics, and in which direction?\nSlide 12: 'Blue-sky ideation sprint to unlock value' \u2014 what are we building?\nSlide 15: 'Disrupt our own paradigm' \u2014 I genuinely don't know what this means.\n\nI want to execute the strategy enthusiastically, but to do so, I need to understand what the strategy is. Could you provide a one-page summary using words that appear in a standard dictionary?\n\nLooking forward to clarity.\n\nBest",
    aggressionScore: 67,
    damageAssessment: "They'll either provide actual substance or realize they don't have any",
    corporateTranslation: {
      whatYouMean: "Your entire presentation was meaningless jargon. What do you actually want us to do?",
      corporateVersion: "I'd value a tactical addendum that translates strategic direction into actionable workstreams."
    },
    tags: ["buzzwords", "synergy", "strategy", "clarity", "presentation"]
  },
  {
    id: "thought-leader-buzzword-6",
    recipient: "coworker",
    situation: "Coworker calls themselves a 'thought leader' in every meeting",
    category: "corporate-buzzwords",
    tone: 6,
    length: "short",
    subject: "Re: Thought Leadership Initiative",
    body: "Hi Brandon,\n\nI've noticed you've referred to yourself as a 'thought leader' seven times this quarter. Out of professional curiosity, I have a few questions:\n\n1. Who are the thought followers?\n2. Where are you leading these thoughts to?\n3. Is there a thought leadership qualification, or is it self-appointed?\n4. What distinguishes a thought leader from someone who simply... has thoughts?\n\nI ask because I also have thoughts. Regular ones. But I've never felt the need to promote them to leadership status. Perhaps I'm missing a step.\n\nEnjoying your content regardless,\nBest",
    aggressionScore: 81,
    damageAssessment: "They'll never unironically call themselves a thought leader again",
    corporateTranslation: {
      whatYouMean: "Stop calling yourself a thought leader. It's embarrassing for everyone.",
      corporateVersion: "I'm curious about how you define thought leadership and how it maps to team outcomes."
    },
    tags: ["thought-leader", "self-promotion", "buzzwords", "ego"]
  },
  {
    id: "pivot-buzzword-4",
    recipient: "manager",
    situation: "Company 'pivots' strategy every two weeks",
    category: "corporate-buzzwords",
    tone: 4,
    length: "medium",
    subject: "Re: Exciting New Direction!",
    body: "Hi Rachel,\n\nThank you for the email about our 'exciting new direction.' I've been keeping a log:\n\n- Week 1: 'We're all-in on enterprise'\n- Week 3: 'Actually, pivot to SMB'\n- Week 5: 'New direction: freemium'\n- Week 7: 'Pivoting to premium only'\n- Week 9: 'Exciting new direction!' (today)\n\nWe've pivoted so many times we've completed a full rotation and are now facing the original direction with a different name.\n\nI'm happy to execute on this week's strategy. I'm less clear on whether it'll still be the strategy by the time I've finished reading this email.\n\nCould we perhaps commit to a direction for... a month? Maybe two? My work would benefit from a horizon longer than a fortnight.\n\nBest",
    aggressionScore: 69,
    damageAssessment: "The documented pivot history is both hilarious and impossible to deny",
    corporateTranslation: {
      whatYouMean: "You change direction so often that doing any actual work is pointless.",
      corporateVersion: "I'd love to understand the strategic thesis behind this pivot to ensure sustained commitment."
    },
    tags: ["pivot", "strategy", "direction-change", "instability"]
  },
  {
    id: "bandwidth-buzzword-5",
    recipient: "coworker",
    situation: "Everyone uses 'bandwidth' to avoid taking on work",
    category: "corporate-buzzwords",
    tone: 5,
    length: "short",
    subject: "Re: Bandwidth Check",
    body: "Hi Team,\n\nPer today's meeting, I asked for volunteers for the Q4 audit. Responses received:\n\n- James: 'Don't have the bandwidth'\n- Sarah: 'Bandwidth is maxed'\n- Tim: 'Zero bandwidth right now'\n- Laura: 'Love to help but \u2014 bandwidth'\n\nWe are not WiFi routers. We don't have bandwidth. We have time, priority, and willingness. And right now, it appears the whole team is simultaneously at capacity for a task nobody wants to do. Fascinating coincidence.\n\nThe audit needs to happen. Please let me know who has the... willingness... by Thursday.\n\nThanks",
    aggressionScore: 74,
    damageAssessment: "Calls out the collective excuse without singling anyone out - genius",
    corporateTranslation: {
      whatYouMean: "You're all using 'bandwidth' as code for 'I don't want to.' Someone has to do this.",
      corporateVersion: "I'd appreciate capacity transparency to allocate this critical deliverable appropriately."
    },
    tags: ["bandwidth", "avoidance", "volunteering", "buzzwords", "workload"]
  },
  {
    id: "low-hanging-fruit-buzzword-4",
    recipient: "manager",
    situation: "Manager keeps asking for 'low-hanging fruit' wins but all the easy stuff is done",
    category: "corporate-buzzwords",
    tone: 4,
    length: "medium",
    subject: "Re: Quick Wins Needed",
    body: "Hi Stuart,\n\nPer your request for 'low-hanging fruit' and 'quick wins' for the board presentation:\n\nI want to respectfully inform you that we have comprehensively harvested all low-hanging fruit. The tree has been picked clean. We've actually built a ladder and got the medium-hanging fruit too. What remains is high-hanging fruit that requires scaffolding, specialised equipment, and \u2014 critically \u2014 time and budget.\n\nThe 'quick wins' phase of this product was approximately 18 months ago. Everything achievable in under a week has been achieved. What remains is hard, complex, resource-intensive work that cannot be repackaged as a 'quick win' for a board deck.\n\nI can provide a realistic roadmap for the next phase of improvements. It won't sound as breezy in a presentation, but it'll be honest.\n\nBest",
    aggressionScore: 65,
    damageAssessment: "The extended fruit metaphor is devastating and delightful",
    corporateTranslation: {
      whatYouMean: "There are no more easy wins. Everything left is hard. Stop asking for shortcuts.",
      corporateVersion: "I'd like to present a strategic roadmap that reflects our maturity stage and appropriate investment level."
    },
    tags: ["low-hanging-fruit", "quick-wins", "unrealistic", "expectations"]
  },
  {
    id: "deep-dive-buzzword-3",
    recipient: "coworker",
    situation: "Coworker suggests a 'deep dive' for everything instead of just answering the question",
    category: "corporate-buzzwords",
    tone: 3,
    length: "short",
    subject: "Re: Deep Dive Proposal",
    body: "Hi Mark,\n\nI asked a yes-or-no question: 'Should we use the blue or green colour scheme?' You've responded by proposing a 'deep dive session with cross-functional stakeholders to align on our visual identity framework.'\n\nMark. It's blue or green. This does not require a deep dive. A shallow paddle would suffice. Possibly a light glance at both options followed by pointing.\n\nBlue or green? I trust your instinct. No stakeholders required.\n\nThanks!",
    aggressionScore: 50,
    damageAssessment: "Funny enough that they'll laugh and just answer 'green'",
    corporateTranslation: {
      whatYouMean: "Just answer the question. Not everything needs a workshop.",
      corporateVersion: "I'd appreciate a direct recommendation to maintain project velocity."
    },
    tags: ["deep-dive", "over-engineering", "simple-question", "process"]
  },
  {
    id: "align-buzzword-5",
    recipient: "manager",
    situation: "Manager says 'let's align' every time they mean 'do what I say'",
    category: "corporate-buzzwords",
    tone: 5,
    length: "short",
    subject: "Re: Alignment Session",
    body: "Hi Rebecca,\n\nPer your email suggesting we 'align' on the project direction, I want to clarify what alignment means in this context.\n\nIn my experience over the past year, 'let's align' translates to: 'I've already decided, and this meeting is where you learn what I've decided while I maintain the illusion of collaboration.'\n\nIf you've made a decision, I'm genuinely happy to execute it. You're the boss. But could we skip the theatre and just send the decision via email? It would save us both 30 minutes of me pretending to have input.\n\nAlternatively, if you genuinely want input, I have some. Happy either way.\n\nBest",
    aggressionScore: 76,
    damageAssessment: "Either they'll start genuinely collaborating or admit they just want compliance",
    corporateTranslation: {
      whatYouMean: "'Align' means 'agree with me.' Just tell me what to do instead of pretending to ask.",
      corporateVersion: "I'd love clarity on whether this session is collaborative or informational so I can prepare accordingly."
    },
    tags: ["align", "pseudo-collaboration", "decision-making", "autonomy"]
  }
];
