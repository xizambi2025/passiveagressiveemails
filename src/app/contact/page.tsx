import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the PassiveAggressiveEmails.com team. We welcome feedback, partnership inquiries, and suggestions for new email scenarios.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to hear from you. Politely or otherwise.
          </p>
        </div>

        <div className="space-y-8">
          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you have feedback, a partnership inquiry, a suggestion for a
              new scenario, or just want to share your finest passive-aggressive
              masterpiece, we&apos;re here for it.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">For everything: </span>
                <span className="text-muted-foreground">hi@PassiveAggressiveEmails.com</span>
              </div>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">Submit a Scenario</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a workplace situation that deserves the passive-aggressive
              treatment? We&apos;re always looking for new scenarios to add to our
              library. Send us the situation, and The Dept. of Plausible Deniability will craft the
              perfect response.
            </p>
          </section>

          <section className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-heading font-bold mb-4">Response Time</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to respond within 2-3 business days. If you don&apos;t hear
              back, feel free to send a follow-up. We promise not to be
              passive-aggressive about it.
            </p>
            <p className="text-sm text-muted-foreground italic mt-2">
              (Unlike some people, we actually read our emails.)
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
