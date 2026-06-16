import { TermsContent } from "@/components/legal/terms-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for PassiveAggressiveEmails.com. Usage guidelines, disclaimers, and legal information.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsContent />;
}
