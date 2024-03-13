import { PropsWithClassName } from "@/types";
import { FC } from "react";
import cn from "clsx";
import Link from "next/link";

export const MobMenu: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute top-[calc(100%+6px)] right-0 p-1 rounded-[10px] flex flex-col gap-1 bg-white",
        className
      )}
    >
      <Link
        className="w-full h-8 rounded-lg bg-gray-1 py-1.5 px-3 text-sm font-medium text-base-content-100"
        href="#"
      >
        Features
      </Link>
      <Link
        className="w-full h-8 rounded-lg bg-gray-1 py-1.5 px-3 text-sm font-medium text-base-content-100"
        href="#"
      >
        FAQ
      </Link>
      <Link
        className="w-full h-8 rounded-lg bg-gray-1 py-1.5 px-3 text-sm font-medium text-base-content-100"
        href="https://docs.algem.io/"
      >
        Docs
      </Link>
      <Link
        className="w-full h-8 rounded-lg bg-gray-1 py-1.5 px-3 text-sm font-medium text-base-content-100"
        href="#"
      >
        Blog
      </Link>
    </div>
  );
};
