import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import PortfolioGrid from "../components/PortfolioGrid";

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <p className="text-sm text-gray-mid">Project not found</p>
        <button
          onClick={() => navigate("/")}
          className="text-[11px] text-black bg-transparent border border-gray-button-border px-5 py-2 cursor-pointer font-[inherit] uppercase tracking-[1px]"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-5 py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 z-1000 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
        <motion.span
          className="text-[11px] font-light text-black cursor-pointer tracking-[2px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Portfolio
        </motion.span>
        <motion.span
          className="text-base md:text-xl lg:text-2xl font-gloved font-normal text-black tracking-[0.5px] cursor-pointer"
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Nikoletta Kalmar
        </motion.span>
        <motion.span
          className="text-[11px] font-light text-black cursor-pointer tracking-[2px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/#about")}
        >
          About
        </motion.span>
      </nav>

      <div className="max-w-[1100px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="pt-24 pb-8 md:pt-28 lg:pt-32 lg:pb-10 text-center">
          <h1 className="text-xl md:text-2xl font-light mb-2 tracking-[0.5px]">
            {project.title}
          </h1>
          <p className="text-[11px] text-gray-mid font-light tracking-[0.5px]">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16 pb-16 md:gap-20 lg:gap-24 lg:pb-24">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              className="w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img
                src={image.src}
                alt={`${project.title} - ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
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

      <div className="border-t border-gray-border pt-12 pb-16 md:pt-16 md:pb-20">
        <h2 className="text-[10px] font-normal text-black mb-8 tracking-[2px] text-center uppercase">
          More Projects
        </h2>
        <PortfolioGrid size="medium" excludeId={project.id} centered />
      </div>
    </motion.div>
  );
};

export default ProjectPage;
