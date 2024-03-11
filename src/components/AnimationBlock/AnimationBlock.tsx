import { PropsWithClassName } from "@/types";
import Image from "next/image";
import { FC } from "react";
import cn from "clsx";

type Props = {
  title: string;
  suptitle: string;
  img: string;
  reverse?: boolean;
};

export const AnimationBlock: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  suptitle,
  img,
  reverse = false,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-4 lg:px-0 lg:h-screen",
        className
      )}
    >
      <div
        className={cn("flex flex-col justify-center items-center", {
          "order-1": !reverse,
          "order-2": reverse,
        })}
      >
        <div className="flex flex-col gap-3 lg:gap-10 lg:justify-center lg:max-w-[640px]">
          <p className="text-base text-base-content-primary font-medium lg:text-xl lg:leading-[30px]">
            The Liquid Farming
          </p>
          <h2 className="text-[28px] leading-[34px] lg:text-[56px] lg:leading-[64px] font-medium text-base-content-100 w-full">
            Supply your tokens to the pools on the partner DEXs
          </h2>
        </div>
      </div>
      <Image
        className={cn(
          "w-full lg:w-auto object-cover h-full rounded-xl lg:rounded-3xl",
          {
            "order-2": !reverse,
            "order-1": reverse,
          }
        )}
        src={img}
        alt="img"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
};
