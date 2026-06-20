"use client";

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
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
