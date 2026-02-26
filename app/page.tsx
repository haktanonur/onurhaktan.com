import HeroSection from "./components/HeroSection";
import TechBadges from "./components/TechBadges";
import Footer from "./components/Footer";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <HeroSection />
      <TechBadges />
      <Projects />
      <Footer />
    </div>
  );
}