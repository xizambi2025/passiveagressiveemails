import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Editorial Standards",
  description:
    "Our editorial standards ensure every passive-aggressive email template meets our quality bar for humor, professionalism, and plausible deniability.",
  path: "/editorial-standards",
});

export default function EditorialStandardsPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Editorial Standards
          </h1>
          <p className="text-lg text-muted-foreground">
            Quality control for professional hostility.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Content Principles</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every piece of content on PassiveAggressiveEmails.com adheres to
              these core principles:
            </p>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-2">Humor with Purpose</h3>
                <p className="text-sm text-muted-foreground">
                  Content must be both entertaining and practically useful. We don&apos;t
                  create humor for humor&apos;s sake — every template should be something
                  a real professional could adapt for a real situation.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-2">Workplace Appropriateness</h3>
                <p className="text-sm text-muted-foreground">
                  No template should cross the line into harassment, discrimination,
                  or genuinely hostile communication. The art is in the subtext, not
                  in explicit aggression.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-2">Plausible Deniability</h3>
                <p className="text-sm text-muted-foreground">
                  The best passive-aggressive emails could be read aloud in a meeting
                  without obvious issue. If it would get you fired if read by HR,
                  it doesn&apos;t make our library.
                </p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-2">Originality</h3>
                <p className="text-sm text-muted-foreground">
                  We avoid clichés and overused templates. Every entry should offer
                  a fresh perspective or creative approach to the situation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Review Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content goes through our editorial review process:
            </p>
            <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
              <li>Initial creation with situation research and tone calibration</li>
              <li>Quality review for humor, clarity, and appropriateness</li>
              <li>Tone scale verification to ensure correct categorization</li>
              <li>Aggression score calibration against our scoring rubric</li>
              <li>Final editorial review for language quality and consistency</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Content Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our library is regularly reviewed and updated. Templates may be
              revised for improved humor, updated language, or better situational
              accuracy. All content displays a &ldquo;last reviewed&rdquo; date for
              transparency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">AI-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              When users generate custom emails through our AI feature, the output
              follows the same quality standards as our pre-crafted library. The AI
              model is fine-tuned to our tone scale and trained on our style guidelines
              to maintain consistency across all generated content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Feedback</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you find content that doesn&apos;t meet these standards, or have
              suggestions for improvement, please contact us. We take our editorial
              quality seriously — after all, poorly crafted passive aggression is
              just... aggression.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
