import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.imageContainer}>
        <motion.img
          src="/images/niki.jpg"
          alt="Niki"
          className={styles.image}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className={styles.title}>About Nikoletta Kalmar</h2>

        <div className={styles.textColumns}>
          <div className={styles.column}>
            <p className={styles.paragraph}>
              As a transformative designer, I'm acutely aware of the
              environmental and socio-economic challenges that we need to own up
              to as creatives. I believe deeply in taking responsibility about
              how we produce and who produces our work.
            </p>
            <p className={styles.paragraph}>
              "Sustainability" as a term has been used and misused so frequently
              over the past decade, that claiming you're sustainable, isn't
              specific enough.
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.paragraph}>
              As a result, I would like to describe how NIKOLETTA KALMAR as a
              brand owns up to our environmental responsibilities.
            </p>
            <p className={styles.paragraph}>
              I currently work with clients across Denmark, the Netherlands, and
              globally. Two key areas that I'm especially focused on: strategic
              design thinking and sustainable brand development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
