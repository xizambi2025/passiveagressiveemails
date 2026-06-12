type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackGeneration(params: {
  recipient: string;
  tone: number;
  length: string;
  isAI: boolean;
  category?: string;
}) {
  trackEvent("email_generated", {
    recipient: params.recipient,
    tone_level: params.tone,
    length: params.length,
    generation_type: params.isAI ? "ai" : "local",
    category: params.category || "custom",
  });
}

export function trackShare(platform: string, emailId: string) {
  trackEvent("email_shared", {
    platform,
    email_id: emailId,
  });
}

export function trackCopy(emailId: string) {
  trackEvent("email_copied", {
    email_id: emailId,
  });
}

export function trackCategoryView(category: string) {
  trackEvent("category_viewed", {
    category,
  });
}

export function trackExampleView(scenarioId: string) {
  trackEvent("example_viewed", {
    scenario_id: scenarioId,
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
