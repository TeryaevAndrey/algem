import { FC } from "react";
import styles from "./About.module.css";
import { PropsWithClassName } from "@/types";
import cn from "clsx";

export const About: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <h2 className="text-base-content-100">Algem</h2>
      <p className="text-base-content-300 w-full max-w-full lg:max-w-[905px]">
        Transforming Finance, Redefining Freedom.
      </p>
    </div>
  );
};
