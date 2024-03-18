"use client";

import { PropsWithClassName } from "@/types";
import { FC, ReactNode } from "react";
import cn from "clsx";
import styles from "./Banner.module.css";
import { Button } from "@/components/ui";
import { ArrRight } from "@/components/icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export const Banner: FC<PropsWithClassName<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.bg}>
        {children}
        <div className="flex flex-col mt-auto pb-6 px-4 lg:px-[50px] xl:px-[180px] lg:pb-[100px]">
          <motion.h1
            className="text-4xl lg:text-[100px] lg:leading-[104px] font-semibold leading-10 text-white w-full max-w-[270px] sm:max-w-full lg:max-w-[800px]"
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, translateY: -15 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            Liquidity for your staking and farming assets
          </motion.h1>
          <motion.p
            className="mt-3 lg:mt-5 text-base lg:text-xl leading-6"
            transition={{ ease: "linear", duration: 0.3, delay: 0.3 }}
            initial={{ opacity: 0, translateY: -15 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            Stay liquid while staking or farming on DEXs
          </motion.p>

          <div className="lg:flex lg:justify-between lg:items-center mt-5 lg:mt-10">
            <motion.div
              transition={{ ease: "linear", duration: 0.3, delay: 0.6 }}
              initial={{ opacity: 0, translateY: -15 }}
              animate={{ opacity: 1, translateY: 0 }}
            >
              <Link href="https://app.algem.io/liquid-staking">
                <Button
                  className="lg:!text-lg lg:min-w-[232px] lg:min-h-[60px]"
                  type="standart"
                  title="Participate now"
                  icon={<ArrRight />}
                />
              </Link>
            </motion.div>

            <div className={styles.footer}>
              <p className={styles.footerText}>Total value locked</p>
              <p className={styles.footerPrice}>$12,986,977</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
          <p>Check out our new vision and roadmap for 2024</p>
          <Link href="/roadmap.pdf">
            <Button title="View Roadmap" type="secondary" size="big" />
          </Link>
        </div>
      </div>
    </div>
  );
};
