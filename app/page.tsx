import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import IntroSection from "@/components/IntroSection";
import SelectedWork from "@/components/SelectedWork";
import ServicesPreview from "@/components/ServicesPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeTicker />
      <IntroSection />
      <SelectedWork />
      <ServicesPreview />
      <ContactSection />
    </main>
  );
}
