import { PropsWithClassName } from "@/types";
import Image from "next/image";
import { FC } from "react";
import cn from "clsx";

type Props = {
  title: string;
  suptitle: string;
  img: string;
  reverse?: boolean;
  btn?: JSX.Element;
};

export const AnimationBlock: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  suptitle,
  img,
  reverse = false,
  btn,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-4 lg:px-0 lg:h-screen",
        className
      )}
    >
      <div
        className={cn("flex flex-col justify-center items-start lg:items-center", {
          "lg:order-1": !reverse,
          "lg:order-2": reverse,
        })}
      >
        <div className={cn("flex flex-col gap-3 lg:gap-10 lg:justify-center lg:max-w-[640px]", {
          'lg:pl-[50px] xl:pl-0': !reverse,
          'lg:pr-[50px] xl:pr-0': reverse
        })}>
          <p className="text-base text-base-content-primary font-medium lg:text-xl lg:leading-[30px] uppercase">
            {suptitle}
          </p>
          <h2 className="text-[28px] leading-[34px] lg:text-[56px] lg:leading-[64px] font-medium text-base-content-100 w-full">
            {title}
          </h2>

          {btn}
        </div>
      </div>
      <Image
        className={cn(
          "w-full lg:w-auto object-cover h-full rounded-xl lg:rounded-3xl",
          {
            "lg:order-2 lg:rounded-r-none": !reverse,
            "lg:order-1 lg:rounded-l-none": reverse,
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
