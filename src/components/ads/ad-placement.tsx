interface AdPlacementProps {
  slot: "header" | "sidebar" | "in-content" | "footer" | "mobile-between";
  className?: string;
}

export function AdPlacement({ slot, className }: AdPlacementProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      className={`border border-dashed border-border rounded-lg bg-muted/20 items-center justify-center text-xs text-muted-foreground hidden ${className}`}
      data-ad-slot={slot}
      aria-hidden="true"
    >
      Ad: {slot}
    </div>
  );
}
