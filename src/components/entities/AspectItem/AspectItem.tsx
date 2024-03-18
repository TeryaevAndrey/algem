import { FC } from "react";
import { ArrRight } from "../../icons";
import { Button } from "../../ui";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title?: string;
  text: string;
  href: string;
  img?: string;
};

export const AspectItem: FC<Props> = ({ title, text, href, img }) => {
  return (
    <div className="p-5 rounded-2xl bg-purple-1 flex flex-col justify-between min-h-[218px]">
      <div className="flex items-center gap-1.5">
        {img && (
          <Image
            className="object-cover"
            src={img}
            alt="img"
            width={160}
            height={29}
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">{text}</p>

        <Link href={href}>
          <Button
            title="See report"
            icon={<ArrRight />}
            size="small"
            type="primary"
          />
        </Link>
      </div>
    </div>
  );
};
