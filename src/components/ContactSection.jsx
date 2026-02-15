import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.text}>
          Available for commissions, collaborations, and editorial work.
        </p>
        <p className={styles.text}>Based in New York, working worldwide.</p>
        <motion.a
          href="mailto:hello@nikikalmar.com"
          className={styles.email}
          whileHover={{ opacity: 0.5 }}
        >
          hello@nikikalmar.com
        </motion.a>
        <div className={styles.footer}>
          &copy; {new Date().getFullYear()} Nikoletta Kalmar. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
