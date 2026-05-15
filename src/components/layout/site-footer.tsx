"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { company } from "@/lib/company";
import { SERVICES } from "@/content/services";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const social = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
] as const;

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string | null>(null);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setNewsStatus("loading");
    setMsg(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setNewsStatus("ok");
      setMsg("Subscribed. Welcome aboard.");
      setEmail("");
    } catch {
      setNewsStatus("err");
      setMsg("Please enter a valid email address.");
    }
  }

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 overflow-hidden">
          <div className="select-none text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-[-0.06em] text-ink/10 dark:text-ink/15">
            WAYFIND
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative h-13 w-13 overflow-hidden rounded-2xl border border-line bg-canvas shadow-elevated sm:h-14 sm:w-14">
                <Image src="/wayfind-logo.png" alt="" fill className="object-contain p-1" sizes="48px" />
              </div>
              <div className="text-sm font-semibold">WayFind Solutions</div>
            </div>
            <p className="mt-4 text-sm text-muted">
              Full-stack digital partner for Pakistani businesses: websites, apps, AI, CRM, SEO, and ads as one connected
              stack.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line hover:bg-surface-2"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-line px-2 py-1">ISO-ready workflows</span>
              <span className="rounded-full border border-line px-2 py-1">PKR pricing</span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link className="hover:text-ink" href={s.path}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link className="hover:text-ink" href={c.href}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a className="hover:text-ink" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {company.address}
                </a>
              </li>
              <li>
                <a className="hover:text-ink" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a className="hover:text-ink" href={`tel:${company.phoneTel}`}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-ink" href={company.waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>{company.hours}</li>
            </ul>
          </div>
        </div>

        <form onSubmit={subscribe} className="mt-12 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row sm:items-end">
          <div className="flex-1">
            <div className="text-sm font-semibold">Newsletter</div>
            <p className="mt-1 text-sm text-muted">Growth tactics, twice a month. No spam.</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:max-w-sm"
              />
              <Button type="submit" disabled={newsStatus === "loading"} className="rounded-full">
                {newsStatus === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
            {msg ? <p className={`mt-2 text-sm ${newsStatus === "err" ? "text-red-600" : "text-emerald-600"}`}>{msg}</p> : null}
          </div>
        </form>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-ink" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-ink" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-ink" href="/sitemap.xml">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
