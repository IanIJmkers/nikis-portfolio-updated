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
            ? "flex flex-row items-center gap-5 md:gap-6 overflow-x-auto overflow-y-hidden px-4 md:px-6 lg:px-10 py-4 md:py-6 scroll-smooth flex-nowrap justify-center h-auto [-webkit-overflow-scrolling:touch]"
            : "flex flex-row items-center gap-2 overflow-x-auto overflow-y-hidden px-4 md:px-6 lg:px-[48px] py-4 md:py-6 lg:py-8 h-full scroll-smooth flex-nowrap [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent"
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
                  ? "w-40 h-52 md:w-48 md:h-64 lg:w-64 lg:h-84"
                  : isMedium
                    ? "w-52 h-68 md:w-68 md:h-88 lg:w-84 lg:h-108"
                    : "w-56 h-72 md:w-80 md:h-104 lg:w-108 lg:h-140"
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
                isSmall ? "mt-1.5 text-[9px]" : "mt-2.5 text-[10px]"
              }`}
            >
              {project.title}
            </div>
            <div
              className={`text-gray-mid ${
                isSmall ? "mt-1 text-[8px]" : "mt-1 text-[10px]"
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
