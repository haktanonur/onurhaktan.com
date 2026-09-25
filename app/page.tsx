import HeroSection from "./components/HeroSection";
import TechBadges from "./components/TechBadges";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechBadges />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}