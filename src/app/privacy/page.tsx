import { PrivacyContent } from "@/components/legal/privacy-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for PassiveAggressiveEmails.com. How we handle your data, cookies, and generated emails.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
