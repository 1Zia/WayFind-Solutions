"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <span className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-emerald-500/30 animate-pulseRing" />
      <Link
        href={company.waLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us"
        className={cn(
          "relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg",
          "transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </div>
  );
}
