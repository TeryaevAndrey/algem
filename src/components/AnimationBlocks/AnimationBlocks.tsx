"use client";

import { useEffect, useRef, useState } from "react";
import {
  Advantages,
  AnimationBlock,
  Aspects,
  CommunityList,
  Discoveries,
  Partners,
  SectionWrapper,
} from "..";
import { Button } from "../ui";
import { useScroll, useTransform, motion } from "framer-motion";

export const AnimationBlocks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!window) return;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const opacity1 = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.16, 0.32], [1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.32, 0.48], [1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.48, 0.64], [1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.64, 0.8], [1, 0]);
  const opacity6 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const translateY2 = useTransform(
    scrollYProgress,
    [0, 0.16],
    ["0vh", "-100vh"]
  );
  const translateY3 = useTransform(
    scrollYProgress,
    [0.16, 0.32],
    ["0vh", "-200vh"]
  );

  const translateY4 = useTransform(
    scrollYProgress,
    [0.32, 0.48],
    ["0vh", "-300vh"]
  );

  const translateY5 = useTransform(
    scrollYProgress,
    [0.48, 0.64],
    ["0vh", "-400vh"]
  );

  const translateY6 = useTransform(
    scrollYProgress,
    [0.64, 0.8],
    ["0vh", "-500vh"]
  );

  const anotherBlocks = useTransform(
    scrollYProgress,
    [0, 0.8],
    [screenWidth >= 1024 ? "0vh" : 0, screenWidth >= 1024 ? "-500vh" : "0vh"]
  );

  return (
    <>
      <motion.div
        className="py-6 lg:my-[120px] lg:h-[3000vh]"
        ref={ref}
        style={{ scrollSnapType: "y mandatory" }}
      >
        <div
          className="lg:sticky top-0 hidden lg:block"
          style={{ scrollSnapType: "y mandatory" }}
        >
          <motion.div
            className="flex flex-col gap-12 lg:gap-0"
            style={{ scrollSnapType: "y mandatory" }}
            dir="ltr"
          >
            <motion.div
              style={{ opacity: opacity1, scrollSnapAlign: "center" }}
            >
              <AnimationBlock
                title="Supply your tokens to the pools on the partner DEXs"
                suptitle="The Liquid Farming"
                img="/images/animation-block-1.jpg"
              />
            </motion.div>

            <motion.div
              style={{
                translateY: translateY2,
                opacity: opacity2,
                scrollSnapAlign: "center",
              }}
            >
              <AnimationBlock
                title="Get liquid lASTR tokens as the equivalent of your position"
                suptitle="The Liquid Farming"
                img="/images/animation-block-2.jpg"
              />
            </motion.div>
            <motion.div
              style={{
                translateY: translateY3,
                opacity: opacity3,
                scrollSnapAlign: "center",
              }}
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
              style={{
                translateY: translateY4,
                opacity: opacity4,
                scrollSnapAlign: "center",
              }}
            >
              <AnimationBlock
                title="Stake ASTR "
                suptitle="The Liquid Farming"
                img="/images/animation-block-4.jpg"
                reverse={true}
              />
            </motion.div>
            <motion.div
              style={{
                translateY: translateY5,
                opacity: opacity5,
                scrollSnapAlign: "center",
              }}
            >
              <AnimationBlock
                title="Get liquid nASTR tokens and start to receive staking rewards"
                suptitle="The Liquid Farming"
                img="/images/animation-block-5.jpg"
                reverse={true}
              />
            </motion.div>
            <motion.div
              style={{
                translateY: translateY6,
                opacity: opacity6,
                scrollSnapAlign: "center",
              }}
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
          </motion.div>
        </div>

        <div
          className="flex flex-col gap-12 lg:gap-0 lg:hidden"
          style={{ scrollSnapType: "y mandatory" }}
          dir="ltr"
        >
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
          />

          <AnimationBlock
            title="Get liquid lASTR tokens as the equivalent of your position"
            suptitle="The Liquid Farming"
            img="/images/animation-block-2.jpg"
          />

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

          <AnimationBlock
            title="Stake ASTR "
            suptitle="The Liquid Farming"
            img="/images/animation-block-4.jpg"
            reverse={true}
          />

          <AnimationBlock
            title="Get liquid nASTR tokens and start to receive staking rewards"
            suptitle="The Liquid Farming"
            img="/images/animation-block-5.jpg"
            reverse={true}
          />

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
        </div>
      </motion.div>

      <motion.div style={{ marginTop: anotherBlocks }}>
        <SectionWrapper
          className="bg-base-100"
          title={
            <>
              Algem <span>ecosystem partners</span>
            </>
          }
        >
          <Partners />
        </SectionWrapper>

        <Discoveries />

        <Advantages />

        <SectionWrapper
          className="aspects-section"
          title={
            <>
              Commited to the all <br />
              security aspects
            </>
          }
          classNameTitle="text-white"
        >
          <Aspects />
        </SectionWrapper>

        <SectionWrapper
          title={
            <>
              Join <span>our community</span>
            </>
          }
          classNameTitle="[&>span]:text-base-content-primary"
        >
          <CommunityList />
        </SectionWrapper>
      </motion.div>
    </>
  );
};
