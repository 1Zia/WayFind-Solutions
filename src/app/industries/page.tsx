import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/content/industries";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-specific playbooks for healthcare, education, fitness, hospitality, retail, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Industries</h1>
      <p className="mt-4 max-w-2xl text-muted">Pick your sector — we tailor strategy, creative, and engineering to how buyers decide.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <Link key={i.slug} href={`/industries/${i.slug}`}>
            <Card className="h-full p-6 transition hover:-translate-y-1">
              <div className="text-3xl">{i.emoji}</div>
              <div className="mt-4 text-lg font-semibold">{i.name}</div>
              <p className="mt-2 text-sm text-muted">{i.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
