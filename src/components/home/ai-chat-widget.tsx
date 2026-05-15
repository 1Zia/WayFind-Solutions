"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "assistant" | "user"; text: string };

function replyFor(text: string) {
  const t = text.toLowerCase();
  const rules: [string[], string][] = [
    [["website", "site"], "Our website packages start from PKR 50,000 for a clean 5-page professional site. Industry-specific packages go from PKR 70K–150K and go live in 10–14 days. Want to see examples from your industry?"],
    [["app", "mobile", "ios", "android"], "We build native iOS and Android apps from scratch — UI design, backend API, testing, and deployment all included. Timelines range from 6–14 weeks depending on complexity."],
    [["brand", "logo", "design", "ui", "ux"], "Our design team handles everything from logo and brand identity to complete UI/UX design systems. Book a free design review!"],
    [["ecommerce", "shop", "shopify", "store", "woocommerce"], "We build full e-commerce storefronts on Shopify, WooCommerce, or fully custom — with inventory, payments, and delivery integrations."],
    [["price", "cost", "pkr", "fee", "how much"], "Website from PKR 50K · CRM from PKR 80K · AI Chatbot from PKR 60K · Mobile App from PKR 150K · SEO from PKR 25K/mo · Ads from PKR 30K/mo. Bundle packages save 25–30%."],
    [["ai", "bot", "chatbot", "automation"], "We build AI assistants trained on your business — handling queries 24/7, booking appointments, qualifying leads. Most clients reduce admin work by 50–70% within month 1."],
    [["seo", "rank", "google"], "Our SEO includes keyword research, on-page optimization, technical fixes, Google Business management, and monthly ranking reports. Most clients reach page 1 within 6–10 weeks."],
    [["ads", "meta", "facebook", "campaign"], "We run ROI-focused Google and Meta campaigns — creative, targeting, A/B testing, bidding, and reporting all included. Average clients see 3–5× ROAS within 90 days."],
    [["social", "instagram", "tiktok", "content"], "Our social media team handles content creation, posting schedules, community engagement, and growth strategy across all major platforms."],
    [["cloud", "devops", "server", "hosting"], "We set up and manage cloud infrastructure on AWS, Google Cloud, and Azure — including CI/CD pipelines, Docker, Kubernetes, and 24/7 monitoring."],
    [["security", "cyber", "hack", "compliance"], "We conduct full security audits, SOC monitoring, vulnerability assessments, and help achieve GDPR, PCI-DSS, and ISO compliance."],
    [["data", "analytics", "dashboard", "bi", "report"], "We build custom analytics dashboards and BI systems — connecting your data sources and turning raw numbers into decisions."],
    [["contact", "whatsapp", "address", "location"], "📍 B-17, B1 Markaz, Islamabad · 📧 hello@wayfind.pk · 📱 +92 300 000 0000 · 🕐 Mon–Sat 9am–7pm PKT"],
    [["time", "long", "days", "weeks", "when"], "Website: 10–14 days · Website+CRM: 3–4 weeks · Mobile App: 6–14 weeks · Full digital setup: 4–8 weeks."],
  ];
  for (const [keys, ans] of rules) {
    if (keys.some((k) => t.includes(k))) return ans;
  }
  return "WayFind builds complete digital growth systems — websites, apps, AI, CRM, SEO, and ads, all working as one engine. What would you like to know? 🚀";
}

export function AiChatWidget() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text: "Hi! I'm WayFind's AI assistant. Ask me anything about our services, pricing, or timelines. 🚀",
      },
    ]);
  }, []);

  useEffect(() => {
    const box = scrollBoxRef.current;
    if (!box) return;
    box.scrollTo({ top: box.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setBusy(true);
    await new Promise((r) => setTimeout(r, 900));
    const ans = replyFor(text);
    setMessages((m) => [...m, { role: "assistant", text: ans }]);
    setBusy(false);
  }

  return (
    <div className="rounded-3xl border border-line bg-surface shadow-elevated-lg">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="text-sm font-semibold">WayFind AI</div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live demo
        </div>
      </div>
      <div ref={scrollBoxRef} className="h-[320px] space-y-3 overflow-y-auto px-4 py-4 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "ml-8 rounded-2xl bg-surface-2 px-3 py-2" : "mr-8 rounded-2xl border border-line px-3 py-2"}>
            {m.text}
          </div>
        ))}
        {busy ? (
          <div className="mr-8 inline-flex gap-1 rounded-2xl border border-line px-3 py-2 text-muted">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce [animation-delay:120ms]">•</span>
            <span className="animate-bounce [animation-delay:240ms]">•</span>
          </div>
        ) : null}
        <div ref={endRef} />
      </div>
      <div className="flex items-center gap-2 border-t border-line p-3">
        <Input
          value={input}
          disabled={busy}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") void send();
          }}
          placeholder="Ask anything…"
          className="rounded-2xl"
        />
        <Button className="rounded-2xl" disabled={busy} onClick={() => void send()} aria-label="Send">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
