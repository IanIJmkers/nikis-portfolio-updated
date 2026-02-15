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

  return (
    <div
      className={`flex items-center overflow-hidden w-full ${
        isSmall ? "h-auto" : "h-full"
      }`}
    >
      <div
        className={
          centered
            ? "flex flex-row items-center gap-2.5 overflow-x-visible overflow-y-hidden px-5 md:px-8 lg:px-[60px] scroll-smooth flex-wrap justify-center h-auto"
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
                  ? "w-[200px] h-[260px] md:w-[240px] md:h-[320px] lg:w-[320px] lg:h-[420px]"
                  : "w-[280px] h-[360px] md:w-[400px] md:h-[520px] lg:w-[540px] lg:h-[700px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
              <motion.img
                src={project.hoverImage}
                alt={`${project.title} hover`}
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
                isSmall
                  ? "mt-2 text-[11px]"
                  : "mt-3 text-xs"
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
