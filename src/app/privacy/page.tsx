import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for PassiveAggressiveEmails.com. How we handle your data, cookies, and generated emails.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Overview</h2>
            <p>
              PassiveAggressiveEmails.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding that data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Information We Collect</h2>
            <h3 className="font-medium text-foreground mt-4 mb-2">Usage Data</h3>
            <p>We collect anonymized usage data through Google Analytics and Microsoft Clarity, including pages viewed, features used, and general interaction patterns. This helps us improve the product.</p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Generated Content</h3>
            <p>When you use our email generator, we may temporarily process the inputs you provide (recipient type, situation, tone level) to generate results. Custom AI-generated emails are processed through OpenAI&apos;s API.</p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Shared Emails</h3>
            <p>If you choose to share a generated email, the content is stored to enable the share URL functionality. Shared emails are public and accessible via their unique URL.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Cookies</h2>
            <p>We use essential cookies for site functionality and analytics cookies (Google Analytics, Microsoft Clarity) to understand how our site is used. You can disable non-essential cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Google Analytics — usage analytics</li>
              <li>Microsoft Clarity — session replay and heatmaps</li>
              <li>OpenAI — AI email generation for custom scenarios</li>
              <li>Vercel — hosting and infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Data Retention</h2>
            <p>Shared email URLs and their content are retained indefinitely unless removed. Analytics data is retained per the default settings of Google Analytics and Microsoft Clarity. We do not store custom generation inputs beyond the immediate request-response cycle.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Your Rights</h2>
            <p>You have the right to request deletion of any shared email you created, access information about what data we hold, and opt out of analytics tracking. Contact us at privacy@passiveaggressiveemails.com for any data-related requests.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>For privacy-related questions, contact: privacy@passiveaggressiveemails.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
