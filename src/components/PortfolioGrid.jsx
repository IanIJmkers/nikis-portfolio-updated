import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, getProjectsExcluding } from "../data/projects";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid = ({
  size = "normal",
  excludeId = null,
  centered = false,
}) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const displayProjects = excludeId
    ? getProjectsExcluding(excludeId)
    : projects;

  const isSmall = size === "small";

  return (
    <div className={isSmall ? styles.containerSmall : styles.container}>
      <div
        className={
          centered ? styles.scrollContainerCentered : styles.scrollContainer
        }
      >
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={
                isSmall ? styles.imageWrapperSmall : styles.imageWrapper
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <motion.img
                src={project.hoverImage}
                alt={`${project.title} hover`}
                className={styles.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
            <div className={isSmall ? styles.titleSmall : styles.title}>
              {project.title}
            </div>
            <div className={isSmall ? styles.dateSmall : styles.date}>
              {project.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
