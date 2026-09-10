import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { IsometricShowcase } from "@/components/home/IsometricShowcase";
import { BridalBanner } from "@/components/home/BridalBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { siteConfig } from "@/config/site";
import { ensureCatalogSeeded } from "@/lib/ensureSeeded";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  await ensureCatalogSeeded();

  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryShowcase />
      <IsometricShowcase />
      <BridalBanner />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
