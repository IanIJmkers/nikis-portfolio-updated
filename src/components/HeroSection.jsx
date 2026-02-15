import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <img
        src="/images/globes.png"
        alt="Hero background"
        className={styles.backgroundImage}
      />

      <div className={styles.topNav}>
        <motion.span
          className={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("portfolio")}
        >
          Portfolio
        </motion.span>
        <span className={styles.navCenter}>Nikoletta Kalmar</span>
        <motion.span
          className={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("about")}
        >
          About
        </motion.span>
      </div>

      <div className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          Where strategy
          <br />
          becomes design.
        </motion.h1>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
