"use client";

import { useEffect, useRef, useState } from "react";
import { CONSENT_UPDATED_EVENT, hasAdvertisingConsent, loadConsent } from "@/lib/consent";

interface AdPlacementProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export function AdPlacement({ slot, format = "auto", className }: AdPlacementProps) {
  const pushed = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [adsAllowed, setAdsAllowed] = useState(false);

  useEffect(() => {
    setAdsAllowed(hasAdvertisingConsent());

    const onConsentUpdated = () => {
      setAdsAllowed(hasAdvertisingConsent());
    };
    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!adsAllowed) return;

    const container = containerRef.current;
    if (!container) return;

    const pushAd = () => {
      if (pushed.current || container.offsetWidth <= 0) return;
      if (!loadConsent()?.advertising || loadConsent()?.saleOptOut) return;

      try {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
        pushed.current = true;
      } catch {
        // AdSense not loaded or refused the slot.
      }
    };

    pushAd();
    if (pushed.current) return;

    const observer = new ResizeObserver(pushAd);
    observer.observe(container);

    return () => observer.disconnect();
  }, [adsAllowed]);

  if (process.env.NODE_ENV !== "production" || !adsAllowed) {
    return null;
  }

  return (
    <div ref={containerRef} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: 160, minHeight: 600 }}
        data-ad-client="ca-pub-2873608919569451"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function AdLateral1({ className }: { className?: string }) {
  return <AdPlacement slot="9784235687" className={className} />;
}

export function AdLateral2({ className }: { className?: string }) {
  return <AdPlacement slot="9401092301" className={className} />;
}
