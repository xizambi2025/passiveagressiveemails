import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata = createMetadata({
  title: "About PassiveAggressiveEmails.com",
  description:
    "Learn about PassiveAggressiveEmails.com - the definitive destination for passive-aggressive workplace communication. Our mission, methodology, and the team behind the professional hostility.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About PassiveAggressiveEmails.com",
          url: "https://passiveaggressiveemails.com/about",
        }}
      />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              About
            </h1>
            <p className="text-lg text-muted-foreground">
              The story behind professional hostility, perfected.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                PassiveAggressiveEmails.com exists because workplace communication
                is broken. Every day, millions of professionals stare at their
                screens, trying to craft the perfect email that says &ldquo;I&apos;m
                furious&rdquo; while technically reading as &ldquo;I hope you&apos;re
                well.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built the definitive resource for navigating this delicate art
                form. Part generator, part reference library, part cathartic
                experience &mdash; our platform helps you communicate with precision,
                professionalism, and just the right amount of barely-concealed
                frustration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the internet&apos;s largest collection of passive-aggressive
                email templates, categorized by recipient, situation, and aggression
                level. Our tone scale ranges from genuinely professional (level 1) to
                &ldquo;Corporate Assassin&rdquo; (level 6) &mdash; because sometimes
                the situation calls for precision-guided hostility.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>8 workplace categories</li>
                <li>6-point aggression tone scale</li>
                <li>AI-powered custom generation</li>
                <li>Shareable results with aggression scoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe the best passive-aggressive communication is an art form.
                It requires subtlety, restraint, and an intimate understanding of
                corporate language. A truly great passive-aggressive email should:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Be technically unobjectionable</li>
                <li>Carry unmistakable subtext</li>
                <li>Make the reader question their life choices</li>
                <li>Never cross the line into overt hostility</li>
                <li>Sound completely reasonable if read aloud in a meeting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Editorial Standards</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every template in our library is reviewed for quality, creativity, and
                plausible deniability. We maintain strict{" "}
                <Link href="/editorial-standards" className="underline hover:text-foreground">
                  editorial standards
                </Link>{" "}
                to ensure our content is both useful and entertaining.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                PassiveAggressiveEmails.com is a humor and productivity tool. While
                our templates are crafted to be workplace-appropriate, we encourage
                users to exercise judgment before sending. We are not responsible for
                any HR meetings, performance reviews, or career consequences that may
                result from the use of our higher-tier aggression levels.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Use Corporate Assassin mode at your own risk.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
