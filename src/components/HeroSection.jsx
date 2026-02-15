import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen w-full relative flex flex-col bg-black overflow-hidden">
      <img
        src="/images/globes.png"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />

      <div className="flex justify-between items-center px-5 py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 relative z-10">
        <motion.span
          className="text-[11px] font-light text-white cursor-pointer tracking-[2px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("portfolio")}
        >
          Portfolio
        </motion.span>
        <span className="text-xl md:text-2xl lg:text-4xl font-gloved font-normal text-white tracking-[3px] md:tracking-[4px] lg:tracking-[5px]">
          Nikoletta Kalmar
        </span>
        <motion.span
          className="text-[11px] font-light text-white cursor-pointer tracking-[2px] uppercase transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("about")}
        >
          About
        </motion.span>
      </div>

      <div className="absolute right-5 bottom-16 max-w-[50%] text-right md:max-w-none md:bottom-10 md:right-8 lg:bottom-12 lg:right-12 z-10">
        <motion.h1
          className="font-lunette text-[clamp(2.8rem,8vw,8rem)] font-[699] text-gold m-0 uppercase leading-[0.82] tracking-[3px] md:tracking-[4px]"
          style={{ transformOrigin: "bottom right" }}
          initial={{ opacity: 0, y: 30, scaleY: 1.6 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.6 }}
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
