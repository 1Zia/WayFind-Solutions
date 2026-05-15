import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { getAllServiceSlugs, getService } from "@/content/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company } from "@/lib/company";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.shortDescription,
    openGraph: { title: `${s.title} | WayFind Solutions`, description: s.shortDescription },
  };
}

export default function ServicePage({ params }: Props) {
  const s = getService(params.slug);
  if (!s) notFound();

  const Icon = ((Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ??
    Icons.Sparkles) as React.ComponentType<{ className?: string }>;

  return (
    <div>
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-muted">
              <Icon className="h-4 w-4 text-accent" /> Service
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{s.title}</h1>
            <p className="mt-4 text-lg text-muted">{s.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link href="/contact">Start with {s.title.split(" ")[0]} →</Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-full">
                <a href={company.waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">The problem</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {s.problems.map((p) => (
            <Card key={p} className="p-6 text-sm text-muted">
              {p}
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">How WayFind solves it</h2>
          <p className="mt-4 max-w-3xl text-muted">{s.solution}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Deliverables</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.deliverables.map((d) => (
            <Card key={d} className="p-6 text-sm">
              {d}
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <Card key={p.title} className="p-6">
                <div className="text-xs font-semibold text-muted">Step {i + 1}</div>
                <div className="mt-2 font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Case study spotlight</h2>
        <Card className="mt-6 p-8">
          <div className="text-sm font-semibold text-muted">{s.caseStudy.client}</div>
          <div className="mt-2 text-3xl font-semibold text-accent">{s.caseStudy.metric}</div>
          <p className="mt-3 text-muted">{s.caseStudy.blurb}</p>
        </Card>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {s.tiers.map((t) => (
              <Card key={t.name} className={`p-8 ${t.popular ? "aurora-ring border-transparent" : ""}`}>
                {t.popular ? (
                  <div className="mb-3 inline-flex rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold">
                    Most popular
                  </div>
                ) : null}
                <div className="text-sm font-semibold text-muted">{t.name}</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">{t.price}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  {t.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-6">
          {s.faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Button asChild className="rounded-full px-8">
            <Link href="/contact">Start with {s.title.split(" ")[0]} →</Link>
          </Button>
          <Button asChild variant="secondary" className="ml-3 rounded-full px-8">
            <a href={company.waLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
