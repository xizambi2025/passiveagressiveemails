import { scenarios } from '@/data/scenarios';
import type { Scenario } from '@/data/scenarios/types';

export type { Scenario };

export interface GenerateLocalEmailParams {
  recipient: string;
  situation: string;
  tone: number;
  length: 'short' | 'medium' | 'long';
}

export interface LocalGeneratedEmail {
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
}

export function getLocalEmail(
  recipient?: string,
  situation?: string,
  tone?: number,
  length?: 'short' | 'medium' | 'long'
): Scenario | null {
  let candidates = [...scenarios];

  if (recipient) {
    candidates = candidates.filter((s) => s.recipient === recipient);
  }

  if (tone) {
    candidates = candidates.filter((s) => s.tone === tone);
  }

  if (length) {
    candidates = candidates.filter((s) => s.length === length);
  }

  if (situation) {
    const query = situation.toLowerCase();
    candidates = candidates
      .map((s) => ({
        scenario: s,
        score: getRelevanceScore(s, query),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.scenario);
  }

  if (candidates.length === 0) return null;
  return candidates[0];
}

export function getRandomScenario(): Scenario {
  const index = Math.floor(Math.random() * scenarios.length);
  return scenarios[index];
}

export function getScenariosByCategory(category: string): Scenario[] {
  return scenarios.filter((s) => s.category === category);
}

export function getScenariosByRecipient(recipient: string): Scenario[] {
  return scenarios.filter((s) => s.recipient === recipient);
}

export function getScenariosByTone(tone: number): Scenario[] {
  return scenarios.filter((s) => s.tone === tone);
}

export function searchScenarios(query: string): Scenario[] {
  if (!query || query.trim().length === 0) return [];

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return scenarios
    .map((s) => ({
      scenario: s,
      score: getRelevanceScore(s, query.toLowerCase()),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.scenario);
}

function getRelevanceScore(scenario: Scenario, query: string): number {
  const terms = query.split(/\s+/).filter(Boolean);
  let score = 0;

  const searchableText = [
    scenario.situation,
    scenario.subject,
    scenario.body,
    scenario.damageAssessment,
    scenario.corporateTranslation.whatYouMean,
    scenario.corporateTranslation.corporateVersion,
    ...scenario.tags,
  ]
    .join(' ')
    .toLowerCase();

  for (const term of terms) {
    if (scenario.subject.toLowerCase().includes(term)) score += 5;
    if (scenario.situation.toLowerCase().includes(term)) score += 4;
    if (scenario.tags.some((tag) => tag.includes(term))) score += 3;
    if (scenario.body.toLowerCase().includes(term)) score += 2;
    if (searchableText.includes(term)) score += 1;
  }

  return score;
}

export function getTopScenarios(limit: number = 10): Scenario[] {
  return [...scenarios]
    .sort((a, b) => b.aggressionScore - a.aggressionScore)
    .slice(0, limit);
}

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}

export function getRelatedScenarios(scenario: Scenario, limit: number = 5): Scenario[] {
  return scenarios
    .filter((s) => s.id !== scenario.id)
    .map((s) => {
      let relatedness = 0;
      if (s.recipient === scenario.recipient) relatedness += 3;
      if (s.category === scenario.category) relatedness += 3;
      if (s.tone === scenario.tone) relatedness += 2;
      if (s.length === scenario.length) relatedness += 1;
      const sharedTags = s.tags.filter((tag) => scenario.tags.includes(tag));
      relatedness += sharedTags.length * 2;
      return { scenario: s, relatedness };
    })
    .sort((a, b) => b.relatedness - a.relatedness)
    .slice(0, limit)
    .map((item) => item.scenario);
}

export function generateLocalEmail(params: GenerateLocalEmailParams): LocalGeneratedEmail {
  return createParametricEmail(params);
}

function createParametricEmail({
  recipient,
  situation,
  tone,
  length,
}: GenerateLocalEmailParams): LocalGeneratedEmail {
  const context = situation.trim();
  const greeting = getGreeting(recipient);
  const subject = getSubject(context, tone);
  const middle = getMiddleLine(context, tone);
  const closing = getClosingLine(tone);
  const longAddOn =
    "I am documenting this now so we can avoid any future confusion about ownership, timing, or the number of times this has been raised.";

  const bodyParts = [
    greeting,
    getOpeningLine(context, tone),
    middle,
    ...(length === 'long' ? [longAddOn, getNextStepLine(context, tone)] : []),
    ...(length === 'medium' ? [getNextStepLine(context, tone)] : []),
    closing,
  ];

  return {
    subject,
    body: bodyParts.join("\n\n"),
    aggressionScore: calculateAggressionScore(tone, length, context),
    damageAssessment: getDamageAssessment(tone),
    corporateTranslation: {
      whatYouMean: getPlainMeaning(recipient, context, tone),
      corporateVersion: getCorporateVersion(context, tone),
    },
  };
}

function calculateAggressionScore(
  tone: number,
  length: 'short' | 'medium' | 'long',
  situation: string
): number {
  const toneBase: Record<number, number> = {
    1: 16,
    2: 30,
    3: 45,
    4: 62,
    5: 78,
    6: 91,
  };
  const lengthAdjustment = length === 'short' ? -3 : length === 'long' ? 4 : 0;
  const severityTerms = ["missed", "late", "ignored", "stealing", "credit", "payment", "deadline"];
  const severityAdjustment = severityTerms.some((term) => situation.toLowerCase().includes(term)) ? 4 : 0;

  return Math.min(98, Math.max(5, (toneBase[tone] ?? 45) + lengthAdjustment + severityAdjustment));
}

function getGreeting(recipient: string): string {
  const labels: Record<string, string> = {
    manager: "Hi,",
    client: "Hi there,",
    supplier: "Hello,",
    coworker: "Hi,",
    employee: "Hi,",
    freelancer: "Hello,",
  };

  return labels[recipient] ?? "Hi,";
}

function getSubject(situation: string, tone: number): string {
  if (tone <= 2) return `Quick note on ${situation}`;
  if (tone === 3) return `Following up on ${situation}`;
  if (tone === 4) return `Revisiting ${situation}`;
  if (tone === 5) return `Re: ${situation}`;
  return `Escalation notice: ${situation}`;
}

function getOpeningLine(situation: string, tone: number): string {
  if (tone <= 2) {
    return `I wanted to quickly follow up on ${situation.toLowerCase()} and make sure we are aligned on the next step.`;
  }
  if (tone === 3) {
    return `I wanted to flag ${situation.toLowerCase()}, as it is starting to affect the next steps.`;
  }
  if (tone === 4) {
    return `Circling back on ${situation.toLowerCase()}, since this appears to still need attention.`;
  }
  if (tone === 5) {
    return `Per my previous note, ${situation.toLowerCase()} remains unresolved.`;
  }
  return `For visibility and documentation, ${situation.toLowerCase()} has now moved beyond a routine follow-up and requires immediate ownership.`;
}

function getMiddleLine(situation: string, tone: number): string {
  if (tone <= 2) {
    return "Could you please confirm where this stands when you have a chance?";
  }
  if (tone === 3) {
    return "Please confirm the current status so we can avoid any further delay.";
  }
  if (tone === 4) {
    return "I appreciate that everyone is busy, though this has now been pending long enough to require a clear update.";
  }
  if (tone === 5) {
    return "As this has already been raised, I would appreciate a direct confirmation rather than another round of ambiguity.";
  }
  return `I am documenting this because "${situation}" has now created enough avoidable friction that silence or ambiguity would be difficult to interpret as anything other than a decision.`;
}

function getNextStepLine(situation: string, tone: number): string {
  if (tone <= 3) {
    return "Please let me know the expected timing or whether anything is blocking progress.";
  }
  if (tone <= 5) {
    return "Please confirm today how this will be resolved and who owns the next step.";
  }
  return "Please reply today with the resolution plan, owner, and timing so I can determine whether broader visibility is required.";
}

function getClosingLine(tone: number): string {
  if (tone <= 2) return "Thanks in advance.";
  if (tone === 3) return "Thanks for helping keep this moving.";
  if (tone === 4) return "Looking forward to finally closing the loop.";
  if (tone === 5) return "I appreciate your prompt attention to this, at this stage.";
  return "Regards, and thank you in advance for treating this with the urgency it now requires.";
}

function getDamageAssessment(tone: number): string {
  if (tone <= 2) return "Low risk: polite, clear, and unlikely to cause drama.";
  if (tone === 3) return "Moderate risk: professional, but the impatience is visible.";
  if (tone === 4) return "Noticeable sting: the recipient will understand the subtext.";
  if (tone === 5) return "High impact: this reads like a paper trail with manners.";
  return "Maximum corporate damage: technically professional, socially devastating.";
}

function getPlainMeaning(recipient: string, situation: string, tone: number): string {
  const target = recipient ? `this ${recipient}` : "this";
  if (tone <= 2) return `Please deal with ${situation.toLowerCase()} soon.`;
  if (tone <= 4) return `I need ${target} to stop letting ${situation.toLowerCase()} drag on.`;
  return `Fix ${situation.toLowerCase()} now, because I am done pretending this is fine.`;
}

function getCorporateVersion(situation: string, tone: number): string {
  if (tone <= 2) return `I wanted to follow up on ${situation.toLowerCase()} and confirm next steps.`;
  if (tone <= 4) return `I am flagging ${situation.toLowerCase()} to ensure alignment and timely resolution.`;
  return `I am documenting ${situation.toLowerCase()} for visibility and requesting immediate confirmation of the resolution plan.`;
}
