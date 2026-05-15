export type Project = {
  slug: string;
  name: string;
  industry: string;
  industryFilter: string;
  result: string;
  services: string[];
  timeline: string;
  challenge: string;
  approach: string[];
  metrics: { value: string; label: string }[];
  testimonial: { quote: string; author: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "medcare-clinic",
    name: "MedCare Clinic",
    industry: "Healthcare",
    industryFilter: "Healthcare",
    result: "↑ 3× more appointments in 60 days",
    services: ["/services/website-design", "/services/seo", "/services/ai-integration"],
    timeline: "8 weeks",
    challenge: "High call volume, slow follow-ups, and weak online booking flow.",
    approach: [
      "Rebuilt patient journey with clear CTAs and trust blocks",
      "Local SEO + GBP optimization",
      "AI assistant for FAQs and appointment routing",
    ],
    metrics: [
      { value: "3×", label: "Appointments" },
      { value: "−42%", label: "Front-desk load" },
      { value: "10 days", label: "To first lift" },
    ],
    testimonial: {
      quote:
        "Appointments tripled in 60 days. The AI bot handles inquiries better than our front desk used to.",
      author: "Dr. Sara Ahmed",
      role: "MedCare Clinic",
    },
  },
  {
    slug: "elite-fitness-hub",
    name: "Elite Fitness Hub",
    industry: "Fitness",
    industryFilter: "Fitness",
    result: "↑ PKR 2.4M new memberships, Month 1",
    services: ["/services/mobile-apps", "/services/ads", "/services/ai-integration"],
    timeline: "10 weeks",
    challenge: "Inquiries were overwhelming staff; paid acquisition was inconsistent.",
    approach: [
      "Membership funnel + offer testing on Meta",
      "AI assistant on WhatsApp + web",
      "Member app roadmap for retention",
    ],
    metrics: [
      { value: "PKR 2.4M", label: "New memberships" },
      { value: "90%", label: "Inquiries automated" },
      { value: "4.2×", label: "ROAS peak" },
    ],
    testimonial: {
      quote: "AI bot handles 90% of inquiries. We saved 2 full staff costs in Month 1 alone.",
      author: "Kamran Raza",
      role: "Elite Fitness Hub",
    },
  },
  {
    slug: "dastarkhan-restaurant",
    name: "Dastarkhan Restaurant",
    industry: "Food & Hospitality",
    industryFilter: "Restaurant",
    result: "↑ Ranking #1 on Google locally",
    services: ["/services/seo", "/services/google-business", "/services/website-design"],
    timeline: "6 weeks",
    challenge: "Competitive local market; inconsistent GBP signals and weak site trust.",
    approach: ["GBP overhaul", "Local landing pages", "Review workflow + photo cadence"],
    metrics: [
      { value: "#1", label: "Local pack" },
      { value: "12×", label: "ROI (Q1)" },
      { value: "+38%", label: "Call volume" },
    ],
    testimonial: {
      quote: "Ranking #1 on Google. 12× ROI in the first quarter. WayFind delivered beyond expectations.",
      author: "Ali Khan",
      role: "Dastarkhan Restaurant",
    },
  },
  {
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    industry: "Education",
    industryFilter: "Education",
    result: "↑ 180 new admissions, first term",
    services: ["/services/website-design", "/services/ads", "/services/social-media"],
    timeline: "7 weeks",
    challenge: "Admissions season pressure with fragmented messaging across channels.",
    approach: ["Offer-led landing pages", "Meta campaigns with creative testing", "Organic content cadence"],
    metrics: [
      { value: "180+", label: "Admissions" },
      { value: "2.1×", label: "Lead volume" },
      { value: "31%", label: "Lower CPL" },
    ],
    testimonial: {
      quote: "Our admissions pipeline finally felt predictable — creative + landing pages matched perfectly.",
      author: "Ayesha Malik",
      role: "BrightPath Academy",
    },
  },
  {
    slug: "luxe-boutique",
    name: "Luxe Boutique",
    industry: "Retail & E-Commerce",
    industryFilter: "Retail",
    result: "↑ 4.2× ROAS on Meta campaigns",
    services: ["/services/ecommerce", "/services/ads", "/services/ui-ux-design"],
    timeline: "9 weeks",
    challenge: "ROAS volatility and weak catalog merchandising on paid social.",
    approach: ["Store UX cleanup", "Catalog + creative system", "CAPI + measurement fixes"],
    metrics: [
      { value: "4.2×", label: "ROAS" },
      { value: "+27%", label: "AOV" },
      { value: "−19%", label: "CPA" },
    ],
    testimonial: {
      quote: "Finally a team that treats ads, creative, and storefront as one system.",
      author: "Hina Shah",
      role: "Luxe Boutique",
    },
  },
];

export const WORK_FILTERS = [
  "All",
  "Healthcare",
  "Education",
  "Fitness",
  "Restaurant",
  "Retail",
  "Real Estate",
  "SaaS",
  "E-Commerce",
] as const;

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
