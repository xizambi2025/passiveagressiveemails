"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, LAYOUT_COPY, type Locale } from "@/lib/i18n";

export function SignatureAnimation({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const copy = LAYOUT_COPY[locale].signature;
  const phrases = copy.phrases;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const current = phrases[currentIndex] ?? phrases[0];
  const progress = current.score / 100;

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {copy.label}
          </span>
          <motion.span
            key={current.score}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono font-medium"
          >
            {current.score}/100
          </motion.span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, #22c55e, #eab308, #f97316, #dc2626)`,
            }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg font-heading italic text-center"
            >
              &ldquo;{current.text}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
