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
            <AspectItem />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem />
          </SwiperSlide>
          <SwiperSlide>
            <AspectItem />
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
            <AspectItem />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.1 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.2 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem />
          </motion.div>
          <motion.div
            transition={{ ease: "backOut", duration: 0.6, delay: 0.3 }}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <AspectItem />
          </motion.div>
        </div>
      </div>
    </>
  );
};
