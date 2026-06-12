import { Scenario } from './types';

export const extraScenarios: Scenario[] = [
  {
    id: 'extra-client-moving-target-brand',
    recipient: 'client',
    situation: 'Client changes brand direction every review cycle',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: Brand Direction (Version 9)',
    body: `Hi Sophia,

Exciting! We're going edgy and bold now. For reference, here's our brand journey over 6 weeks:

Week 1: "Clean and corporate"
Week 2: "Actually, more playful"
Week 3: "Hmm, back to corporate but with warmth"
Week 4: "What if we tried luxury?"
Week 5: "More approachable — think IKEA meets Apple"
Week 6: "Let's go edgy and bold"

I've now designed for every adjective in the English language. Could we perhaps pick ONE direction and commit? Even just for a week? Baby steps.

Best`,
    aggressionScore: 58,
    damageAssessment: 'Client sees pattern of indecision documented clearly',
    corporateTranslation: {
      whatYouMean: 'Pick a brand direction and stop changing your mind every 5 days.',
      corporateVersion: 'I think a locked creative direction would accelerate delivery and improve outcomes.',
    },
    tags: ['brand', 'indecision', 'direction', 'changing', 'design'],
  },
  {
    id: 'extra-coworker-stolen-idea',
    recipient: 'coworker',
    situation: 'Coworker pitched your idea from last week as their own',
    category: 'coworkers',
    tone: 5,
    length: 'medium',
    subject: 'Great Idea in Today\'s Meeting!',
    body: `Hi Kevin,

Loved your idea in today's brainstorm about implementing a customer loyalty points system! It sounded really familiar — almost like something I proposed in last Tuesday's meeting. Word for word. Because it was.

I even have it in my meeting notes from March 3rd (which I shared with the team, including you). Slide 4 of my presentation deck. The one titled "Customer Loyalty Points Proposal" with my name on it.

I appreciate you championing my ideas! But typically when presenting someone else's concept, the convention is to say "building on Sarah's suggestion from last week..." rather than "I had an idea..."

Shall we present it together to the stakeholders? Since we apparently both had the exact same idea at the exact same time? What a coincidence!

Best`,
    aggressionScore: 78,
    damageAssessment: 'Coworker caught stealing idea with documented proof',
    corporateTranslation: {
      whatYouMean: 'You stole my idea verbatim and presented it as yours. I have proof.',
      corporateVersion: 'I wanted to clarify attribution on today\'s proposal to ensure collaborative credit is properly assigned.',
    },
    tags: ['idea-theft', 'credit', 'brainstorm', 'documentation', 'proof'],
  },
  {
    id: 'extra-manager-contradictory-feedback',
    recipient: 'manager',
    situation: 'Manager gives opposite feedback to what the other manager said',
    category: 'managers',
    tone: 4,
    length: 'medium',
    subject: 'Conflicting Guidance - Need Tiebreaker',
    body: `Hi David and Sarah,

I'm CCing you both because I've received contradictory guidance and need a tiebreaker before I proceed:

David said: "The report needs to be more detailed. Add data for every sub-category."
Sarah said: "The report is too long. Cut it by 50% and keep it high-level."

David said: "Include all regional breakdowns."
Sarah said: "Remove regional data — it's too granular."

I cannot simultaneously add more detail and cut by 50%. This violates both physics and document formatting.

Could you two align on a direction and let me know the result? I'll do whatever the consensus is. I just need there to BE a consensus.

Standing by for the verdict!

Best`,
    aggressionScore: 52,
    damageAssessment: 'Both managers forced to confront their contradictory instructions',
    corporateTranslation: {
      whatYouMean: 'You two are giving me opposite instructions. Figure it out between yourselves.',
      corporateVersion: 'I want to align on a unified direction from leadership to ensure the deliverable meets shared expectations.',
    },
    tags: ['contradictory', 'managers', 'conflict', 'alignment', 'direction'],
  },
  {
    id: 'extra-supplier-wrong-address-again',
    recipient: 'supplier',
    situation: 'Supplier keeps shipping to your old address despite multiple corrections',
    category: 'suppliers',
    tone: 4,
    length: 'short',
    subject: 'Shipping Address - Attempt #5 to Correct',
    body: `Hi team,

For the fifth time, our shipping address is:

742 INNOVATION DRIVE, SUITE 400, CHICAGO, IL 60601

It is NOT:

318 Oak Street, Peoria, IL 61602 (our old address from 2021)

We moved. Three years ago. I've updated the address in your system twice, called your team three times, sent four emails, and yet every shipment arrives at an office we no longer occupy.

I'm attaching the new address in 72-point font, bolded, highlighted in yellow, and framed by a border of small arrows pointing at it. Please forward to your shipping department, your warehouse team, your systems administrator, and whoever else needs to know we don't live in Peoria anymore.

Thanks!`,
    aggressionScore: 55,
    damageAssessment: 'Supplier embarrassed by repeated failure on basic logistics',
    corporateTranslation: {
      whatYouMean: 'Update our address in your system. We moved THREE YEARS AGO.',
      corporateVersion: 'I need to ensure our current shipping address is properly reflected across all your fulfillment systems.',
    },
    tags: ['wrong-address', 'repeated-mistake', 'logistics', 'update'],
  },
  {
    id: 'extra-employee-negative-attitude',
    recipient: 'employee',
    situation: 'Employee shoots down every suggestion in meetings with negativity',
    category: 'meetings',
    tone: 4,
    length: 'medium',
    subject: 'Meeting Contributions - A Constructive Chat',
    body: `Hi Derek,

I wanted to chat about your contributions in team meetings. I appreciate that you're engaged! However, I've noticed a pattern:

- "We tried that before, it won't work" (said 12 times this quarter)
- "That's not realistic" (said 8 times)
- "Good luck with that" (said with accompanying eye roll, 5 times)
- Alternative suggestions offered: 0

Identifying problems is valuable! But doing ONLY that, without ever proposing solutions, creates an energy in the room that's... let's call it "motivationally challenging."

Going forward, I'd love to implement a simple rule: for every objection raised, include one alternative suggestion. "That won't work because X — but what about Y?" is infinitely more useful than just "that won't work."

Can we try this approach?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Employee confronted with specific pattern and given clear alternative behavior',
    corporateTranslation: {
      whatYouMean: 'Stop being negative about everything without offering solutions. It kills team morale.',
      corporateVersion: 'I want to discuss how we can channel your analytical skills into more solution-oriented meeting contributions.',
    },
    tags: ['negativity', 'meetings', 'solutions', 'attitude', 'team-morale'],
  },
  {
    id: 'extra-freelancer-double-booked',
    recipient: 'freelancer',
    situation: 'Freelancer clearly took on too many projects and your work is suffering',
    category: 'deadlines',
    tone: 4,
    length: 'medium',
    subject: 'Capacity Discussion - An Honest Check-in',
    body: `Hi Jamie,

I want to have an honest conversation about capacity. Over the past two weeks:
- Response time went from 2 hours to 3 days
- Quality of deliverables dropped noticeably
- Two deadlines were missed with last-minute excuses
- Your "unavailable" time blocks tripled on the shared calendar

I also happened to notice (not stalking, just observant) that you've announced three new client projects on LinkedIn in the past month. Congratulations on the business growth!

But I need to ask directly: do you still have capacity for our project? Because if you're overcommitted, I'd rather know now and plan accordingly than watch quality erode week by week.

No judgment — just honesty. What's realistic?

Best`,
    aggressionScore: 55,
    damageAssessment: 'Freelancer given graceful exit or opportunity to recommit',
    corporateTranslation: {
      whatYouMean: 'You took on too much work and now my project is suffering. Be honest about it.',
      corporateVersion: 'I want to ensure our project remains a priority and discuss realistic capacity allocation.',
    },
    tags: ['overcommitted', 'capacity', 'quality', 'honesty', 'double-booked'],
  },
  {
    id: 'extra-manager-no-raise-record-year',
    recipient: 'manager',
    situation: 'Company had record profits but "no budget for raises"',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Compensation Discussion - Some Questions',
    body: `Hi Michelle,

Thank you for the message that there's "no budget for raises this year." I understand! Times are tough.

A few observations I'm trying to reconcile:
- Company revenue increased 34% (per last week's all-hands)
- CEO's compensation package increased by $2.3M (per the annual report)
- We hired 3 new VPs this quarter (with undoubtedly competitive packages)
- The office got a $400K renovation (the new lobby is lovely!)
- My raise: 0%

I'm struggling with the math here. "No budget" seems to mean "no budget for THIS specific purpose" rather than "no budget" in the literal sense.

Could we discuss what specific criteria would unlock a compensation adjustment? I'd like a clear target to aim for that doesn't involve the company's stock price falling.

Appreciate the transparency!`,
    aggressionScore: 80,
    damageAssessment: 'Manager confronted with visible corporate hypocrisy. Uncomfortable but important.',
    corporateTranslation: {
      whatYouMean: 'The company is printing money and the CEO got millions. Don\'t tell me there\'s no budget for raises.',
      corporateVersion: 'I want to discuss my compensation trajectory in the context of the company\'s strong financial performance.',
    },
    tags: ['raise', 'compensation', 'hypocrisy', 'budget', 'record-profits'],
  },
  {
    id: 'extra-coworker-taking-credit-code',
    recipient: 'coworker',
    situation: 'Coworker forked your repo and removed your commits to claim the work',
    category: 'coworkers',
    tone: 6,
    length: 'medium',
    subject: 'Interesting Git History on the New Repo',
    body: `Hi Marcus,

I was reviewing the codebase for Project Phoenix and noticed something fascinating about the git history. It appears you created a fresh repo and manually copied all the code from my original repository — but conveniently omitted the commit history that shows I wrote 94% of it.

For anyone following along:
- Original repo: 847 commits by me over 6 months
- Your new repo: 1 commit by you titled "Initial commit" dated yesterday
- Same code. Character for character. Including my comments and even a typo I made in March.

I've saved the original git log, the file comparison showing they're identical, and screenshots of both repos. Not because I'm paranoid, but because apparently I need to be.

I'm going to give you 24 hours to either restore proper attribution or explain this to our engineering director. Your choice.

Regards`,
    aggressionScore: 95,
    damageAssessment: 'Nuclear. Coworker caught red-handed in IP theft with irrefutable evidence.',
    corporateTranslation: {
      whatYouMean: 'You literally stole my entire codebase and claimed it as yours. I have proof and you have 24 hours.',
      corporateVersion: 'I\'d like to discuss repository attribution and intellectual property assignment for Project Phoenix.',
    },
    tags: ['code-theft', 'git', 'attribution', 'proof', 'nuclear', 'IP'],
  },
  {
    id: 'extra-client-ghosted-approval',
    recipient: 'client',
    situation: 'Client approved work verbally but now denies it',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: "I Never Approved That" - Meeting Recording Available',
    body: `Hi Andrew,

You mentioned you "never approved the blue color scheme." I understand the confusion! Memory can be tricky.

Fortunately, I have the following documentation:
1. Meeting recording from April 3 (timestamp 23:47) where you said "love the blue, let's go with it"
2. Your Slack message from April 4: "The blue mockups are perfect 👌"
3. Your email from April 5: "Approved! Proceed with current direction"
4. The signed approval form dated April 5 (your signature, your initials, your handwriting)

I'm happy to share any or all of these! I keep thorough records specifically for moments like these.

Now, if you've simply changed your mind — that's completely fine! We can revise. But "I never approved that" is factually inaccurate, and I'd prefer we work from shared reality.

Shall I quote for the revision?

Best`,
    aggressionScore: 80,
    damageAssessment: 'Client\'s denial demolished with comprehensive proof. Must pay for revision.',
    corporateTranslation: {
      whatYouMean: 'You absolutely approved this. I have recordings, messages, and your signed form. Don\'t gaslight me.',
      corporateVersion: 'I\'d like to review our approval documentation to resolve this misalignment and discuss next steps.',
    },
    tags: ['approval', 'denial', 'documentation', 'receipts', 'gaslighting'],
  },
  {
    id: 'extra-meeting-hijacked-personal',
    recipient: 'coworker',
    situation: 'Coworker turns every team meeting into a therapy session',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Meeting Format Suggestion',
    body: `Hi Greg,

I hope you're doing well — genuinely. I know things have been stressful with the house renovation and your neighbor's barking dog situation (and the ongoing feud with your HOA, and the thing with your brother-in-law).

I wanted to suggest that our sprint planning meetings might not be the ideal venue for processing these life events. I say this with care! There are great resources for that — EAP, friends, therapists who bill by the hour.

Our sprints, however, are billed by the company hour, and we've been averaging about 8 minutes of actual sprint planning in our 30-minute sessions.

Could we keep the work meetings for work, and schedule a coffee chat for the personal stuff? I'm genuinely happy to listen — just maybe not when I also need to estimate 14 tickets.

Best`,
    aggressionScore: 42,
    damageAssessment: 'Coworker gently redirected without dismissing their struggles',
    corporateTranslation: {
      whatYouMean: 'Stop venting about your personal life in work meetings. We have tickets to estimate.',
      corporateVersion: 'I want to ensure our meetings stay focused while also supporting team wellbeing through appropriate channels.',
    },
    tags: ['oversharing', 'meetings', 'personal', 'boundaries', 'therapy'],
  },
  {
    id: 'extra-supplier-bait-switch-quality',
    recipient: 'supplier',
    situation: 'Supplier sent high-quality samples then delivered cheap version',
    category: 'suppliers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Bulk Order vs. Sample Quality - A Discrepancy',
    body: `Hi Roger,

Interesting situation with today's bulk delivery. The samples you sent in February were beautiful — thick cardstock, vivid colors, crisp print quality. That's what we ordered 5,000 units of.

What arrived today is... different. Same design, sure. But printed on what appears to be tissue paper, with colors that look like they were applied by a dying printer running on fumes.

I've placed the sample and the bulk product side by side and taken comparison photos (attached). They are clearly not the same material, weight, or print quality.

This is textbook bait-and-switch. We approved and paid for the sample quality, not the "budget remix" you've delivered.

Options:
1. Replace the entire order with sample-quality product
2. Full refund and we part ways
3. I share these comparison photos in my review of your company

Which works for you?

Regards`,
    aggressionScore: 78,
    damageAssessment: 'Supplier caught in bait-and-switch with photographic evidence',
    corporateTranslation: {
      whatYouMean: 'The samples were great and the bulk order is garbage. Replace them or refund me.',
      corporateVersion: 'I need to flag a significant quality discrepancy between approved samples and the production run.',
    },
    tags: ['bait-and-switch', 'quality', 'samples', 'bulk', 'evidence'],
  },
  {
    id: 'extra-manager-impossible-kpi',
    recipient: 'manager',
    situation: 'Manager sets KPIs that are mathematically impossible to achieve',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Q4 KPIs - A Mathematical Inquiry',
    body: `Hi Tom,

I've reviewed the Q4 KPIs and have some questions. Specifically about how to achieve them within the known laws of mathematics:

- "Increase revenue by 200% while cutting ad spend by 50%"
- "Reduce support response time to 30 seconds" (we currently average 4 minutes with a 2-person team)
- "Ship 40 features" (we shipped 8 last quarter with the same team)
- "Achieve 100% customer satisfaction" (literally impossible in any human interaction)

I'm trying to figure out: are these aspirational? Motivational? A typo? Because they're not achievable — and I don't mean "challenging," I mean structurally, mathematically, physically impossible.

I'd love to discuss realistic targets that push us forward without requiring the suspension of reality. Can we chat?

Best`,
    aggressionScore: 70,
    damageAssessment: 'Manager forced to confront that impossible targets demoralize rather than motivate',
    corporateTranslation: {
      whatYouMean: 'These KPIs are impossible and setting us up to fail. Set real targets.',
      corporateVersion: 'I want to ensure our KPIs are ambitious yet achievable to maintain team motivation and accountability.',
    },
    tags: ['kpis', 'impossible', 'targets', 'unrealistic', 'math'],
  },
  {
    id: 'extra-coworker-takes-long-smoke-breaks',
    recipient: 'coworker',
    situation: 'Coworker takes 6 smoke breaks a day but complains when you take a coffee break',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: "Must Be Nice to Have Time for Coffee"',
    body: `Hi Brad,

Interesting comment about my 10-minute coffee break! Let me provide some context with rough math:

Your smoke breaks today:
- 9:15 AM (12 min)
- 10:30 AM (15 min)
- 12:00 PM (10 min)
- 2:00 PM (12 min)
- 3:30 PM (15 min)
- 4:45 PM (10 min)
Total: ~74 minutes away from desk

My coffee break: 10 minutes. Total.

I agree — it IS nice to have time for coffee! Almost as nice as having time for 74 minutes of outdoor recreation distributed throughout the day.

Enjoy your next break!

Best`,
    aggressionScore: 65,
    damageAssessment: 'Coworker\'s hypocrisy exposed with documented math',
    corporateTranslation: {
      whatYouMean: 'You take 74 minutes of smoke breaks and judge my 10-minute coffee? Hypocrite.',
      corporateVersion: 'I want to ensure equitable break policies are applied consistently across the team.',
    },
    tags: ['smoke-breaks', 'hypocrisy', 'double-standards', 'coffee', 'math'],
  },
  {
    id: 'extra-client-referral-as-payment',
    recipient: 'client',
    situation: 'Client offers "exposure" or referrals instead of paying',
    category: 'invoices',
    tone: 5,
    length: 'short',
    subject: 'Re: Payment in Exposure - A Counter-Offer',
    body: `Hi Brandon,

Thank you for the offer to pay me in "exposure and referrals" instead of money! Creative thinking.

I ran this by my landlord, who sadly does not accept exposure as rent. I also checked with my electricity provider, my internet company, and the grocery store. None of them have an "exposure" payment option at checkout.

Here's my counter-offer: you pay me the agreed $4,000, and I'll give YOU exposure by telling everyone what a great client you are. That's exposure going BOTH ways. Revolutionary!

Alternatively: payment by Friday, per our contract.

Let me know which approach works!

Warm regards`,
    aggressionScore: 72,
    damageAssessment: 'Client\'s insulting offer shut down with humor. Payment expected.',
    corporateTranslation: {
      whatYouMean: 'I cannot pay my rent with exposure. Pay me real money.',
      corporateVersion: 'I appreciate the partnership intent! However, I need to maintain our agreed compensation structure.',
    },
    tags: ['exposure', 'free-work', 'payment', 'devaluing', 'referrals'],
  },
  {
    id: 'extra-meeting-screen-share-notifications',
    recipient: 'coworker',
    situation: 'Someone screen shared and embarrassing notifications popped up',
    category: 'meetings',
    tone: 2,
    length: 'short',
    subject: 'Quick Tip: Do Not Disturb While Presenting',
    body: `Hi Lisa,

Great presentation today! One small tech tip for next time: if you're screen sharing, it might be worth enabling "Do Not Disturb" mode first.

Just in case you weren't aware, the following notifications appeared during your client presentation:
- A Tinder match notification
- A text from "Mom" saying "Did you feed the cat???"
- A Slack DM that said "Is this meeting over yet? I'm dying"

The client was very professional about it! But perhaps next time we can keep the presentation strictly... presentation-focused.

No judgment. Just DND settings. They're in System Preferences.

Best`,
    aggressionScore: 30,
    damageAssessment: 'Helpful tip delivered with minimal embarrassment',
    corporateTranslation: {
      whatYouMean: 'Your embarrassing notifications were visible to the client during your screen share.',
      corporateVersion: 'Quick reminder about presentation mode best practices for client-facing meetings.',
    },
    tags: ['screen-share', 'notifications', 'embarrassing', 'presentation', 'DND'],
  },
  {
    id: 'extra-manager-delegates-up',
    recipient: 'manager',
    situation: 'Manager keeps delegating THEIR responsibilities to you',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Role Clarity Discussion - Quick Question',
    body: `Hi Karen,

I'd love to discuss something I've noticed about our working dynamic. Over the past month, I've been handling:

- Budget reports (your responsibility per org chart)
- Team 1:1s (you're their manager, not me)
- Client escalation calls (your calendar says "Karen")
- Hiring decisions (I don't have hiring authority)
- Strategy presentations to the board (definitely a manager thing)

Meanwhile, you've been handling... what, exactly? I ask genuinely — not to be difficult, but because I seem to be doing two jobs while being compensated for one.

If my role is expanding to include your responsibilities, I'd like to discuss:
1. The title change that reflects this
2. The compensation that accompanies it
3. What exactly you'll be doing

Can we chat Thursday?

Best`,
    aggressionScore: 82,
    damageAssessment: 'Manager directly confronted about not doing their own job. Uncomfortable.',
    corporateTranslation: {
      whatYouMean: 'I\'m doing your job AND mine. Either promote me or start doing your work.',
      corporateVersion: 'I want to align on role responsibilities and discuss whether my expanding scope warrants a formal role adjustment.',
    },
    tags: ['delegation', 'manager-responsibilities', 'role-clarity', 'promotion', 'two-jobs'],
  },
  {
    id: 'extra-supplier-minimum-viable-product',
    recipient: 'supplier',
    situation: 'Supplier delivered the absolute bare minimum of what was technically specified',
    category: 'suppliers',
    tone: 4,
    length: 'short',
    subject: 'Re: Order Delivered - Technically Correct Edition',
    body: `Hi team,

I ordered "500 red pens with company logo." What I received was technically correct:
- 500: ✓ (exactly 500, I counted)
- Red: ✓ (the clip is red, the body is white — creative interpretation)
- Pens: ✓ (they are pen-shaped)
- Company logo: ✓ (printed at approximately 2pt font, barely visible without a microscope)

While this delivery meets the letter of the specification, it aggressively violates the spirit. When I said "red pens," I meant pens that are red. When I said "company logo," I meant visibly.

Could we discuss what a reasonable interpretation looks like for the reprint?

Thanks!`,
    aggressionScore: 50,
    damageAssessment: 'Supplier caught in malicious compliance. Redo expected.',
    corporateTranslation: {
      whatYouMean: 'You delivered the bare minimum technically-correct version and you know it.',
      corporateVersion: 'I\'d like to discuss quality expectations that align with the intent of our specifications.',
    },
    tags: ['malicious-compliance', 'specifications', 'minimum', 'quality'],
  },
  {
    id: 'extra-coworker-eavesdropping',
    recipient: 'coworker',
    situation: 'Coworker inserts themselves into conversations they weren\'t part of',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Conversation Boundaries',
    body: `Hi Derek,

Quick observation: when two people are having a private conversation at their desks, and someone from three cubicles away rolls their chair over to contribute — that's a situation we should perhaps discuss.

You've done this approximately 8 times this week. Once while wearing noise-canceling headphones, which means you were either reading lips or have developed superhuman hearing.

I appreciate your enthusiasm for team discussions! But some conversations are not team discussions. They're two-person conversations that you are not part of. And that's okay! Not every nearby sentence requires your input.

Hope this makes sense!

Best`,
    aggressionScore: 48,
    damageAssessment: 'Coworker gently told their eavesdropping habit is noticeable',
    corporateTranslation: {
      whatYouMean: 'Stop butting into conversations that don\'t involve you.',
      corporateVersion: 'I want to discuss workspace communication norms around private discussions.',
    },
    tags: ['eavesdropping', 'boundaries', 'privacy', 'conversations', 'nosy'],
  },
  {
    id: 'extra-employee-weaponized-incompetence',
    recipient: 'employee',
    situation: 'Employee deliberately does tasks badly so they won\'t be asked again',
    category: 'coworkers',
    tone: 5,
    length: 'medium',
    subject: 'Quality Consistency - An Observation',
    body: `Hi Tiffany,

I've noticed an interesting pattern. Tasks you enjoy (design work, creative briefs) are executed flawlessly. Tasks you don't enjoy (data entry, meeting notes) arrive with approximately 47 errors per page.

The meeting notes from Tuesday listed attendees as "people," action items as "stuff to do," and the deadline as "sometime." This is from someone who produces pixel-perfect design documentation with proper citations and version control.

I don't believe you're suddenly incompetent at meeting notes. I believe you're strategically incompetent at meeting notes so you won't be asked to do them again. It's clever! But I see through it.

Going forward, all submissions that don't meet your demonstrated capability level will be returned for revision. Unlimited revisions. Until they match the quality I know you're capable of.

Your move!

Best`,
    aggressionScore: 72,
    damageAssessment: 'Employee caught in weaponized incompetence strategy. Game over.',
    corporateTranslation: {
      whatYouMean: 'I know you\'re doing bad work on purpose so you won\'t be asked again. It won\'t work.',
      corporateVersion: 'I want to discuss maintaining consistent quality standards across all task types.',
    },
    tags: ['weaponized-incompetence', 'strategic', 'quality', 'accountability'],
  },
  {
    id: 'extra-client-project-hold-indefinite',
    recipient: 'client',
    situation: 'Client put project on "brief hold" six months ago and won\'t confirm restart or cancellation',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Project Status - 6 Months of "Brief Hold"',
    body: `Hi Christine,

I'm reaching out about Project Zenith, which you placed on a "brief hold" on January 15th. It is now July 15th. That's the longest "brief" in recorded history — beating even my uncle's wedding toasts.

I'm currently in a state of project limbo:
- I can't take on new work of similar size (in case you restart)
- I can't close out the project (no formal cancellation)
- I can't invoice for the remaining work (half-complete)
- I can't plan my Q3 (because Q1's project still has a pulse... maybe?)

I need one of three answers:
1. "We're restarting on [date]" — great!
2. "We're cancelling" — understood, I'll send a final invoice
3. "We need another month" — okay, but with a formal restart date

What we can't continue is: indefinite silence. My calendar is not your storage closet.

Looking forward to any answer at all!

Best`,
    aggressionScore: 60,
    damageAssessment: 'Client forced to make a decision after extended limbo',
    corporateTranslation: {
      whatYouMean: 'It\'s been 6 months. Either restart, cancel, or stop wasting my time.',
      corporateVersion: 'I need to finalize project status for resource planning purposes. Could we align on a path forward?',
    },
    tags: ['hold', 'limbo', 'indefinite', 'decision', 'planning'],
  },
  {
    id: 'extra-meeting-walking-in-late-loudly',
    recipient: 'coworker',
    situation: 'Coworker walks into meetings late and disrupts everything',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Late Arrival Protocol',
    body: `Hi Marcus,

Quick suggestion: when arriving 15 minutes late to a meeting that's already in progress, perhaps we could try:
- Entering quietly
- Not announcing "SORRY I'M LATE!" at full volume
- Not asking "what did I miss?" (interrupting the current speaker)
- Not spending 5 minutes loudly setting up your laptop

Today's entrance was particularly cinematic — the door slam, the dropped coffee, the "CAN SOMEONE RECAP THE LAST 15 MINUTES?" while I was mid-sentence presenting to a client.

Perhaps a silent wave and a later review of the meeting notes? Just brainstorming alternatives to the current... grand entrance approach.

Cheers!`,
    aggressionScore: 45,
    damageAssessment: 'Coworker made aware of disruptive behavior with specific examples',
    corporateTranslation: {
      whatYouMean: 'You burst into meetings late, loudly, and disruptively. Please stop.',
      corporateVersion: 'I have a suggestion about minimizing disruption when joining meetings already in progress.',
    },
    tags: ['late', 'disruptive', 'entrance', 'meetings', 'etiquette'],
  },
  {
    id: 'extra-freelancer-github-disappeared',
    recipient: 'freelancer',
    situation: 'Freelancer deleted the project repository in a dispute',
    category: 'deadlines',
    tone: 6,
    length: 'medium',
    subject: 'Re: Deleted Repository - A Legal Situation',
    body: `Hi Jason,

I noticed that the project repository — containing 4 months of work that I PAID FOR — has been deleted from GitHub. This appears to have happened approximately 2 hours after our disagreement about the final payment milestone.

Let me be very clear about the situation:
1. The code was produced under our work-for-hire agreement (Section 1.3: "All work product is owned by Client upon creation")
2. Deleting client property is destruction of assets
3. GitHub maintains deletion logs and backups
4. My attorney has been CC'd on this email

You have until 5 PM tomorrow to restore the repository in full. If you have a dispute about payment, there are legal channels for that. Deleting someone's property is not one of them.

This is not a negotiation. Restore the code.

Regards`,
    aggressionScore: 95,
    damageAssessment: 'Maximum escalation. Legal involvement. Career-threatening for freelancer.',
    corporateTranslation: {
      whatYouMean: 'You deleted my code out of spite. Restore it by tomorrow or face legal action.',
      corporateVersion: 'I need to address an IP security incident regarding our project repository and invoke our contractual remedies.',
    },
    tags: ['code-deletion', 'legal', 'nuclear', 'IP', 'dispute', 'contract'],
  },
  {
    id: 'extra-coworker-always-negative',
    recipient: 'coworker',
    situation: 'Coworker responds to good news with negative predictions',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Positivity Experiment - A Proposal',
    body: `Hi Debbie,

I noticed a fun pattern! Whenever someone shares good news, your response follows a predictable formula:

"We landed a big client!" → "Probably won't last."
"I got promoted!" → "More work, same stress."
"We hit our quarterly target!" → "Watch, next quarter will be worse."
"It's Friday!" → "Monday's coming."

I propose an experiment: for one week, what if we tried neutral-to-positive responses? Not toxic positivity — just... not reflexive doom forecasting?

I've prepared some alternatives:
- Instead of "it won't last" → "that's great, nice work"
- Instead of "just wait" → [silence is also an option]

Want to try it? One week. Seven days of not being a harbinger of dread.

Cheerfully,
Best`,
    aggressionScore: 50,
    damageAssessment: 'Coworker confronted with humor — may be self-aware enough to change',
    corporateTranslation: {
      whatYouMean: 'You respond to literally every good thing with negativity and it\'s exhausting.',
      corporateVersion: 'I want to discuss how our team communication patterns affect collective morale.',
    },
    tags: ['negativity', 'doom', 'morale', 'good-news', 'responses'],
  },
  {
    id: 'extra-manager-email-novel',
    recipient: 'manager',
    situation: 'Manager sends 3000-word emails that could be 2 sentences',
    category: 'managers',
    tone: 3,
    length: 'short',
    subject: 'Re: Strategic Vision Forward-Looking Alignment (TL;DR Request)',
    body: `Hi Barbara,

Thank you for your email! I've read it three times and I believe the core message is: "Please submit your Q3 report by Friday."

If I'm wrong, please let me know! But if that IS the summary, could I humbly request that future emails of this nature skip the 3,000-word preamble about organizational alignment, strategic vision, cross-functional synergy, and the metaphor about rowing boats in the same direction?

I love a good metaphor as much as anyone. But when it takes 15 minutes to find the action item buried in paragraph 9, I worry things might get missed.

Brevity is the soul of email! (Shakespeare, loosely paraphrased.)

Best`,
    aggressionScore: 42,
    damageAssessment: 'Manager may feel called out but the feedback is constructive',
    corporateTranslation: {
      whatYouMean: 'Your emails are way too long. Just tell me what you need in 2 sentences.',
      corporateVersion: 'I want to suggest a communication format that helps action items stand out for faster execution.',
    },
    tags: ['long-emails', 'brevity', 'communication', 'tldr', 'action-items'],
  },
  {
    id: 'extra-client-verbal-agreement-denial',
    recipient: 'client',
    situation: 'Client denies verbal agreements and now everything needs to be in writing',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'New Communication Protocol - Everything in Writing',
    body: `Hi David,

Following our recent situation where you denied approving the color palette change in our April 12 call (despite both of us being there and me having notes), I'd like to propose a new communication protocol:

Going forward, ALL decisions will be confirmed via email. After every call, I'll send a summary of what was agreed. If I don't hear objections within 24 hours, it's confirmed.

This protects both of us! You from forgetting what you approved, and me from being told "I never said that" about things you definitely said.

I realize this might feel bureaucratic, but given that we've had three instances of "I never agreed to that" in the past month (for things we both know you agreed to), I think a paper trail benefits everyone.

Starting now: can you confirm via email that you approve this approach?

Best`,
    aggressionScore: 62,
    damageAssessment: 'Client confronted with pattern and given solution that prevents future disputes',
    corporateTranslation: {
      whatYouMean: 'You keep denying things you said. From now on, everything is in writing because I don\'t trust your memory.',
      corporateVersion: 'I want to implement a confirmation workflow to ensure mutual clarity on all project decisions.',
    },
    tags: ['verbal-agreement', 'denial', 'documentation', 'protocol', 'trust'],
  },
  {
    id: 'extra-coworker-music-no-headphones',
    recipient: 'coworker',
    situation: 'Coworker plays music from their laptop speakers in open office',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Music Appreciation - A Headphone Suggestion',
    body: `Hi Sam,

I've learned a lot about your music taste this week! I now know you enjoy lo-fi hip hop beats to relax/study to, early 2000s pop punk, and what I can only describe as "experimental Norwegian jazz."

The variety is impressive! What's less impressive is that all of us within a 30-foot radius are learning this through your laptop speakers rather than headphones.

I have a spare pair of earbuds if you need them — happy to donate to the cause of shared workspace peace. Alternatively, there are excellent options on Amazon ranging from $15 to $300, all of which share one beautiful feature: only YOU can hear them.

Let me know if you need those earbuds!

Harmoniously,
Best`,
    aggressionScore: 40,
    damageAssessment: 'Coworker made aware without aggression. Headphone solution offered.',
    corporateTranslation: {
      whatYouMean: 'Nobody wants to hear your music through your laptop speakers. Use headphones.',
      corporateVersion: 'I have a suggestion about shared workspace audio norms that might improve focus for everyone.',
    },
    tags: ['music', 'noise', 'headphones', 'open-office', 'speakers'],
  },
  {
    id: 'extra-manager-toxic-positivity',
    recipient: 'manager',
    situation: 'Manager responds to every serious concern with toxic positivity',
    category: 'managers',
    tone: 4,
    length: 'medium',
    subject: 'Re: "Everything Happens for a Reason" - A Counterpoint',
    body: `Hi Lisa,

I appreciate your positive outlook! However, when I flag that we've lost 3 team members this quarter and the remaining team is burning out, "everything happens for a reason" isn't really an actionable response.

A sampling of serious concerns I've raised vs. your responses:
- "We're understaffed" → "Challenges make us stronger!"
- "The team is burning out" → "Growth requires discomfort!"
- "We're going to miss the deadline" → "Positive energy attracts positive outcomes!"
- "Someone quit" → "Everything happens for a reason!"

I love optimism! But sometimes the reason things happen is "we didn't plan well" or "we overloaded the team." And the solution is "fix it," not "believe harder."

Could we try addressing one problem this week with actions instead of affirmations?

Hopefully (but pragmatically) yours`,
    aggressionScore: 62,
    damageAssessment: 'Manager confronted with pattern of deflecting problems with positivity',
    corporateTranslation: {
      whatYouMean: 'Stop responding to real problems with inspirational quotes and DO SOMETHING.',
      corporateVersion: 'I need to discuss concrete action plans for the operational challenges our team is facing.',
    },
    tags: ['toxic-positivity', 'deflection', 'burnout', 'staffing', 'action'],
  },
  {
    id: 'extra-invoice-payment-predates-start',
    recipient: 'freelancer',
    situation: 'Freelancer invoices for hours on days before the project started',
    category: 'invoices',
    tone: 5,
    length: 'short',
    subject: 'Re: September Invoice - Timeline Discrepancy',
    body: `Hi Mark,

I received your invoice and noticed something curious: you've billed 16 hours for September 1-3. Our project kicked off on September 8th. I have the signed contract dated September 7th and our kickoff meeting was recorded on September 8th.

Unless you've developed time travel capabilities (in which case, we should discuss much more profitable applications), I'm having difficulty understanding how work occurred before the project existed.

Could you revise the invoice to reflect dates from September 8th onward? Or, if you DID invent time travel, please bill that under a separate, much more expensive line item.

Thanks`,
    aggressionScore: 68,
    damageAssessment: 'Freelancer caught billing for impossible dates',
    corporateTranslation: {
      whatYouMean: 'You billed for days before the project started. That\'s either a mistake or fraud.',
      corporateVersion: 'I need to flag a date discrepancy on the current invoice for correction.',
    },
    tags: ['invoice-fraud', 'dates', 'discrepancy', 'time-travel', 'billing'],
  },
  {
    id: 'extra-coworker-always-complaining',
    recipient: 'coworker',
    situation: 'Coworker treats every interaction as a complaint session',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'Quick Check-in About Your Week',
    body: `Hi Monica,

I wanted to ask: are you okay? Genuinely. I ask because in the past 5 days, every interaction we've had has been a complaint:

Monday: The coffee is terrible
Tuesday: The air conditioning is broken
Wednesday: People are too loud
Thursday: The chairs are uncomfortable
Friday: Everything is the worst

I care about you! But I also need to maintain my own energy levels, and our interactions have become... energetically expensive.

Would you be open to a "one positive for every negative" approach? Or perhaps directing concerns to the people who can fix them (facilities for AC, IT for tech issues)?

I'm here for you — in moderation!

Best`,
    aggressionScore: 42,
    damageAssessment: 'Coworker gently informed their negativity is impacting others',
    corporateTranslation: {
      whatYouMean: 'Your constant complaining is draining everyone around you.',
      corporateVersion: 'I want to check in on how you\'re doing and discuss channeling feedback to the right teams.',
    },
    tags: ['complaining', 'negativity', 'energy', 'morale', 'boundaries'],
  },
  {
    id: 'extra-client-scope-complete-not-happy',
    recipient: 'client',
    situation: 'Client is "not happy" but cannot articulate what they want changed',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: "Something\'s Off" - Investigation in Progress',
    body: `Hi Jennifer,

I want to help! You mentioned that "something's off" and it "doesn't feel right" but you can't pinpoint what.

I've now asked you 7 specific questions to narrow it down:
- Colors? "They're fine"
- Layout? "That's okay"
- Typography? "Not the issue"
- Images? "Those are good"
- Spacing? "That works"
- Copy? "It's accurate"
- Responsive? "Looks right"

So everything is fine, okay, not the issue, good, works, accurate, and right — but also "something's off." We've eliminated every tangible element and are left with vibes.

I cannot design to "vibes" without more input. Could you try: showing me an example of something that DOES feel right? Or pointing to a specific section that feels the most "off"? Any concrete direction would help me help you.

Let's crack this case!

Best`,
    aggressionScore: 52,
    damageAssessment: 'Client confronted with their own inability to articulate needs',
    corporateTranslation: {
      whatYouMean: 'You say everything is wrong but can\'t tell me what. Give me SOMETHING to work with.',
      corporateVersion: 'I want to understand your feedback more deeply. Could we try a comparative reference exercise?',
    },
    tags: ['vague-feedback', 'vibes', 'articulation', 'design', 'direction'],
  },
  {
    id: 'extra-manager-1on1-cancelled-always',
    recipient: 'manager',
    situation: 'Manager consistently cancels your 1:1s but never anyone else\'s',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Our 1:1 - Cancelled 6 Times Running',
    body: `Hi James,

I noticed our 1:1 was cancelled again this week. That makes it 6 consecutive weeks without meeting. I'm bringing this up because:

1. I have feedback to share that has a 6-week backlog
2. I have a decision that needed your input 4 weeks ago
3. I noticed you haven't cancelled anyone else's 1:1s

I'm not sure if I should interpret this as "you trust me completely" or "you've forgotten I exist." Both are flattering in different ways!

Could we commit to keeping next week's slot? I'll bring snacks as incentive. Or we could do walking 1:1 if the conference room feels too committal.

Let me know!

Best`,
    aggressionScore: 50,
    damageAssessment: 'Manager made aware of pattern without accusation',
    corporateTranslation: {
      whatYouMean: 'You keep cancelling on me specifically and it\'s starting to feel personal.',
      corporateVersion: 'I want to ensure regular touchpoints for alignment on my projects and development.',
    },
    tags: ['1on1', 'cancelled', 'pattern', 'neglect', 'feedback'],
  },
  {
    id: 'extra-supplier-fake-tracking',
    recipient: 'supplier',
    situation: 'Supplier provides tracking number that shows "label created" for weeks',
    category: 'suppliers',
    tone: 4,
    length: 'short',
    subject: 'Re: Tracking Update - "Label Created" for 18 Days',
    body: `Hi team,

Quick update on the tracking number you provided: it has said "Label Created - Awaiting Carrier Pickup" for 18 consecutive days. Eighteen!

I have two theories:
1. The carrier has been driving to your warehouse for 18 days (possible if they're walking)
2. You created a tracking label and never actually shipped anything (concerning)

For context, I can order something from the opposite side of the planet and receive it in 4 days. Your warehouse is 200 miles away.

Could you confirm whether the package has actually, physically, left your building? Not "it's in process" — I mean has a human person placed it in/on a vehicle that moved away from your location?

Tracking link for reference: [link]

Thanks`,
    aggressionScore: 58,
    damageAssessment: 'Supplier caught in likely fake tracking. Must provide real shipment or explanation.',
    corporateTranslation: {
      whatYouMean: 'This tracking is fake. You haven\'t shipped anything. Where is my order?',
      corporateVersion: 'I need to verify actual shipment status as tracking hasn\'t updated in 18 days.',
    },
    tags: ['tracking', 'fake-shipping', 'label-created', 'delay', 'excuses'],
  },
  {
    id: 'extra-employee-leaving-early',
    recipient: 'employee',
    situation: 'Employee leaves 30 minutes early every day thinking no one notices',
    category: 'coworkers',
    tone: 3,
    length: 'short',
    subject: 'End-of-Day Availability',
    body: `Hi Rachel,

Quick note about scheduling: I've been trying to catch you for a 4:30 check-in for the past two weeks, but you seem to wrap up around 4:30-ish each day. Our hours run until 5:00.

I'm not clock-watching! But when I consistently can't find you for the last 30 minutes of the day, it impacts coordination — especially with the West Coast team who start pinging at 4.

If you need to shift your hours (8:30-4:30 instead of 9-5), I'm open to discussing that formally. I just need to know what to expect so I can plan accordingly.

Let me know what works!

Best`,
    aggressionScore: 35,
    damageAssessment: 'Employee gently corrected with option for schedule adjustment',
    corporateTranslation: {
      whatYouMean: 'I notice you leave at 4:30 every day. Either get it approved or stay until 5.',
      corporateVersion: 'I want to align on your daily schedule to optimize team coordination.',
    },
    tags: ['early-departure', 'schedule', 'hours', 'accountability'],
  },
  {
    id: 'extra-manager-last-minute-travel',
    recipient: 'manager',
    situation: 'Manager books you on last-minute business travel without asking',
    category: 'managers',
    tone: 5,
    length: 'medium',
    subject: 'Re: Your Flight to Denver Tomorrow! - Some Concerns',
    body: `Hi Patricia,

Imagine my surprise when I received a flight confirmation for TOMORROW to Denver! What an adventure.

A few logistics that would have been helpful to sort BEFORE booking:
1. I have a dentist appointment tomorrow (waited 3 months for this slot)
2. My child has a school recital tomorrow evening
3. I don't have a suitcase packed or a dog sitter arranged
4. I haven't agreed to go

In the future, could we try this sequence: ASK → CONFIRM → BOOK? As opposed to the current process: BOOK → SURPRISE! → DEAL WITH IT.

I can fly Wednesday if the trip is essential. But I need more than 18 hours notice for overnight travel. Is that a reasonable request from someone who has a life outside this building?

Let me know.

Best`,
    aggressionScore: 72,
    damageAssessment: 'Manager confronted with lack of consideration. Trip likely rescheduled.',
    corporateTranslation: {
      whatYouMean: 'You booked me on a flight tomorrow without asking. I have a life. Ask first.',
      corporateVersion: 'I need to discuss travel approval protocols and advance notice requirements.',
    },
    tags: ['travel', 'last-minute', 'consent', 'work-life-balance', 'boundaries'],
  },
  {
    id: 'extra-client-design-by-committee',
    recipient: 'client',
    situation: 'Too many stakeholders giving contradictory feedback',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: Feedback from Team (12 Conflicting Opinions)',
    body: `Hi Andrew,

I've received feedback from 12 stakeholders on the homepage design. Here's a fun summary:

- CEO: "Make the logo bigger"
- CMO: "Logo should be more subtle"
- VP Sales: "Need more CTAs"
- VP Marketing: "Too many CTAs, feels salesy"
- Designer: "White space is essential"
- Content lead: "Fill the white space with content"
- Dev lead: "Simplify it"
- Product: "Add the feature comparison table"

I now have 12 contradictory directions and no clear decision-maker. This is what we call "design by committee" and it produces websites that look like Frankenstein's monster had a baby with a focus group.

Could you designate ONE person as the final decision-maker? I'll gladly incorporate feedback from anyone, filtered through one voice that has the authority to say "this is final."

Who's the one?

Best`,
    aggressionScore: 58,
    damageAssessment: 'Client educated on why committee design fails. Clear solution proposed.',
    corporateTranslation: {
      whatYouMean: '12 people are giving me opposite directions. Pick one person to make decisions.',
      corporateVersion: 'I want to streamline our feedback process by identifying a single point of approval authority.',
    },
    tags: ['committee', 'feedback', 'contradictory', 'decision-maker', 'stakeholders'],
  },
  {
    id: 'extra-meeting-friday-4pm',
    recipient: 'manager',
    situation: 'Manager schedules a non-urgent meeting at 4 PM on Friday',
    category: 'meetings',
    tone: 3,
    length: 'short',
    subject: 'Re: Friday 4 PM Meeting - Alternative Proposal',
    body: `Hi Sarah,

I see the meeting invite for Friday at 4 PM to discuss "2025 planning brainstorm." I appreciate the forward thinking!

A couple of data points:
- Friday 4 PM has the lowest meeting engagement of any slot in the week (I didn't make this up, Harvard Business Review did)
- "2025 planning" is not urgently needed in the next 7 working hours
- The team's collective Friday afternoon brain power is roughly equivalent to a sleepy goldfish

Could we move this to Monday or Tuesday morning when we're caffeinated, engaged, and not mentally already on the weekend?

I promise the quality of brainstorming will increase by approximately 400%.

Thanks!`,
    aggressionScore: 38,
    damageAssessment: 'Manager may agree the timing is poor. Meeting likely moves.',
    corporateTranslation: {
      whatYouMean: 'Friday at 4 PM is a terrible time for a brainstorm. Move it.',
      corporateVersion: 'I want to suggest optimal scheduling for this meeting to maximize creative output.',
    },
    tags: ['friday', 'afternoon', 'scheduling', 'engagement', 'timing'],
  },
  {
    id: 'extra-coworker-passive-aggressive-emails',
    recipient: 'coworker',
    situation: 'Coworker is passive-aggressive over email but nice in person',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: Email Tone Check',
    body: `Hi Kate,

Interesting contrast! In person yesterday, you said "Great work on the presentation!" with a smile.

Via email this morning, you wrote: "I noticed some inconsistencies in the data that I'm sure you'll want to be aware of going forward, as they reflect on the team's overall attention to detail."

These two communications are about the same presentation. One of them made me feel good. The other one made me want to forward it to an English professor for passive-aggression analysis.

Could we pick a lane? I can handle direct feedback! Just maybe not the kind that requires a decoder ring to interpret.

In person = great. Can we be email-friends too?

Best`,
    aggressionScore: 52,
    damageAssessment: 'Coworker confronted with their two-faced communication style',
    corporateTranslation: {
      whatYouMean: 'You\'re nice to my face and passive-aggressive in writing. Pick one.',
      corporateVersion: 'I want to ensure our written communication matches the positive dynamic we have in person.',
    },
    tags: ['two-faced', 'email-tone', 'in-person', 'inconsistent', 'communication'],
  },
  {
    id: 'extra-manager-asks-weekend-then-monday',
    recipient: 'manager',
    situation: 'Manager assigns Friday work then asks Monday why it\'s not done',
    category: 'managers',
    tone: 4,
    length: 'short',
    subject: 'Re: Where\'s the Report? (The One You Assigned Friday at 5 PM)',
    body: `Hi Michael,

The report you assigned at 4:58 PM on Friday? It's in progress! I started it this morning at 9 AM — also known as "the first available working hour after you sent it."

For context: you sent it at 4:58 PM Friday. My working day ends at 5:00 PM. That gave me 2 minutes of working time before the weekend.

The weekend is not a working day (a reminder I send approximately monthly). The report will be ready by EOD today, which is one full working day after assignment — a perfectly reasonable turnaround.

If you need Monday deliveries, may I suggest Friday morning assignments? Revolutionary concept: time works forwards!

Best`,
    aggressionScore: 60,
    damageAssessment: 'Manager confronted with timeline math. May adjust expectations.',
    corporateTranslation: {
      whatYouMean: 'You assigned it Friday at 5 PM. I started it Monday at 9 AM. That\'s how time works.',
      corporateVersion: 'I want to align on assignment-to-delivery timelines given our operating hours.',
    },
    tags: ['friday-assignment', 'monday-deadline', 'weekend', 'time', 'expectations'],
  },
  {
    id: 'extra-supplier-no-invoices-included',
    recipient: 'supplier',
    situation: 'Supplier charges but never sends actual invoices or receipts',
    category: 'invoices',
    tone: 3,
    length: 'short',
    subject: 'Invoice Request - For the 4th Time',
    body: `Hi Accounting,

I'm writing to request invoices for our last 4 orders. You've been very efficient at charging our credit card! Less efficient at providing the documentation that proves what we were charged for.

My finance team needs actual invoices for:
- Order #4401 (charged $3,200 on March 1)
- Order #4456 (charged $2,800 on March 15)
- Order #4512 (charged $4,100 on April 1)
- Order #4589 (charged $3,600 on April 15)

I've requested these three previous times. Each time I was told they'd "be sent shortly." It has not been shortly. It has been months.

Could someone please generate and send these invoices today? My accountant is losing patience faster than I am, and I'm running low.

Thanks`,
    aggressionScore: 45,
    damageAssessment: 'Supplier aware of administrative failure. Should be simple to resolve.',
    corporateTranslation: {
      whatYouMean: 'You charge me but won\'t send invoices. I need documentation. Send it NOW.',
      corporateVersion: 'I need invoice documentation for recent transactions for our records and compliance.',
    },
    tags: ['invoices', 'missing', 'documentation', 'accounting', 'receipts'],
  },
  {
    id: 'extra-coworker-keyboard-warrior',
    recipient: 'coworker',
    situation: 'Coworker is aggressive in email but meek in person',
    category: 'coworkers',
    tone: 4,
    length: 'short',
    subject: 'Re: Let\'s Discuss Your Email in Person',
    body: `Hi Greg,

Your email this morning was... spirited! "Completely unacceptable," "serious concerns about competence," "demands an immediate explanation." Strong words!

I stopped by your desk to discuss and you said "oh no, it's fine, don't worry about it, no big deal!" with a smile.

So which is it? Completely unacceptable or fine? A serious concern or no big deal? Because those are very different situations requiring very different responses.

I'd love to address whichever version is true. But I need you to pick one and commit. The email Greg and the in-person Greg need to sync up.

Available for a chat whenever both versions of you are free!

Best`,
    aggressionScore: 60,
    damageAssessment: 'Coworker forced to own either their email tone or their in-person deflection',
    corporateTranslation: {
      whatYouMean: 'You\'re a warrior over email and a coward in person. Which one is real?',
      corporateVersion: 'I want to address your concerns directly. Could we find a communication approach that\'s consistent?',
    },
    tags: ['keyboard-warrior', 'inconsistent', 'confrontation', 'email-vs-person'],
  },
];
