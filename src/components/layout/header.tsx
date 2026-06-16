"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";
import { DEFAULT_LOCALE, LAYOUT_COPY, LOCALES, LOCALE_CONFIG, isLocale, localizedPath, type Locale } from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "pa-locale";

const navLinks = [
  { href: "/", key: "generator" },
  { href: "/examples", key: "examples" },
  { href: "/hall-of-fame", key: "hallOfFame" },
  { href: "/categories", key: "categories" },
] as const;

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const urlLocale = isLocale(pathname.split("/").filter(Boolean)[0] || "")
    ? (pathname.split("/").filter(Boolean)[0] as Locale)
    : null;

  const [storedLocale, setStoredLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = getStoredLocale();
    setStoredLocale(saved);
    if (urlLocale && urlLocale !== saved) {
      localStorage.setItem(LOCALE_STORAGE_KEY, urlLocale);
      setStoredLocale(urlLocale);
    }
  }, [urlLocale]);

  const activeLocale = urlLocale ?? storedLocale;
  const copy = LAYOUT_COPY[activeLocale];

  const getPagePath = (): string => {
    const parts = pathname.split("/").filter(Boolean);
    const [first, ...rest] = parts;
    if (first && isLocale(first)) {
      return rest.length ? `/${rest.join("/")}` : "/";
    }
    return pathname === "" ? "/" : pathname;
  };

  const handleLocaleChange = (locale: string | null) => {
    if (!locale || !isLocale(locale)) return;
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    const pagePath = getPagePath();
    if (locale === DEFAULT_LOCALE) {
      window.location.href = pagePath === "/" ? "/" : pagePath;
    } else {
      window.location.href = localizedPath(locale, pagePath);
    }
  };

  const getNavHref = (href: string) => {
    if (activeLocale === DEFAULT_LOCALE) return href;
    if (href === "/") return localizedPath(activeLocale);
    return localizedPath(activeLocale, href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Masthead */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PassiveAggressiveEmails.com"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-10 dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="PassiveAggressiveEmails.com"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-10 hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getNavHref(link.href)}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {copy.nav[link.key]}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <Select value={activeLocale} onValueChange={handleLocaleChange}>
            <SelectTrigger
              size="sm"
              aria-label={copy.languageLabel}
              className="ml-2 h-8 rounded-full border-border bg-muted/60 px-3 shadow-sm"
            >
              <span className="text-sm font-medium">{LOCALE_CONFIG[activeLocale].label}</span>
            </SelectTrigger>
            <SelectContent align="end" className="min-w-40">
              {LOCALES.map((locale) => (
                <SelectItem key={locale} value={locale}>
                  {LOCALE_CONFIG[locale].label} — {LOCALE_CONFIG[locale].languageName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </nav>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Select value={activeLocale} onValueChange={handleLocaleChange}>
            <SelectTrigger
              size="sm"
              aria-label={copy.languageLabel}
              className="h-8 rounded-full border-border bg-muted/60 px-3 shadow-sm"
            >
              <span className="text-sm font-medium">{LOCALE_CONFIG[activeLocale].label}</span>
            </SelectTrigger>
            <SelectContent align="end" className="min-w-40">
              {LOCALES.map((locale) => (
                <SelectItem key={locale} value={locale}>
                  {LOCALE_CONFIG[locale].label} — {LOCALE_CONFIG[locale].languageName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b border-border/60 px-6 py-5">
                <SheetTitle className="font-heading text-base font-semibold tracking-tight">
                  PassiveAggressiveEmails
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={getNavHref(link.href)}
                        className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      />
                    }
                    onClick={() => setOpen(false)}
                  >
                    {copy.nav[link.key]}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
