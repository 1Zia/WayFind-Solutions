"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const needsOptions = [
  "Website Design",
  "Mobile App",
  "UI/UX & Branding",
  "E-Commerce",
  "Custom Software",
  "CRM & Automation",
  "AI Chatbot",
  "SEO",
  "Google/Meta Ads",
  "Social Media",
  "Google Business",
  "Cloud/DevOps",
  "Cybersecurity",
  "Data Analytics",
] as const;

const step1 = z.object({
  needs: z.array(z.string()).min(1, "Select at least one option."),
});

const step2 = z.object({
  businessName: z.string().min(2, "Enter your business name."),
  industry: z.string().min(1, "Select an industry."),
  teamSize: z.string().min(1, "Select team size."),
  website: z.string().optional(),
  brand: z.enum(["yes", "no"]),
});

const step3 = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a valid phone number."),
  contactMethod: z.enum(["email", "phone", "whatsapp"]),
  bestTime: z.enum(["morning", "afternoon", "evening"]),
});

const step4 = z.object({
  budget: z.string().min(1, "Select a budget range."),
  timeline: z.string().min(1, "Select a timeline."),
  message: z.string().min(30, "Please write at least 30 characters."),
});

type Full = z.infer<typeof step1> & z.infer<typeof step2> & z.infer<typeof step3> & z.infer<typeof step4>;

const industries = [
  "Healthcare",
  "Education",
  "Fitness",
  "Food",
  "Retail",
  "Real Estate",
  "Legal",
  "Automotive",
  "SaaS",
  "NGO",
  "Other",
] as const;

export function ContactForm({ initialNote }: { initialNote?: string }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const form = useForm<Full>({
    defaultValues: {
      needs: [],
      businessName: "",
      industry: "Other",
      teamSize: "",
      website: "",
      brand: "yes",
      fullName: "",
      email: "",
      phone: "",
      contactMethod: "email",
      bestTime: "morning",
      budget: "",
      timeline: "",
      message: initialNote ? `${initialNote}\n\n` : "",
    },
  });

  const progress = useMemo(() => ((step - 1) / 4) * 100, [step]);

  async function next() {
    form.clearErrors();
    if (step === 1) {
      const r = step1.safeParse({ needs: selectedNeeds });
      if (!r.success) {
        form.setError("needs", { message: r.error.issues[0]?.message ?? "Invalid" });
        return;
      }
      form.setValue("needs", selectedNeeds);
      setStep(2);
      return;
    }
    if (step === 2) {
      const r = step2.safeParse(form.getValues());
      if (!r.success) {
        for (const e of r.error.issues) {
          const path = e.path[0]?.toString() as keyof Full;
          form.setError(path, { message: e.message });
        }
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      const r = step3.safeParse(form.getValues());
      if (!r.success) {
        for (const e of r.error.issues) {
          const path = e.path[0]?.toString() as keyof Full;
          form.setError(path, { message: e.message });
        }
        return;
      }
      setStep(4);
      return;
    }
    if (step === 4) {
      const r = step4.safeParse(form.getValues());
      if (!r.success) {
        for (const e of r.error.issues) {
          const path = e.path[0]?.toString() as keyof Full;
          form.setError(path, { message: e.message });
        }
        return;
      }
      setLoading(true);
      try {
        const payload = { ...form.getValues(), needs: selectedNeeds };
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("bad");
        setStep(5);
      } finally {
        setLoading(false);
      }
    }
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function toggleNeed(n: string) {
    setSelectedNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  }

  return (
    <div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-line">
        <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-4 text-xs font-semibold text-muted">
        Step {Math.min(step, 4)} of 4
      </div>

      {step === 1 ? (
        <div className="mt-6 space-y-3">
          <div className="text-lg font-semibold">What do you need?</div>
          <div className="flex flex-wrap gap-2">
            {needsOptions.map((n) => (
              <Button
                key={n}
                type="button"
                variant={selectedNeeds.includes(n) ? "default" : "secondary"}
                className="rounded-full"
                onClick={() => toggleNeed(n)}
              >
                {n}
              </Button>
            ))}
          </div>
          {form.formState.errors.needs ? (
            <p className="text-sm text-red-600">{form.formState.errors.needs.message}</p>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-6 grid gap-4">
          <div>
            <Label>Business name</Label>
            <Input className="mt-2" {...form.register("businessName")} />
            {form.formState.errors.businessName ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.businessName.message}</p> : null}
          </div>
          <div>
            <Label>Industry</Label>
            <select className="mt-2 h-11 w-full rounded-full border border-line bg-surface px-4 text-sm" {...form.register("industry")}>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Team size</Label>
            <select className="mt-2 h-11 w-full rounded-full border border-line bg-surface px-4 text-sm" {...form.register("teamSize")}>
              <option value="">Select</option>
              <option>Solo</option>
              <option>2–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
            {form.formState.errors.teamSize ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.teamSize.message}</p> : null}
          </div>
          <div>
            <Label>Current website URL (optional)</Label>
            <Input className="mt-2" placeholder="https://" {...form.register("website")} />
          </div>
          <div>
            <Label>Existing brand?</Label>
            <div className="mt-2 flex gap-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" value="yes" {...form.register("brand")} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="no" {...form.register("brand")} /> No
              </label>
            </div>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-6 grid gap-4">
          <div>
            <Label>Full name</Label>
            <Input className="mt-2" {...form.register("fullName")} />
            {form.formState.errors.fullName ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.fullName.message}</p> : null}
          </div>
          <div>
            <Label>Email</Label>
            <Input className="mt-2" type="email" {...form.register("email")} />
            {form.formState.errors.email ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</p> : null}
          </div>
          <div>
            <Label>Phone</Label>
            <Input className="mt-2" {...form.register("phone")} />
            {form.formState.errors.phone ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone.message}</p> : null}
          </div>
          <div>
            <Label>Preferred contact method</Label>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {(["email", "phone", "whatsapp"] as const).map((m) => (
                <label key={m} className="flex items-center gap-2">
                  <input type="radio" value={m} {...form.register("contactMethod")} /> {m}
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label>Best time to reach</Label>
            <select className="mt-2 h-11 w-full rounded-full border border-line bg-surface px-4 text-sm" {...form.register("bestTime")}>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="mt-6 grid gap-4">
          <div>
            <Label>Budget range</Label>
            <select className="mt-2 h-11 w-full rounded-full border border-line bg-surface px-4 text-sm" {...form.register("budget")}>
              <option value="">Select</option>
              <option>Under PKR 50K</option>
              <option>PKR 50K–100K</option>
              <option>PKR 100K–300K</option>
              <option>PKR 300K–500K</option>
              <option>PKR 500K+</option>
              <option>I need a quote</option>
            </select>
            {form.formState.errors.budget ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.budget.message}</p> : null}
          </div>
          <div>
            <Label>Timeline</Label>
            <select className="mt-2 h-11 w-full rounded-full border border-line bg-surface px-4 text-sm" {...form.register("timeline")}>
              <option value="">Select</option>
              <option>ASAP</option>
              <option>1 month</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Flexible</option>
            </select>
            {form.formState.errors.timeline ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.timeline.message}</p> : null}
          </div>
          <div>
            <Label>Tell us about your project</Label>
            <textarea className="mt-2 min-h-[140px] w-full rounded-3xl border border-line bg-surface px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" {...form.register("message")} />
            {form.formState.errors.message ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.message.message}</p> : null}
          </div>
        </div>
      ) : null}

      {step === 5 ? (
        <div className="mt-8 rounded-3xl border border-line bg-surface p-8">
          <div className="text-2xl font-semibold">Thank you</div>
          <p className="mt-2 text-muted">We received your project details.</p>
          <Button asChild className="mt-6 rounded-full">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a 30-minute call →
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted">We&apos;ll reply within 2 business hours during working hours ({company.hours}).</p>
        </div>
      ) : null}

      {step < 5 ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button type="button" variant="secondary" className="rounded-full" disabled={step === 1} onClick={back}>
            Back
          </Button>
          <Button type="button" className="rounded-full" disabled={loading} onClick={() => void next()}>
            {step === 4 ? (loading ? "Submitting…" : "Submit") : "Continue"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
