import { scenarios } from '@/data/scenarios';
import type { Scenario } from '@/data/scenarios/types';

export type { Scenario };

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
