import { Scenario } from './types';

export const bonusScenarios: Scenario[] = [
  {
    id: 'bonus-client-multiple-contacts',
    recipient: 'client',
    situation: 'Client has 5 decision-makers who all disagree',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Decision Authority - Who Do I Listen To?',
    body: `Hi team,

I currently have 5 different instructions from 5 people at your organization:

- Tom says red
- Lisa says blue
- Mark says green
- Sara says "whatever Tom says" (but then emails separately to say purple)
- Your CEO popped in to say "make it disruptive" (not a color)

I'd love to proceed! But I physically cannot make something that is simultaneously red, blue, green, purple, and disruptive. Not without creating a Jackson Pollock painting.

Could ONE person email me the final decision? That person's word will be treated as law.

Awaiting your singular, unified response!`,
    aggressionScore: 52,
    damageAssessment: 'Client forced to acknowledge internal dysfunction',
    corporateTranslation: {
      whatYouMean: 'Your team can\'t agree on anything. Designate ONE decision-maker or I can\'t proceed.',
      corporateVersion: 'I need clarity on decision authority to move forward efficiently.',
    },
    tags: ['decision-maker', 'disagreement', 'committee', 'authority', 'color'],
  },
  {
    id: 'bonus-coworker-kitchen-mess',
    recipient: 'coworker',
    situation: 'Someone never cleans up after themselves in the office kitchen',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Kitchen Archaeology Report',
    body: `Hi team,

A brief report from this morning's kitchen expedition:

Artifacts discovered:
- 3 unwashed mugs growing civilizations (estimated age: 2 weeks)
- Splattered soup in microwave (carbon-dated to last Thursday)
- Mystery container in fridge (contents: unknown, possibly sentient)
- Used tea bags arranged artistically on the counter (not in the bin, 2 feet away)

I'm not asking for perfection. I'm asking for the bare minimum: rinse your mug, wipe the microwave, claim your fridge experiments before they claim us.

We're adults. Presumably.

Thanks!`,
    aggressionScore: 40,
    damageAssessment: 'Team-wide message avoids singling anyone out',
    corporateTranslation: {
      whatYouMean: 'Clean up after yourselves. This is disgusting.',
      corporateVersion: 'I\'d like to remind everyone about our shared kitchen maintenance responsibilities.',
    },
    tags: ['kitchen', 'mess', 'cleaning', 'office', 'adults'],
  },
  {
    id: 'bonus-manager-all-hands-surprise',
    recipient: 'manager',
    situation: 'Manager surprises you with a question in all-hands you weren\'t prepared for',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Today\'s All-Hands - A Request for Future Meetings',
    body: `Hi David,

Loved being called on in today's all-hands to provide "a quick update on Project Mercury" — in front of 200 people, with no warning, preparation, or slides!

For future reference, I perform best when I know I'll be presenting before the moment someone says "and now let's hear from..." to an audience of the entire company.

A 24-hour heads up would allow me to:
- Prepare accurate data
- Have slides ready
- Not say "um" 47 times
- Not visibly panic on camera

Could we implement a "no surprise presentations" policy? My cortisol levels would appreciate it.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Manager made aware that surprise presentations are stressful and unproductive',
    corporateTranslation: {
      whatYouMean: 'Don\'t ambush me in all-hands meetings. Warn me so I can prepare.',
      corporateVersion: 'I want to discuss presentation expectations and prep time for company-wide meetings.',
    },
    tags: ['all-hands', 'surprise', 'unprepared', 'presentation', 'warning'],
  },
  {
    id: 'bonus-supplier-christmas-closure',
    recipient: 'supplier',
    situation: 'Supplier closes for 3 weeks during your busiest season without warning',
    category: 'suppliers',
    tone: 4,
    length: 'medium',
    subject: 'Re: Holiday Closure Notice (Sent 2 Days Before)',
    body: `Hi team,

I received your holiday closure notice today, informing me you'll be closed December 23 through January 14. That's 3 weeks. During retail's busiest season. With 2 days' notice.

Some thoughts:
- Our agreement requires 30 days notice for any service interruption
- You are our sole supplier for packaging materials
- We have orders shipping daily through January
- 2 days is not 30 days (a math reminder)

I needed to place my January stock order LAST WEEK to avoid this exact scenario. The scenario you've now created by announcing a 3-week vacation 48 hours before closing.

What are our options? Emergency stock order today? Alternative supplier referral? A time machine?

Please respond immediately — you only have 2 days of availability left, apparently.

Regards`,
    aggressionScore: 65,
    damageAssessment: 'Supplier caught violating notice requirements with clear business impact',
    corporateTranslation: {
      whatYouMean: '3 weeks off with 2 days notice during our busy season? This is a contract violation.',
      corporateVersion: 'I need to urgently discuss service continuity given your closure timeline and our contractual notice requirements.',
    },
    tags: ['closure', 'notice', 'holiday', 'busy-season', 'contract'],
  },
  {
    id: 'bonus-employee-cc-attorney',
    recipient: 'employee',
    situation: 'Employee CCs their personal attorney on a routine performance discussion',
    category: 'coworkers',
    tone: 5,
    length: 'short',
    subject: 'Re: 1:1 Follow-up (CC: Legal?)',
    body: `Hi Heather,

I notice you've CC'd a personal attorney on my email about your upcoming performance review. I want to address this:

Our performance reviews happen quarterly. For everyone. They're standard practice. The review covers goals, development, and feedback — it is not a disciplinary action.

If you feel you need legal representation for a routine check-in about Q3 goals, that concerns me. Is there something I should know about your comfort level here?

I've CC'd our HR business partner to join the conversation, since legal representation was introduced. Let's ensure everyone feels supported.

If you'd like to discuss this privately first, my door is open (without attorneys).

Best`,
    aggressionScore: 55,
    damageAssessment: 'Situation de-escalated while noting the inappropriate escalation',
    corporateTranslation: {
      whatYouMean: 'Why did you CC a lawyer on a normal performance review? That\'s bizarre and concerning.',
      corporateVersion: 'I want to ensure you feel comfortable in our review process. Let\'s discuss any concerns.',
    },
    tags: ['attorney', 'escalation', 'performance-review', 'overreaction', 'HR'],
  },
  {
    id: 'bonus-freelancer-portfolio-fake',
    recipient: 'freelancer',
    situation: 'Discovered freelancer\'s portfolio contains other people\'s work',
    category: 'clients',
    tone: 6,
    length: 'medium',
    subject: 'Portfolio Verification - Urgent Discussion Needed',
    body: `Hi Ashley,

I need to discuss something serious. While reviewing your recent deliverable (which looked nothing like your portfolio), I reverse-image-searched some of your portfolio pieces. Interesting results:

- "Project 1" belongs to Studio Blackbird (verified on their site)
- "Project 2" is from a Behance user named @realdanielcraft
- "Project 3" is literally Apple's 2022 campaign with the logo removed

I hired you based on a portfolio of work you didn't create. The work you ARE creating for us bears no resemblance to these pieces. For obvious reasons.

This is fraud. We need to discuss:
1. Our contract (which has a misrepresentation clause)
2. A refund for work paid to date
3. Termination of our agreement

Please respond by EOD.`,
    aggressionScore: 95,
    damageAssessment: 'Freelancer caught in fraud. Relationship terminated. Legal options open.',
    corporateTranslation: {
      whatYouMean: 'Your portfolio is fake. You stole other people\'s work to get hired. This is over.',
      corporateVersion: 'I\'ve identified portfolio attribution discrepancies that we need to address regarding our engagement.',
    },
    tags: ['fraud', 'fake-portfolio', 'stolen-work', 'termination', 'nuclear'],
  },
  {
    id: 'bonus-meeting-no-decisions-ever',
    recipient: 'manager',
    situation: 'Weekly meeting never results in any decisions',
    category: 'meetings',
    tone: 4,
    length: 'short',
    subject: 'Weekly Strategy Meeting - Decision Proposal',
    body: `Hi John,

We've had 16 weekly strategy meetings this quarter. Decisions made: zero. Topics "tabled for next week" and never revisited: 23. Hours spent: 48 (collective across 6 attendees).

At this point, the meeting is less of a "strategy session" and more of a "group meditation on indecision." We enter with topics, we exit with the same topics, and the only thing that changes is the date.

Radical proposal: what if next week's meeting had a RULE that we must make at least ONE decision before anyone can leave? Even a small one. Even "what to order for lunch." Just to practice the muscle.

Can we try?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Manager confronted with meeting inefficiency in quantified terms',
    corporateTranslation: {
      whatYouMean: 'We never decide anything in these meetings. They\'re pointless without outcomes.',
      corporateVersion: 'I\'d like to introduce a decision-forcing function to improve meeting ROI.',
    },
    tags: ['no-decisions', 'meetings', 'inefficiency', 'tabled', 'waste'],
  },
  {
    id: 'bonus-client-comparison-competitor',
    recipient: 'client',
    situation: 'Client keeps comparing you unfavorably to a competitor they didn\'t hire',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: "Competitor X Would Have Done It This Way"',
    body: `Hi Marcus,

You've mentioned Competitor X three times this week. I have a genuine question: why didn't you hire them?

If they're faster, cheaper, more creative, and always available (per your comparisons), it seems like an obvious choice. And yet here we are — working together, under a signed contract that you initiated.

I can't speak to what Competitor X would or wouldn't do, because they're not here. I am. And I'm delivering what was agreed, on time, at the price quoted.

If you'd like to explore working with them for future projects, I genuinely support that! But comparing me unfavorably to someone you chose not to hire isn't productive for either of us.

Shall we focus on the project at hand?

Best`,
    aggressionScore: 68,
    damageAssessment: 'Client confronted with illogic of constant competitor comparison',
    corporateTranslation: {
      whatYouMean: 'If they\'re so great, why didn\'t you hire them? Stop comparing me to them.',
      corporateVersion: 'I\'d like to focus our discussions on maximizing value within our current engagement.',
    },
    tags: ['competitor', 'comparison', 'unfavorable', 'loyalty', 'relationship'],
  },
  {
    id: 'bonus-manager-token-appreciation',
    recipient: 'manager',
    situation: 'Manager\'s idea of appreciation is a pizza party instead of raises',
    category: 'managers',
    tone: 5,
    length: 'short',
    subject: 'Re: Pizza Party This Friday! 🎉 - A Counter-Proposal',
    body: `Hi Carol,

Thank you for the pizza party to celebrate our record-breaking quarter! The team worked 60-hour weeks for 3 months to achieve $2M above target.

Quick math: $2M in extra revenue ÷ 12 team members = ~$166,666 in value generated per person. A pizza costs approximately $3 per person.

I want to be clear: we love pizza! But pizza is what you get a team when they stay late one night, not when they single-handedly exceed revenue targets by 40%.

What the team was hoping for:
- Bonuses reflective of performance
- Or comp time for the overtime
- Or literally any recognition that costs more than $36 total

The pizza party is nice! But it's not $2M nice.

Just some food for thought. (Not pizza.)

Best`,
    aggressionScore: 75,
    damageAssessment: 'Manager confronted with inadequate appreciation relative to contribution',
    corporateTranslation: {
      whatYouMean: 'We made you $2M and you\'re giving us $3 worth of pizza? Are you serious?',
      corporateVersion: 'I want to discuss recognition programs that align with the team\'s exceptional performance impact.',
    },
    tags: ['pizza-party', 'appreciation', 'raises', 'bonuses', 'value'],
  },
  {
    id: 'bonus-coworker-passive-aggressive-sticky',
    recipient: 'coworker',
    situation: 'Someone leaves passive-aggressive sticky notes in the office',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Re: The Sticky Note Situation',
    body: `Hi team,

I'd like to address the growing collection of passive-aggressive sticky notes appearing around the office:

- On the printer: "Some of us know how to refill paper. Do you?" 🟡
- On the microwave: "YOUR MOTHER DOESN'T WORK HERE" 🟡
- On the shared fridge: "If it's not yours, DON'T TOUCH IT (you know who you are)" 🟡
- On the bathroom: "Wash hands = not optional" 🟡

While I appreciate the penmanship, perhaps we could address these concerns directly? Like adults? In conversation form?

If the sticky note author would like to reveal themselves, I promise a judgment-free zone. We can work through these issues together, verbally, without office supplies.

Alternatively, I'll start leaving responsive sticky notes and we can have an entire relationship via Post-it.

Best`,
    aggressionScore: 35,
    damageAssessment: 'Office tension addressed with humor. Sticky note author may feel called out.',
    corporateTranslation: {
      whatYouMean: 'Stop leaving passive-aggressive notes and just talk to people directly.',
      corporateVersion: 'I\'d like to discuss more direct communication channels for shared workspace concerns.',
    },
    tags: ['sticky-notes', 'office', 'anonymous', 'communication', 'direct'],
  },
  {
    id: 'bonus-supplier-auto-renew-sneaky',
    recipient: 'supplier',
    situation: 'Supplier auto-renewed contract with price increase buried in fine print',
    category: 'suppliers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Contract Auto-Renewal - Dispute',
    body: `Hi team,

I see that our contract has auto-renewed with a 25% price increase that was apparently communicated in a footnote on page 47 of an email attachment sent on Christmas Eve.

A few thoughts:
1. Burying price increases in fine print on a holiday is legally creative but ethically questionable
2. Our original agreement requires 60 days written notice of any price change (not a footnote)
3. Auto-renewal clauses don't override price change notification requirements

I'm disputing the new rate. We'll continue at the previous rate while we discuss, or I'll invoke our 30-day termination clause and move to another supplier.

I've CC'd our legal team because sneaky contract modifications deserve professional attention.

Regards`,
    aggressionScore: 78,
    damageAssessment: 'Supplier caught in questionable contract practice. Legal escalation clear.',
    corporateTranslation: {
      whatYouMean: 'You snuck a price increase into fine print on Christmas Eve. I\'m not paying it.',
      corporateVersion: 'I need to dispute the renewal terms as they don\'t align with our contractual notification requirements.',
    },
    tags: ['auto-renewal', 'price-increase', 'fine-print', 'sneaky', 'legal'],
  },
  {
    id: 'bonus-employee-first-to-leave-last-to-arrive',
    recipient: 'employee',
    situation: 'Employee always first to leave and last to arrive but complains about workload',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Workload Discussion - With Calendar Context',
    body: `Hi Brett,

You mentioned feeling overwhelmed with your workload. I take that seriously and want to help!

To better understand the situation, I reviewed some patterns:
- Average arrival: 9:47 AM (our hours start at 9:00)
- Average departure: 4:15 PM (our hours end at 5:00)
- Lunch duration: ~80 minutes (break is 60)
- Effective working hours: ~5.5 per day

For comparison, the average team member works about 7.5 effective hours. That's a 2-hour daily difference, or about 10 hours per week.

I wonder: could the workload feel overwhelming because there are fewer hours being applied to it? Just a hypothesis!

Would you like to discuss either adjusting your schedule or adjusting your assignment load proportionally?

Best`,
    aggressionScore: 62,
    damageAssessment: 'Employee confronted with documented attendance pattern',
    corporateTranslation: {
      whatYouMean: 'You work 5.5 hours a day and complain about workload. Maybe work more hours.',
      corporateVersion: 'I want to explore the relationship between your available working hours and assignment load.',
    },
    tags: ['hours', 'workload', 'attendance', 'short-days', 'productivity'],
  },
  {
    id: 'bonus-client-emergency-isnt',
    recipient: 'client',
    situation: 'Client calls something an "emergency" that clearly isn\'t',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: EMERGENCY - Button Color',
    body: `Hi Patricia,

I received your emergency call, voicemail, 3 texts, and Slack message about the button color on the contact page.

I want to make sure we're calibrated on emergencies:
- Website down: Emergency ✓
- Security breach: Emergency ✓
- Legal compliance violation: Emergency ✓
- Button is "more teal than we discussed": Not an emergency ✗

The button color will be adjusted in our next scheduled update (Thursday). No users have complained. No revenue is lost. No laws are broken. The button is simply slightly more teal than planned.

For actual emergencies, I remain available 24/7. For teal-related concerns, business hours apply.

Best`,
    aggressionScore: 55,
    damageAssessment: 'Client\'s emergency sensitivity recalibrated with humor',
    corporateTranslation: {
      whatYouMean: 'A button color is not an emergency. Stop calling me in a panic about nothing.',
      corporateVersion: 'I want to establish emergency escalation criteria to ensure true urgencies get immediate attention.',
    },
    tags: ['false-emergency', 'button-color', 'escalation', 'calibration'],
  },
  {
    id: 'bonus-meeting-invite-30-people',
    recipient: 'manager',
    situation: 'Meeting has 30 people invited but only 3 need to be there',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Project Kickoff (30 Attendees?) - Attendee Audit',
    body: `Hi Karen,

I see the kickoff meeting has 30 attendees. Having reviewed the agenda, I believe approximately 3 of us need to be there.

Quick attendee audit:
- People who'll speak: ~3
- People who need the info: ~5
- People who'll multitask through it: ~15
- People who'll stare blankly wondering why they're here: ~7

That's 30 people × 1 hour = 30 person-hours of collective time. For a meeting that could be accomplished by 3 people in 20 minutes plus a summary email.

Could we trim the invite list to essential attendees and send notes to everyone else? We'd save approximately 27 hours of combined productivity.

Just a thought!`,
    aggressionScore: 42,
    damageAssessment: 'Manager may reduce invite list. Everyone uninvited will be grateful.',
    corporateTranslation: {
      whatYouMean: 'Why are 30 people invited to a meeting 3 people can handle?',
      corporateVersion: 'I want to optimize meeting attendance to respect everyone\'s time while ensuring key stakeholders are informed.',
    },
    tags: ['too-many-people', 'meetings', 'efficiency', 'invite-list'],
  },
  {
    id: 'bonus-freelancer-missed-brief',
    recipient: 'freelancer',
    situation: 'Freelancer clearly didn\'t read the brief and asks questions answered in it',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: Quick Questions (All Answered in Brief, Pages 1-3)',
    body: `Hi Emma,

Happy to answer your questions! But first, a quick note: all 7 of them are answered in the brief I sent last Monday. Specifically:

1. "What colors should I use?" → Brief, page 1, section "Color Palette"
2. "Who's the target audience?" → Brief, page 1, section "Target Demographics"
3. "What's the tone?" → Brief, page 2, section "Brand Voice"
4. "Are there reference sites?" → Brief, page 2, section "Competitive References" (5 links)
5. "What's the deadline?" → Brief, page 3 + the email subject line + the contract
6. "How many pages?" → Brief, page 1, literally the first sentence
7. "What format do you want?" → Brief, page 3, section "Deliverable Specifications"

I spent 4 hours writing that brief specifically so you wouldn't need to ask these questions. Could you give it another look before our call tomorrow?

Thanks!`,
    aggressionScore: 58,
    damageAssessment: 'Freelancer embarrassed for not reading the document they were sent',
    corporateTranslation: {
      whatYouMean: 'Read the brief. I answered all your questions already. In writing. Last week.',
      corporateVersion: 'I\'ve created comprehensive documentation that should address your queries. Let me point you to the relevant sections.',
    },
    tags: ['brief', 'unread', 'questions', 'documentation', 'RTFM'],
  },
  {
    id: 'bonus-manager-conflicting-deadlines',
    recipient: 'manager',
    situation: 'Two managers give conflicting deadlines for the same deliverable',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Deadline Conflict - Which Reality Do I Live In?',
    body: `Hi David and Rachel,

I'm CC'ing you both because I'm getting two different deadlines for the same project:

David says: "Need it by Friday, absolutely non-negotiable"
Rachel says: "Take your time, quality over speed — next Thursday is fine"

These can't both be true (unless the deadline exists in a quantum state until someone observes it). I need to plan my week around ONE date.

Could you two align and send me a unified deadline? I'll enthusiastically work toward whichever one you agree on. I just need to know WHICH one before I can start.

Available for a quick 3-way call to sort this!

Best`,
    aggressionScore: 48,
    damageAssessment: 'Both managers see the conflict clearly and must resolve it',
    corporateTranslation: {
      whatYouMean: 'You\'re giving me different deadlines. Talk to each other and give me one answer.',
      corporateVersion: 'I need aligned guidance on delivery timing to plan my work effectively.',
    },
    tags: ['conflicting-deadlines', 'two-managers', 'alignment', 'confusion'],
  },
  {
    id: 'bonus-coworker-spoiler-culture',
    recipient: 'coworker',
    situation: 'Coworker spoils TV shows/movies for the office without warning',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Spoiler Protocol - A Team Request',
    body: `Hi Dave,

On behalf of approximately everyone: could we implement a spoiler warning system?

This week alone, you loudly revealed:
- The finale twist of a show 4 of us were mid-season on
- A major character death in a movie that came out 3 days ago
- The ending of a book Karen was literally reading at her desk

In each case, you began with "OH MY GOD DID YOU SEE—" and by the time anyone could shout "NO!" the damage was done.

Proposed protocol:
1. Ask "has everyone seen X?" BEFORE discussing
2. If anyone says no, take the conversation to Slack DMs
3. Monday mornings have a 1-week grace period on all media

Can we agree to this? My watchlist has PTSD.

Best`,
    aggressionScore: 35,
    damageAssessment: 'Coworker made aware of impact. Simple solution proposed.',
    corporateTranslation: {
      whatYouMean: 'Stop spoiling shows for everyone. Ask before you yell plot points across the office.',
      corporateVersion: 'I\'d like to suggest a communication norm around media discussions to respect everyone\'s viewing schedules.',
    },
    tags: ['spoilers', 'office', 'media', 'etiquette', 'boundaries'],
  },
  {
    id: 'bonus-manager-layoff-then-hire',
    recipient: 'manager',
    situation: 'Team got laid off for "budget" then company immediately hires for same roles at lower salary',
    category: 'managers',
    tone: 6,
    length: 'medium',
    subject: 'Re: New Job Posting - Familiar Role',
    body: `Hi Patricia,

Interesting! I noticed a job posting this morning for "Senior Marketing Strategist" — which is the exact role that was eliminated 6 weeks ago when myself and 3 colleagues were laid off due to "budget restructuring."

Some observations:
- Same title
- Same responsibilities (word for word from my old job description)
- Same team
- Salary range: $20K lower than what we were making

So just to clarify: the "budget restructuring" was actually "we want to pay someone less to do the same job"? Because that's what this looks like from the outside.

I'm not sure if this is legal in our state, and I'm looking into it. But I wanted to give you the opportunity to explain before I explore other avenues.

Regards`,
    aggressionScore: 92,
    damageAssessment: 'Nuclear. Company potentially exposed for bad-faith layoffs. Legal implications.',
    corporateTranslation: {
      whatYouMean: 'You fired us claiming "no budget" then posted our exact jobs at lower pay. That might be illegal.',
      corporateVersion: 'I\'d like to understand the relationship between the recent restructuring and the current hiring activity for comparable roles.',
    },
    tags: ['layoff', 'rehire', 'budget-lie', 'legal', 'nuclear', 'salary'],
  },
  {
    id: 'bonus-client-free-consulting',
    recipient: 'client',
    situation: 'Client keeps scheduling "discovery calls" that are actually free consulting',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: "Quick Discovery Call" #4 - A Transition Proposal',
    body: `Hi Steve,

I'm happy to schedule another call! But I want to be transparent: our previous three "discovery calls" have totaled 4 hours and covered:

- Call 1: Complete brand audit and recommendations
- Call 2: Marketing strategy roadmap discussion
- Call 3: Technical architecture consultation

These aren't discovery calls — they're consulting sessions. Good ones! But consulting sessions I've provided for free under the banner of "getting to know the project."

I now know the project intimately. You have approximately $3,000 worth of free advice from our previous calls. I'm confident you could execute on it without me at this point!

For call #4, I'd like to propose one of two options:
1. We sign a project agreement and the call is our paid kickoff
2. The call is our final "discovery" and lasts 15 minutes max

Which works for you?

Best`,
    aggressionScore: 60,
    damageAssessment: 'Client caught extracting free work. Must commit or move on.',
    corporateTranslation: {
      whatYouMean: 'You\'re getting free consulting disguised as "discovery." Pay me or stop calling.',
      corporateVersion: 'I\'d like to transition our conversations from exploratory to an engagement with clear deliverables.',
    },
    tags: ['free-consulting', 'discovery-calls', 'boundaries', 'conversion', 'value'],
  },
  {
    id: 'bonus-employee-chatgpt-obvious',
    recipient: 'employee',
    situation: 'Employee submitting work that is obviously AI-generated without review',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: Quarterly Strategy Document - Quality Check',
    body: `Hi Kyle,

Thanks for the strategy document! A few observations:

1. It begins with "Certainly! Here's a comprehensive quarterly strategy..."
2. Three paragraphs start with "Moreover" and two with "Furthermore"
3. It mentions capabilities our company doesn't have
4. It's factually wrong about our Q2 numbers
5. The summary says "I hope this helps! Let me know if you'd like me to adjust anything"

I'm all for using AI tools to assist with drafting! But the keyword is "assist" — meaning you still need to read it, fact-check it, remove the chatbot fingerprints, and make sure it reflects OUR company's reality.

Could you revise this with actual data and your own analysis? The one where you've read it before sending it?

Thanks`,
    aggressionScore: 58,
    damageAssessment: 'Employee caught not reviewing AI output. Embarrassing but fixable.',
    corporateTranslation: {
      whatYouMean: 'You clearly just pasted ChatGPT output without reading it. It still says "Certainly!" at the top.',
      corporateVersion: 'I want to discuss quality assurance standards for deliverables, regardless of what drafting tools are used.',
    },
    tags: ['AI', 'chatgpt', 'lazy', 'quality', 'review', 'obvious'],
  },
  {
    id: 'bonus-meeting-screen-off-not-listening',
    recipient: 'coworker',
    situation: 'Person in virtual meeting clearly not listening (called on and has no idea what was discussed)',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Today\'s Meeting - Context for Your Response',
    body: `Hi Tom,

In today's meeting, when I asked "Tom, what are your thoughts on the migration timeline?" and you responded with "Yeah, sounds good!" — I want you to know that the question wasn't yes/no, and "sounds good" doesn't mean anything in this context.

I suspect your camera being off and the 3-second pause before every response means you might have been multitasking. No judgment! But if you're not actually in the meeting, we could skip the pretense and just send you the notes afterward.

For the record: we still need your actual input on the migration timeline. Monday works?

Best`,
    aggressionScore: 45,
    damageAssessment: 'Coworker called out for not paying attention. Mildly embarrassing.',
    corporateTranslation: {
      whatYouMean: 'You weren\'t listening to a word of that meeting. Just admit it.',
      corporateVersion: 'I want to capture your input on the migration timeline since we didn\'t get to fully discuss it.',
    },
    tags: ['not-listening', 'virtual-meeting', 'multitasking', 'camera-off'],
  },
  {
    id: 'bonus-coworker-perfume-strong',
    recipient: 'coworker',
    situation: 'Coworker wears overwhelmingly strong perfume/cologne',
    category: 'coworkers',
    tone: 2,
    length: 'short',
    subject: 'Scent Sensitivity - A Gentle FYI',
    body: `Hi Amanda,

This is a slightly awkward email to send, but I want to approach it with care: a few team members (including myself) have scent sensitivities, and your fragrance is quite strong in our shared workspace.

I want to be clear: you smell LOVELY. It's clearly an expensive and tasteful choice. It's just that in an enclosed office space with shared ventilation, it travels farther than you might realize.

Would you be open to perhaps applying a lighter hand, or switching to a less concentrated formulation for office days? No judgment on personal choices — just a shared-air request.

I hope this doesn't come across badly! It's genuinely meant with kindness.

Best`,
    aggressionScore: 20,
    damageAssessment: 'Recipient may feel self-conscious but message delivered with genuine care',
    corporateTranslation: {
      whatYouMean: 'Your perfume is way too strong for an enclosed office. Dial it back please.',
      corporateVersion: 'I want to flag a shared workspace comfort consideration regarding fragrance intensity.',
    },
    tags: ['perfume', 'scent', 'office', 'sensitivity', 'delicate'],
  },
];
