import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-white flex flex-col md:flex-row md:min-h-screen"
    >
      <div className="w-full md:w-1/2 min-h-[50vh] overflow-hidden">
        <motion.img
          src="/images/niki.jpg"
          alt="Niki"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div
        className="w-full md:w-1/2 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-normal mb-8 md:mb-10 lg:mb-12 text-black uppercase tracking-[1px]">
          About Nikoletta Kalmar
        </h2>

        <div className="flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8">
          <div className="flex-1">
            <p className="text-[13px] leading-[1.8] text-gray-dark mb-5 font-light">
              As a transformative designer, I&apos;m acutely aware of the
              environmental and socio-economic challenges that we need to own up
              to as creatives. I believe deeply in taking responsibility about
              how we produce and who produces our work.
            </p>
            <p className="text-[13px] leading-[1.8] text-gray-dark mb-5 font-light">
              &ldquo;Sustainability&rdquo; as a term has been used and misused
              so frequently over the past decade, that claiming you&apos;re
              sustainable, isn&apos;t specific enough.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[13px] leading-[1.8] text-gray-dark mb-5 font-light">
              As a result, I would like to describe how NIKOLETTA KALMAR as a
              brand owns up to our environmental responsibilities.
            </p>
            <p className="text-[13px] leading-[1.8] text-gray-dark mb-5 font-light">
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
