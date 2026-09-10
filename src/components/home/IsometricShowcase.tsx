import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IsometricPiece } from "@/components/ui/IsometricPiece";

const pieces = [
  { variant: "ring" as const, label: "Rings" },
  { variant: "gem" as const, label: "Loose Stones" },
  { variant: "pendant" as const, label: "Pendants" },
];

export function IsometricShowcase() {
  return (
    <section className="overflow-hidden bg-brand-black py-16 sm:py-24">
      <Container>
        <SectionHeading tone="dark" eyebrow="Every Facet, Considered" title="Crafted from Every Angle" />

        <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-12">
          {pieces.map(({ variant, label }, index) => (
            <Reveal key={variant} variant="scale-in" delayMs={index * 120} className="flex flex-col items-center gap-4">
              <IsometricPiece variant={variant} delayMs={index * 700} className="size-24 sm:size-32" />
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-sm">{label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
