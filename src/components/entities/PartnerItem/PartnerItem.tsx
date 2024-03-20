import { PropsWithClassName } from "@/types";
import Image from "next/image";
import { FC } from "react";

type Props = {
  img: string;
  title?: string;
  text?: string;
};

export const PartnerItem: FC<PropsWithClassName<Props>> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm h-full">
      <Image
        className="w-full object-cover rounded-t-2xl"
        src={img}
        alt={title || "img"}
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="flex flex-col gap-3 px-4 pt-5 pb-6">
        {title && (
          <h3 className="text-2xl lg:text-[28px] lg:leading-[36px] font-semibold text-base-content-100">
            {title}
          </h3>
        )}
        <p className="text-sm text-base-content-200">{text}</p>
      </div>
    </div>
  );
};
