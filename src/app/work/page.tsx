"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, WORK_FILTERS } from "@/content/portfolio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");

  const items = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.industryFilter === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work That Speaks for Itself.</h1>
      <p className="mt-4 max-w-2xl text-muted">Real outcomes for real businesses — built in Islamabad, shipped nationwide.</p>

      <div className="mt-10 flex flex-wrap gap-2">
        {WORK_FILTERS.map((f) => (
          <Button
            key={f}
            type="button"
            variant={filter === f ? "default" : "secondary"}
            className="rounded-full"
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-muted">{p.industry}</div>
                  <div className="mt-2 text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 text-sm text-muted">{p.result}</div>
                  <Link className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline" href={`/work/${p.slug}`}>
                    View Case Study →
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-line bg-surface p-10 text-center text-muted">No projects in this filter yet.</div>
      ) : null}
    </div>
  );
}
