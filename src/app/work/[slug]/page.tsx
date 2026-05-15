import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.result,
    openGraph: { title: `${p.name} | WayFind`, description: p.result },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  return (
    <div>
      <section className="border-b border-line bg-surface">
        <div className="aspect-[21/9] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="text-sm font-semibold text-muted">{p.industry}</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{p.name}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-4">
          <div>
            <div className="text-xs font-semibold text-muted">Industry</div>
            <div className="mt-1 font-semibold">{p.industry}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-muted">Timeline</div>
            <div className="mt-1 font-semibold">{p.timeline}</div>
          </div>
          <div className="sm:col-span-2">
            <div className="text-xs font-semibold text-muted">Key result</div>
            <div className="mt-1 font-semibold text-accent">{p.result}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">The challenge</h2>
        <p className="mt-4 max-w-3xl text-muted">{p.challenge}</p>
      </section>

      <section className="border-y border-line bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Our approach</h2>
          <ol className="mt-6 space-y-4">
            {p.approach.map((step, i) => (
              <li key={step} className="flex gap-4">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-full border border-line bg-canvas text-center text-sm font-semibold leading-8">
                  {i + 1}
                </div>
                <div className="text-muted">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold">The results</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {p.metrics.map((m) => (
            <Card key={m.label} className="p-8">
              <div className="text-4xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-2 text-sm text-muted">{m.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Card className="p-10">
            <div className="text-sm font-semibold text-muted">Client testimonial</div>
            <p className="mt-4 text-xl font-medium leading-relaxed text-ink">“{p.testimonial.quote}”</p>
            <div className="mt-6 text-sm font-semibold">{p.testimonial.author}</div>
            <div className="text-xs text-muted">{p.testimonial.role}</div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold">Services used</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.services.map((href) => (
            <Button key={href} asChild variant="secondary" className="rounded-full">
              <Link href={href}>{href.split("/").pop()}</Link>
            </Button>
          ))}
        </div>
        <Button asChild className="mt-8 rounded-full">
          <Link href="/contact">Start a Similar Project →</Link>
        </Button>
      </section>

      <section className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 sm:flex-row sm:px-6">
          {prev ? (
            <Button asChild variant="secondary" className="rounded-full">
              <Link href={`/work/${prev.slug}`}>← Previous</Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button asChild variant="secondary" className="rounded-full">
              <Link href={`/work/${next.slug}`}>Next →</Link>
            </Button>
          ) : (
            <span />
          )}
        </div>
      </section>
    </div>
  );
}
