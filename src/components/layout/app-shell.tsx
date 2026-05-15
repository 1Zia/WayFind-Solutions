import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { CookieConsent } from "@/components/layout/cookie-consent";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="noise" />
      <main className="min-h-dvh pt-16">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}
