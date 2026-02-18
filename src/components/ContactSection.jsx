import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white flex flex-col items-center justify-center relative py-6 md:py-8 lg:py-10"
    >
      <motion.div
        className="text-center px-4 md:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Decorative sparkle */}
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto mb-6"
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <path
            d="M20 2 C20 2, 22 16, 20 20 C20 20, 24 18, 38 20 C38 20, 24 22, 20 20 C20 20, 22 24, 20 38 C20 38, 18 24, 20 20 C20 20, 16 22, 2 20 C2 20, 16 18, 20 20 C20 20, 18 16, 20 2Z"
            stroke="rgb(233, 229, 160)"
            strokeWidth="1"
            fill="none"
          />
        </motion.svg>

        <h2 className="font-lunette text-2xl md:text-3xl lg:text-4xl text-black tracking-[1.5px] mb-3 md:mb-5">
          Get in touch!
        </h2>

        <p className="text-[10px] leading-[1.9] text-gray-muted max-w-76 mx-auto mb-8 md:mb-10 font-light">
          Available for commissions, collaborations, and editorial work.
          <br />
          Based in The Hague, working worldwide.
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.a
            href="mailto:hello@nikikalmar.com"
            className="flex items-center gap-2 text-[10px] tracking-[1px] uppercase text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Mail size={11} strokeWidth={1.5} />
            <span>hello@nikikalmar.com</span>
            <ArrowUpRight
              size={8}
              strokeWidth={1.5}
              className="text-gray-mid"
            />
          </motion.a>

          <span className="hidden sm:block w-px h-2.5 bg-gray-border" />

          <motion.a
            href="https://linkedin.com/in/nikoletta-kalmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] tracking-[1px] uppercase text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Linkedin size={11} strokeWidth={1.5} />
            <span>LinkedIn</span>
            <ArrowUpRight
              size={8}
              strokeWidth={1.5}
              className="text-gray-mid"
            />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-8 md:mt-10 text-center text-[7px] text-gray-footer tracking-[1px] uppercase">
        &copy; {new Date().getFullYear()} Nikoletta Kalmar
      </div>
    </section>
  );
};

export default ContactSection;
