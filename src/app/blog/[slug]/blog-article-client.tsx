"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/content/blog-posts";
import { readingMinutes } from "@/content/blog-posts";
import { Button } from "@/components/ui/button";

function Toc({ body }: { body: string }) {
  const items = useMemo(() => {
    return body
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("## "))
      .map((l) => l.replace(/^##\s+/, ""));
  }, [body]);

  if (items.length === 0) return null;

  return (
    <div className="rounded-3xl border border-line bg-surface p-4 text-sm">
      <div className="font-semibold">On this page</div>
      <ul className="mt-3 space-y-2 text-muted">
        {items.map((t) => (
          <li key={t}>
            <a className="hover:text-ink" href={`#${encodeURIComponent(t)}`}>
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogArticleClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const minutes = readingMinutes(post.body + post.excerpt);

  const sections = post.body.split("\n\n").map((chunk, idx) => {
    const lines = chunk.split("\n");
    const first = lines[0]?.trim() ?? "";
    if (first.startsWith("## ")) {
      const title = first.replace(/^##\s+/, "");
      return (
        <section key={idx} id={title} className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {lines.slice(1).map((l, i) => (
            <p key={i} className="mt-3 text-muted">
              {l}
            </p>
          ))}
        </section>
      );
    }
    return (
      <p key={idx} className="mt-6 text-muted">
        {chunk}
      </p>
    );
  });

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[70] h-1 bg-line">
        <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="text-xs font-semibold text-muted">{post.category}</div>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-surface-2" />
          <div className="text-sm">
            <div className="font-semibold">{post.author}</div>
            <div className="text-xs text-muted">
              {new Date(post.publishedAt).toLocaleDateString()} · {minutes} min read
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Toc body={post.body} />
          </div>
          <article className="max-w-3xl">{sections}</article>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Twitter", "LinkedIn", "WhatsApp", "Copy"].map((x) => (
            <Button key={x} type="button" variant="secondary" className="rounded-full" onClick={() => x === "Copy" && navigator.clipboard.writeText(window.location.href)}>
              {x}
            </Button>
          ))}
        </div>

        {post.relatedService ? (
          <div className="mt-12 rounded-3xl border border-line bg-surface p-8">
            <div className="text-sm font-semibold text-muted">Keep going</div>
            <div className="mt-2 text-xl font-semibold">Explore the service behind this article</div>
            <Button asChild className="mt-4 rounded-full">
              <Link href={post.relatedService}>View service →</Link>
            </Button>
          </div>
        ) : null}

        <div className="mt-16">
          <div className="text-sm font-semibold text-muted">Related</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-3xl border border-line bg-surface p-6 hover:bg-surface-2">
                <div className="text-xs font-semibold text-muted">{r.category}</div>
                <div className="mt-2 font-semibold">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
