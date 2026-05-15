import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { company } from "@/lib/company";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a strategy session with WayFind — Islamabad-based, serving Pakistan and international clients.",
};

type Props = { searchParams?: { note?: string } };

export default function ContactPage({ searchParams }: Props) {
  const note = typeof searchParams?.note === "string" ? searchParams.note : undefined;

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5 lg:gap-12 sm:px-6">
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-semibold tracking-tight">Let&apos;s build your growth engine.</h1>
        <p className="mt-4 text-muted">Tell us what you need — we&apos;ll reply fast during business hours.</p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-line">
          <iframe
            title="WayFind map"
            className="h-[260px] w-full"
            loading="lazy"
            src="https://www.google.com/maps?q=B-17%20B1%20Markaz%20Islamabad&output=embed"
          />
        </div>

        <div className="mt-6 space-y-3 text-sm text-muted">
          <div>
            <a className="font-semibold text-ink hover:underline" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
              {company.address}
            </a>
          </div>
          <div>
            <a className="hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
          <div>
            <a className="hover:underline" href={`tel:${company.phoneTel}`}>
              {company.phone}
            </a>
          </div>
          <div>
            <a className="hover:underline" href={company.waLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <div>{company.hours}</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-semibold hover:bg-surface-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="lg:col-span-3">
        <ContactForm initialNote={note} />
      </div>
    </div>
  );
}
