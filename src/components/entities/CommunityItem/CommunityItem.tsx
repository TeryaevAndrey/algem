"use client";

import { PropsWithClassName } from "@/types";
import { FC } from "react";
import cn from "clsx";
import Link from "next/link";
import styles from "./CommunityItem.module.css";
import { motion } from "framer-motion";

type Props = {
  title: string;
  href: string;
  color?: "purple" | "green" | "blue" | "orange";
};

export const CommunityItem: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  href = "/",
  color = "purple",
}) => {
  return (
    <Link
      className={cn(
        "flex items-center justify-between gap-9 px-3 py-4 lg:px-4 lg:py-6 rounded-2xl border border-[#E7EAEF] w-full",
        className
      )}
      href={href}
    >
      <motion.p
        className="text-2xl xl:text-[32px] font-medium text-base-content-100"
        style={{ fontFamily: "Inter Tight, sans-serif" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0, translateY: -15 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.p>

      <motion.button
        className={cn(styles.circle, {
          [styles[color]]: color,
        })}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0, translateY: -15 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 18L18 6M18 6H10M18 6V14"
            stroke="#020202"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </Link>
  );
};
