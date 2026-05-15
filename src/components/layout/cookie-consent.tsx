"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "wayfind_cookie_consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function decide(value: "all" | "decline") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl rounded-3xl border border-line bg-surface p-4 shadow-xl sm:left-auto">
      <div className="text-sm font-semibold">Cookies</div>
      <p className="mt-2 text-sm text-muted">
        We use cookies to improve your experience and measure performance. You can accept all or decline non-essential
        cookies.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="secondary" className="rounded-full" onClick={() => decide("decline")}>
          Decline
        </Button>
        <Button className="rounded-full" onClick={() => decide("all")}>
          Accept All
        </Button>
      </div>
    </div>
  );
}
