import { DEFAULT_LOCALE, localizedPath, type Locale } from "@/lib/i18n";
import Link from "next/link";

function legalHref(locale: Locale | undefined, path: string) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  return localizedPath(locale, path);
}

export function PrivacyContent({ locale }: { locale?: Locale }) {
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
              PassiveAggressiveEmails.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect, how we use it, your choices regarding cookies and advertising, and your rights under applicable privacy laws including the GDPR (European Union/EEA/UK) and the CCPA/CPRA (California).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Information We Collect</h2>
            <h3 className="font-medium text-foreground mt-4 mb-2">Usage Data</h3>
            <p>
              With your consent, we collect usage data through Google Analytics, including pages viewed, features used, and general interaction patterns. This helps us improve the product. Analytics cookies are not placed until you accept them via our cookie banner or cookie settings.
            </p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Generated Content</h3>
            <p>
              When you use our email generator, we may temporarily process the inputs you provide (recipient type, situation, tone level) to generate results. Custom emails are generated using AI. We do not store your generation inputs beyond the immediate request-response cycle.
            </p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Shared Emails</h3>
            <p>
              If you choose to share a generated email, the content is stored to enable the share URL functionality. Shared emails are public and accessible via their unique URL. As no user accounts exist, shared content is not associated with any identifiable individual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Cookies and Similar Technologies</h2>
            <p className="mb-2">
              We use essential cookies for site functionality (such as theme preference and language selection). With your consent, we also use:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong className="text-foreground">Analytics cookies</strong> — Google Analytics to understand how our site is used</li>
              <li><strong className="text-foreground">Advertising cookies</strong> — Google AdSense to display ads and measure ad performance</li>
            </ul>
            <p className="mb-2">
              You can manage your preferences at any time using <strong className="text-foreground">Cookie Settings</strong> in the site footer. We implement Google Consent Mode v2 so that analytics and advertising tags respect your choices.
            </p>
            <p>
              This site also contains affiliate links to third-party products and services. When you navigate to external sites through these links, those sites may set their own cookies and track your activity according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-foreground">Google Analytics</strong> — usage analytics. Learn more at{" "}
                <a href="https://policies.google.com/privacy" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Google&apos;s Privacy Policy
                </a>
                . Opt out via{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Google AdSense</strong> — display advertising. Google and its partners may use cookies to serve ads based on your visits to this and other sites. Learn more at{" "}
                <a href="https://policies.google.com/technologies/ads" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  How Google uses cookies in advertising
                </a>
                . Manage ad personalization at{" "}
                <a href="https://adssettings.google.com" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>
                .
              </li>
              <li>AI services — custom email generation</li>
              <li>Vercel — hosting and infrastructure</li>
              <li>Affiliate and advertising partners — display ads and affiliate programs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Legal Bases for Processing (GDPR)</h2>
            <p className="mb-2">If you are in the European Economic Area, United Kingdom, or Switzerland, we process personal data on the following bases:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Consent</strong> — for analytics and advertising cookies (Google Analytics and Google AdSense)</li>
              <li><strong className="text-foreground">Legitimate interests</strong> — for site security, fraud prevention, and improving our service, balanced against your rights</li>
              <li><strong className="text-foreground">Contractual necessity</strong> — to provide the email generation service you request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Your Rights Under GDPR</h2>
            <p className="mb-2">If you are in the EEA, UK, or Switzerland, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to certain processing</li>
              <li>Withdraw consent at any time (via Cookie Settings) without affecting prior lawful processing</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p>
              To exercise these rights, contact us at hi@PassiveAggressiveEmails.com. Since no user accounts exist, we may not be able to identify analytics data tied to a specific individual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">California Privacy Rights (CCPA/CPRA)</h2>
            <p className="mb-2">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong className="text-foreground">Right to know</strong> — what personal information we collect, use, and disclose</li>
              <li><strong className="text-foreground">Right to delete</strong> — request deletion of personal information we hold about you</li>
              <li><strong className="text-foreground">Right to opt out of sale or sharing</strong> — we use Google Analytics and Google AdSense, which may involve &ldquo;sharing&rdquo; of device and usage data for cross-context behavioral advertising under CPRA</li>
              <li><strong className="text-foreground">Right to non-discrimination</strong> — we will not discriminate against you for exercising your privacy rights</li>
            </ul>
            <p className="mb-2">
              <strong className="text-foreground">Do Not Sell or Share My Personal Information:</strong> Use the link in our site footer or cookie banner to opt out. We honor the Global Privacy Control (GPC) signal where supported by your browser.
            </p>
            <p>
              We do not sell personal information for monetary consideration. We may share data with advertising and analytics partners as described above. California residents may contact hi@PassiveAggressiveEmails.com to submit a verifiable consumer request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Data Retention</h2>
            <p>
              Shared email URLs and their content are retained indefinitely. Analytics data is retained per the default settings of Google Analytics. We do not store custom generation inputs beyond the immediate request-response cycle. Cookie consent preferences are stored locally in your browser until you clear them or change your settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">International Transfers</h2>
            <p>
              Your data may be processed in the United States and other countries where our service providers operate. Where required, we rely on appropriate safeguards such as Standard Contractual Clauses for transfers from the EEA/UK.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Children</h2>
            <p>
              This service is not directed at children under 16. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>For privacy-related questions or to exercise your rights, contact: hi@PassiveAggressiveEmails.com</p>
          </section>

          <section className="pt-4 border-t border-border/60">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href={legalHref(locale, "/terms")} className="underline hover:text-foreground">
                Terms of Service
              </Link>{" "}
              · <Link href={legalHref(locale, "/about")} className="underline hover:text-foreground">About Us</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
