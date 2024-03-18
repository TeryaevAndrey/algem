"use client";

import { AnimationBlock } from "..";
import { Button } from "../ui";
import React from "react";
import { motion } from "framer-motion";

export const AnimationBlocks = () => {
  return (
    <div className="py-6 lg:py-[120px]">
      <div className="flex flex-col gap-12 lg:gap-0">
        <AnimationBlock
          title="Supply your tokens to the pools on the partner DEXs"
          suptitle="The Liquid Farming"
          img="/images/animation-block-1.jpg"
        />

        <AnimationBlock
          className="snap-start"
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
    </div>
  );
};
