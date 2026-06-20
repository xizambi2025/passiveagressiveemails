import { sendAnalyticsPageViewWithRetry } from "@/lib/ga-config";

export const CONSENT_STORAGE_KEY = "pa-consent-v1";
export const CONSENT_UPDATED_EVENT = "pa-consent-updated";
export const CONSENT_SETTINGS_EVENT = "pa-open-consent-settings";
export const CONSENT_DO_NOT_SELL_EVENT = "pa-do-not-sell";

export type ConsentChoices = {
  analytics: boolean;
  advertising: boolean;
  saleOptOut: boolean;
  decidedAt: string;
};

export function hasGlobalPrivacyControl(): boolean {
  if (typeof navigator === "undefined") return false;
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function loadConsent(): ConsentChoices | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoices;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.advertising !== "boolean") {
      return null;
    }
    return {
      analytics: parsed.analytics,
      advertising: parsed.advertising,
      saleOptOut: Boolean(parsed.saleOptOut),
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
  return consent.analytics && !consent.saleOptOut;
}

export function hasAdvertisingConsent(): boolean {
  const consent = loadConsent();
  if (!consent) return false;
  return consent.advertising && !consent.saleOptOut;
}

export async function applyGoogleConsent(choices: ConsentChoices) {
  if (typeof window === "undefined" || !window.gtag) return;

  const allowAds = choices.advertising && !choices.saleOptOut;
  const allowAnalytics = choices.analytics && !choices.saleOptOut;

  window.gtag("consent", "update", {
    ad_storage: allowAds ? "granted" : "denied",
    ad_user_data: allowAds ? "granted" : "denied",
    ad_personalization: allowAds ? "granted" : "denied",
    analytics_storage: allowAnalytics ? "granted" : "denied",
  });

  if (allowAnalytics) {
    await sendAnalyticsPageViewWithRetry();
  }

  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: choices }));
}

export function createConsentChoices(
  analytics: boolean,
  advertising: boolean,
  saleOptOut = false,
): ConsentChoices {
  return {
    analytics,
    advertising,
    saleOptOut,
    decidedAt: new Date().toISOString(),
  };
}

export function acceptAllConsent(): ConsentChoices {
  return createConsentChoices(true, true, false);
}

export function rejectNonEssentialConsent(): ConsentChoices {
  return createConsentChoices(false, false, false);
}

export function doNotSellConsent(): ConsentChoices {
  return createConsentChoices(false, false, true);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

export function triggerDoNotSell() {
  window.dispatchEvent(new Event(CONSENT_DO_NOT_SELL_EVENT));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
