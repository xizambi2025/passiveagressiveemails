"use client";

import { GA_MEASUREMENT_ID } from "@/lib/ga-config";
import { hasAnalyticsConsent } from "@/lib/consent";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function AnalyticsPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hasAnalyticsConsent() || !window.gtag) return;

    window.gtag("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
