import AboutSection from "@/components/AboutUsSection/AboutSection";
import GamePortfolioSection from "@/components/GamePortfolioSection/GamePortfolioSection";
import HeroSection from "@/components/HomeSection/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="gradient-1">
        <HeroSection />

        <AboutSection />
      </div>

      <div className="gradient-2">
        <GamePortfolioSection />
      </div>
    </div>
  );
}
