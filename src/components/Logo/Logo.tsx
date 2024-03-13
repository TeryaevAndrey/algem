import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="w-[115px] h-[36px] lg:w-[138px] lg:h-[44px]" href="/">
      <Image
        className="w-full h-full"
        src="/logo.svg"
        alt="logo"
        width={0}
        height={0}
      />
    </Link>
  );
};
