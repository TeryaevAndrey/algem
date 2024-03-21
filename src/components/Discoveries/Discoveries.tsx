"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import styles from "./Discoveries.module.css";
import { useRef } from "react";

export const Discoveries = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const textScale = useTransform(scrollYProgress, [0.2, 1], [0.6, 1]);
  const springTextScale = useSpring(textScale, { stiffness: 120, damping: 40 });

  return (
    <motion.div ref={ref} className="px-4 pt-16 lg:pt-20 bg-white h-[200vh]">
      <motion.div className={styles.bg}>
        <motion.h2
          className="lg:max-w-[1000px] px-8"
          style={{ scale: springTextScale }}
        >
          Discoveries beyond the horizon
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};
