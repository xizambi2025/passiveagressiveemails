import { EditorialStandardsContent } from "@/components/company/editorial-standards-content";
import { getEditorialCopy } from "@/lib/company-localized";
import { createMetadata } from "@/lib/seo";

const copy = getEditorialCopy("en-en");

export const metadata = createMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/editorial-standards",
});

export default function EditorialStandardsPage() {
  return <EditorialStandardsContent />;
}
