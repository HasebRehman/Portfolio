import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStack from "@/components/TechStack";
import SelectedWork from "@/components/SelectedWork";
import ServicesPreview from "@/components/ServicesPreview";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <SelectedWork />
      <ProcessTimeline />
      <TechStack />
      <ServicesPreview />
      <FinalCTA />
    </main>
  );
}
