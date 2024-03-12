import { PropsWithClassName } from "@/types";
import { FC } from "react";
import cn from "clsx";
import Link from "next/link";
import styles from "./CommunityItem.module.css";

type Props = {
  title: string;
  href: string;
  color?: "purple" | "green" | "blue" | "orange";
};

export const CommunityItem: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  href = "/",
  color = "purple",
}) => {
  return (
    <Link
      className={cn(
        "flex items-center justify-between gap-9 px-3 py-4 lg:px-4 lg:py-6 rounded-2xl border border-[#E7EAEF] w-full",
        className
      )}
      href={href}
    >
      <p className="text-2xl font-medium text-base-content-100">{title}</p>

      <div
        className={cn(styles.circle, {
          [styles[color]]: color,
        })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 18L18 6M18 6H10M18 6V14"
            stroke="#020202"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};
