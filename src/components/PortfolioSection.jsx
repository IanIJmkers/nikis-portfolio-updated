import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";
import styles from "./PortfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <motion.div
        className={styles.inner}
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
