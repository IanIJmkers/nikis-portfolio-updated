import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, getProjectsExcluding } from "../data/projects";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

const PortfolioGrid = ({
  size = "normal",
  excludeId = null,
  centered = false,
}) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const displayProjects = excludeId
    ? getProjectsExcluding(excludeId)
    : projects;

  const isSmall = size === "small";

  let cardWidth, cardHeight;
  if (isSmall) {
    cardWidth = isDesktop ? 310 : isTablet ? 250 : 180;
    cardHeight = isDesktop ? 420 : isTablet ? 340 : 240;
  } else {
    cardWidth = isDesktop ? 420 : isTablet ? 340 : 280;
    cardHeight = isDesktop ? 580 : isTablet ? 460 : 360;
  }

  const canHover = isTablet;
  const innerScale = canHover ? 0.75 : 1;
  const innerWidth = Math.round(cardWidth * innerScale);
  const innerHeight = Math.round(cardHeight * innerScale);

  return (
    <div
      className={`flex items-center w-full ${isSmall ? "h-auto" : "h-full"} overflow-hidden`}
    >
      <div
        className={`flex flex-row items-end gap-6 md:gap-8 overflow-y-hidden h-full flex-nowrap ${
          centered
            ? "justify-center overflow-x-visible flex-wrap h-auto px-5 md:px-8 lg:px-12"
            : "overflow-x-auto px-5 md:px-8 lg:px-12 py-6 md:py-8 scroll-smooth [-webkit-overflow-scrolling:touch]"
        } ${isSmall ? "py-4 md:py-6 lg:py-8" : ""}`}
      >
        {displayProjects.map((project, index) => {
          const isHovered = canHover && hoveredId === project.id;

          return (
            <motion.div
              key={project.id}
              className="shrink-0 cursor-pointer"
              style={{ width: cardWidth }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 0.5, delay: index * 0.1 },
              }}
              onClick={() => navigate(`/project/${project.slug}`)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="relative overflow-hidden bg-white"
                style={{ width: cardWidth, height: cardHeight }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div
                    className="overflow-hidden"
                    style={{ width: innerWidth, height: innerHeight }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img
                    src={project.hoverImage}
                    alt={`${project.title} alternate`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="mt-2.5">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-gray-mid/40 font-light tabular-nums ${
                      isSmall ? "text-[8px]" : "text-[9px]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`font-normal text-black ${
                      isSmall ? "text-[10px]" : "text-[11px]"
                    }`}
                  >
                    {project.title}
                  </div>
                </div>
                <div
                  className={`mt-0.5 text-gray-mid ${
                    isSmall ? "text-[9px] pl-5.5" : "text-[10px] pl-6"
                  }`}
                >
                  {project.date}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGrid;
