import { ShieldCheck, Gem, Lock, Undo2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup } from "@/components/ui/Reveal";

const points = [
  { icon: ShieldCheck, label: "BIS Hallmarked Gold", badge: "bg-brand-gold-light text-brand-gold-dark" },
  { icon: Gem, label: "Handcrafted Pieces", badge: "bg-jewel-emerald-light text-jewel-emerald" },
  { icon: Lock, label: "Secure Checkout", badge: "bg-jewel-sapphire-light text-jewel-sapphire" },
  { icon: Undo2, label: "Easy Exchange", badge: "bg-jewel-ruby-light text-jewel-ruby" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-charcoal/10 bg-white py-8">
      <Container>
        <RevealGroup
          variant="fade-in"
          staggerMs={80}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {points.map(({ icon: Icon, label, badge }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:text-left">
              <span className={`flex size-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 ${badge}`}>
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span className="text-sm font-semibold text-charcoal">{label}</span>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
