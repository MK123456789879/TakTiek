import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { PillarGrid } from "@/components/home/PillarGrid";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { PracticalStrip } from "@/components/home/PracticalStrip";
import { TrustSection } from "@/components/home/TrustSection";
import { CTACard } from "@/components/home/CTACard";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <PillarGrid />
      <HowWeWorkSection />
      <PracticalStrip />
      <TrustSection />
      <CTACard />
    </SiteShell>
  );
}
