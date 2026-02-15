import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="w-full bg-white overflow-hidden relative py-12 md:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PortfolioGrid size="normal" />
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
