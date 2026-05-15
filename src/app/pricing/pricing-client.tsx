"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function parsePkr(price: string) {
  const m = price.match(/([\d,]+)/);
  if (!m) return 0;
  return Number(m[1].replace(/,/g, "")) || 0;
}

export function PricingClient() {
  const [mode, setMode] = useState<"onetime" | "monthly">("onetime");
  const [selected, setSelected] = useState<Record<string, string>>({});

  const total = useMemo(() => {
    let sum = 0;
    for (const s of SERVICES) {
      const tierName = selected[s.slug];
      if (!tierName) continue;
      const tier = s.tiers.find((t) => t.name === tierName);
      if (!tier) continue;
      if (mode === "monthly" && !tier.price.includes("/mo")) continue;
      if (mode === "onetime" && tier.price.includes("/mo")) continue;
      sum += parsePkr(tier.price);
    }
    return sum;
  }, [mode, selected]);

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-2 rounded-full border border-line bg-surface p-1">
        <Button type="button" variant={mode === "onetime" ? "default" : "ghost"} className="rounded-full" onClick={() => setMode("onetime")}>
          One-time projects
        </Button>
        <Button type="button" variant={mode === "monthly" ? "default" : "ghost"} className="rounded-full" onClick={() => setMode("monthly")}>
          Monthly services
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const tiers = s.tiers.filter((t) => (mode === "monthly" ? t.price.includes("/mo") : !t.price.includes("/mo")));
          if (tiers.length === 0) return null;
          return (
            <Card key={s.slug} className="p-6">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-4 space-y-2">
                {tiers.map((t) => (
                  <label key={t.name} className="flex items-center justify-between gap-3 rounded-2xl border border-line px-3 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`tier-${s.slug}`}
                        checked={selected[s.slug] === t.name}
                        onChange={() => setSelected((prev) => ({ ...prev, [s.slug]: t.name }))}
                      />
                      <span>
                        {t.name}
                        {t.popular ? <span className="ml-2 text-xs text-accent">Popular</span> : null}
                      </span>
                    </span>
                    <span className="text-xs text-muted">{t.price}</span>
                  </label>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-8">
        <div className="text-sm font-semibold text-muted">Estimated total (PKR)</div>
        <div className="mt-2 text-4xl font-semibold tracking-tight">{total.toLocaleString()}</div>
        <p className="mt-2 text-sm text-muted">Bundles often save 25–30%. Final quotes depend on scope.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link href={`/contact?note=${encodeURIComponent(`Pricing estimate: PKR ${total}`)}`}>Get Exact Quote →</Link>
        </Button>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold">Add-ons</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
          {["Domain registration", "Hosting setup", "Priority support", "Analytics setup", "Training session", "Extra revision rounds"].map((x) => (
            <span key={x} className="rounded-full border border-line bg-surface px-3 py-1">
              {x}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          {[
            { q: "Are there hidden fees?", a: "No — scope is agreed upfront. Media spend is billed by platforms separately." },
            { q: "Can I pay in installments?", a: "Yes — milestone billing is available for larger builds." },
            { q: "Bundle discounts?", a: "Yes — typically 25–30% when packaging multiple services." },
            { q: "Upgrade plan later?", a: "Easy — no lock-in. We adjust retainers as your needs evolve." },
          ].map((f, i) => (
            <AccordionItem key={f.q} value={`p-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
