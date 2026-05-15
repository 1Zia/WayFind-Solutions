"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const roles = [
  { title: "Full Stack Developer", dept: "Engineering", type: "Full-time" },
  { title: "React Native Developer", dept: "Engineering", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time" },
  { title: "SEO Specialist", dept: "Marketing", type: "Full-time" },
  { title: "Digital Marketing Manager", dept: "Marketing", type: "Full-time" },
  { title: "AI/ML Engineer", dept: "AI", type: "Full-time" },
  { title: "DevOps Engineer", dept: "Infrastructure", type: "Full-time" },
  { title: "Business Development Executive", dept: "Sales", type: "Full-time" },
] as const;

const schema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a valid phone number."),
  role: z.string(),
  portfolio: z.string().optional(),
  message: z.string().min(30, "Cover message should be at least 30 characters."),
});

type Form = z.infer<typeof schema>;

export function CareersClient() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", role: "", portfolio: "", message: "" },
  });

  function applyFor(r: string) {
    setRole(r);
    form.setValue("role", r);
    setOpen(true);
  }

  async function onSubmit(values: Form) {
    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
    } catch {
      setStatus("idle");
    }
  }

  const perks = useMemo(
    () => [
      "Flexible working hours",
      "Remote-friendly culture",
      "Competitive salaries in PKR",
      "Annual bonuses",
      "Learning & development budget",
      "Health coverage",
      "Equipment provided",
      "Direct access to leadership",
    ],
    []
  );

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-semibold">Culture</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Growth", d: "We invest in skills that compound — yours and the client’s." },
            { t: "Ownership", d: "Small teams, clear accountability, fast decisions." },
            { t: "Creativity", d: "Great growth is a creative problem — not a checklist." },
            { t: "Impact", d: "We measure success in revenue and time saved." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-line bg-surface p-6">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Perks</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Open positions</h2>
        <Accordion type="single" collapsible className="mt-6">
          {roles.map((r) => (
            <AccordionItem key={r.title} value={r.title}>
              <AccordionTrigger>
                <div className="text-left">
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-xs text-muted">
                    {r.dept} · {r.type}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold">Responsibilities</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      <li>Ship high-quality work on predictable timelines.</li>
                      <li>Collaborate across design, growth, and engineering.</li>
                      <li>Own outcomes — not tickets.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Requirements</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      <li>Strong communication and documentation habits.</li>
                      <li>Portfolio or work samples.</li>
                      <li>Based in Pakistan (remote-friendly).</li>
                    </ul>
                  </div>
                </div>
                <Button className="mt-6 rounded-full" type="button" onClick={() => applyFor(r.title)}>
                  Apply Now
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply — {role}</DialogTitle>
          </DialogHeader>
          {status === "ok" ? (
            <div className="text-sm text-muted">Application received! We&apos;ll be in touch within 3 business days.</div>
          ) : (
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" className="mt-2" {...form.register("name")} />
                {form.formState.errors.name ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.name.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" className="mt-2" {...form.register("email")} />
                {form.formState.errors.email ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" className="mt-2" {...form.register("phone")} />
                {form.formState.errors.phone ? <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="portfolio">Portfolio URL</Label>
                <Input id="portfolio" className="mt-2" placeholder="https://" {...form.register("portfolio")} />
                {form.formState.errors.portfolio ? (
                  <p className="mt-1 text-xs text-red-600">{form.formState.errors.portfolio.message}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="message">Cover message</Label>
                <textarea
                  id="message"
                  className="mt-2 min-h-[120px] w-full rounded-3xl border border-line bg-surface px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...form.register("message")}
                />
                {form.formState.errors.message ? (
                  <p className="mt-1 text-xs text-red-600">{form.formState.errors.message.message}</p>
                ) : null}
              </div>
              <Button className="w-full rounded-full" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Submitting…" : "Submit application"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
