import { PropsWithClassName } from "@/types";
import { FC, MouseEventHandler } from "react";
import cn from "clsx";
import styles from "./Button.module.css";

type Props = {
  type?: "standart" | "primary" | "secondary";
  size?: "small" | "normal" | "big";
  title?: string;
  icon?: JSX.Element;
  onClick?: MouseEventHandler;
};

export const Button: FC<PropsWithClassName<Props>> = ({
  className,
  type = "primary",
  size = "normal",
  title,
  icon,
  onClick
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles[type]]: type,
        [styles[size]]: size,
        [styles.onlyIcon]: !title && icon,
      })}
      onClick={onClick}
    >
      {title}
      {icon}
    </button>
  );
};
