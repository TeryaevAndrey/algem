"use client";

import Link from "next/link";
import { ArrRight } from "../icons";
import { Button } from "../ui";
import { motion } from "framer-motion";

export const Advantages = () => {
  return (
    <div className="py-16 lg:py-60 lg:min-h-screen text-base-content-100 flex flex-col items-center text-center justify-center">
      <div className="max-w-[940px]">
        <motion.h2
          className="text-[32px] leading-[36px] lg:text-[64px] lg:leading-[70px] text-base-content-100 font-semibold"
          transition={{ ease: "easeInOut", duration: 0.3 }}
          initial={{ opacity: 0, translateY: -15 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
        >
          More freedom and flexibility <br />
          <span className="text-base-content-300">
            Paving the way for the new era
          </span>
        </motion.h2>

        <motion.p
          className="text-base lg:text-2xl mt-6 lg:mt-8 text-base-content-100 text-balance font-medium"
          transition={{ ease: "linear", duration: 0.3, delay: 0.3 }}
          initial={{ opacity: 0, translateY: -15 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
        >
          Our mission is to provide financial empowerment by unlocking new
          horizons of freedom and possibility in the decentralized financial
          landscape. We are committed to liberating individuals from traditional
          constraints, fostering a dynamic movement of assets that seamlessly
          adapts to the unique and ever-changing rhythms of their lives.
        </motion.p>

        <motion.div
          transition={{ ease: "linear", duration: 0.3, delay: 0.6 }}
          initial={{ opacity: 0, translateY: -15 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
        >
          <Link href="https://app.algem.io/liquid-staking">
            <Button
              className="mt-8 lg:mt-16 mx-auto"
              type="primary"
              size="big"
              title="Participate now"
              icon={<ArrRight />}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
