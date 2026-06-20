export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-CT7B0TSPMM";

export function waitForGtag(maxMs = 5000): Promise<void> {
  return new Promise((resolve) => {
    const started = Date.now();

    const check = () => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        resolve();
        return;
      }

      if (Date.now() - started >= maxMs) {
        resolve();
        return;
      }

      window.setTimeout(check, 50);
    };

    check();
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

export async function sendAnalyticsPageViewWithRetry(retries = 5) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    await waitForGtag();
    if (window.gtag) {
      sendAnalyticsPageView();
      return;
    }
    await new Promise((resolve) => window.setTimeout(resolve, 150 * (attempt + 1)));
  }
}
