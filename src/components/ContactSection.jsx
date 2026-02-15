import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-[70vh] py-16 md:py-0 md:h-screen w-full bg-white flex items-center justify-center"
    >
      <motion.div
        className="max-w-[500px] px-5 md:px-8 lg:px-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className="text-2xl md:text-3xl font-light mb-6 md:mb-8 tracking-[1px] text-black">
          Get in Touch
        </h1>
        <p className="text-sm leading-[1.8] text-gray-muted mb-3">
          Available for commissions, collaborations, and editorial work.
        </p>
        <p className="text-sm leading-[1.8] text-gray-muted mb-3">
          Based in New York, working worldwide.
        </p>
        <motion.a
          href="mailto:hello@nikikalmar.com"
          className="text-sm md:text-base text-black no-underline border-b border-black inline-block mt-5 transition-opacity duration-300"
          whileHover={{ opacity: 0.5 }}
        >
          hello@nikikalmar.com
        </motion.a>
        <div className="mt-16 md:mt-20 text-[10px] text-gray-footer tracking-[1px]">
          &copy; {new Date().getFullYear()} Nikoletta Kalmar. All rights
          reserved.
        </div>
        <div className="flex items-center gap-5 mt-8 md:mt-10">
          <motion.a
            href="https://linkedin.com/in/nikoletta-kalmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            href="mailto:hello@nikikalmar.com"
            className="text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Mail size={16} strokeWidth={1.5} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
