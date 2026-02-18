import { HeroSection } from "@/components/HeroSection";
import DiscoveryStory from "@/components/DiscoveryStory";
import { EvidenceWall } from "@/components/EvidenceWall";
import { TechnologyShowcase } from "@/components/TechnologyShowcase";
import { ComplexityInversion } from "@/components/ComplexityInversion";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TimelineSection } from "@/components/TimelineSection";
import { EmergenceQuote } from "@/components/EmergenceQuote";
import { CallToAction } from "@/components/CallToAction";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <HeroSection />
      <DiscoveryStory />
      <EvidenceWall />
      <TechnologyShowcase />
      <ComplexityInversion />
      <ComparisonSection />
      <TimelineSection />
      <EmergenceQuote />
      <CallToAction />
    </main>
  );
}
