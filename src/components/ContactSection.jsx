import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white flex flex-col items-center justify-center relative py-8 md:py-10 lg:py-12"
    >
      <motion.div
        className="text-center px-5 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Decorative sparkle */}
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto mb-8"
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

        <h2 className="font-lunette text-3xl md:text-4xl lg:text-5xl text-black tracking-[2px] mb-4 md:mb-6">
          Get in touch!
        </h2>

        <p className="text-[13px] leading-[1.9] text-gray-muted max-w-95 mx-auto mb-10 md:mb-12 font-light">
          Available for commissions, collaborations, and editorial work.
          <br />
          Based in The Hague, working worldwide.
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <motion.a
            href="mailto:hello@nikikalmar.com"
            className="flex items-center gap-2 text-[12px] tracking-[1.5px] uppercase text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Mail size={14} strokeWidth={1.5} />
            <span>hello@nikikalmar.com</span>
            <ArrowUpRight
              size={10}
              strokeWidth={1.5}
              className="text-gray-mid"
            />
          </motion.a>

          <span className="hidden sm:block w-px h-3 bg-gray-border" />

          <motion.a
            href="https://linkedin.com/in/nikoletta-kalmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] tracking-[1.5px] uppercase text-black transition-opacity duration-300"
            whileHover={{ opacity: 0.5 }}
          >
            <Linkedin size={14} strokeWidth={1.5} />
            <span>LinkedIn</span>
            <ArrowUpRight
              size={10}
              strokeWidth={1.5}
              className="text-gray-mid"
            />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-10 md:mt-12 text-center text-[9px] text-gray-footer tracking-[1.5px] uppercase">
        &copy; {new Date().getFullYear()} Nikoletta Kalmar
      </div>
    </section>
  );
};

export default ContactSection;
