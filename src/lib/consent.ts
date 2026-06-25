export const CONSENT_STORAGE_KEY = "pa-consent-v1";
export const CONSENT_UPDATED_EVENT = "pa-consent-updated";
export const CONSENT_SETTINGS_EVENT = "pa-open-consent-settings";

export type ConsentChoices = {
  analytics: boolean;
  decidedAt: string;
};

export function loadConsent(): ConsentChoices | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoices;
    if (typeof parsed.analytics !== "boolean") {
      return null;
    }
    return {
      analytics: parsed.analytics,
      decidedAt: parsed.decidedAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(choices: ConsentChoices) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choices));
}

export function hasAnalyticsConsent(): boolean {
  const consent = loadConsent();
  if (!consent) return false;
  return consent.analytics;
}

export function applyGoogleConsent(choices: ConsentChoices) {
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: choices }));
}

export function createConsentChoices(
  analytics: boolean,
): ConsentChoices {
  return {
    analytics,
    decidedAt: new Date().toISOString(),
  };
}

export function acceptAllConsent(): ConsentChoices {
  return createConsentChoices(true);
}

export function rejectNonEssentialConsent(): ConsentChoices {
  return createConsentChoices(false);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
