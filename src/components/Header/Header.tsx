import { Logo, Menu } from "@/components";
import { Button } from "@/components/ui";
import { Burger } from "./ui";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-5 lg:px-[50px] xl:px-[180px] w-full mx-auto">
      <Logo />

      <Menu className="hidden lg:flex" />

      <div className="flex items-center gap-2">
        <Button
          className="lg:min-h-[56px] lg:!px-8 lg:!py-4"
          title="Launch App"
          size="small"
        />

        <Burger className="lg:hidden" />
      </div>
    </div>
  );
};
