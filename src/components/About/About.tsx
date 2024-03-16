"use client";

import { FC } from "react";
import styles from "./About.module.css";
import { PropsWithClassName } from "@/types";
import cn from "clsx";
import { motion } from "framer-motion";

export const About: FC<PropsWithClassName> = ({ className }) => {
  return (
    <section className={cn(styles.wrapper, className)}>
      <motion.h2
        className="text-base-content-100 font-semibold"
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0, translateY: -15 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        Algem
      </motion.h2>
      <motion.p
        className="text-base-content-300 w-full max-w-full lg:max-w-[905px] font-semibold"
        transition={{ ease: "linear", duration: 0.3, delay: 0.3 }}
        initial={{ opacity: 0, translateY: -15 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        Transforming Finance, Redefining Freedom.
      </motion.p>
    </section>
  );
};
