import { PropsWithClassName } from "@/types";
import { FC, ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  title?: string | JSX.Element;
  classNameTitle?: string;
};

export const SectionWrapper: FC<PropsWithClassName<Props>> = ({
  className,
  classNameTitle,
  children,
  title,
}) => {
  return (
    <section
      className={cn("py-16 lg:py-[164px] px-4 lg:px-[50px] xl:px-[180px]", className)}
    >
      <h2
        className={cn(
          "text-[32px] leading-[36px] lg:text-[64px] lg:leading-[70px] text-base-content-100 [&>span]:text-base-content-300",
          classNameTitle
        )}
      >
        {title}
      </h2>

      <div className="mt-8 lg:mt-16">{children}</div>
    </section>
  );
};
