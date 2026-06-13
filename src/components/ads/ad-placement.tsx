"use client";

import { useEffect, useRef } from "react";

interface AdPlacementProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export function AdPlacement({ slot, format = "auto", className }: AdPlacementProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
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
