import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GoldOrnament } from "@/components/ui/GoldOrnament";
import { Reveal } from "@/components/ui/Reveal";

/** Ruby joins the gold glow here — a warmer, romantic pairing for the bridal section specifically. */
export function BridalBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-black-deep py-16 text-center sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,137,47,0.16),_transparent_65%),radial-gradient(circle_at_30%_80%,_rgba(165,33,72,0.18),_transparent_55%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <Sparkles className="sparkle-drift absolute left-[15%] top-[20%] size-5 text-brand-gold-light" />
        <Sparkles className="sparkle-drift absolute right-[15%] bottom-[24%] size-6 text-jewel-ruby" style={{ animationDelay: "0.8s" }} />
      </div>
      <Container className="relative">
        <Reveal variant="fade-up">
          <GoldOrnament className="justify-center" />
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Being Your Happily Ever After, with Exemplary Jewellery for the Bride
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-gold-light">
            Make Prashwa Your Wedding Partner Today
          </p>
          <div className="mt-8">
            <Button href="/collections/bridal-collection/" variant="secondary" size="lg">
              Explore Bridal Collection
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
