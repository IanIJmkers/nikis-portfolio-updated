import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="h-screen md:h-screen w-full bg-white overflow-hidden relative max-md:min-h-[70vh] max-md:h-auto"
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
