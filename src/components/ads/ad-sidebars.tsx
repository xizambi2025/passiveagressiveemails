"use client";

import { AdLateral1, AdLateral2 } from "./ad-placement";

export function AdSidebars({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex justify-center">
      <aside className="hidden xl:block fixed left-[max(1rem,calc((100vw-1200px)/2-180px))] top-1/3 w-[160px] z-30" aria-label="Advertisement">
        <AdLateral1 className="sticky top-24" />
      </aside>

      <div className="flex-1 min-w-0">
        {children}
      </div>

      <aside className="hidden xl:block fixed right-[max(1rem,calc((100vw-1200px)/2-180px))] top-1/3 w-[160px] z-30" aria-label="Advertisement">
        <AdLateral2 className="sticky top-24" />
      </aside>
    </div>
  );
}
