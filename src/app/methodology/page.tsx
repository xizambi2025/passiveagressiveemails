import { createMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/seo/json-ld";

export const metadata = createMetadata({
  title: "Methodology - How We Craft Passive Aggressive Emails",
  description:
    "How we craft passive-aggressive emails. Our 6-point tone scale, aggression scoring methodology, and the science behind it.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={faqSchema([
          {
            question: "How does the aggression scoring work?",
            answer: "Emails are scored 0-100 based on multiple factors: directness of language, use of corporate euphemisms, implied threats, strategic CC usage, and overall plausible deniability.",
          },
          {
            question: "What determines the tone level?",
            answer: "Our 6-point scale measures escalation from genuinely professional (1) through increasingly hostile corporate speak to 'Corporate Assassin' (6), which involves career-ending precision.",
          },
          {
            question: "How are templates quality-controlled?",
            answer: "Each template is reviewed for workplace appropriateness, humor quality, realism, and plausible deniability. Templates must be technically professional while carrying unmistakable subtext.",
          },
        ])}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Methodology
            </h1>
            <p className="text-lg text-muted-foreground">
              The science behind professionally hostile communication.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">
                The 6-Point Tone Scale
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our proprietary tone scale was developed through extensive analysis of
                real workplace communication. Each level represents a distinct
                escalation in subtext intensity while maintaining surface-level
                professionalism.
              </p>
              <div className="space-y-4">
                {[
                  { level: 1, name: "Professional", desc: "Genuinely polite. No subtext. The email equivalent of a sincere handshake.", color: "border-l-green-500" },
                  { level: 2, name: "Slightly Annoyed", desc: "Professional with a hint of impatience. The smile is still there, but it's tightening at the corners.", color: "border-l-lime-500" },
                  { level: 3, name: "Concerned", desc: "The tone shifts from friendly to formal. Words like 'flagging' and 'noting' appear. Patience is visibly thinning.", color: "border-l-yellow-500" },
                  { level: 4, name: "Passive Aggressive", desc: "The classic. Technically polite, undeniably hostile. 'Per my last email' territory. Maximum plausible deniability.", color: "border-l-orange-500" },
                  { level: 5, name: "Per My Previous Email", desc: "Gloves are off but the language remains corporate. CC chains grow. Attachments are wielded as weapons. Timestamps become evidence.", color: "border-l-red-500" },
                  { level: 6, name: "Corporate Assassin", desc: "Precision-guided professional hostility. Every word is calculated. Careers may not survive. Use sparingly and deliberately.", color: "border-l-red-700" },
                ].map((tone) => (
                  <div key={tone.level} className={`border-l-4 ${tone.color} pl-4 py-2`}>
                    <h3 className="font-medium">
                      Level {tone.level}: {tone.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{tone.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">
                Aggression Scoring
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every email receives an aggression score from 0-100. This composite
                score is calculated based on:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { factor: "Language Directness", weight: "25%", desc: "How explicitly the frustration is communicated vs implied" },
                  { factor: "Corporate Euphemism Density", weight: "20%", desc: "Volume of phrases like 'going forward' and 'as discussed'" },
                  { factor: "Implied Consequences", weight: "20%", desc: "Whether escalation, deadlines, or consequences are suggested" },
                  { factor: "Strategic CC Usage", weight: "15%", desc: "Who else is looped in and the political implications" },
                  { factor: "Plausible Deniability", weight: "10%", desc: "Could this be read aloud in HR without issue?" },
                  { factor: "Emotional Impact", weight: "10%", desc: "How much existential dread the recipient will experience" },
                ].map((item) => (
                  <div key={item.factor} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium">{item.factor}</h3>
                      <span className="text-xs text-muted-foreground">{item.weight}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">
                Damage Assessment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Each email includes a damage assessment — a brief evaluation of the
                potential workplace consequences of sending it. This ranges from
                &ldquo;Relationship unaffected&rdquo; at the lower end to &ldquo;Update
                your LinkedIn&rdquo; at the upper end. These assessments help users
                calibrate their response to the situation&apos;s severity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">
                Corporate Translation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every generated email comes with a &ldquo;Corporate Translation&rdquo;
                — showing what you actually mean versus how it&apos;s phrased in
                corporate speak. This feature highlights the gap between intent and
                expression, which is the fundamental mechanism of all passive-aggressive
                communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">
                Quality Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every email in our library meets these criteria:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Technically workplace-appropriate
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Carries clear subtext readable by the recipient
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Could survive an HR review (mostly)
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Is genuinely funny or satisfying to read
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Addresses a real workplace situation
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">✓</span>
                  Demonstrates craft in language and structure
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
