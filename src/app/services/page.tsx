import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "@/content/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Everything you need to dominate online — websites, apps, AI, CRM, SEO, ads, and more.",
  openGraph: { title: "Services | WayFind Solutions" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Everything You Need to Dominate Online</h1>
        <p className="mt-4 text-lg text-muted">
          Pick a lane — we still build it as one connected growth engine.
        </p>
      </div>

      <div className="mt-14 space-y-10">
        {SERVICES.map((s, idx) => {
          const Icon = ((Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ??
            Icons.Sparkles) as React.ComponentType<{ className?: string }>;
          const left = idx % 2 === 0;
          return (
            <div
              key={s.slug}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${left ? "" : "lg:[&>div:first-child]:order-2"}`}
            >
              <Card className="p-8">
                <Icon className="h-6 w-6 text-accent" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-2 text-muted">{s.tagline}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  {s.deliverables.slice(0, 4).map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
                <Button asChild className="mt-8 rounded-full">
                  <Link href={s.path}>Explore {s.title.split(" ")[0]} →</Link>
                </Button>
              </Card>
              <div className="rounded-3xl border border-line bg-surface-2 p-8 text-sm text-muted">
                <div className="text-xs font-semibold text-ink">Spotlight</div>
                <div className="mt-3 text-lg font-semibold text-ink">{s.caseStudy.client}</div>
                <div className="mt-2 text-base text-accent">{s.caseStudy.metric}</div>
                <p className="mt-3">{s.caseStudy.blurb}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-3xl border border-line bg-surface p-10 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Not sure which service?</h3>
        <p className="mt-2 text-muted">Book a free discovery call — we&apos;ll map the shortest path to revenue.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link href="/contact">Book a free discovery call</Link>
        </Button>
      </div>
    </div>
  );
}
