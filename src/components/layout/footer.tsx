"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, COOKIE_CONSENT_COPY, LAYOUT_COPY, isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { openConsentSettings, triggerDoNotSell } from "@/lib/consent";

const footerColumns = [
  {
    title: "product",
    links: [
      { label: "generator", href: "/" },
      { label: "examples", href: "/examples" },
      { label: "hallOfFame", href: "/hall-of-fame" },
      { label: "blog", href: "/blog" },
    ],
  },
  {
    title: "categories",
    links: [
      { label: "clients", href: "/categories/clients" },
      { label: "coworkers", href: "/categories/coworkers" },
      { label: "managers", href: "/categories/managers" },
      { label: "deadlines", href: "/categories/deadlines" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "about", href: "/about" },
      { label: "methodology", href: "/methodology" },
      { label: "editorialStandards", href: "/editorial-standards" },
      { label: "contact", href: "/contact" },
    ],
  },
  {
    title: "legal",
    links: [
      { label: "privacy", href: "/privacy" },
      { label: "terms", href: "/terms" },
    ],
  },
] as const;

export function Footer() {
  const pathname = usePathname();
  const firstPathPart = pathname.split("/").filter(Boolean)[0] || "";
  const urlLocale = isLocale(firstPathPart) ? (firstPathPart as Locale) : null;

  const [storedLocale, setStoredLocale] = useState<Locale>(DEFAULT_LOCALE);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("pa-locale") : null;
    if (saved && isLocale(saved)) setStoredLocale(saved);
  }, []);

  const activeLocale = urlLocale ?? storedLocale;
  const copy = LAYOUT_COPY[activeLocale].footer;
  const cookieCopy = COOKIE_CONSENT_COPY[activeLocale];
  const hrefFor = (href: string) =>
    activeLocale === DEFAULT_LOCALE ? href : localizedPath(activeLocale, href);

  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Column grid */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:py-16 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {copy[column.title]}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={hrefFor(link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {copy[link.label]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-border/40 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p>&copy; {new Date().getFullYear()} PassiveAggressiveEmails. {copy.rights}</p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 sm:justify-start">
              <button
                type="button"
                onClick={openConsentSettings}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {cookieCopy.cookieSettings}
              </button>
              <button
                type="button"
                onClick={triggerDoNotSell}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {cookieCopy.doNotSell}
              </button>
            </div>
          </div>
          <p className="italic">{copy.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
