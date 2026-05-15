export type BlogCategory =
  | "All"
  | "SEO"
  | "AI"
  | "Web Design"
  | "Ads"
  | "Social Media"
  | "E-Commerce"
  | "Case Studies";

export type BlogPost = {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "All">;
  excerpt: string;
  body: string;
  author: string;
  publishedAt: string;
  relatedService?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "pakistani-business-website-2026",
    title: "Why Every Pakistani Business Needs a Website in 2026",
    category: "Web Design",
    excerpt:
      "Search behavior shifted again — here's what 'good enough' costs you in leads, trust, and talent recruiting.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    relatedService: "/services/website-design",
    body: `## The trust bar moved

Customers compare you to the best experience they've seen — not your local competitor's PDF brochure site.

## Speed is a strategy

Slow pages aren't a technical detail. They're a tax on every ad rupee and every SEO click.

## What we recommend

Start with a conversion map: one primary action per page, proof near the CTA, and analytics that matches reality.`,
  },
  {
    slug: "ai-chatbots-40-hours",
    title: "How AI Chatbots Are Saving Pakistani Businesses 40 Hours a Week",
    category: "AI",
    excerpt: "Deflection is not 'less service' — it's faster service for repetitive questions.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 9 * 86400000).toISOString(),
    relatedService: "/services/ai-integration",
    body: `## Where the hours go

Repeated questions, booking coordination, and lead triage consume staff attention.

## What good looks like

Grounded answers, clear escalation, and measurable deflection.

## Implementation note

Start with 10 high-volume intents — ship fast, then expand.`,
  },
  {
    slug: "google-business-profile-free-tool",
    title: "Google Business Profile: The Free Tool 90% of Businesses Ignore",
    category: "SEO",
    excerpt: "GBP is a local ranking engine — treat it like a weekly product surface, not a one-time setup.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 14 * 86400000).toISOString(),
    relatedService: "/services/google-business",
    body: `## The basics that move the needle

Correct categories, weekly posts, photo cadence, and a review workflow.

## Common mistakes

Keyword stuffing, inconsistent NAP, and ignoring Q&A.

## A simple operating rhythm

Monday: post + photo. Wednesday: review responses. Friday: offers/updates.`,
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads: Which Is Right for Your Business?",
    category: "Ads",
    excerpt: "Use both — but sequence matters when budget is tight and proof is thin.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 21 * 86400000).toISOString(),
    relatedService: "/services/ads",
    body: `## When ads win first

You need leads this week and you can afford learning costs.

## When SEO wins first

You have time, content capacity, and a durable offer.

## The compounding play

Use ads to learn angles, then bake winners into SEO pages.`,
  },
  {
    slug: "rawalpindi-gym-meta-ads",
    title: "How We Got a Rawalpindi Gym 200 New Members With Meta Ads",
    category: "Case Studies",
    excerpt: "Creative velocity + offer clarity beat 'more budget' every time.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 28 * 86400000).toISOString(),
    relatedService: "/services/ads",
    body: `## The challenge

Crowded fitness market and skeptical cold audiences.

## The approach

Offer-led reels, DM scripts, and a booking funnel tuned for mobile.

## The takeaway

Test 10 angles fast — then scale the top 2 with disciplined tracking.`,
  },
  {
    slug: "crm-small-business-pakistan",
    title: "The Complete Guide to CRM for Small Business Pakistan",
    category: "SEO",
    excerpt: "A CRM is not a database — it's a follow-up machine with rules your team can actually follow.",
    author: "WayFind Editorial",
    publishedAt: new Date(Date.now() - 40 * 86400000).toISOString(),
    relatedService: "/services/crm-systems",
    body: `## Start with stages

If your pipeline stages don't match reality, automation will amplify the mess.

## Automate the boring

Speed-to-lead, reminders, and post-sale check-ins.

## Measure what matters

Lead source → booked call → won revenue.`,
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(text: string) {
  return Math.max(1, Math.ceil(wordCount(text) / 200));
}
