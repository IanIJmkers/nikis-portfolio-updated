import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

const SparkleDivider = () => (
  <div className="w-full flex items-center justify-center py-8 md:py-10 lg:py-12">
    <div className="flex items-center gap-6 md:gap-10">
      <motion.div
        className="h-px w-12 md:w-20 bg-black/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ originX: 1 }}
      />

      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0, rotate: -90 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <path
          d="M20 2 C20 2, 21.5 16, 20 20 C20 20, 24 18.5, 38 20 C38 20, 24 21.5, 20 20 C20 20, 21.5 24, 20 38 C20 38, 18.5 24, 20 20 C20 20, 16 21.5, 2 20 C2 20, 16 18.5, 20 20 C20 20, 18.5 16, 20 2Z"
          stroke="rgb(233, 229, 160)"
          strokeWidth="1"
          fill="rgb(233, 229, 160)"
          fillOpacity="0.15"
        />
        <path
          d="M20 14 L22 20 L20 26 L18 20Z"
          stroke="rgb(233, 229, 160)"
          strokeWidth="0.5"
          fill="none"
        />
      </motion.svg>

      <motion.div
        className="h-px w-12 md:w-20 bg-black/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ originX: 0 }}
      />
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="w-full bg-white overflow-hidden relative"
    >
      <SparkleDivider />
      <motion.div
        className="min-h-[60vh] flex items-center"
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
