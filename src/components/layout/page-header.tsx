"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, badge, className }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mx-auto max-w-3xl px-4 py-16 text-center sm:py-20 lg:py-24",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4 inline-block rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
        >
          {badge}
        </motion.span>
      )}
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
