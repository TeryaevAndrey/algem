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
        <h2 className="lg:max-w-[1000px] px-8">
          Discoveries beyond the horizon
        </h2>
      </motion.div>
    </motion.div>
  );
};
