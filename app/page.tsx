import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { StatsSection } from "@/components/StatsSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { MethodSection } from "@/components/MethodSection";
import { ProductionSection } from "@/components/ProductionSection";
import { PartnerGrid } from "@/components/PartnerGrid";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CapabilityGrid />
        <StatsSection />
        <ProjectShowcase />
        <MethodSection />
        <ProductionSection />
        <PartnerGrid />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
