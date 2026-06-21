import type { ConsentChoices } from "@/lib/consent";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-CT7B0TSPMM";

export const GA_SCRIPT_ID = "google-gtag-script";

export function ensureGtagStub() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer!.push(args);
    };
  }
}

export function applyConsentToGtag(choices: ConsentChoices) {
  if (typeof window === "undefined") return;

  ensureGtagStub();

  const allowAds = choices.advertising && !choices.saleOptOut;
  const allowAnalytics = choices.analytics && !choices.saleOptOut;

  window.gtag!("consent", "update", {
    ad_storage: allowAds ? "granted" : "denied",
    ad_user_data: allowAds ? "granted" : "denied",
    ad_personalization: allowAds ? "granted" : "denied",
    analytics_storage: allowAnalytics ? "granted" : "denied",
  });
}

export function sendAnalyticsPageView() {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

let scriptLoadPromise: Promise<boolean> | null = null;

export function loadGtagScript(): Promise<boolean> {
  if (typeof document === "undefined") return Promise.resolve(false);

  ensureGtagStub();

  const existing = document.getElementById(GA_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing?.dataset.loaded === "true") {
    return Promise.resolve(true);
  }

  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve) => {
    const script = existing ?? document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    const finish = (loaded: boolean) => {
      script.dataset.loaded = loaded ? "true" : "false";
      scriptLoadPromise = null;
      resolve(loaded);
    };

    script.onload = () => finish(true);
    script.onerror = () => finish(false);

    if (!existing) {
      document.head.appendChild(script);
    }
  });

  return scriptLoadPromise;
}

export async function activateAnalytics(choices: ConsentChoices) {
  const allowAnalytics = choices.analytics && !choices.saleOptOut;
  if (!allowAnalytics) return false;

  applyConsentToGtag(choices);

  const loaded = await loadGtagScript();
  if (!loaded || !window.gtag) return false;

  window.gtag("js", new Date());
  sendAnalyticsPageView();
  return true;
}
