import Image from "next/image";
import Link from "next/link";
import { Logo, Menu } from "@/components";
import { Button } from "@/components/ui";
import { Burger } from "./ui";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-5 max-w-[1560px] w-full mx-auto">
      <Logo />

      <Menu />

      <div className="flex items-center gap-2">
        <Button title="Launch App" size="small" />

        <Burger />
      </div>
    </div>
  );
};
