"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import styles from "./Discoveries.module.css";
import { useEffect, useRef } from "react";

export const Discoveries = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0.2, 1], [0.2, 1]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["15rem", "0.8rem"]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const textScale = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const springTextScale = useSpring(textScale, { stiffness: 120, damping: 40 });

  return (
    <motion.div ref={ref} className="px-4 pt-16 lg:pt-20 bg-white h-[250vh]">
      <motion.div
        className={styles.bg}
        style={{
          borderRadius,
          opacity,
          scale: springScale,
        }}
      >
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
