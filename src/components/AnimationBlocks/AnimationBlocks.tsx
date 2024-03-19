"use client";

import { AnimationBlock } from "..";
import { Button } from "../ui";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimationBlocks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const opacity1 = useTransform(scrollYProgress, [0.02, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.4], [1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.42, 0.6], [1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.62, 0.8], [1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.82, 1], [1, 0]);

  const translateY2 = useTransform(
    scrollYProgress,
    [0.02, 0.2],
    ["0vh", "-100vh"]
  );

  const translateY3 = useTransform(
    scrollYProgress,
    [0.22, 0.4],
    ["0vh", "-100vh"]
  );

  const translateY4 = useTransform(
    scrollYProgress,
    [0.42, 0.6],
    ["0vh", "-100vh"]
  );

  const translateY5 = useTransform(
    scrollYProgress,
    [0.62, 0.8],
    ["0vh", "-100vh"]
  );

  const translateY6 = useTransform(
    scrollYProgress,
    [0.82, 1],
    ["0vh", "-100vh"]
  );

  return (
    <div className="py-6 lg:py-[120px]">
      <div
        className="flex flex-col gap-12 lg:gap-0 h-[600vh] sticky top-0"
        ref={ref}
      >
        <div className="h-screen sticky top-0">
          <motion.div
            className="ease-linear duration-500"
            style={{ opacity: opacity1 }}
          >
            <AnimationBlock
              title="Supply your tokens to the pools on the partner DEXs"
              suptitle="The Liquid Farming"
              img="/images/animation-block-1.jpg"
            />
          </motion.div>

          <motion.div
            className="absolute ease-out duration-500"
            style={{ translateY: translateY2, opacity: opacity2 }}
          >
            <AnimationBlock
              className="snap-start"
              title="Get liquid lASTR tokens as the equivalent of your position"
              suptitle="The Liquid Farming"
              img="/images/animation-block-2.jpg"
            />
          </motion.div>

          <motion.div
            className="absolute ease-out duration-500"
            style={{ translateY: translateY3, opacity: opacity3 }}
          >
            <AnimationBlock
              title="Earn triple rewards in the form of the ALGM incentives, DEXs and l-tokens farming rewards"
              suptitle="The Liquid Farming"
              img="/images/animation-block-3.jpg"
              btn={
                <Button
                  className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                  title="Coming soon"
                  size="big"
                  type="secondary"
                />
              }
            />
          </motion.div>

          <motion.div
            className="absolute ease-out duration-500"
            style={{ translateY: translateY4, opacity: opacity4 }}
          >
            <AnimationBlock
              title="Stake ASTR "
              suptitle="The Liquid Farming"
              img="/images/animation-block-4.jpg"
              reverse={true}
            />
          </motion.div>

          <motion.div
            className="absolute ease-out duration-500"
            style={{ translateY: translateY5, opacity: opacity5 }}
          >
            <AnimationBlock
              title="Get liquid nASTR tokens and start to receive staking rewards"
              suptitle="The Liquid Farming"
              img="/images/animation-block-5.jpg"
              reverse={true}
            />
          </motion.div>

          <motion.div
            className="absolute ease-out duration-500"
            style={{ translateY: translateY6 }}
          >
            <AnimationBlock
              title="Use your nASTR tokens across DeFi to increase your profits"
              suptitle="The Liquid Farming"
              img="/images/animation-block-6.jpg"
              reverse={true}
              btn={
                <Button
                  className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                  title="Stake now"
                  size="big"
                  type="secondary"
                />
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
