"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { COOKIE_CONSENT_COPY, DEFAULT_LOCALE, isLocale, localizedPath, type Locale } from "@/lib/i18n";
import {
  acceptAllConsent,
  applyGoogleConsent,
  CONSENT_DO_NOT_SELL_EVENT,
  CONSENT_SETTINGS_EVENT,
  createConsentChoices,
  doNotSellConsent,
  hasGlobalPrivacyControl,
  loadConsent,
  rejectNonEssentialConsent,
  saveConsent,
  type ConsentChoices,
} from "@/lib/consent";
import Link from "next/link";

type ConsentContextValue = {
  choices: ConsentChoices | null;
  openSettings: () => void;
  optOutOfSale: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}

function useActiveLocale(): Locale {
  const pathname = usePathname();
  const firstPathPart = pathname.split("/").filter(Boolean)[0] || "";
  const urlLocale = isLocale(firstPathPart) ? (firstPathPart as Locale) : null;
  const [storedLocale, setStoredLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = localStorage.getItem("pa-locale");
    if (saved && isLocale(saved)) setStoredLocale(saved);
  }, []);

  return urlLocale ?? storedLocale;
}

function persistAndApply(choices: ConsentChoices, setChoices: (c: ConsentChoices) => void, setShowBanner: (v: boolean) => void, setShowSettings: (v: boolean) => void) {
  saveConsent(choices);
  applyGoogleConsent(choices);
  setChoices(choices);
  setShowBanner(false);
  setShowSettings(false);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const locale = useActiveLocale();
  const copy = COOKIE_CONSENT_COPY[locale];
  const [choices, setChoices] = useState<ConsentChoices | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(true);
  const [draftAdvertising, setDraftAdvertising] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = loadConsent();

    if (saved) {
      setChoices(saved);
      applyGoogleConsent(saved);
      return;
    }

    if (hasGlobalPrivacyControl()) {
      const gpcChoices = doNotSellConsent();
      setChoices(gpcChoices);
      saveConsent(gpcChoices);
      applyGoogleConsent(gpcChoices);
      return;
    }

    setShowBanner(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const current = loadConsent();
      setDraftAnalytics(current?.analytics ?? false);
      setDraftAdvertising(current?.advertising ?? false);
      setShowSettings(true);
      setShowBanner(false);
    };

    const handleDoNotSell = () => {
      persistAndApply(doNotSellConsent(), setChoices, setShowBanner, setShowSettings);
    };

    window.addEventListener(CONSENT_SETTINGS_EVENT, openSettings);
    window.addEventListener(CONSENT_DO_NOT_SELL_EVENT, handleDoNotSell);
    return () => {
      window.removeEventListener(CONSENT_SETTINGS_EVENT, openSettings);
      window.removeEventListener(CONSENT_DO_NOT_SELL_EVENT, handleDoNotSell);
    };
  }, []);

  const openSettings = useCallback(() => {
    window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
  }, []);

  const optOutOfSale = useCallback(() => {
    window.dispatchEvent(new Event(CONSENT_DO_NOT_SELL_EVENT));
  }, []);

  const handleAcceptAll = () => {
    persistAndApply(acceptAllConsent(), setChoices, setShowBanner, setShowSettings);
  };

  const handleReject = () => {
    persistAndApply(rejectNonEssentialConsent(), setChoices, setShowBanner, setShowSettings);
  };

  const handleSaveCustom = () => {
    persistAndApply(
      createConsentChoices(draftAnalytics, draftAdvertising, false),
      setChoices,
      setShowBanner,
      setShowSettings,
    );
  };

  const handleDoNotSellFromBanner = () => {
    persistAndApply(doNotSellConsent(), setChoices, setShowBanner, setShowSettings);
  };

  if (!mounted) {
    return <ConsentContext.Provider value={{ choices, openSettings, optOutOfSale }}>{children}</ConsentContext.Provider>;
  }

  return (
    <ConsentContext.Provider value={{ choices, openSettings, optOutOfSale }}>
      {children}

      {(showBanner || showSettings) && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="presentation"
        >
          <div
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            className="w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-xl"
          >
            <h2 id="cookie-consent-title" className="text-lg font-heading font-bold">
              {showSettings ? copy.settingsTitle : copy.bannerTitle}
            </h2>
            <p id="cookie-consent-description" className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {showSettings ? copy.settingsDescription : copy.bannerDescription}
            </p>

            {showSettings ? (
              <div className="mt-5 space-y-4">
                <label className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <input
                    type="checkbox"
                    checked={draftAnalytics}
                    onChange={(e) => setDraftAnalytics(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    <span className="block text-sm font-medium">{copy.analyticsLabel}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{copy.analyticsDescription}</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <input
                    type="checkbox"
                    checked={draftAdvertising}
                    onChange={(e) => setDraftAdvertising(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    <span className="block text-sm font-medium">{copy.advertisingLabel}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{copy.advertisingDescription}</span>
                  </span>
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button onClick={handleSaveCustom}>{copy.savePreferences}</Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowSettings(false);
                      if (!loadConsent()) setShowBanner(true);
                    }}
                  >
                    {copy.cancel}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleAcceptAll}>{copy.acceptAll}</Button>
                  <Button variant="outline" onClick={handleReject}>
                    {copy.rejectNonEssential}
                  </Button>
                  <Button variant="ghost" onClick={() => setShowSettings(true)}>
                    {copy.customize}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  <Link href={localizedPath(locale, "/privacy")} className="underline hover:text-foreground">
                    {copy.privacyLink}
                  </Link>
                  {" · "}
                  <button
                    type="button"
                    onClick={handleDoNotSellFromBanner}
                    className="underline hover:text-foreground"
                  >
                    {copy.doNotSell}
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
}
