import Image from "next/image";
import { ShieldCheck, Sparkles, Gem } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GoldOrnament } from "@/components/ui/GoldOrnament";
import { HeroParallax } from "@/components/home/HeroParallax";
import { ctaLabels } from "@/config/navigation";
import { getHeroContent } from "@/lib/settings";

const trustPoints = [
  { icon: ShieldCheck, label: "BIS hallmarked" },
  { icon: Gem, label: "Handcrafted in-house" },
  { icon: Sparkles, label: "Secure checkout" },
];

export async function Hero() {
  const hero = await getHeroContent();

  return (
    <section className="relative overflow-hidden bg-brand-black">
      {/* Shared jharokha-style pointed-arch clip path, referenced by both
          layers of the photo frame below (see the .arch-frame comment in
          globals.css for why a plain box-shadow can't be used here). */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="hero-arch-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0,0.42 C0.15,0.30 0.15,0.10 0.5,0 C0.85,0.10 0.85,0.30 1,0.42 L1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <HeroParallax>
        {/* Warm gold glow — an abstract nod to the storefront's chandelier and gold trim. */}
        <div
          aria-hidden="true"
          className="hero-parallax-bg pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(247,236,201,0.16),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(184,137,47,0.2),_transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="hero-parallax-ring-tr pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border border-brand-gold/20"
        />
        <div
          aria-hidden="true"
          className="hero-parallax-ring-bl pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full border border-brand-gold/15"
        />

        {/* Ambient drifting sparkles — decorative only, hidden from assistive tech and disabled under reduced motion via the .float-drift/.twinkle rules. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
          <Sparkles className="sparkle-drift absolute left-[12%] top-[18%] size-5 text-brand-gold-light" />
          <Gem className="sparkle-drift absolute right-[18%] top-[28%] size-4 text-jewel-emerald" style={{ animationDelay: "0.6s" }} />
          <Sparkles className="sparkle-drift absolute right-[8%] bottom-[22%] size-6 text-jewel-ruby" style={{ animationDelay: "1.1s" }} />
          <Gem className="sparkle-drift absolute left-[22%] bottom-[16%] size-4 text-jewel-sapphire" style={{ animationDelay: "1.6s" }} />
        </div>

        <Container className="relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:py-28">
          <Reveal variant="fade-up">
            <span className="shimmer-text inline-block text-xs font-semibold uppercase tracking-[0.2em]">
              {hero.eyebrow}
            </span>
            <GoldOrnament className="mt-4 justify-start" />
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">{hero.subheading}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop/" variant="secondary" size="lg">
                {ctaLabels.primary}
              </Button>
              <Button href="/about/" variant="outlineOnDark" size="lg">
                Our Story
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <Icon aria-hidden="true" className="size-4 text-brand-gold-light" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale-in" delayMs={120} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            {/* Jharokha-style pointed arch frame: a gold-gradient outer layer
                clipped to the arch, with the photo itself as a slightly
                inset second layer clipped to the same arch — the gap between
                the two reads as a carved stone frame border. */}
            <div className="hero-parallax-photo arch-frame relative aspect-[4/5] w-full" style={{ clipPath: "url(#hero-arch-clip)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-shine via-brand-gold to-brand-gold-dark" />
              <div className="absolute inset-[3%] overflow-hidden" style={{ clipPath: "url(#hero-arch-clip)" }}>
                {hero.image ? (
                  <Image
                    src={hero.image}
                    alt="Prashwa Jewels boutique"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-black-light to-brand-black-deep text-center">
                    <Gem aria-hidden="true" className="size-10 text-brand-gold" />
                    <p className="px-6 text-sm text-white/60">Storefront &amp; collection photos coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </HeroParallax>
    </section>
  );
}
