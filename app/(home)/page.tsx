import { FeaturedProperties } from "@/src/features/home/components/featured-properties";
import { HomeCta } from "@/src/features/home/components/home-cta";
import { HomeHero } from "@/src/features/home/components/home-hero";
import { HowItWorks } from "@/src/features/home/components/how-it-works";
import { TestimonialsSection } from "@/src/features/home/components/testimonials-section";
import { TrustedBy } from "@/src/features/home/components/trusted-by";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedProperties />
      <HowItWorks />
      <TestimonialsSection />
      <TrustedBy />
      <HomeCta />
    </>
  );
}
