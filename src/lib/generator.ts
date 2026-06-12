import { scenarios, type Scenario } from "@/data/scenarios";

export type { Scenario };

export function getLocalEmail(
  recipient: string,
  situation: string,
  tone: number,
  length: "short" | "medium" | "long"
): Scenario | null {
  const exact = scenarios.filter(
    (s) => s.recipient === recipient && s.tone === tone && s.length === length
  );
  if (exact.length > 0) {
    const situationWords = situation.toLowerCase().split(/\s+/);
    const withSituation = exact.filter((s) =>
      situationWords.some(
        (word) =>
          s.situation.toLowerCase().includes(word) ||
          s.tags.some((t) => t.includes(word))
      )
    );
    if (withSituation.length > 0) {
      return withSituation[Math.floor(Math.random() * withSituation.length)];
    }
    return exact[Math.floor(Math.random() * exact.length)];
  }

  const relaxed = scenarios.filter(
    (s) => s.recipient === recipient && s.tone === tone
  );
  if (relaxed.length > 0) {
    return relaxed[Math.floor(Math.random() * relaxed.length)];
  }

  const toneOnly = scenarios.filter((s) => s.tone === tone);
  if (toneOnly.length > 0) {
    return toneOnly[Math.floor(Math.random() * toneOnly.length)];
  }

  return null;
}

export function getRandomScenario(): Scenario {
  return scenarios[Math.floor(Math.random() * scenarios.length)];
}

export function getScenariosByCategory(category: string): Scenario[] {
  return scenarios.filter((s) => s.category === category);
}

export function getScenariosByRecipient(recipient: string): Scenario[] {
  return scenarios.filter((s) => s.recipient === recipient);
}

export function searchScenarios(query: string): Scenario[] {
  const words = query.toLowerCase().split(/\s+/);
  return scenarios.filter((s) =>
    words.some(
      (word) =>
        s.situation.toLowerCase().includes(word) ||
        s.subject.toLowerCase().includes(word) ||
        s.body.toLowerCase().includes(word) ||
        s.tags.some((t) => t.includes(word))
    )
  );
}

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}
