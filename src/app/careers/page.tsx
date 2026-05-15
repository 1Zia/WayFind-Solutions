import type { Metadata } from "next";
import { CareersClient } from "./careers-client";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build Pakistan's digital future with WayFind — engineering, design, growth, and AI roles.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Build Pakistan&apos;s Digital Future With Us.</h1>
      <p className="mt-4 max-w-2xl text-muted">We hire builders who care about outcomes — and want room to grow fast.</p>
      <div className="mt-12">
        <CareersClient />
      </div>
    </div>
  );
}
