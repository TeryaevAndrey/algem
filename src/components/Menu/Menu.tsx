import { PropsWithClassName } from "@/types";
import { FC } from "react";
import cn from "clsx";
import Link from "next/link";

export const Menu: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-8 text-base font-medium text-white", className)}>
      <Link href="/">Features</Link>
      <Link href="/">FAQ</Link>
      <Link href="https://docs.algem.io/">Docs</Link>
      <Link href="https://blog.algem.io/">Blog</Link>
    </div>
  );
};
