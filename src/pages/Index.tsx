import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeatureCards from "@/components/FeatureCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="tabular-nums">
        <HeroSection />
        <div className="space-y-16 md:space-y-24 pb-16">
          <StatsSection />
          <GetStartedSection />
          <FeatureCards />
        </div>
      </main>
    </div>
  );
};

export default Index;