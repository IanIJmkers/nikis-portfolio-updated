import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import PortfolioGrid from "../components/PortfolioGrid";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found</p>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav}>
        <motion.span
          className={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Portfolio
        </motion.span>
        <motion.span
          className={styles.navCenter}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Nikoletta Kalmar
        </motion.span>
        <motion.span
          className={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/#about")}
        >
          About
        </motion.span>
      </nav>

      <div className={styles.contentWrapper}>
        <div className={styles.projectInfo}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>

        <div className={styles.gallery}>
          {project.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.imageWrapper}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img
                src={image.src}
                alt={`${project.title} - ${index + 1}`}
                className={styles.image}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.backgroundColor = "#f5f5f5";
                  e.target.parentElement.style.minHeight = "500px";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.moreProjects}>
        <h2 className={styles.moreProjectsTitle}>MORE PROJECTS</h2>
        <PortfolioGrid size="small" excludeId={project.id} centered />
      </div>
    </motion.div>
  );
};

export default ProjectPage;
