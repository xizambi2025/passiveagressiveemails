import { AboutContent } from "@/components/company/about-content";
import { JsonLd } from "@/components/seo/json-ld";
import { getAboutCopy } from "@/lib/company-localized";
import { createMetadata } from "@/lib/seo";

const copy = getAboutCopy("en-en");

export const metadata = createMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: copy.jsonLdName,
          url: "https://www.passiveagressiveemails.com/about",
        }}
      />
      <AboutContent />
    </>
  );
}
