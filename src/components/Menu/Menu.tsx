import { PropsWithClassName } from "@/types";
import { FC } from "react";
import cn from "clsx";
import Link from "next/link";

export const Menu: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-8 text-base font-semibold text-white", className)}>
      <Link className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 hover:after:w-full" href="/">Features</Link>
      <Link className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 hover:after:w-full" href="/">FAQ</Link>
      <Link className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 hover:after:w-full" href="https://docs.algem.io/">Docs</Link>
      <Link className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 hover:after:w-full" href="https://blog.algem.io/">Blog</Link>
    </div>
  );
};
