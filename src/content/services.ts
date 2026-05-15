export type ServiceTier = {
  name: "Basic" | "Growth" | "Premium";
  price: string;
  popular?: boolean;
  features: string[];
};

export type Service = {
  slug: string;
  title: string;
  path: string;
  shortDescription: string;
  tagline: string;
  icon: string;
  problems: string[];
  solution: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  caseStudy: {
    client: string;
    metric: string;
    blurb: string;
  };
  tiers: ServiceTier[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design & Development",
    shortDescription:
      "Stunning, fast, conversion-driven websites for every Pakistani business.",
    tagline: "Websites engineered to convert — not decorate.",
    icon: "Globe",
    problems: [
      "Your site loads slow and visitors bounce before they read a line.",
      "Templates make you look like everyone else in your category.",
      "No clear funnel — traffic arrives and leaves with zero action.",
    ],
    solution:
      "WayFind designs and builds a bespoke site around your offer, proof, and funnel — performance, SEO foundations, and analytics baked in from day one.",
    deliverables: [
      "Discovery + sitemap",
      "Wireframes + high-fidelity UI",
      "Next.js / modern stack build",
      "Forms + CRM handoff",
      "Speed + technical SEO pass",
      "Launch + training",
    ],
    process: [
      { title: "Audit & map", description: "Goals, audience, competitors, funnel." },
      { title: "Design system", description: "UI that matches your brand and trust." },
      { title: "Build & integrate", description: "Fast pages, tracking, lead capture." },
      { title: "Launch & iterate", description: "A/B hooks + ongoing improvements." },
    ],
    caseStudy: {
      client: "MedCare Clinic",
      metric: "↑ 3× appointments in 60 days",
      blurb: "Healthcare funnel + local SEO + booking UX.",
    },
    tiers: [
      {
        name: "Basic",
        price: "PKR 50,000",
        features: ["5-page site", "Mobile responsive", "Contact forms", "Basic SEO setup"],
      },
      {
        name: "Growth",
        price: "PKR 90,000",
        popular: true,
        features: ["8–12 pages", "CMS sections", "CRM integration", "Speed optimization"],
      },
      {
        name: "Premium",
        price: "PKR 150,000",
        features: ["Custom components", "Advanced animations", "Priority support", "Growth tracking"],
      },
    ],
    faqs: [
      { q: "Timeline?", a: "Most sites go live in 10–14 days after content lock." },
      { q: "Do you write copy?", a: "Yes — we can lead copy or refine yours." },
      { q: "Hosting?", a: "We recommend managed hosting; we handle setup." },
      { q: "Revisions?", a: "Structured revision rounds per milestone." },
    ],
  },
  {
    slug: "mobile-apps",
    path: "/services/mobile-apps",
    title: "Mobile App Development",
    shortDescription: "Native iOS and Android apps that users love and businesses rely on.",
    tagline: "Ship apps people actually keep installed.",
    icon: "Smartphone",
    problems: [
      "Offshore teams vanish after MVP.",
      "Poor UX kills retention on day one.",
      "No backend strategy — apps break at scale.",
    ],
    solution:
      "We ship production-grade mobile apps with clean architecture, observability, and release discipline — design through App Store / Play deployment.",
    deliverables: [
      "Product spec + UX flows",
      "UI kit + motion",
      "API + auth",
      "Push + analytics",
      "Test plan + QA",
      "Store submission",
    ],
    process: [
      { title: "Shape the product", description: "Use cases, constraints, roadmap." },
      { title: "Design + prototype", description: "Interactive flows before code." },
      { title: "Build + test", description: "Weekly builds, crash-free targets." },
      { title: "Ship + monitor", description: "Release trains + analytics loops." },
    ],
    caseStudy: {
      client: "Elite Fitness Hub",
      metric: "↑ PKR 2.4M new memberships, Month 1",
      blurb: "Member app + payments + retention automations.",
    },
    tiers: [
      { name: "Basic", price: "PKR 150,000", features: ["1 platform", "Core flows", "Admin basics"] },
      {
        name: "Growth",
        price: "PKR 300,000",
        popular: true,
        features: ["iOS + Android", "Payments", "Push", "Analytics"],
      },
      { name: "Premium", price: "PKR 500,000+", features: ["Custom modules", "Integrations", "SLA"] },
    ],
    faqs: [
      { q: "React Native or native?", a: "We pick based on performance + roadmap." },
      { q: "Timeline?", a: "Typically 6–14 weeks depending on scope." },
      { q: "Maintenance?", a: "Yes — retainers for updates and monitoring." },
      { q: "NDA?", a: "Yes — standard for all builds." },
    ],
  },
  {
    slug: "ui-ux-design",
    path: "/services/ui-ux-design",
    title: "UI/UX Design & Branding",
    shortDescription: "Logos, brand identity, and interfaces that make your brand unforgettable.",
    tagline: "Brand systems that feel inevitable.",
    icon: "Palette",
    problems: [
      "Inconsistent visuals erode trust.",
      "UX debt makes every feature expensive.",
      "No brand system — every screen is a debate.",
    ],
    solution:
      "We deliver a cohesive identity + UI kit + interaction patterns your team can scale without chaos.",
    deliverables: ["Brand strategy", "Logo + palette + type", "UI kit", "Prototypes", "Design QA", "Handoff docs"],
    process: [
      { title: "Brand sprint", description: "Positioning + voice + visual direction." },
      { title: "Design exploration", description: "Moodboards + key screens." },
      { title: "Systemize", description: "Components + tokens + rules." },
    ],
    caseStudy: { client: "Luxe Boutique", metric: "↑ 4.2× ROAS", blurb: "Brand refresh + campaign-ready assets." },
    tiers: [
      { name: "Basic", price: "PKR 40,000", features: ["Logo refresh", "Palette + type", "3 templates"] },
      { name: "Growth", price: "PKR 80,000", popular: true, features: ["Full identity", "UI kit", "Social pack"] },
      { name: "Premium", price: "PKR 150,000", features: ["Motion system", "Pitch deck", "Guidelines"] },
    ],
    faqs: [
      { q: "Deliverables format?", a: "Figma + exports + written guidelines." },
      { q: "Revisions?", a: "Milestone-based rounds." },
      { q: "Developer handoff?", a: "Yes — specs for engineering." },
      { q: "Timeline?", a: "2–5 weeks depending on scope." },
    ],
  },
  {
    slug: "ecommerce",
    path: "/services/ecommerce",
    title: "E-Commerce Development",
    shortDescription: "Full Shopify, WooCommerce, and custom storefronts built to sell.",
    tagline: "Checkout flows that close — not confuse.",
    icon: "ShoppingCart",
    problems: ["Abandoned carts", "Messy catalog", "Weak trust signals"],
    solution: "We build storefronts optimized for conversion, operations, and measurable growth.",
    deliverables: ["Store setup", "Catalog modeling", "Payments + shipping", "Analytics", "SEO templates", "Training"],
    process: [
      { title: "Ops mapping", description: "Inventory + fulfillment reality." },
      { title: "Store build", description: "Theme + apps + performance." },
      { title: "Launch playbook", description: "Tracking + promos + QA." },
    ],
    caseStudy: { client: "Luxe Boutique", metric: "↑ AOV + repeat buyers", blurb: "Shopify build + ads alignment." },
    tiers: [
      { name: "Basic", price: "PKR 80,000", features: ["Theme setup", "10–30 SKUs", "Payments"] },
      { name: "Growth", price: "PKR 150,000", popular: true, features: ["Custom sections", "Integrations", "CRM"] },
      { name: "Premium", price: "PKR 280,000", features: ["Custom checkout", "Subscriptions", "Automation"] },
    ],
    faqs: [
      { q: "Shopify or Woo?", a: "We recommend based on ops + catalog complexity." },
      { q: "Integrations?", a: "ERP, couriers, accounting — scoped per project." },
      { q: "Training?", a: "Yes — your team can run day-to-day." },
      { q: "Ongoing?", a: "Retainers for merchandising + CRO." },
    ],
  },
  {
    slug: "custom-software",
    path: "/services/custom-software",
    title: "Custom Software Development",
    shortDescription: "Tailor-built software that solves your exact operational challenges.",
    tagline: "Software shaped to your workflow — not the other way around.",
    icon: "Code2",
    problems: ["Spreadsheet chaos", "Siloed tools", "Manual reporting"],
    solution: "We build internal tools, portals, and integrations with maintainable architecture.",
    deliverables: ["Requirements", "Architecture", "APIs", "Admin UI", "Auth/RBAC", "Docs"],
    process: [
      { title: "Workflow mapping", description: "Where time and money leak." },
      { title: "MVP slice", description: "Ship value early." },
      { title: "Harden + scale", description: "Security + monitoring + roadmap." },
    ],
    caseStudy: { client: "SaaS client", metric: "↓ 40% ops time", blurb: "Internal ops portal + automations." },
    tiers: [
      { name: "Basic", price: "PKR 100,000", features: ["Single module", "Auth", "Basic admin"] },
      { name: "Growth", price: "PKR 250,000", popular: true, features: ["Multi-module", "Integrations", "RBAC"] },
      { name: "Premium", price: "Custom", features: ["Enterprise patterns", "SLA", "Compliance support"] },
    ],
    faqs: [
      { q: "Stack?", a: "Usually Next.js + Node + Postgres — depends on needs." },
      { q: "Support?", a: "Retainers available post-launch." },
      { q: "Security?", a: "Threat modeling + hardening included in scope." },
      { q: "NDA?", a: "Yes." },
    ],
  },
  {
    slug: "crm-systems",
    path: "/services/crm-systems",
    title: "CRM & Sales Automation",
    shortDescription: "Never lose a lead. Your pipeline always working automatically.",
    tagline: "Pipeline hygiene that compounds revenue.",
    icon: "Workflow",
    problems: ["Leads slip", "No follow-up", "No visibility"],
    solution: "We implement CRM workflows, automations, and reporting leadership can trust.",
    deliverables: ["Pipeline design", "CRM setup", "Automations", "Templates", "Reporting", "Training"],
    process: [
      { title: "Pipeline audit", description: "Stages + SLAs + leakage." },
      { title: "Build automations", description: "Speed-to-lead + nurture." },
      { title: "Enablement", description: "Playbooks + dashboards." },
    ],
    caseStudy: { client: "MedCare Clinic", metric: "↑ lead-to-booking rate", blurb: "CRM + reminders + AI routing." },
    tiers: [
      { name: "Basic", price: "PKR 80,000", features: ["CRM setup", "3 automations", "Templates"] },
      { name: "Growth", price: "PKR 130,000", popular: true, features: ["10+ automations", "Integrations", "Reporting"] },
      { name: "Premium", price: "PKR 200,000", features: ["RevOps dashboards", "Advanced routing", "Training"] },
    ],
    faqs: [
      { q: "HubSpot?", a: "Yes — and other stacks depending on your ops." },
      { q: "WhatsApp?", a: "Integrations are common for PK market." },
      { q: "Training?", a: "Hands-on sessions + documentation." },
      { q: "Timeline?", a: "Often 2–4 weeks for first production workflows." },
    ],
  },
  {
    slug: "ai-integration",
    path: "/services/ai-integration",
    title: "AI Integration & Chatbots",
    shortDescription: "Intelligent bots handling customer queries 24/7 while you sleep.",
    tagline: "AI that answers, qualifies, and books — safely.",
    icon: "Bot",
    problems: ["Staff overload", "Slow replies", "Inconsistent answers"],
    solution: "We deploy assistants grounded in your business with guardrails, analytics, and human handoff.",
    deliverables: ["Use cases", "Knowledge base", "Bot flows", "Integrations", "Monitoring", "Training"],
    process: [
      { title: "Define intents", description: "What good looks like per channel." },
      { title: "Grounding", description: "Policies + sources + tone." },
      { title: "Ship + tune", description: "Measure deflection + quality." },
    ],
    caseStudy: { client: "Elite Fitness Hub", metric: "90% inquiries automated", blurb: "WhatsApp + web assistant." },
    tiers: [
      { name: "Basic", price: "PKR 60,000", features: ["Single channel", "FAQ bot", "Handoff"] },
      { name: "Growth", price: "PKR 100,000", popular: true, features: ["Multi-channel", "Booking", "CRM sync"] },
      { name: "Premium", price: "PKR 180,000", features: ["Custom tools", "Analytics", "SLA"] },
    ],
    faqs: [
      { q: "Hallucinations?", a: "We constrain answers + add escalation paths." },
      { q: "Languages?", a: "Urdu/English mixes supported." },
      { q: "Data privacy?", a: "Scoped access + retention policies." },
      { q: "Timeline?", a: "Often 2–4 weeks for first production bot." },
    ],
  },
  {
    slug: "seo",
    path: "/services/seo",
    title: "SEO",
    shortDescription: "Rank above competitors and get free traffic every single day.",
    tagline: "Technical SEO + content that compounds.",
    icon: "Search",
    problems: ["Thin pages", "Technical debt", "No topical authority"],
    solution: "We fix crawl/index issues and build a sustainable content + internal linking strategy.",
    deliverables: ["Audit", "Keyword map", "On-page fixes", "Content plan", "Reporting", "GBP alignment"],
    process: [
      { title: "Audit", description: "Indexation + speed + structure." },
      { title: "Fix + build", description: "On-page + topical clusters." },
      { title: "Measure", description: "Rank + traffic + leads." },
    ],
    caseStudy: { client: "Dastarkhan Restaurant", metric: "↑ #1 locally", blurb: "Local SEO + GBP + site fixes." },
    tiers: [
      { name: "Basic", price: "PKR 25,000/mo", features: ["On-page", "Technical fixes", "Monthly report"] },
      { name: "Growth", price: "PKR 40,000/mo", popular: true, features: ["Content production", "Link building lite"] },
      { name: "Premium", price: "PKR 65,000/mo", features: ["Aggressive content", "PR/outreach", "CRO tests"] },
    ],
    faqs: [
      { q: "How fast?", a: "Many clients see momentum in 6–10 weeks — varies by niche." },
      { q: "Local vs national?", a: "We tailor strategy to your market." },
      { q: "Content?", a: "Optional packages based on velocity goals." },
      { q: "Contracts?", a: "Monthly with clear KPIs." },
    ],
  },
  {
    slug: "ads",
    path: "/services/ads",
    title: "Google & Meta Ads Management",
    shortDescription: "Every rupee in your budget working harder than ever before.",
    tagline: "Creative + targeting + measurement — one loop.",
    icon: "Megaphone",
    problems: ["Bleeding spend", "Weak creative", "No attribution"],
    solution: "We rebuild tracking, audiences, and creative testing so performance is explainable and improvable.",
    deliverables: ["Tracking audit", "Account structure", "Creatives", "Experiments", "Weekly reporting", "Scaling playbook"],
    process: [
      { title: "Fix measurement", description: "Conversions that match reality." },
      { title: "Launch tests", description: "Angles + audiences + offers." },
      { title: "Scale winners", description: "Budget rules + creative cadence." },
    ],
    caseStudy: { client: "Luxe Boutique", metric: "↑ 4.2× ROAS", blurb: "Meta + catalog + creative testing." },
    tiers: [
      { name: "Basic", price: "PKR 30,000/mo", features: ["1 channel", "2 campaigns", "Monthly review"] },
      { name: "Growth", price: "PKR 50,000/mo", popular: true, features: ["Google + Meta", "Creative testing", "Biweekly calls"] },
      { name: "Premium", price: "PKR 80,000/mo", features: ["Full-funnel", "Landing pages", "CRO support"] },
    ],
    faqs: [
      { q: "Ad spend separate?", a: "Yes — media spend is billed by platforms." },
      { q: "Creatives?", a: "We produce and iterate in-house." },
      { q: "Minimum commitment?", a: "We recommend 90 days to learn." },
      { q: "Tracking?", a: "GA4 + CAPI where applicable." },
    ],
  },
  {
    slug: "social-media",
    path: "/services/social-media",
    title: "Social Media Management",
    shortDescription: "Content, scheduling, engagement, and growth — all handled for you.",
    tagline: "Consistent presence without burning your team out.",
    icon: "Share2",
    problems: ["Inconsistent posting", "No strategy", "Low engagement"],
    solution: "Editorial calendar + creative production + community management aligned to revenue goals.",
    deliverables: ["Strategy", "Content calendar", "Design + reels", "Posting", "Community", "Monthly report"],
    process: [
      { title: "Brand voice", description: "Guidelines + examples." },
      { title: "Produce", description: "Batch creative + approvals." },
      { title: "Publish + learn", description: "Iterate on winners." },
    ],
    caseStudy: { client: "Fitness brand", metric: "↑ inbound DMs", blurb: "Reels + offers + DM scripts." },
    tiers: [
      { name: "Basic", price: "PKR 20,000/mo", features: ["12 posts", "Stories", "Basic reporting"] },
      { name: "Growth", price: "PKR 35,000/mo", popular: true, features: ["20 posts + reels", "Engagement", "Ads support"] },
      { name: "Premium", price: "PKR 55,000/mo", features: ["Daily presence", "Influencer coordination", "Campaigns"] },
    ],
    faqs: [
      { q: "Platforms?", a: "Instagram, Facebook, TikTok depending on audience." },
      { q: "Approvals?", a: "Slack/WhatsApp workflows available." },
      { q: "UGC?", a: "Yes — we can source and edit." },
      { q: "Reporting?", a: "Monthly + optional weekly snapshots." },
    ],
  },
  {
    slug: "google-business",
    path: "/services/google-business",
    title: "Google Business Profile Optimization",
    shortDescription: "Own your neighborhood's search results completely.",
    tagline: "Local visibility that drives calls and visits.",
    icon: "MapPin",
    problems: ["Wrong categories", "Weak photos", "No review system"],
    solution: "We optimize GBP signals, posts, Q&A, and review workflows for local dominance.",
    deliverables: ["Profile audit", "Category strategy", "Posts", "Photo plan", "Review workflow", "Reporting"],
    process: [
      { title: "Baseline", description: "Competitive local grid." },
      { title: "Optimize", description: "Signals + content cadence." },
      { title: "Protect", description: "Monitoring + updates." },
    ],
    caseStudy: { client: "Dastarkhan Restaurant", metric: "↑ #1 locally", blurb: "GBP + reviews + photos." },
    tiers: [
      { name: "Basic", price: "PKR 15,000 setup + PKR 8,000/mo", features: ["Audit", "Fixes", "Monthly posts"] },
      { name: "Growth", price: "PKR 15,000/mo", popular: true, features: ["Weekly posts", "Q&A", "Review prompts"] },
      { name: "Premium", price: "PKR 20,000/mo", features: ["Multi-location", "Reputation monitoring", "Offers"] },
    ],
    faqs: [
      { q: "Multi-location?", a: "Yes — additional fees per location." },
      { q: "Suspensions?", a: "We help reinstatement where possible." },
      { q: "Photos?", a: "We guide shoots + edits." },
      { q: "Reporting?", a: "Monthly performance snapshots." },
    ],
  },
  {
    slug: "cloud-devops",
    path: "/services/cloud-devops",
    title: "Cloud & DevOps Solutions",
    shortDescription: "Scalable, secure infrastructure so your product never goes down.",
    tagline: "Reliability as a feature — not an afterthought.",
    icon: "Cloud",
    problems: ["Fragile deploys", "No monitoring", "Cost surprises"],
    solution: "CI/CD, infra-as-code, observability, and hardened baselines for AWS/GCP/Azure.",
    deliverables: ["Architecture", "IaC", "CI/CD", "Monitoring", "Backups", "Runbooks"],
    process: [
      { title: "Assess", description: "Risks + bottlenecks." },
      { title: "Baseline platform", description: "Secure defaults." },
      { title: "Operate", description: "On-call optional." },
    ],
    caseStudy: { client: "SaaS client", metric: "↑ uptime + faster releases", blurb: "Pipelines + staging + alerts." },
    tiers: [
      { name: "Basic", price: "PKR 50,000", features: ["Hosting setup", "SSL", "Backups"] },
      { name: "Growth", price: "PKR 100,000", popular: true, features: ["CI/CD", "Monitoring", "Scaling rules"] },
      { name: "Premium", price: "Custom", features: ["Kubernetes", "Multi-region", "SLA"] },
    ],
    faqs: [
      { q: "Cloud preference?", a: "We align to your stack and compliance needs." },
      { q: "Kubernetes?", a: "When complexity justifies it." },
      { q: "Security?", a: "Baseline hardening included." },
      { q: "Ongoing?", a: "Monthly ops retainers available." },
    ],
  },
  {
    slug: "cybersecurity",
    path: "/services/cybersecurity",
    title: "Cybersecurity & Compliance",
    shortDescription: "Protect your data, your clients, and your reputation.",
    tagline: "Security programs that executives can understand.",
    icon: "Shield",
    problems: ["Unknown exposure", "No policies", "Vendor risk"],
    solution: "Assessments, monitoring recommendations, and pragmatic roadmaps toward compliance goals.",
    deliverables: ["Risk assessment", "Hardening checklist", "Policies", "Training", "Vendor review", "Remediation plan"],
    process: [
      { title: "Discover", description: "Assets + threats." },
      { title: "Prioritize", description: "Impact × likelihood." },
      { title: "Remediate", description: "Practical fixes first." },
    ],
    caseStudy: { client: "Enterprise client", metric: "↓ critical findings", blurb: "Audit + remediation sprint." },
    tiers: [
      { name: "Basic", price: "PKR 60,000", features: ["Vulnerability scan", "Report", "Top fixes"] },
      { name: "Growth", price: "PKR 120,000", popular: true, features: ["Deeper assessment", "Policy pack", "Training"] },
      { name: "Premium", price: "Custom", features: ["Ongoing SOC guidance", "Compliance mapping"] },
    ],
    faqs: [
      { q: "Compliance?", a: "We support GDPR/PCI/ISO paths with partners where needed." },
      { q: "Pen tests?", a: "Scoped separately depending on environment." },
      { q: "SMB friendly?", a: "Yes — pragmatic tiers." },
      { q: "Timeline?", a: "2–6 weeks depending on scope." },
    ],
  },
  {
    slug: "data-analytics",
    path: "/services/data-analytics",
    title: "Data Analytics & Business Intelligence",
    shortDescription: "Turn your raw data into dashboards and decisions that drive revenue.",
    tagline: "Dashboards your team actually uses weekly.",
    icon: "BarChart3",
    problems: ["Spreadsheet reporting", "No single source of truth", "Vanity metrics"],
    solution: "We model metrics, connect sources, and ship dashboards tied to decisions — not decorations.",
    deliverables: ["Metric definitions", "ETL/light pipelines", "Dashboards", "Alerts", "Training", "Governance notes"],
    process: [
      { title: "Metric design", description: "North stars + definitions." },
      { title: "Integrate", description: "Sources + quality checks." },
      { title: "Ship", description: "Dashboards + adoption." },
    ],
    caseStudy: { client: "Retail client", metric: "↑ margin visibility", blurb: "Inventory + ads + sales unified." },
    tiers: [
      { name: "Basic", price: "PKR 70,000", features: ["1 dashboard", "2 sources", "Monthly refresh"] },
      { name: "Growth", price: "PKR 140,000", popular: true, features: ["Multi-dashboard", "5+ sources", "Alerts"] },
      { name: "Premium", price: "Custom", features: ["Warehouse", "Advanced modeling", "SLA"] },
    ],
    faqs: [
      { q: "Tools?", a: "Looker Studio / Metabase / custom — depends on needs." },
      { q: "Data quality?", a: "We bake checks into pipelines." },
      { q: "Training?", a: "Yes — so teams self-serve." },
      { q: "Security?", a: "Role-based access + least privilege." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}
