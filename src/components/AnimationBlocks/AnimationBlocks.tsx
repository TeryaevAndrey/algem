"use client";

import { AnimationBlock } from "..";
import { Button } from "../ui";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimationBlocks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });

  const opacity1 = useTransform(scrollYProgress, [0.02, 0.5], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.55, 1], [1, 0]);
  // const opacity3 = useTransform(scrollYProgress, [0.68, 1], [1, 0]);
  const opacity4 = useTransform(scrollYProgress2, [0.02, 0.5], [1, 0]);
  const opacity5 = useTransform(scrollYProgress2, [0.55, 1], [1, 0]);

  const translateY2 = useTransform(
    scrollYProgress,
    [0.02, 0.5],
    ["0vh", "-100vh"]
  );

  const translateY3 = useTransform(
    scrollYProgress,
    [0.55, 1],
    ["0vh", "-100vh"]
  );

  const translateY5 = useTransform(
    scrollYProgress2,
    [0.05, 0.5],
    ["0vh", "-100vh"]
  );

  const translateY6 = useTransform(
    scrollYProgress2,
    [0.55, 1],
    ["0vh", "-100vh"]
  );

  return (
    <div className="py-6 lg:py-[120px]">
      <div>
        <div
          className="hidden lg:flex flex-col gap-12 lg:gap-0 h-[500vh] sticky top-0"
          ref={ref}
        >
          <div className="h-screen sticky top-0">
            <motion.div
              className="ease-linear duration-500 w-full"
              style={{ opacity: opacity1 }}
            >
              <AnimationBlock
                title="Supply your tokens to the pools on the partner DEXs"
                suptitle="The Liquid Farming Product"
                img="/images/animation-block-1.webp"
              />
            </motion.div>

            <motion.div
              className="absolute ease-out duration-500 w-full"
              style={{ translateY: translateY2, opacity: opacity2 }}
            >
              <AnimationBlock
                className="snap-start"
                title="Get liquid lASTR tokens as the equivalent of your position"
                suptitle="The Liquid Farming Product"
                img="/images/animation-block-2.webp"
              />
            </motion.div>

            <motion.div
              className="absolute ease-out duration-500 w-full"
              style={{ translateY: translateY3 }}
            >
              <AnimationBlock
                title="Earn triple rewards in the form of the ALGM incentives, DEXs and l-tokens farming rewards"
                suptitle="The Liquid Farming Product"
                img="/images/animation-block-3.webp"
                btn={
                  <Button
                    className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                    title="Coming soon"
                    size="big"
                    type="secondary"
                    disabled={true}
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="bg-white h-[50vh]"></div>
      </div>

      <div>
        <div
          className="hidden lg:flex flex-col gap-12 lg:gap-0 h-[500vh] sticky top-0 "
          ref={ref2}
        >
          <div className="h-screen sticky top-0">
            <motion.div
              className="ease-out duration-500 w-full"
              style={{ opacity: opacity4 }}
            >
              <AnimationBlock
                title="Stake ASTR "
                suptitle="THE LIQUID STAKING Product"
                img="/images/animation-block-4.webp"
                reverse={true}
              />
            </motion.div>

            <motion.div
              className="absolute ease-out duration-500 w-full"
              style={{ translateY: translateY5, opacity: opacity5 }}
            >
              <AnimationBlock
                title="Get liquid nASTR tokens and start to receive staking rewards"
                suptitle="THE LIQUID STAKING Product"
                img="/images/animation-block-5.jpg"
                reverse={true}
              />
            </motion.div>

            <motion.div
              className="absolute ease-out duration-500 w-full"
              style={{ translateY: translateY6 }}
            >
              <AnimationBlock
                title="Use your nASTR tokens across DeFi to increase your profits"
                suptitle="THE LIQUID STAKING Product"
                img="/images/animation-block-6.jpg"
                reverse={true}
                btn={
                  <Button
                    className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                    title="Stake now"
                    size="big"
                    type="secondary"
                    href="https://app.algem.io/liquid-staking"
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-12 lg:gap-0">
        <AnimationBlock
          title="Supply your tokens to the pools on the partner DEXs"
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-1.webp"
        />

        <AnimationBlock
          className="snap-start"
          title="Get liquid lASTR tokens as the equivalent of your position"
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-2.webp"
        />

        <AnimationBlock
          title="Earn triple rewards in the form of the ALGM incentives, DEXs and l-tokens farming rewards"
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-3.webp"
          btn={
            <Button
              className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
              title="Coming soon"
              size="big"
              type="secondary"
              disabled={true}
            />
          }
        />

        <AnimationBlock
          title="Stake ASTR "
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-4.webp"
          reverse={true}
        />

        <AnimationBlock
          title="Get liquid nASTR tokens and start to receive staking rewards"
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-5.jpg"
          reverse={true}
        />

        <AnimationBlock
          title="Use your nASTR tokens across DeFi to increase your profits"
          suptitle="The Liquid Farming Product"
          img="/images/animation-block-6.jpg"
          reverse={true}
          btn={
            <Button
              className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
              title="Stake now"
              size="big"
              type="secondary"
              href="https://app.algem.io/liquid-staking"
            />
          }
        />
      </div>
    </div>
  );
};
