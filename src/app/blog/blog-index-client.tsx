"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, readingMinutes, type BlogCategory } from "@/content/blog-posts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cats: BlogCategory[] = ["All", "SEO", "AI", "Web Design", "Ads", "Social Media", "E-Commerce", "Case Studies"];

function rel(dateIso: string) {
  const diff = Date.now() - new Date(dateIso).getTime();
  const days = Math.max(1, Math.floor(diff / 86400000));
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

export function BlogIndexClient() {
  const [cat, setCat] = useState<BlogCategory>("All");
  const posts = useMemo(() => (cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat)), [cat]);
  const featured = BLOG_POSTS[0];

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <Button key={c} type="button" variant={cat === c ? "default" : "secondary"} className="rounded-full" onClick={() => setCat(c)}>
            {c}
          </Button>
        ))}
      </div>

      <Link href={`/blog/${featured.slug}`}>
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="p-8">
              <div className="text-xs font-semibold text-accent">Featured</div>
              <div className="mt-2 text-xs font-semibold text-muted">{featured.category}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{featured.title}</h2>
              <p className="mt-3 text-sm text-muted">{featured.excerpt}</p>
              <div className="mt-4 text-xs text-muted">
                {featured.author} · {readingMinutes(featured.body + featured.excerpt)} min read
              </div>
            </div>
          </div>
        </Card>
      </Link>

      {posts.length === 0 ? (
        <div className="rounded-3xl border border-line bg-surface p-10 text-center text-muted">No posts in this category yet.</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <Card className="h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-muted">{p.category}</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">{p.title}</div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
                  <div className="mt-4 text-xs text-muted">
                    <span title={new Date(p.publishedAt).toLocaleString()}>{rel(p.publishedAt)}</span> ·{" "}
                    {readingMinutes(p.body + p.excerpt)} min read
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
