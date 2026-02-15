import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import StickyNav from "../components/StickyNav";
import MarqueeStrip from "../components/MarqueeStrip";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <StickyNav visible={showNav} />
      <HeroSection />
      <MarqueeStrip />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
