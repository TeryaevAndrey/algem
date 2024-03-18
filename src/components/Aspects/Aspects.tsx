"use client";

import { FC } from "react";
import { PropsWithClassName } from "@/types";
import cn from "clsx";
import { AspectItem } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

export const Aspects: FC<PropsWithClassName> = ({ className }) => {
  return (
    <>
      <div className={cn("block md:hidden -mx-4", className)}>
        <Swiper
          spaceBetween={12}
          slidesPerView={1.1}
          slidesOffsetAfter={16}
          slidesOffsetBefore={16}
        >
          <SwiperSlide>
            <AspectItem
              title="The Tesseract Academy"
              text="ALGM Tokenomic Audit"
              href="/adv-1.pdf"
              img="/images/aspects-1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem
              title="Hashlock"
              text="ALGM Staking"
              href="/adv-2.pdf"
              img="/images/aspects-2.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem
              title="Hashlock"
              text="Liquid Staking V1.5"
              href="/adv-3.pdf"
              img="/images/aspects-2.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem
              title="Hashlock"
              text="Lending Adapter"
              href="/adv-4.pdf"
              img="/images/aspects-2.svg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={cn("hidden md:block", className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            transition={{ ease: "backOut", duration: 0.6 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem
              title="The Tesseract Academy"
              text="ALGM Tokenomic Audit"
              href="/adv-1.pdf"
              img="/images/aspects-1.png"
            />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.1 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem
              text="ALGM Staking"
              href="/adv-2.pdf"
              img="/images/aspects-2.svg"
            />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.2 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem
              text="Liquid Staking V1.5"
              href="/adv-3.pdf"
              img="/images/aspects-2.svg"
            />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.3 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem
              text="Lending Adapter"
              href="/adv-4.pdf"
              img="/images/aspects-2.svg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
