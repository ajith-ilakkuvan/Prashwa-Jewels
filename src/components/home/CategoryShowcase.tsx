import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { getAllCategories } from "@/lib/products";

/** Cycled per category so the collection grid reads as jewel-toned rather than uniformly gold. */
const ringTones = [
  "group-hover:border-brand-gold group-hover:shadow-[0_0_0_4px_rgba(184,137,47,0.18)]",
  "group-hover:border-jewel-emerald group-hover:shadow-[0_0_0_4px_rgba(31,122,92,0.18)]",
  "group-hover:border-jewel-ruby group-hover:shadow-[0_0_0_4px_rgba(165,33,72,0.18)]",
  "group-hover:border-jewel-sapphire group-hover:shadow-[0_0_0_4px_rgba(30,77,140,0.18)]",
];

export async function CategoryShowcase() {
  const categories = await getAllCategories();
  if (categories.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Shop by Collection" title="Find Your Piece" />
        <RevealGroup
          variant="fade-up"
          staggerMs={70}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6"
        >
          {categories.map((category, index) => (
            <Link key={category.id} href={`/collections/${category.slug}/`} className="group text-center">
              <div
                className={`relative aspect-square overflow-hidden rounded-full border border-brand-gold/30 bg-cream transition-all duration-300 ${ringTones[index % ringTones.length]}`}
              >
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <p className="mt-3 font-display text-sm font-semibold text-charcoal group-hover:text-brand-black">
                {category.name}
              </p>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
