import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import StickyNav from "../components/StickyNav";
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
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <StickyNav visible={showNav} />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
