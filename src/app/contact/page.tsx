import { ContactContent } from "@/components/company/contact-content";
import { getContactCopy } from "@/lib/company-localized";
import { createMetadata } from "@/lib/seo";

const copy = getContactCopy("en-en");

export const metadata = createMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
