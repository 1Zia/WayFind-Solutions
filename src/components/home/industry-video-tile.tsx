"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { industryVideoSrc } from "@/lib/industry-videos";

export function IndustryVideoTile({
  slug,
  name,
  description,
}: {
  slug: string;
  name: string;
  description: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [broken, setBroken] = useState(false);
  const src = industryVideoSrc(slug);

  useEffect(() => {
    if (!src || broken) return;
    const root = rootRef.current;
    const v = videoRef.current;
    if (!root || !v) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else {
          v.pause();
          try {
            v.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px" }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, [src, broken]);

  return (
    <Link href={`/industries/${slug}`} className="group block">
      <motion.div
        ref={rootRef}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-elevated transition-shadow duration-300 hover:shadow-elevated-lg"
        style={{ aspectRatio: "16 / 10" }}
      >
        {src && !broken ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.78]"
            muted
            playsInline
            loop
            preload="metadata"
            onError={() => setBroken(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">{name}</div>
          <div className="mt-1 text-sm text-white/80">{description}</div>
        </div>
      </motion.div>
    </Link>
  );
}
