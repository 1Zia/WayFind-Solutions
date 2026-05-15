"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { company } from "@/lib/company";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { PROJECTS } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IndustryVideoTile } from "@/components/home/industry-video-tile";
import { AiChatWidget } from "@/components/home/ai-chat-widget";

const trustItems = [
  "Healthcare",
  "Education",
  "Fitness",
  "Restaurant",
  "Real Estate",
  "Retail",
  "Legal",
  "Automotive",
  "Hospitality",
  "E-Commerce",
  "SaaS",
  "FinTech",
  "NGO",
  "Manufacturing",
];

const processSteps = [
  {
    title: "Discovery Call",
    desc: "30 min. We understand your business, goals, and market. Zero jargon.",
  },
  {
    title: "Strategy & Design",
    desc: "Custom strategy, wireframes, and design mockups built for your audience.",
  },
  {
    title: "Build & Integrate",
    desc: "Website, app, CRM, AI, and marketing tools built and integrated together.",
  },
  {
    title: "Launch & Scale",
    desc: "Go live. We manage growth, monitor performance, and iterate while you serve clients.",
  },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "10–14 days for a standard website. Mobile apps take 6–14 weeks.",
  },
  {
    q: "How much does it cost?",
    a: "Starting from PKR 50,000 for websites. Full pricing on our Pricing page.",
  },
  {
    q: "Do you work outside Islamabad?",
    a: "Yes. We work across Pakistan and with international clients.",
  },
  {
    q: "What makes WayFind different?",
    a: "We build a full digital growth engine, not just a website. Strategy, execution, and ongoing management in one place.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. We explain everything in plain language and handle all the technical work.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support, maintenance, and growth packages tailored to your needs.",
  },
  {
    q: "Can you build both a website and mobile app?",
    a: "Yes. We often ship website, app, and backend as one project with a single team.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We sign NDAs before sharing any project details on both sides.",
  },
];

function useCounter(target: number, enabled: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const dur = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(Math.floor(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, target]);
  return v;
}

const WorkDragRow = React.memo(function WorkDragRow() {
  const mx = useMotionValue(0);
  const sx = useSpring(useTransform(mx, [-300, 300], [18, -18]), {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div className="relative cursor-grab active:cursor-grabbing">
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        style={{ x: sx }}
        className="flex gap-4"
      >
        {PROJECTS.map((p) => (
          <Card key={p.slug} className="min-w-[300px] p-6 shadow-elevated">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider">
              {p.industry}
            </div>
            <div className="mt-2 text-xl font-semibold">{p.name}</div>
            <div className="mt-2 text-sm text-muted">{p.result}</div>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
              href={`/work/${p.slug}`}
            >
              View Case Study →
            </Link>
          </Card>
        ))}
      </motion.div>
    </div>
  );
});

export function HomeView() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(useTransform(mx, [-300, 300], [18, -18]), {
    stiffness: 120,
    damping: 20,
  });
  const sy = useSpring(useTransform(my, [-300, 300], [12, -12]), {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set(e.clientX - cx);
      my.set(e.clientY - cy);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-20%" });
  const c1 = useCounter(50, statsInView);
  const c2 = useCounter(38, statsInView);
  const c3 = useCounter(10, statsInView);
  const c4 = useCounter(22, statsInView);

  const headline = useMemo(() => company.tagline.split(" "), []);

  return (
    <div className="antialiased">
      <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden bg-black">
        <Image
          src="/hero-growth.png"
          alt="Growth Engine"
          fill
          className="pointer-events-none absolute inset-0 -z-20 object-cover opacity-60 saturate-[1.2] mix-blend-screen"
          priority
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid bg-[length:22px_22px]"
          style={{ x: sx, y: sy }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.14),transparent_55%)]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-10 text-center sm:px-6 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-4 py-2 text-xs font-semibold text-muted shadow-elevated backdrop-blur-sm dark:bg-surface/80"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {company.shortTagline}
          </motion.div>

          <motion.h1
            className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-7xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            {headline.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className="inline-block overflow-hidden pb-1 pr-4"
              >
                <motion.span
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    show: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 max-w-2xl text-pretty text-base text-muted sm:text-lg"
          >
            WayFind is a small senior team in Islamabad: websites, mobile apps,
            AI assistants, CRM, SEO, and paid ads, wired up so your leads and
            ops stay in sync.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              className="rounded-full px-7 shadow-glow hover:shadow-glow-lg transition-all"
            >
              <Link href="/contact">Start a Project →</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full px-7">
              <Link href="/work">See Our Work</Link>
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted sm:text-sm">
            <span>✓ Based in Islamabad</span>
            <span>✓ 50+ Projects Delivered</span>
            <span>✓ AI-Powered</span>
            <span>✓ 14 Services</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="aurora-ring animate-float relative mt-14 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-surface shadow-elevated-lg"
          >
            <div className="aspect-video w-full bg-gradient-to-b from-surface to-surface-2">
              <div className="flex h-full items-center justify-center p-8">
                <div className="w-full max-w-3xl rounded-2xl border border-line bg-canvas p-4 text-left shadow-elevated">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>wayfind / growth-engine</span>
                    <span className="rounded-full border border-line px-2 py-1 text-[10px] font-semibold">
                      Live
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-line bg-surface p-3">
                      <div className="text-xs font-semibold text-muted">
                        Pipeline
                      </div>
                      <div className="mt-2 text-2xl font-semibold">+38%</div>
                      <div className="text-xs text-muted">qualified leads</div>
                    </div>
                    <div className="rounded-xl border border-line bg-surface p-3">
                      <div className="text-xs font-semibold text-muted">
                        AI deflection
                      </div>
                      <div className="mt-2 text-2xl font-semibold">72%</div>
                      <div className="text-xs text-muted">
                        inquiries automated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-6">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs font-semibold text-muted sm:px-6">
          Trusted by businesses across Pakistan
        </div>
        <div className="mt-4 overflow-hidden">
          <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex items-center gap-6 px-6 text-sm font-semibold text-ink/35"
              >
                {trustItems.map((t) => (
                  <span key={`${dup}-${t}`} className="flex items-center gap-6">
                    <span>{t}</span>
                    <span className="text-ink/20">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="text-xs font-semibold tracking-wide text-muted uppercase">
          What we build
        </div>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Everything you need to show up online and convert traffic.
        </h2>
        <p className="mt-3 max-w-2xl text-muted text-lg">
          One team for build, launch, and ongoing growth. Clear scope and
          timelines.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, idx) => {
            const Icon = ((
              Icons as unknown as Record<
                string,
                React.ComponentType<{ className?: string }>
              >
            )[s.icon] ?? Icons.Sparkles) as React.ComponentType<{
              className?: string;
            }>;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: (idx % 4) * 0.05 }}
              >
                <Card className="h-full p-6 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="mt-4 text-base font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted">
                    {s.shortDescription}
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold hover:underline"
                    href={s.path}
                  >
                    Learn More →
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section ref={statsRef} className="border-y border-line bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { v: c1, label: "Websites Delivered", suffix: "+" },
            { v: c2, label: "Satisfied Clients", suffix: "+" },
            { v: c3, label: "Industries Served", suffix: "+" },
            { v: c4, label: "AI Systems Deployed", suffix: "+" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-line bg-canvas p-6 text-center shadow-elevated"
            >
              <div className="text-4xl font-semibold tracking-tight">
                {s.v}
                {s.suffix}
              </div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="text-xs font-semibold tracking-wide text-muted uppercase">
          Our Process
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          From idea to live in weeks, not months.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl border border-line bg-surface p-6 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="text-xs font-semibold text-muted">0{i + 1}</div>
              <div className="mt-3 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold tracking-wide text-muted">
            OUR WORK
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for real Pakistani businesses.
          </h2>
          <div className="mt-10">
            <WorkDragRow />
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="text-xs font-semibold tracking-wide text-muted uppercase">
          Industries
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          We learn your business first, then we ship.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <IndustryVideoTile
              key={ind.slug}
              slug={ind.slug}
              name={ind.name}
              description={ind.description}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-y border-line bg-surface py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold tracking-wide text-muted uppercase">
              AI In Action
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              This is the AI we build into your business.
            </h2>
            <p className="mt-6 text-lg text-muted">
              A production-grade assistant that answers fast, stays on-brand,
              and routes high-intent leads to your team.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-muted">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Handles customer queries automatically 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Books appointments directly on your calendar</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Works on website, WhatsApp, Facebook, and Instagram</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Learns and gets smarter with every conversation</span>
              </li>
            </ul>
          </div>
          <AiChatWidget />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold tracking-wide text-muted uppercase">
              Our Studio
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Built in Islamabad. Built for Scale.
            </h2>
            <p className="mt-6 text-lg text-muted">
              We operate out of a modern workspace in the heart of
              Pakistan&rsquo;s tech hub. Our senior team is dedicated to
              shipping production-grade systems with international standards.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-surface bg-muted"
                  />
                ))}
              </div>
              <div className="text-sm text-muted">
                <span className="font-semibold text-ink">
                  12 senior specialists
                </span>{" "}
                ready to deploy.
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-elevated-lg">
            <Image
              src="/office.png"
              alt="WayFind Studio Islamabad"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="text-xs font-semibold tracking-wide text-muted uppercase">
          Client Stories
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          Businesses that trusted WayFind to lead the way.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Dr. Sara Ahmed",
              co: "MedCare Clinic",
              quote:
                "Appointments tripled in 60 days. The AI bot handles inquiries better than our front desk used to.",
            },
            {
              name: "Kamran Raza",
              co: "Elite Fitness Hub",
              quote:
                "AI bot handles 90% of inquiries. We saved 2 full staff costs in Month 1 alone.",
            },
            {
              name: "Ali Khan",
              co: "Dastarkhan Restaurant",
              quote:
                "Ranking #1 on Google. 12× ROI in the first quarter. WayFind delivered beyond expectations.",
            },
          ].map((t) => (
            <Card
              key={t.name}
              className="p-8 shadow-elevated hover:shadow-glow transition-all"
            >
              <div className="flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icons.Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg italic text-ink/80">“{t.quote}”</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface-2 border border-line" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted uppercase tracking-wider">
                    {t.co}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6">
          <div className="text-xs font-semibold tracking-wide text-muted">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Everything you want to know about WayFind.
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#05070a] py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.22),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to plan your next launch?
          </h2>
          <p className="mt-4 text-white/70">
            Book a free 30-minute strategy session. No pressure, no commitment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              <Link href="/contact">Book Free Consultation →</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <a
                href={company.waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
