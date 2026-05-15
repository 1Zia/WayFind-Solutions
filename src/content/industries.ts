export type Industry = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
};

export const INDUSTRIES: Industry[] = [
  { slug: "healthcare", name: "Healthcare", description: "Trust-first sites, booking, and compliance-aware UX.", emoji: "🩺" },
  { slug: "education", name: "Education", description: "Admissions funnels, portals, and parent-ready experiences.", emoji: "🎓" },
  { slug: "fitness", name: "Fitness & Wellness", description: "Membership growth systems that convert cold traffic.", emoji: "💪" },
  { slug: "food", name: "Food & Hospitality", description: "Local dominance: menus, GBP, and reservation UX.", emoji: "🍽️" },
  { slug: "retail", name: "Retail & Fashion", description: "E‑commerce + brand storytelling that sells.", emoji: "🛍️" },
  { slug: "real-estate", name: "Real Estate", description: "Listings, lead routing, and high-trust visuals.", emoji: "🏙️" },
  { slug: "legal", name: "Legal & Professional Services", description: "Authority, clarity, and intake that filters leads.", emoji: "⚖️" },
  { slug: "automotive", name: "Automotive", description: "Showrooms, inventory, and high-intent local SEO.", emoji: "🚗" },
  { slug: "saas", name: "SaaS & Tech Startups", description: "Product marketing sites + conversion instrumentation.", emoji: "🚀" },
  { slug: "ngo", name: "NGO & Non-Profit", description: "Donor journeys, storytelling, and lightweight ops.", emoji: "🤝" },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
