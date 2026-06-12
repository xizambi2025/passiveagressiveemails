import { Scenario } from './types';

export const corporateBuzzwordScenarios: Scenario[] = [
  {
    id: 'buzzword-synergy-overload',
    recipient: 'manager',
    situation: 'Responding to an email entirely in corporate jargon',
    category: 'corporate-buzzwords',
    tone: 6,
    length: 'medium',
    subject: 'Re: Leveraging Synergies - My Aligned Response',
    body: `Hi Barbara,

Thank you for your email about leveraging cross-functional synergies to optimize our go-forward value proposition. I'd love to circle back on that after we've moved the needle on our bandwidth constraints.

Let me take this offline and do a deep dive into how we can be more proactive about our thought leadership in this space. I think if we can find a way to boil the ocean while simultaneously picking the low-hanging fruit, we'll be in a great position to create a paradigm shift that disrupts our core competencies.

I'll ping you when I've gotten my ducks in a row. Let's make sure we don't let the perfect be the enemy of the good as we action this going forward.

Best,
[Your name who definitely knows what any of that means]`,
    aggressionScore: 85,
    damageAssessment: 'Manager either laughs or doesn\'t realize they\'re being mocked',
    corporateTranslation: {
      whatYouMean: 'I\'m writing back in the same meaningless jargon to show you how absurd you sound.',
      corporateVersion: 'I want to demonstrate alignment with your communication style while exploring collaborative opportunities.',
    },
    tags: ['jargon', 'parody', 'corporate-speak', 'synergy', 'mockery'],
  },
  {
    id: 'buzzword-lets-take-offline',
    recipient: 'coworker',
    situation: 'Someone says "let\'s take this offline" about something that IS offline',
    category: 'corporate-buzzwords',
    tone: 3,
    length: 'short',
    subject: 'Re: Let\'s Take This Offline',
    body: `Hi Gary,

You mentioned we should "take this offline." I just want to clarify — this IS offline. We're in a room. Together. Physically. There is no "online" happening here from which to go "offline."

Did you mean "let's discuss this later"? Or "let's discuss this in a smaller group"? Or "I don't want to talk about this right now"? All valid! Just not technically "offline."

Happy to continue this conversation in whatever dimension you'd prefer.

Best`,
    aggressionScore: 40,
    damageAssessment: 'Mild embarrassment, probably laughed off',
    corporateTranslation: {
      whatYouMean: 'We\'re already offline. That phrase doesn\'t mean what you think it means.',
      corporateVersion: 'I want to clarify the best forum for this discussion to ensure productive outcomes.',
    },
    tags: ['take-offline', 'misuse', 'jargon', 'in-person', 'funny'],
  },
  {
    id: 'buzzword-circle-back',
    recipient: 'manager',
    situation: 'Manager has "circled back" on the same topic 12 times without resolution',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'short',
    subject: 'Re: Circling Back (Orbit #12)',
    body: `Hi Steve,

Thanks for circling back! By my count, this is the 12th time we've circled back on the website redesign decision. At this point, we're not circling — we're in a full orbit.

For context: the first "circle back" was January 15th. It is now July. We have circled so many times that I'm dizzy.

Could we perhaps... land? Make a decision? Any decision? Even a wrong one would at least break the gravitational pull of this infinite loop.

I'm free for a "final decision" meeting whenever you're ready to stop circling and start deciding.

Regards`,
    aggressionScore: 58,
    damageAssessment: 'Manager called out on decision paralysis through their own language',
    corporateTranslation: {
      whatYouMean: 'Make a decision. We\'ve been going in circles for 6 months.',
      corporateVersion: 'I\'d like to drive this to a resolution. Can we set a decision deadline?',
    },
    tags: ['circle-back', 'indecision', 'loops', 'decisions', 'paralysis'],
  },
  {
    id: 'buzzword-thought-leadership',
    recipient: 'manager',
    situation: 'Manager wants you to create "thought leadership" content about nothing',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'medium',
    subject: 'Re: Thought Leadership Content - Some Questions',
    body: `Hi Jennifer,

I'm excited to work on the "thought leadership" piece you've assigned! A few clarifying questions:

1. What thought are we leading?
2. Who are we leading it toward?
3. Is there a specific insight or thesis, or am I manufacturing authority from thin air?
4. When you say "thought leadership," do you mean "a blog post"? Because I can write a blog post.

I want to make sure my thought is sufficiently leader-y. My concern is that without a genuine insight or unique perspective, we'll just be adding to the internet's collection of "5 Tips for Synergizing Your Disruption Pipeline" posts that no one reads.

Should I proceed with substance, or is the goal purely SEO? Both are valid — I just need to know which hat to wear.

Looking forward to leading some thoughts!`,
    aggressionScore: 55,
    damageAssessment: 'Manager confronted with emptiness of request. May provide actual direction.',
    corporateTranslation: {
      whatYouMean: '"Thought leadership" means nothing. Tell me what you actually want me to write.',
      corporateVersion: 'I want to ensure our content strategy has a clear thesis and audience to maximize engagement impact.',
    },
    tags: ['thought-leadership', 'meaningless', 'content', 'blog', 'direction'],
  },
  {
    id: 'buzzword-move-the-needle',
    recipient: 'manager',
    situation: 'Everything must "move the needle" but no one defines the needle',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'short',
    subject: 'Re: Does This Move The Needle? - A Needle Inquiry',
    body: `Hi Mark,

You asked if my project proposal "moves the needle." I'd love to answer that! But first, some questions about The Needle:

- Which needle? (Revenue? Users? Satisfaction? An actual sewing needle?)
- How much movement qualifies? (1%? 10%? Any vibration at all?)
- What is the needle's current position?
- Is there a needle dashboard I should be referencing?

I suspect the answer you want is "yes, it moves the needle." So: yes! It definitely moves the needle. Possibly even two needles. Maybe a whole pincushion.

Or we could discuss specific KPIs like adults? Let me know!

Best`,
    aggressionScore: 55,
    damageAssessment: 'Manager gently mocked for vague success criteria',
    corporateTranslation: {
      whatYouMean: 'Define your success metrics in plain English or stop asking if things "move the needle."',
      corporateVersion: 'I\'d love to align on specific success metrics so I can quantify the project\'s impact.',
    },
    tags: ['move-the-needle', 'vague-metrics', 'kpi', 'success-criteria'],
  },
  {
    id: 'buzzword-deep-dive',
    recipient: 'coworker',
    situation: 'Someone suggests a "deep dive" into every trivial topic',
    category: 'corporate-buzzwords',
    tone: 3,
    length: 'short',
    subject: 'Re: Let\'s Do a Deep Dive on the Lunch Menu',
    body: `Hi Brian,

You mentioned wanting to "do a deep dive" into the catering options for next week's team lunch. I appreciate the thoroughness!

However, I'd gently suggest that selecting sandwiches vs. pizza might warrant a "shallow wade" rather than a full deep dive. Perhaps even a "brief glance."

I'm saving my scuba gear for topics like "why our database crashed" or "where did Q3's budget go." For lunch selection, maybe we can just... pick one?

Happy to cast a vote: pizza. Deep dive complete.

Cheers`,
    aggressionScore: 42,
    damageAssessment: 'Coworker lightly teased for overusing corporate language on trivial matters',
    corporateTranslation: {
      whatYouMean: 'Not everything needs a deep dive. It\'s just lunch.',
      corporateVersion: 'I want to suggest a streamlined decision-making process for lower-stakes items.',
    },
    tags: ['deep-dive', 'overuse', 'trivial', 'lunch', 'proportionality'],
  },
  {
    id: 'buzzword-bandwidth',
    recipient: 'manager',
    situation: 'Manager asks if you "have bandwidth" for yet another task',
    category: 'corporate-buzzwords',
    tone: 5,
    length: 'medium',
    subject: 'Re: Do You Have Bandwidth? - Bandwidth Report',
    body: `Hi Amanda,

You asked if I "have bandwidth" for the new analytics project. Let me provide a full bandwidth report:

Current allocation:
- Project Alpha: 30%
- Client Beta: 25%
- Weekly reporting: 15%
- Meetings about meetings: 20%
- Responding to "bandwidth" questions: 5%
- Remaining bandwidth: 5%

So technically, yes, I have 5% bandwidth available. That translates to approximately 2 hours per week. At that rate, the analytics project would be completed in roughly 14 months.

Alternatively, we could discuss which current commitment to deprioritize. Because "bandwidth" isn't a renewable resource I can generate through enthusiasm — it's math.

Which project should I put down to pick this one up?

Thanks!`,
    aggressionScore: 68,
    damageAssessment: 'Manager forced to make prioritization decisions instead of just adding work',
    corporateTranslation: {
      whatYouMean: 'No, I don\'t have bandwidth. I\'m already at 100%. Tell me what to drop.',
      corporateVersion: 'I want to have a prioritization discussion to ensure this new initiative gets the focus it deserves.',
    },
    tags: ['bandwidth', 'overloaded', 'prioritization', 'workload', 'capacity'],
  },
  {
    id: 'buzzword-low-hanging-fruit',
    recipient: 'manager',
    situation: 'Manager keeps asking for "low-hanging fruit" that doesn\'t exist',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'short',
    subject: 'Re: Quick Wins / Low-Hanging Fruit',
    body: `Hi Paul,

You asked me to identify "low-hanging fruit" for our quarterly goals. I've conducted an extensive search and here's my report:

The fruit has been picked. All of it. Every piece of low-hanging fruit within reach was harvested in Q1 and Q2. The tree is bare at accessible heights.

What remains is high-hanging fruit that requires ladders (budget), climbing equipment (additional headcount), and time (more than one sprint).

I know "there's no easy fruit left" isn't the answer you wanted, but it's the honest one. Shall we discuss the ladder budget?

Best`,
    aggressionScore: 52,
    damageAssessment: 'Manager educated that easy wins have limits',
    corporateTranslation: {
      whatYouMean: 'There are no quick wins left. Everything remaining requires real investment.',
      corporateVersion: 'I\'d like to reframe our expectations — the remaining opportunities require strategic investment to pursue.',
    },
    tags: ['low-hanging-fruit', 'quick-wins', 'realistic', 'investment'],
  },
  {
    id: 'buzzword-pivot',
    recipient: 'manager',
    situation: 'Manager "pivots" the project direction every week',
    category: 'corporate-buzzwords',
    tone: 5,
    length: 'medium',
    subject: 'Re: Time to Pivot! (Pivot #7)',
    body: `Hi Sarah,

Exciting — another pivot! Let me update the project direction tracker:

Week 1: "Let's build a mobile app!" → PIVOT
Week 2: "Actually, web-first." → PIVOT
Week 3: "What about a chrome extension?" → PIVOT
Week 4: "Back to mobile, but different." → PIVOT
Week 5: "Let's go desktop." → PIVOT
Week 6: "Hybrid approach!" → PIVOT
Week 7 (today): "What if we focused on mobile?"

Sarah, we have completed a full circle. We've pivoted back to Week 1. If a pivot brings you back to where you started, is it even a pivot? Or is it just... spinning?

The team has built approximately 30% of six different things and 100% of zero things. I'd love to actually ship something this quarter.

Can we commit to ONE direction for more than 5 business days?

Eagerly awaiting Pivot #8`,
    aggressionScore: 75,
    damageAssessment: 'Manager confronted with decision chaos through thorough documentation',
    corporateTranslation: {
      whatYouMean: 'You change direction every week and now we\'ve built nothing. COMMIT TO SOMETHING.',
      corporateVersion: 'I\'d like to discuss strategic direction stability to enable the team to deliver meaningful progress.',
    },
    tags: ['pivot', 'direction-changes', 'indecision', 'shipping', 'spinning'],
  },
  {
    id: 'buzzword-culture-fit',
    recipient: 'manager',
    situation: 'Manager uses "culture fit" as excuse for everything',
    category: 'corporate-buzzwords',
    tone: 5,
    length: 'short',
    subject: 'Re: "Culture Fit" Concerns',
    body: `Hi Monica,

You mentioned that my request to work from home Fridays isn't a "culture fit." I'm curious about this culture we're fitting:

- The culture of coming to an empty office (since 60% of the team is remote Fridays)?
- The culture of spending 2 hours commuting to sit on Zoom calls?
- The culture of being present for... the presence of it?

Could you define "culture fit" as it applies here? Because from where I'm sitting (in the office, alone, on a Friday), the culture seems to be "doing whatever the people who work from home do, but from a desk."

I'd love clarity on what specifically about my physical location on Fridays impacts the culture.

Thanks!`,
    aggressionScore: 68,
    damageAssessment: 'Manager\'s vague "culture" argument thoroughly deconstructed',
    corporateTranslation: {
      whatYouMean: '"Culture fit" isn\'t a real argument. Half the team works from home Fridays.',
      corporateVersion: 'I\'d appreciate specific criteria for this policy to ensure fair and consistent application.',
    },
    tags: ['culture-fit', 'wfh', 'double-standards', 'vague-excuses'],
  },
  {
    id: 'buzzword-action-items-never-actioned',
    recipient: 'coworker',
    situation: 'Meeting "action items" are assigned but never actioned',
    category: 'corporate-buzzwords',
    tone: 4,
    length: 'medium',
    subject: 'Action Items - Status Check (Week 8)',
    body: `Hi team,

Quick check-in on our action items from the last 8 weekly meetings! Here's a comprehensive status report:

Week 1 Action Items: Not actioned
Week 2 Action Items: Not actioned
Week 3 Action Items: Briefly discussed, then not actioned
Week 4 Action Items: Carried over from Week 1 (still not actioned)
Week 5 Action Items: New items added to the not-actioned pile
Week 6 Action Items: The word "action" beginning to lose all meaning
Week 7 Action Items: Mostly just the same items as Weeks 1-6
Week 8 Action Items: [Presumably these will also not be actioned]

I'm starting to think we should rename these "Inaction Items" for accuracy.

Can we commit to completing at least ONE item this week? Just one. As an experiment. To see what it feels like.

Enthusiastically,
Your accountability buddy`,
    aggressionScore: 60,
    damageAssessment: 'Team confronted with collective failure to follow through',
    corporateTranslation: {
      whatYouMean: 'Nobody does anything they say they\'ll do in meetings. We just create lists and ignore them.',
      corporateVersion: 'I want to improve our action item completion rate. Can we implement accountability check-ins?',
    },
    tags: ['action-items', 'follow-through', 'accountability', 'meetings', 'inaction'],
  },
];
