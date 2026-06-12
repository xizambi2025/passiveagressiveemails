import type { MetadataRoute } from "next";

const SITE_URL = "https://passiveaggressiveemails.com";

const CATEGORIES = [
  "clients",
  "coworkers",
  "managers",
  "suppliers",
  "meetings",
  "deadlines",
  "invoices",
  "corporate-buzzwords",
];

const BLOG_SLUGS = [
  "ultimate-guide-passive-aggressive-emails",
  "per-my-last-email-history",
  "corporate-buzzwords-decoded",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/examples",
    "/hall-of-fame",
    "/categories",
    "/blog",
    "/about",
    "/methodology",
    "/editorial-standards",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((slug) => ({
    url: `${SITE_URL}/categories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}
