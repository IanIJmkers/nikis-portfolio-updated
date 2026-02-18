import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState("drawing"); // "drawing" | "fading" | "done"

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "fading" ? 0 : 1 }}
          transition={{
            duration: phase === "fading" ? 1.2 : 0,
            ease: [0.4, 0, 0.2, 1],
          }}
          onAnimationComplete={() => {
            if (phase === "fading") {
              setPhase("done");
              onComplete();
            }
          }}
        >
          {/* SVG drawing + brand name */}
          {phase === "drawing" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              {/* Sparkle/star SVG path drawing */}
              <motion.svg
                width="96"
                height="96"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 4-point star / sparkle shape */}
                <motion.path
                  d="M60 5 C60 5, 65 45, 60 60 C60 60, 75 55, 115 60 C115 60, 75 65, 60 60 C60 60, 65 75, 60 115 C60 115, 55 75, 60 60 C60 60, 45 65, 5 60 C5 60, 45 55, 60 60 C60 60, 55 45, 60 5Z"
                  stroke="rgb(233, 229, 160)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                {/* Inner cross detail */}
                <motion.path
                  d="M60 30 L60 90 M30 60 L90 60"
                  stroke="rgb(233, 229, 160)"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                />
                {/* Small accent circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="3"
                  fill="none"
                  stroke="rgb(233, 229, 160)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
              </motion.svg>

              {/* Brand name */}
              <motion.p
                className="mt-6 font-gloved text-gold text-xl md:text-2xl tracking-[5px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              >
                Nikoletta Kalmar
              </motion.p>

              {/* Loading bar */}
              <div className="mt-5 w-26 h-px bg-white/20 overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  onAnimationComplete={() => setPhase("fading")}
                />
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
