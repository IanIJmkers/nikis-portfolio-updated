import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, getProjectsExcluding } from "../data/projects";

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
  const isMedium = size === "medium";

  return (
    <div
      className={`flex items-center overflow-hidden w-full ${
        isSmall || isMedium ? "h-auto" : "h-full"
      }`}
    >
      <div
        className={
          centered
            ? "flex flex-row items-center gap-6 md:gap-8 overflow-x-auto overflow-y-hidden px-5 md:px-8 lg:px-12 py-5 md:py-8 scroll-smooth flex-nowrap justify-center h-auto [-webkit-overflow-scrolling:touch]"
            : "flex flex-row items-center gap-2.5 overflow-x-auto overflow-y-hidden px-5 md:px-8 lg:px-[60px] py-5 md:py-8 lg:py-10 h-full scroll-smooth flex-nowrap [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent"
        }
      >
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="shrink-0 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`overflow-hidden relative ${
                isSmall
                  ? "w-[200px] h-[260px] md:w-60 md:h-80 lg:w-80 lg:h-105"
                  : isMedium
                    ? "w-65 h-85 md:w-85 md:h-110 lg:w-105 lg:h-135"
                    : "w-70 h-90 md:w-100 md:h-130 lg:w-135 lg:h-175"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
              <motion.img
                src={project.hoverImage}
                alt={`${project.title} hover`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover absolute top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
            <div
              className={`font-normal text-black ${
                isSmall ? "mt-2 text-[11px]" : "mt-3 text-xs"
              }`}
            >
              {project.title}
            </div>
            <div
              className={`text-gray-mid ${
                isSmall ? "mt-1 text-[10px]" : "mt-1 text-xs"
              }`}
            >
              {project.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
