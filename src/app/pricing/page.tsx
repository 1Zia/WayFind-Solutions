import type { Metadata } from "next";
import Link from "next/link";
import { PricingClient } from "./pricing-client";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent PKR pricing for websites, apps, AI, CRM, SEO, ads, and more — with bundle savings.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">No Surprises. Just Results.</h1>
      <p className="mt-4 max-w-2xl text-muted">Toggle one-time vs monthly services, estimate bundles, then book a call for an exact quote.</p>

      <div className="mt-12">
        <PricingClient />
      </div>

      <div className="mt-16 rounded-3xl border border-line bg-surface p-10 text-center">
        <h3 className="text-2xl font-semibold">Want a custom bundle?</h3>
        <p className="mt-2 text-muted">Book a free call — we’ll map scope, timeline, and pricing in plain language.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link href="/contact">Book a free call</Link>
        </Button>
      </div>
    </div>
  );
}
