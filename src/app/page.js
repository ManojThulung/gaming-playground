import AboutSection from "@/components/AboutUsSection/AboutSection";
import HeroSection from "@/components/HomeSection/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen w-screen text-white">
      <div className="graident-1">
        <HeroSection />

        <AboutSection />
      </div>
    </main>
  );
}
