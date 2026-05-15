import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-semibold tracking-tighter text-ink/20">404</div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Looks like this page lost its way.</h1>
      <p className="mt-3 text-muted">But don&apos;t worry — we&apos;ll get you back on track.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="rounded-full">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
