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
            <p>We collect anonymized usage data through Google Analytics, including pages viewed, features used, and general interaction patterns. This helps us improve the product.</p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Generated Content</h3>
            <p>When you use our email generator, we may temporarily process the inputs you provide (recipient type, situation, tone level) to generate results. Custom emails are generated using AI. We do not store your generation inputs beyond the immediate request-response cycle.</p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Shared Emails</h3>
            <p>If you choose to share a generated email, the content is stored to enable the share URL functionality. Shared emails are public and accessible via their unique URL. As no user accounts exist, shared content is not associated with any identifiable individual.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Cookies</h2>
            <p className="mb-2">We use essential cookies for site functionality and analytics cookies (Google Analytics) to understand how our site is used. You can disable non-essential cookies through your browser settings.</p>
            <p>This site contains ads and affiliate links to third-party products and services. When you navigate to external sites through these links, those sites may set their own cookies and track your activity according to their own privacy policies. We encourage you to review the privacy practices of any third-party site you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Google Analytics — usage analytics</li>
              <li>AI services — custom email generation</li>
              <li>Vercel — hosting and infrastructure</li>
              <li>Advertising partners — display ads and affiliate programs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Data Retention</h2>
            <p>Shared email URLs and their content are retained indefinitely. Analytics data is retained per the default settings of Google Analytics. We do not store custom generation inputs beyond the immediate request-response cycle.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Your Rights</h2>
            <p>You may opt out of analytics tracking through your browser settings or by using a browser extension. Since no user accounts or registration exist on this service, generated and shared content is not associated with any identifiable user and cannot be claimed or removed.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>For privacy-related questions, contact: hi@PassiveAggressiveEmails.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
