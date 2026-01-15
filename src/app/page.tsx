import { Header } from "@/components/layout/Header";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Hero } from "@/components/sections/Hero";
import { ZeroGravityProtocol } from "@/components/sections/ZeroGravityProtocol";
import { ModuleDockingSystem } from "@/components/sections/ModuleDockingSystem";
import { PerformanceChart } from "@/components/sections/PerformanceChart";
import { LaunchSequence } from "@/components/sections/LaunchSequence";
import { TalentMarketLimitations } from "@/components/sections/TalentMarketLimitations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-space)] text-white selection:bg-[var(--neon-cyan)] selection:text-black">
      <Header />

      <main className="relative pb-32">
        <Hero />
        <TalentMarketLimitations />
        <ZeroGravityProtocol />
        <ModuleDockingSystem />
        <PerformanceChart />
        <LaunchSequence />
      </main>

      <FloatingDock />
    </div>
  );
}
