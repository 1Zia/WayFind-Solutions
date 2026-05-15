import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { industryVideoSrc } from "@/lib/industry-videos";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const i = getIndustry(params.slug);
  if (!i) return {};
  return {
    title: i.name,
    description: i.description,
    openGraph: { title: `${i.name} | WayFind Industries` },
  };
}

export default function IndustryPage({ params }: Props) {
  const i = getIndustry(params.slug);
  if (!i) notFound();

  const videoSrc = industryVideoSrc(i.slug);

  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden">
        {videoSrc ? (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 text-white sm:px-6">
          <div className="text-4xl">{i.emoji}</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{i.name}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{i.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Pain points</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Competition is loud; differentiation is unclear.",
            "Leads arrive but follow-up is inconsistent.",
            "Digital spend does not tie back to revenue clearly.",
          ].map((p) => (
            <Card key={p} className="p-6 text-sm text-muted">
              {p}
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">WayFind&apos;s tailored playbook</h2>
          <p className="mt-4 max-w-3xl text-muted">
            We combine conversion design, local visibility, automation, and performance creative, tuned to how buyers behave in
            this industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Relevant services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <Card key={s.slug} className="p-6">
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted">{s.shortDescription}</p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline" href={s.path}>
                Explore →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Industry case snapshot</h2>
          <Card className="mt-6 p-8">
            <div className="text-sm font-semibold text-muted">Representative outcome</div>
            <div className="mt-2 text-3xl font-semibold text-accent">↑ measurable lift</div>
            <p className="mt-3 text-muted">Funnels, creative, and tracking aligned to industry buying cycles.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <Button asChild className="rounded-full px-8">
          <Link href="/contact">Get a Free {i.name} Website Audit →</Link>
        </Button>
      </section>
    </div>
  );
}
