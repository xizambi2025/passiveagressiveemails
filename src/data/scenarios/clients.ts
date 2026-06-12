import { Scenario } from './types';

export const clientScenarios: Scenario[] = [
  {
    id: 'client-unpaid-invoice-90-days',
    recipient: 'client',
    situation: 'Client hasn\'t paid invoice for 3 months',
    category: 'invoices',
    tone: 4,
    length: 'medium',
    subject: 'Re: Invoice #4521 - Just Checking My Email Is Working',
    body: `Hi Sarah,

I hope this email finds you well! I'm reaching out because I wanted to make sure my previous 7 emails regarding Invoice #4521 haven't been getting lost in your spam folder. Technology can be so unreliable sometimes!

Just to refresh your memory (since it has been 90 days, and I know how busy you must be), the invoice was for the completed project we delivered back in March. You know, the one you said was "absolutely perfect" and "exceeded all expectations"?

I've reattached the invoice for your convenience. I've also included a calendar reminder suggestion, since I know how easy it is to lose track of time when you're not the one waiting for payment.

Looking forward to your prompt response!

Warm regards`,
    aggressionScore: 65,
    damageAssessment: 'Client will feel guilty but relationship salvageable',
    corporateTranslation: {
      whatYouMean: 'Pay me my money before I send this to collections, you deadbeat.',
      corporateVersion: 'I wanted to circle back on the outstanding balance to ensure alignment on our payment timeline.',
    },
    tags: ['late-payment', 'invoice', 'follow-up', 'money'],
  },
  {
    id: 'client-scope-creep-again',
    recipient: 'client',
    situation: 'Client asking for more work outside agreed scope',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: Quick Favor - Regarding Your "Small Addition"',
    body: `Hi Mark,

Thank you for your email! I love how you describe a complete redesign of the navigation system as a "small tweak." Your optimism is truly inspiring.

Per our signed contract (attached for your reference, specifically Section 3.2 which I've highlighted in yellow), the current scope covers the homepage and three subpages. What you're describing would essentially be a new project — albeit one you've cleverly disguised as a casual request.

I'd be absolutely delighted to take this on! I'll send over a revised quote by end of day. I think you'll find the additional cost reflects the "small" nature of the request quite proportionally.

Shall I proceed with the new quote, or would you prefer to keep the "small tweak" for Phase 2?

Best regards`,
    aggressionScore: 72,
    damageAssessment: 'Client may push back but will respect the boundary',
    corporateTranslation: {
      whatYouMean: 'That is not a small tweak and we both know it. Open your wallet.',
      corporateVersion: 'I appreciate the enthusiasm for expanding the project vision! Let me scope this properly to ensure we deliver the quality you deserve.',
    },
    tags: ['scope-creep', 'contract', 'boundaries', 'additional-work'],
  },
  {
    id: 'client-wants-revision-20',
    recipient: 'client',
    situation: 'Client requesting their 20th revision',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: Re: Re: Re: Re: Re: Just One More Change',
    body: `Hi Jessica,

Absolutely! I'd be happy to make the logo bigger again. And then smaller. And then bigger. It's like a really fun creative exercise in indecisiveness!

Just for my records, I'm tracking this as Revision #20. As noted in our agreement, revisions 1-3 were included in the original quote. Revisions 4-20 will be billed at our hourly rate, which I'll compile into a supplementary invoice.

I've also taken the liberty of creating a shared document where you can collect ALL feedback from your team before sending it over. I've found this helps avoid the "oh wait, one more thing" emails that I know you enjoy sending at 11 PM on Fridays.

Would Tuesday work for a final review call? I find that "final" works best when it's actually final.

Cheers`,
    aggressionScore: 78,
    damageAssessment: 'Client will either consolidate feedback or find a new designer',
    corporateTranslation: {
      whatYouMean: 'Make up your mind. I am billing you for every single one of these changes.',
      corporateVersion: 'To optimize our workflow and ensure your complete satisfaction, I suggest we implement a consolidated feedback process.',
    },
    tags: ['revisions', 'indecisive', 'billing', 'scope'],
  },
  {
    id: 'client-emergency-not-emergency',
    recipient: 'client',
    situation: 'Client marks everything as urgent when it is not',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: URGENT!!! Need This ASAP!!!!',
    body: `Hi David,

Thank you for flagging this as urgent! I want to make sure I'm prioritizing correctly — could you help me understand the timeline?

When you say "ASAP," are we talking "the building is on fire" ASAP, or "I just remembered this exists" ASAP? I ask because your last three "urgent" requests sat untouched in your own approval queue for two weeks after I delivered them.

I want to make sure my sense of urgency matches yours!

Best`,
    aggressionScore: 58,
    damageAssessment: 'Mild embarrassment, may reduce false urgency flags',
    corporateTranslation: {
      whatYouMean: 'Nothing you send is ever actually urgent. Stop crying wolf.',
      corporateVersion: 'I want to ensure proper prioritization alignment with your stakeholder timelines.',
    },
    tags: ['urgency', 'priorities', 'false-alarm', 'crying-wolf'],
  },
  {
    id: 'client-ghosted-then-rush',
    recipient: 'client',
    situation: 'Client disappeared for weeks then wants instant turnaround',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: Need This By Tomorrow - Welcome Back!',
    body: `Hi Rachel,

What a pleasant surprise to hear from you! I was beginning to think you'd entered witness protection. Glad to know you're safe and well!

Regarding the request for a full campaign launch by tomorrow — I admire your faith in my abilities, truly. However, during the three weeks of radio silence on your end (during which I sent 4 check-in emails, 2 voicemails, and briefly considered filing a missing persons report), I took on other commitments.

I can have this ready by next Friday if we kick off today. Otherwise, I'm happy to recommend the timeline-bending services of a time machine, which seems to be the only tool that would make tomorrow feasible.

Let me know how you'd like to proceed!

Regards`,
    aggressionScore: 75,
    damageAssessment: 'Client will feel called out but deadline expectation is reset',
    corporateTranslation: {
      whatYouMean: 'You ghosted me for three weeks and now want miracles? Absolutely not.',
      corporateVersion: 'I appreciate the urgency! Given our current pipeline, let me propose a realistic timeline that ensures quality delivery.',
    },
    tags: ['ghosting', 'unrealistic-deadline', 'radio-silence', 'turnaround'],
  },
  {
    id: 'client-comparing-to-nephew',
    recipient: 'client',
    situation: 'Client says their nephew could do it cheaper',
    category: 'clients',
    tone: 6,
    length: 'medium',
    subject: 'Re: Budget Concerns - A Thoughtful Suggestion',
    body: `Hi Thomas,

Thank you for sharing that your nephew, who I understand is studying graphic design in his second year of college, could do this project for a fraction of my rate. That's wonderful news for him!

I think that's a fantastic idea and I fully encourage you to explore that option. In fact, I'll save you the trouble of coming back to me when the logo arrives as a 72dpi JPEG with a white background that he "couldn't figure out how to make transparent."

I've enjoyed our working relationship and wish you and your nephew the very best. My rates will remain the same should you need professional work in the future — I'll even waive the "I told you so" surcharge.

All the best to your nephew! What an exciting learning opportunity for him.

Warmly`,
    aggressionScore: 88,
    damageAssessment: 'Relationship likely over, but dignity intact',
    corporateTranslation: {
      whatYouMean: 'Go ahead. Hire your nephew. I give it two weeks before you come crawling back.',
      corporateVersion: 'I completely understand budget considerations! I encourage you to explore all available options to find the best fit for your needs.',
    },
    tags: ['undervalued', 'pricing', 'nephew', 'competitor', 'savage'],
  },
  {
    id: 'client-feedback-contradicts',
    recipient: 'client',
    situation: 'Client gives contradictory feedback to what they said last week',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: Feedback Round 3 - Quick Clarification',
    body: `Hi Amanda,

Thanks for the feedback! I just want to make sure I understand correctly, because I want to get this absolutely perfect for you.

On March 3rd, you wrote: "Make it more modern and minimalist. Less is more!"
Today, you wrote: "It feels too empty. Can we add more elements and make it feel richer?"

I've attached both emails below for reference — not because I don't trust your memory, of course, but because I find it helps to have everything in one place!

Could we schedule a quick 15-minute call to align on direction? I find these things are so much easier to resolve in real-time, where there's less room for... creative interpretation.

Looking forward to hearing your thoughts!

Best`,
    aggressionScore: 55,
    damageAssessment: 'Client caught in contradiction but given graceful exit',
    corporateTranslation: {
      whatYouMean: 'You are literally saying the opposite of what you said five days ago. Pick one.',
      corporateVersion: 'I want to ensure we\'re aligned on the creative direction to deliver the best possible outcome.',
    },
    tags: ['contradictory', 'feedback', 'receipts', 'indecisive'],
  },
  {
    id: 'client-weekend-emails',
    recipient: 'client',
    situation: 'Client expects responses on weekends',
    category: 'clients',
    tone: 3,
    length: 'short',
    subject: 'Re: Sunday Check-in (Received Monday at 9 AM)',
    body: `Hi Patricia,

Thank you for your email from Sunday at 11:47 PM! I hope you had a lovely weekend.

I wanted to let you know that I typically respond to communications during business hours (Monday-Friday, 9 AM - 6 PM). This helps me maintain the energy and focus needed to deliver my best work for clients like you!

I've addressed all your points below. For truly time-sensitive matters on weekends, my emergency rate card is attached.

Best regards`,
    aggressionScore: 35,
    damageAssessment: 'Professional boundary set with minimal friction',
    corporateTranslation: {
      whatYouMean: 'I have a life outside of you. Stop emailing me on Sundays.',
      corporateVersion: 'I want to set clear communication expectations to ensure optimal responsiveness during our engagement.',
    },
    tags: ['boundaries', 'weekend', 'work-life-balance', 'hours'],
  },
  {
    id: 'client-wants-free-work',
    recipient: 'client',
    situation: 'Client asks for "spec work" or free samples',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: Can You Do a Quick Mock-Up? (No Commitment)',
    body: `Hi Daniel,

I appreciate you thinking of me for this project! I'm flattered.

Regarding your request to create three full concept designs "just to see if we're a good fit" — I have a similar proposal! How about you pay me for one concept, and if you love it, we'll know we're a good fit? Revolutionary, I know.

I find that paying for work tends to attract the highest quality results. It's a fun economic principle I learned called "commerce."

I'm happy to share my portfolio, case studies, client testimonials, and references instead. These are free! The actual work, however, is not.

Shall I send over my portfolio link?

Warm regards`,
    aggressionScore: 70,
    damageAssessment: 'Client will either pay or move on — both acceptable outcomes',
    corporateTranslation: {
      whatYouMean: 'I don\'t work for free. Would you go to a restaurant and ask for a free meal to "see if you like the food"?',
      corporateVersion: 'I\'d love to demonstrate our capabilities! Let me share some relevant case studies and discuss how a paid pilot project could validate our partnership.',
    },
    tags: ['spec-work', 'free', 'devaluing', 'boundaries'],
  },
  {
    id: 'client-micromanaging-process',
    recipient: 'client',
    situation: 'Client tries to dictate exactly how to do the work they hired you for',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: Thoughts on Your Process',
    body: `Hi Steven,

Thank you for your detailed 14-point email on how I should approach the website architecture! I can tell you've been doing some research. YouTube tutorials can be very compelling.

I want to assure you that the methodology I'm using has been refined over 8 years and 200+ successful projects. But I'm genuinely curious — would you also like to tell your dentist which tools to use, or suggest techniques to your mechanic?

That said, I deeply value your input on the WHAT (business goals, user needs, brand direction). The HOW is what you're paying me for — and I promise it's worth it.

If you'd like, I can provide a brief overview of my approach so you feel informed without needing to micromanage the process. Would that help?

Best`,
    aggressionScore: 62,
    damageAssessment: 'Client will either trust the process or reveal themselves as a nightmare',
    corporateTranslation: {
      whatYouMean: 'You hired an expert and now you want to tell me how to do my job? Please stop.',
      corporateVersion: 'I appreciate your engagement! Let me clarify the division of strategic input versus technical execution to maximize our efficiency.',
    },
    tags: ['micromanaging', 'trust', 'expertise', 'process'],
  },
  {
    id: 'client-last-minute-changes',
    recipient: 'client',
    situation: 'Client sends major changes right before launch',
    category: 'deadlines',
    tone: 5,
    length: 'medium',
    subject: 'Re: Quick Changes Before Tomorrow\'s Launch 🚀',
    body: `Hi Monica,

How exciting — major structural changes 14 hours before launch! I can see you really enjoy keeping things fresh and spontaneous.

Just to set expectations: the "quick changes" you've outlined would require approximately 3-4 days of work. This includes redesigning the checkout flow, rewriting all product descriptions, and — my personal favorite — "making the whole vibe different."

We have two options:
1. Launch tomorrow as planned with the approved (by you, in writing, twice) version
2. Push launch by one week and implement your changes at the rush rate (1.5x)

I'll need your decision within the hour to keep either timeline on track. No pressure — just physics.

Standing by!`,
    aggressionScore: 68,
    damageAssessment: 'Client forced to confront their own decision paralysis',
    corporateTranslation: {
      whatYouMean: 'Are you out of your mind? We launch TOMORROW.',
      corporateVersion: 'I want to ensure we maintain our quality standards while accommodating your vision. Let me propose timeline options.',
    },
    tags: ['last-minute', 'launch', 'changes', 'deadline', 'rush'],
  },
  {
    id: 'client-constant-availability',
    recipient: 'client',
    situation: 'Client expects 24/7 availability for a small retainer',
    category: 'clients',
    tone: 4,
    length: 'short',
    subject: 'Re: Why Didn\'t You Answer My Call at 10 PM?',
    body: `Hi Greg,

I appreciate your dedication! For context, your current retainer covers 5 hours per month of support during business hours.

Last month, you contacted me 23 times outside of business hours, including twice on Christmas Day (loved the urgency on the font color decision, by the way).

I'd love to offer you the availability you need! I've attached our 24/7 support tier pricing. Alternatively, we can continue with our current arrangement, where I respond within one business day.

Let me know which works best for you!

Cheers`,
    aggressionScore: 60,
    damageAssessment: 'Client will either upgrade or accept boundaries',
    corporateTranslation: {
      whatYouMean: 'You pay for 5 hours and expect me on call like a heart surgeon. No.',
      corporateVersion: 'I want to ensure our service level aligns with your communication needs. Let\'s discuss the right support tier.',
    },
    tags: ['availability', 'boundaries', 'retainer', 'after-hours'],
  },
  {
    id: 'client-disappearing-approval',
    recipient: 'client',
    situation: 'Client won\'t approve anything, holding up the project',
    category: 'deadlines',
    tone: 3,
    length: 'medium',
    subject: 'Friendly Nudge - 3 Items Awaiting Your Approval (Day 12)',
    body: `Hi Karen,

I hope you're having a great week! I'm just popping in with a friendly reminder that we have three deliverables waiting for your sign-off:

1. Homepage design (sent April 1st) - 12 days waiting
2. Content strategy document (sent March 28th) - 15 days waiting  
3. Brand guidelines (sent March 25th) - 18 days waiting

Our project timeline has us launching May 15th, which I'm still committed to — though I should mention that each day of pending approval reduces our development window proportionally.

No rush at all! Just wanted to keep you informed that the ball is gently sitting in your court. Where it has been. For almost three weeks.

Would a quick 10-minute call help move these forward?

Best`,
    aggressionScore: 45,
    damageAssessment: 'Client aware of bottleneck without feeling attacked',
    corporateTranslation: {
      whatYouMean: 'APPROVE SOMETHING. You are the reason this project is behind and we both know it.',
      corporateVersion: 'I want to proactively flag some items that need your input to keep us on track for our shared deadline.',
    },
    tags: ['approval', 'bottleneck', 'waiting', 'timeline', 'delay'],
  },
  {
    id: 'client-champagne-budget-beer',
    recipient: 'client',
    situation: 'Client wants premium results on minimal budget',
    category: 'clients',
    tone: 4,
    length: 'medium',
    subject: 'Re: Can We Get Something Like Apple.com? (Budget: $500)',
    body: `Hi Jennifer,

I love your ambition! Apple.com is a beautiful website. It's also built by a team of approximately 200 designers and developers with a budget somewhere in the tens of millions.

For $500, I can absolutely build you something beautiful, functional, and professional. It will look great! What it won't look like is a website built by a Fortune 500 company's entire digital division.

I've put together three options at different price points:
- $500: Clean, professional 5-page site (think "great local business")
- $2,500: Custom design with animations (think "impressive startup")
- $25,000: Getting warmer to that Apple energy

Which tier resonates with your vision and budget?

Excited to find the right fit!`,
    aggressionScore: 55,
    damageAssessment: 'Client educated on pricing realities without condescension',
    corporateTranslation: {
      whatYouMean: 'You want a million-dollar website for $500. That is not how any of this works.',
      corporateVersion: 'I\'d love to align your vision with a scope that delivers maximum impact within your investment parameters.',
    },
    tags: ['budget', 'unrealistic', 'expectations', 'pricing', 'apple'],
  },
  {
    id: 'client-no-brief-wants-revisions',
    recipient: 'client',
    situation: 'Client gave no brief but complains the result isn\'t what they wanted',
    category: 'clients',
    tone: 5,
    length: 'medium',
    subject: 'Re: This Isn\'t What I Had in Mind',
    body: `Hi Marcus,

I completely understand your frustration! Let me address this.

When I asked for a creative brief on January 15th, you responded with "Just do something cool, I trust you!" (email attached). When I followed up asking about color preferences, you said "Surprise me!" When I asked about target audience, you said "Everyone."

I then delivered exactly what "cool" + "surprise" + "everyone" translates to in design language. If you had a specific vision in mind, I would have loved to hear it during the briefing phase — that's literally what it's for!

The good news: I'm absolutely happy to refine this to match the vision you apparently had all along but chose not to share. I'll send a detailed creative questionnaire. This time, "surprise me" is not an acceptable answer.

Shall I send that over?

Best`,
    aggressionScore: 80,
    damageAssessment: 'Client thoroughly called out with receipts — may be uncomfortable',
    corporateTranslation: {
      whatYouMean: 'You told me NOTHING and now you\'re mad I can\'t read minds? Incredible.',
      corporateVersion: 'I think there may have been a gap in our initial alignment process. Let\'s implement a more structured briefing framework for the revision.',
    },
    tags: ['no-brief', 'vague', 'mind-reading', 'revisions', 'receipts'],
  },
];
