"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Drives the hero's scroll parallax by setting `--parallax-shift` (0 at
 * the top of the page, growing as the hero scrolls up and out of view) on
 * a wrapper div. Descendant layers — the background glow, the decorative
 * rings, the photo card — read that one variable at their own multiplier
 * (see the `.hero-parallax-*` rules in globals.css) so a single scroll
 * listener drives every layer instead of one per element. The wrapper
 * itself is unstyled (no position/layout), so it doesn't change how its
 * children are positioned within Hero's `relative` section.
 */
export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    let ticking = false;
    function update() {
      ticking = false;
      const rect = node!.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), rect.height);
      node!.style.setProperty("--parallax-shift", `${progress}`);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return <div ref={ref}>{children}</div>;
}
