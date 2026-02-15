import { motion } from "framer-motion";
import styles from "./StickyNav.module.css";

const StickyNav = ({ visible }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={styles.nav}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.span
        className={styles.navItem}
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("portfolio")}
      >
        Portfolio
      </motion.span>
      <motion.span
        className={styles.navCenter}
        whileHover={{ opacity: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Nikoletta Kalmar
      </motion.span>
      <motion.span
        className={styles.navItem}
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("about")}
      >
        About
      </motion.span>
    </motion.nav>
  );
};

export default StickyNav;
