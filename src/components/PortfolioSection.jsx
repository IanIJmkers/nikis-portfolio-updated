import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="w-full bg-white overflow-hidden relative py-46 md:py-48 lg:py-50"
    >
      <motion.div
        className="h-full"
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
