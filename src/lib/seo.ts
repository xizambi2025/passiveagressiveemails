import type { Metadata } from "next";

const SITE_URL = "https://passiveaggressiveemails.com";
const SITE_NAME = "PassiveAggressiveEmails.com";

export function createMetadata(params: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${params.path}`;
  const ogImage = params.ogImage || `${SITE_URL}/api/og?title=${encodeURIComponent(params.title)}`;

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [ogImage],
    },
    ...(params.noIndex && { robots: { index: false, follow: false } }),
  };
}

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export { SITE_URL, SITE_NAME };
