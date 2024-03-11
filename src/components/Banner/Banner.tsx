import { PropsWithClassName } from "@/types";
import { FC, ReactNode } from "react";
import cn from "clsx";
import styles from "./Banner.module.css";
import { Button } from "@/components/ui";
import { ArrRight } from "@/components/icons";

type Props = {
  children: ReactNode;
};

export const Banner: FC<PropsWithClassName<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.bg}>
        {children}
        <div className="flex flex-col mt-auto pb-6 px-4 lg:px-[180px]">
          <h1 className="text-4xl lg:text-[100px] lg:leading-[104px] font-medium leading-10 text-white w-full max-w-[290px] sm:max-w-full lg:max-w-[800px]">
            Liquidity for your staking and farming assets
          </h1>
          <p className="mt-3 lg:mt-5 text-base lg:text-xl leading-6">
            Stay liquid while staking or farming on DEXs
          </p>

          <div className="lg:flex lg:justify-between lg:items-center mt-5 lg:mt-10">
            <Button
              type="standart"
              title="Participate now"
              icon={<ArrRight />}
            />

            <div className={styles.footer}>
              <p className={styles.footerText}>Total value locked</p>
              <p className={styles.footerPrice}>$12,986,977</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className="px-4 lg:px-[180px] flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
          <p>Check out our new version and roadmap for 2024</p>

          <Button title="View Roadmap" type="secondary" size="big" />
        </div>
      </div>
    </div>
  );
};
