import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen w-full relative flex flex-col bg-black overflow-hidden">
      <img
        src="/images/globes.webp"
        alt="Hero background"
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />

      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-10 lg:py-5 relative z-10">
        <motion.span
          className="text-[9px] font-light text-white cursor-pointer tracking-[1.5px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("portfolio")}
        >
          Portfolio
        </motion.span>
        <span className="text-base md:text-xl lg:text-3xl font-gloved font-normal text-white tracking-[2.5px] md:tracking-[3px] lg:tracking-[4px]">
          Nikoletta Kalmar
        </span>
        <motion.span
          className="text-[9px] font-light text-white cursor-pointer tracking-[1.5px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("about")}
        >
          About
        </motion.span>
      </div>

      <div className="absolute right-4 bottom-13 max-w-[50%] text-right md:max-w-none md:bottom-8 md:right-6 lg:bottom-10 lg:right-10 z-10">
        <motion.h1
          className="font-lunette text-[clamp(2.8rem,8vw,8rem)] font-[300] text-gold m-0 uppercase leading-[0.82] tracking-[2.5px] md:tracking-[3px]"
          style={{ transformOrigin: "bottom right" }}
          initial={{ opacity: 0, y: 30, scaleY: 1.9 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.9 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          Where strategy
          <br />
          becomes design.
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
