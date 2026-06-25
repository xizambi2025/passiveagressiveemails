import { DEFAULT_LOCALE, localizedPath, type Locale } from "@/lib/i18n";
import Link from "next/link";

function legalHref(locale: Locale | undefined, path: string) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  return localizedPath(locale, path);
}

export function TermsContent({ locale }: { locale?: Locale }) {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using PassiveAggressiveEmails.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Service Description</h2>
            <p>
              PassiveAggressiveEmails.com is a humor and productivity tool that generates passive-aggressive workplace email templates. The service is provided for entertainment and communication assistance purposes. Custom email generation is powered by AI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Acceptable Use</h2>
            <p className="mb-2">You agree to use the service responsibly. You may not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use generated content for harassment, bullying, or discrimination</li>
              <li>Generate content that targets individuals based on protected characteristics</li>
              <li>Use the service to create content intended to cause genuine harm</li>
              <li>Attempt to overwhelm or abuse the generation API</li>
              <li>Resell or redistribute bulk generated content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Content Disclaimer</h2>
            <p>
              Generated emails are intended as humor and communication tools. We do not guarantee that any generated content is appropriate for all workplace situations. Users are responsible for evaluating the suitability of content before use. We are not liable for any consequences arising from the use of our generated content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Intellectual Property</h2>
            <p>
              Emails generated through our service may be used freely by the generator. Pre-crafted templates in our library are original content owned by PassiveAggressiveEmails.com. You may share individual templates with attribution but may not reproduce the library in bulk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Shared Content</h2>
            <p>
              When you share a generated email, it becomes publicly accessible via its unique URL. By sharing content, you grant us a perpetual, non-exclusive license to display, distribute, and promote that content as part of the service. Shared content is not associated with any individual user account and cannot be claimed, modified, or removed after sharing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Affiliate Links</h2>
            <p>
              This site may contain affiliate links to third-party products and services. These help cover the costs of running the service and keeping it free for all users. Clicking on affiliate links may take you to external websites with their own terms, privacy policies, and cookie practices. We are not responsible for the content or practices of these third-party sites. The presence of affiliate links implies no cost to the user for using PassiveAggressiveEmails.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; without warranty. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the service, including but not limited to: damaged workplace relationships, HR investigations, performance reviews, or career impacts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>Questions about these terms? Contact: hi@PassiveAggressiveEmails.com</p>
          </section>

          <section className="pt-4 border-t border-border/60">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href={legalHref(locale, "/privacy")} className="underline hover:text-foreground">
                Privacy Policy
              </Link>{" "}
              · <Link href="/about" className="underline hover:text-foreground">About Us</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
