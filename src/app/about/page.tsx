import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { OFFICE_TEAM_VIDEO_SRC } from "@/lib/industry-videos";

export const metadata: Metadata = {
  title: "About",
  description: "Our story, values, and how WayFind builds digital growth engines for Pakistani businesses.",
};

const milestones = [
  { year: "2019", event: "WayFind starts as a boutique web studio in Islamabad." },
  { year: "2021", event: "Expanded into performance marketing + SEO retainers." },
  { year: "2023", event: "Launched AI assistants + CRM automation as core offerings." },
  { year: "2026", event: "Serving clients nationwide with full-stack delivery." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Built in Islamabad. Engineered for impact.</h1>
        <p className="mt-4 text-lg text-muted">
          {company.name} exists to make serious digital growth accessible, without enterprise bureaucracy.
        </p>
      </div>

      <section className="mt-14 overflow-hidden rounded-3xl border border-line bg-surface shadow-elevated-lg">
        <div className="relative aspect-video w-full sm:aspect-[21/9]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={OFFICE_TEAM_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <p className="max-w-xl text-sm font-medium text-white/95 sm:text-base">How we work: short standups, shared specs, and direct access to the people building your product.</p>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="max-w-none space-y-4 text-muted">
          <p>
            We started with a simple observation: most businesses don&apos;t fail because of ideas — they fail because execution
            fragments across vendors, tools, and timelines.
          </p>
          <p className="mt-4">
            WayFind is the opposite: one accountable team shipping websites, apps, AI, CRM, SEO, and ads as a connected system.
          </p>
          <p className="mt-4">
            Our mission is to help Pakistani brands become the default choice in their market — with measurable revenue outcomes,
            not vanity dashboards.
          </p>
        </div>
        <Card className="p-8">
          <div className="text-sm font-semibold">Milestones</div>
          <div className="mt-6 space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4">
                <div className="w-16 shrink-0 text-sm font-semibold text-accent">{m.year}</div>
                <div className="text-sm text-muted">{m.event}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Our values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Excellence", d: "We ship production-grade work — fast, clean, measurable." },
            { t: "Transparency", d: "Clear pricing, clear timelines, clear reporting." },
            { t: "Innovation", d: "We adopt tools that move KPIs — not trends for their own sake." },
            { t: "Impact", d: "Design and code exist to grow revenue and reduce operational drag." },
          ].map((v) => (
            <Card key={v.t} className="p-6">
              <div className="font-semibold">{v.t}</div>
              <p className="mt-2 text-sm text-muted">{v.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">WayFind vs typical agency</h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-2">
              <tr>
                <th className="p-4 font-semibold">WayFind</th>
                <th className="p-4 font-semibold">Typical agency</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Single point of contact", "Multiple handoffs"],
                ["Full-stack execution", "Subcontracted work"],
                ["Transparent pricing", "Hidden fees"],
                ["Ongoing partnership", "One-time project"],
                ["AI-powered tools", "Manual processes"],
                ["Guaranteed timeline discipline", "Indefinite delays"],
              ].map(([a, b]) => (
                <tr key={a} className="border-t border-line">
                  <td className="p-4 text-muted">{a}</td>
                  <td className="p-4 text-muted">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["CEO", "Lead Engineer", "Design Lead", "Growth Lead", "AI Lead", "Ops"].map((role) => (
            <Card key={role} className="p-6">
              <div className="h-12 w-12 rounded-full bg-surface-2" />
              <div className="mt-4 font-semibold">Placeholder Name</div>
              <div className="text-sm text-muted">{role}</div>
              <a className="mt-3 inline-flex text-sm font-semibold text-accent hover:underline" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Location</h2>
        <p className="mt-3 text-muted">{company.address}</p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-line">
          <iframe
            title="WayFind office map"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=B-17%20B1%20Markaz%20Islamabad&output=embed"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Tech stack</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React Native",
            "Node.js",
            "PostgreSQL",
            "OpenAI",
            "LangChain",
            "Shopify",
            "HubSpot",
            "Google Cloud",
            "AWS",
            "Framer",
            "Figma",
            "Meta Ads",
            "Google Ads",
          ].map((t) => (
            <span key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted">
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Button asChild className="rounded-full px-8">
          <Link href="/contact">Work with Us →</Link>
        </Button>
      </div>
    </div>
  );
}
