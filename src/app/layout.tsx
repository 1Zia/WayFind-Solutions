import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AppShell } from "@/components/layout/app-shell";
import { company } from "@/lib/company";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wayfind.pk"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "WayFind is an Islamabad-based team for websites, mobile apps, AI assistants, CRM, SEO, and paid ads, delivered with clear timelines and reporting.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description:
      "Websites, apps, AI, CRM, SEO, and ads from one Islamabad studio. Clear pricing and delivery.",
  },
  icons: {
    icon: [{ url: "/wayfind-logo.png" }],
    apple: [{ url: "/wayfind-logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
        <Script id="ga4-placeholder" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        <Script id="clarity-placeholder" strategy="afterInteractive">{`
          // (function(c,l,a,r,i,t,y){...})("script","clarity","PROJECT_ID");
        `}</Script>
      </body>
    </html>
  );
}
