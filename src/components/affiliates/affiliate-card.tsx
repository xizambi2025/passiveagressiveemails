interface AffiliateCardProps {
  category: "writing-tools" | "ai-tools" | "email-tools" | "productivity" | "career";
  className?: string;
}

export function AffiliateCard({ category, className }: AffiliateCardProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      className={`border border-dashed border-border rounded-lg bg-muted/20 p-4 items-center justify-center text-xs text-muted-foreground hidden ${className}`}
      data-affiliate-category={category}
      aria-hidden="true"
    >
      Affiliate: {category}
    </div>
  );
}
