"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  { text: "Just checking in...", score: 15 },
  { text: "Hope you're doing well...", score: 25 },
  { text: "Wanted to circle back...", score: 40 },
  { text: "Per our previous conversation...", score: 60 },
  { text: "As previously mentioned...", score: 75 },
  { text: "As mentioned in my previous emails...", score: 92 },
];

export function SignatureAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = PHRASES[currentIndex];
  const progress = current.score / 100;

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Aggression Level
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
