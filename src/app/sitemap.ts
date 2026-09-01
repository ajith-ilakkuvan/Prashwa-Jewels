import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";

const staticPaths = ["/", "/shop/", "/collections/", "/about/", "/contact/", "/faq/", "/privacy-policy/", "/terms/"];

/**
 * Reads live products/categories from the database, so it must render
 * per-request rather than being pre-generated at build time — a
 * build-time sitemap would (a) need the database reachable during the
 * build itself, which it may not be, and (b) go stale between deploys as
 * the catalog changes via /admin/.
 */
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/shop/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path === "/shop/" ? 0.9 : 0.7,
  }));

  const [categories, products] = await Promise.all([
    db.category.findMany({ select: { slug: true } }),
    db.product.findMany({ where: { isActive: true }, select: { slug: true, updatedAt: true } }),
  ]);

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.url}/collections/${category.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteConfig.url}/product/${product.slug}/`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
