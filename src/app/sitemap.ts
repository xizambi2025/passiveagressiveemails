import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/lib/blog";
import { LOCALIZED_BLOG_SLUGS } from "@/lib/blog-localized";
import { LOCALES, localizedPath } from "@/lib/i18n";

const SITE_URL = "https://www.passiveaggressiveemails.com";

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

  const localizedHomePages = LOCALES.map((locale) => ({
    url: `${SITE_URL}${localizedPath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const localizedBlogIndexPages = LOCALES.map((locale) => ({
    url: `${SITE_URL}${localizedPath(locale, "/blog")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const localizedBlogPages = LOCALES.flatMap((locale) =>
    LOCALIZED_BLOG_SLUGS.map((slug) => ({
      url: `${SITE_URL}${localizedPath(locale, `/blog/${slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [
    ...staticPages,
    ...categoryPages,
    ...blogPages,
    ...localizedHomePages,
    ...localizedBlogIndexPages,
    ...localizedBlogPages,
  ];
}
