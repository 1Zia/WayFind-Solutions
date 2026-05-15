import type { Metadata } from "next";
import { BlogIndexClient } from "./blog-index-client";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights to grow your business online — SEO, AI, web design, ads, and case studies.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Insights to Grow Your Business Online.</h1>
      <p className="mt-4 max-w-2xl text-muted">Practical playbooks from the team shipping growth systems every week.</p>
      <div className="mt-10">
        <BlogIndexClient />
      </div>
    </div>
  );
}
