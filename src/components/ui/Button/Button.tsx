import { PropsWithClassName } from "@/types";
import { FC, MouseEventHandler } from "react";
import cn from "clsx";
import styles from "./Button.module.css";
import Link from "next/link";

type Props = {
  btnType?: "button" | "submit";

  type?: "standart" | "primary" | "secondary";
  size?: "small" | "normal" | "big";
  title?: string;
  icon?: JSX.Element;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  href?: string;
};

export const Button: FC<PropsWithClassName<Props>> = ({
  className,
  btnType = "submit",
  type = "primary",
  size = "normal",
  title,
  icon,
  onClick,
  disabled = false,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link
          className={cn(styles.button, className, {
            [styles[type]]: type,
            [styles[size]]: size,
            [styles.onlyIcon]: !title && icon,

            [styles.disabled]: disabled,
          })}
          onClick={onClick}
          href={href}
          type={btnType}
        >
          {title}
          {icon}
        </Link>
      ) : (
        <button
          className={cn(styles.button, className, {
            [styles[type]]: type,
            [styles[size]]: size,
            [styles.onlyIcon]: !title && icon,

            [styles.disabled]: disabled,
          })}
          onClick={onClick}
          disabled={disabled}
          type={btnType}
        >
          {title}
          {icon}
        </button>
      )}
    </>
  );
};
