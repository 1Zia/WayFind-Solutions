import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { PROJECTS } from "@/content/portfolio";
import { INDUSTRIES } from "@/content/industries";
import { BLOG_POSTS } from "@/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wayfind.pk";
  const routes = [
    "",
    "/services",
    "/work",
    "/about",
    "/industries",
    "/pricing",
    "/careers",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const serviceRoutes = SERVICES.map((s) => ({ url: `${base}${s.path}`, lastModified: new Date() }));
  const workRoutes = PROJECTS.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date() }));
  const industryRoutes = INDUSTRIES.map((i) => ({ url: `${base}/industries/${i.slug}`, lastModified: new Date() }));
  const blogRoutes = BLOG_POSTS.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: new Date(b.publishedAt) }));

  return [...routes, ...serviceRoutes, ...workRoutes, ...industryRoutes, ...blogRoutes];
}
