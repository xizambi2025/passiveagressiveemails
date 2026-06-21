"use client";

import { activateAnalytics } from "@/lib/ga-config";
import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
  loadConsent,
  type ConsentChoices,
} from "@/lib/consent";
import { useEffect, useRef } from "react";

export function GoogleAnalyticsManager() {
  const activatingRef = useRef(false);

  useEffect(() => {
    const sync = async (choices?: ConsentChoices) => {
      const consent = choices ?? loadConsent();
      if (!consent || !hasAnalyticsConsent()) return;
      if (activatingRef.current) return;

      activatingRef.current = true;
      try {
        await activateAnalytics(consent);
      } finally {
        activatingRef.current = false;
      }
    };

    void sync();

    const onConsentUpdated = (event: Event) => {
      const detail = (event as CustomEvent<ConsentChoices>).detail;
      void sync(detail);
    };

    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
  }, []);

  return null;
}
