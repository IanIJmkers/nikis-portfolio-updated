import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-white flex max-md:flex-col py-6 md:py-8 lg:py-10 px-5 md:px-8 lg:px-12"
    >
      <div className="w-1/2 min-h-[50vh] overflow-hidden max-md:w-full">
        <motion.img
          src="/images/niki.webp"
          alt="Niki"
          loading="lazy"
          decoding="async"
          className="w-[70%] h-[80%] object-cover max-md:w-full max-md:h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div
        className="w-1/2 px-12 py-16 flex flex-col justify-center max-lg:px-8 max-lg:py-12 max-md:w-full max-md:px-5 max-md:py-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-[26px] font-normal mb-10 text-black uppercase tracking-[1px] max-lg:text-[22px] max-lg:mb-8 max-md:text-xl max-md:mb-6">
          About Nikoletta Kalmar
        </h2>

        <div className="flex gap-8 max-lg:gap-6 max-md:flex-col max-md:gap-0">
          <div className="flex-1">
            <p className="text-xs leading-[1.8] text-gray-dark mb-4 font-light">
              As a transformative designer, I&apos;m acutely aware of the
              environmental and socio-economic challenges that we need to own up
              to as creatives. I believe deeply in taking responsibility about
              how we produce and who produces our work.
            </p>
            <p className="text-xs leading-[1.8] text-gray-dark mb-4 font-light">
              &ldquo;Sustainability&rdquo; as a term has been used and misused
              so frequently over the past decade, that claiming you&apos;re
              sustainable, isn&apos;t specific enough.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-xs leading-[1.8] text-gray-dark mb-4 font-light">
              As a result, I would like to describe how NIKOLETTA KALMAR as a
              brand owns up to our environmental responsibilities.
            </p>
            <p className="text-xs leading-[1.8] text-gray-dark mb-4 font-light">
              I currently work with clients across Denmark, the Netherlands, and
              globally. Two key areas that I&apos;m especially focused on:
              strategic design thinking and sustainable brand development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
