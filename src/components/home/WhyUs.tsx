"use client";

import type { CSSProperties } from "react";
import { ShieldCheck, Gem, Ruler, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { setSpotlightPosition } from "@/lib/spotlight";

/**
 * Each card cycles through a jewel tone (gold, emerald, ruby, sapphire) for
 * its icon badge and spotlight glow color, so the row reads as colorful
 * rather than four identical gold badges in a row.
 */
const reasons = [
  {
    icon: ShieldCheck,
    title: "BIS Hallmarked",
    description: "Every gold piece we sell is BIS hallmarked, and gemstone pieces come with relevant certification.",
    badge: "bg-brand-gold text-charcoal",
    glowTint: "rgba(184, 137, 47, 0.35)",
    glowShadow: "rgba(184, 137, 47, 0.3)",
  },
  {
    icon: Gem,
    title: "Handcrafted In-House",
    description: "Our pieces are handcrafted with close attention to detail, from temple-style sets to everyday chains.",
    badge: "bg-jewel-emerald text-white",
    glowTint: "rgba(31, 122, 92, 0.3)",
    glowShadow: "rgba(31, 122, 92, 0.3)",
  },
  {
    icon: Ruler,
    title: "Complimentary Resizing",
    description: "Rings and bangles come with complimentary resizing, so fit is never a compromise.",
    badge: "bg-jewel-ruby text-white",
    glowTint: "rgba(165, 33, 72, 0.3)",
    glowShadow: "rgba(165, 33, 72, 0.3)",
  },
  {
    icon: Sparkles,
    title: "Palace-Inspired Boutique",
    description: "Visit our Coimbatore store — compact in footprint, but designed to feel like stepping into a palace.",
    badge: "bg-jewel-sapphire text-white",
    glowTint: "rgba(30, 77, 140, 0.3)",
    glowShadow: "rgba(30, 77, 140, 0.3)",
  },
];

export function WhyUs() {
  return (
    <section className="antique-arch-row bg-brand-black py-16 sm:py-24">
      <Container>
        <SectionHeading tone="dark" eyebrow="Why Prashwa Jewels" title="Handcrafted, Certified, Trusted" />

        <RevealGroup variant="fade-up" staggerMs={90} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description, badge, glowTint, glowShadow }) => (
            <div
              key={title}
              onPointerMove={setSpotlightPosition}
              style={{ "--glow-tint": glowTint, "--glow-shadow": glowShadow } as CSSProperties}
              className="glow-card overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className={`relative z-[2] flex size-11 items-center justify-center rounded-full ${badge}`}>
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="relative z-[2] mt-4 font-display text-lg font-semibold text-charcoal">{title}</h3>
              <p className="relative z-[2] mt-2 text-sm text-charcoal/70">{description}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
