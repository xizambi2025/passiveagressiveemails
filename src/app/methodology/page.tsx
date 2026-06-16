import { MethodologyContent } from "@/components/company/methodology-content";
import { JsonLd, faqSchema } from "@/components/seo/json-ld";
import { getMethodologyCopy } from "@/lib/company-localized";
import { createMetadata } from "@/lib/seo";

const copy = getMethodologyCopy("en-en");

export const metadata = createMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd data={faqSchema(copy.faqs)} />
      <MethodologyContent />
    </>
  );
}
