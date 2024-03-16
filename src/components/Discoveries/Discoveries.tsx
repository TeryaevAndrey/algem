"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./Discoveries.module.css";

export const Discoveries = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  console.log(scale);

  return (
    <motion.div className="px-4 pt-16 lg:pt-20 bg-white" style={{ scale }}>
      <div className={styles.bg}>
        <h2 className="lg:max-w-[1000px] px-8">
          Discoveries beyond the horizon
        </h2>
      </div>
    </motion.div>
  );
};
