import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RealisticOrnament } from "@/components/ui/RealisticOrnament";

const crafts = [
  {
    variant: "temple" as const,
    label: "Temple Craftsmanship",
    description: "Deity and peacock motifs, cast in dense 22K gold relief.",
  },
  {
    variant: "meenakari" as const,
    label: "Meenakari Enamel",
    description: "Hand-painted enamel colour, fired onto gold — jewel-bright and permanent.",
  },
  {
    variant: "kundan" as const,
    label: "Kundan & Polki Setting",
    description: "Uncut diamonds and gemstones set in pure gold foil, a Mughal-era technique.",
  },
  {
    variant: "nakshi" as const,
    label: "Nakshi Engraving",
    description: "Fine hand-engraved relief work, adding texture and depth to every surface.",
  },
];

export function CraftShowcase() {
  return (
    <section className="overflow-hidden bg-brand-black py-16 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="The Craft Behind the Piece"
          title="Techniques Worth Knowing"
          description="Every Prashwa piece is built on one of these time-honoured techniques — knowing them makes it easier to see what you're paying for."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {crafts.map(({ variant, label, description }, index) => (
            <Reveal key={variant} variant="scale-in" delayMs={index * 120} className="flex flex-col items-center gap-4 text-center">
              <RealisticOrnament variant={variant} delayMs={index * 700} className="h-28 w-24 sm:h-32 sm:w-28" />
              <div>
                <p className="font-display text-base font-semibold text-white">{label}</p>
                <p className="mt-1.5 text-sm text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
