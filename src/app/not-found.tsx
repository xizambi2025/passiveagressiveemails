import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-heading font-bold mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This page appears to have followed in the footsteps of your
          coworker&apos;s missing deliverables.
        </p>
        <p className="text-sm text-muted-foreground italic mb-8">
          Perhaps it was due &ldquo;end of day&rdquo; last Friday.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Back to Generator
          </Link>
          <Link
            href="/examples"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Browse Examples
          </Link>
        </div>
      </div>
    </main>
  );
}
