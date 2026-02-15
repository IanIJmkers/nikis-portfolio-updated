import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import StickyNav from "../components/StickyNav";
import MarqueeStrip from "../components/MarqueeStrip";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const SectionDivider = () => (
  <div className="w-full flex justify-center py-10 md:py-14">
    <motion.div
      className="h-px bg-gold/30 w-16 md:w-24"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    />
  </div>
);

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
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ContactSection />
    </div>
  );
};

export default HomePage;
