import { motion } from "framer-motion";

const StickyNav = ({ visible }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-10 lg:py-5 z-[1000] shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.span
        className="text-[9px] font-light text-black cursor-pointer tracking-[1.5px] uppercase transition-opacity duration-300"
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("portfolio")}
      >
        Portfolio
      </motion.span>
      <motion.span
        className="text-sm md:text-base lg:text-xl font-gloved font-normal text-black tracking-[0.5px] cursor-pointer"
        whileHover={{ opacity: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Nikoletta Kalmar
      </motion.span>
      <motion.span
        className="text-[9px] font-light text-black cursor-pointer tracking-[1.5px] uppercase transition-opacity duration-300"
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("about")}
      >
        About
      </motion.span>
    </motion.nav>
  );
};

export default StickyNav;
