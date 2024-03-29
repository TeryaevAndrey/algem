import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { ArrRight } from "../icons";
import { FC } from "react";
import { PropsWithClassName } from "@/types";
import cn from "clsx";
import { SubscribeForm } from "..";

export const Footer: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row px-4 pt-12 pb-8 rounded-t-2xl bg-base-content-100 text-white gap-8 lg:flex-wrap w-full lg:items-start lg:px-[50px] xl:px-[180px] lg:pt-16 lg:pb-12 lg:gap-16",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 lg:basis-[calc(10%-32px)]">
        <Link className="w-[115px] h-[36px]" href="/">
          <Image
            className="w-full h-full"
            src="/logo-small.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <Link href="#">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path
                d="M16.9309 1.64162C15.6562 1.05674 14.2892 0.625801 12.86 0.378965C12.8339 0.3742 12.8079 0.386114 12.7945 0.409903C12.6187 0.722598 12.424 1.13049 12.2876 1.45111C10.7504 1.22096 9.22101 1.22096 7.7153 1.45111C7.5789 1.12338 7.3771 0.722598 7.2005 0.409903C7.1871 0.386895 7.16108 0.374981 7.13507 0.378965C5.70663 0.624981 4.33968 1.05592 3.06413 1.64162C3.05308 1.64639 3.04362 1.65432 3.03733 1.66463C0.444522 5.53826 -0.265791 9.3167 0.0826466 13.0483C0.0842091 13.0665 0.0944826 13.084 0.108662 13.0951C1.81933 14.3513 3.47644 15.114 5.10273 15.6195C5.12874 15.6275 5.15632 15.618 5.17288 15.5965C5.55757 15.0712 5.9005 14.5172 6.19452 13.9347C6.21187 13.9006 6.1953 13.8601 6.15983 13.8466C5.61589 13.6403 5.09796 13.3887 4.59972 13.103C4.5603 13.08 4.55714 13.0237 4.59343 12.9967C4.69827 12.9181 4.80315 12.8363 4.90327 12.7538C4.9214 12.7387 4.94663 12.7356 4.96792 12.7451C8.24105 14.2395 11.7846 14.2395 15.0191 12.7451C15.0404 12.7347 15.0656 12.7379 15.0845 12.753C15.1847 12.8355 15.2895 12.9181 15.3951 12.9966C15.4314 13.0236 15.429 13.08 15.3896 13.103C14.8914 13.3942 14.3735 13.6403 13.8287 13.8458C13.7933 13.8593 13.7775 13.9006 13.7949 13.9347C14.0952 14.5164 14.4382 15.0703 14.8157 15.5957C14.8315 15.6179 14.8599 15.6275 14.8859 15.6195C16.5201 15.114 18.1772 14.3513 19.8878 13.095C19.9028 13.0839 19.9123 13.0672 19.9139 13.049C20.3309 8.7349 19.2154 4.98744 16.9568 1.66537C16.9514 1.65432 16.9419 1.64639 16.9309 1.64162ZM6.68339 10.7761C5.69796 10.7761 4.88597 9.87143 4.88597 8.76033C4.88597 7.64924 5.68218 6.74455 6.68339 6.74455C7.69241 6.74455 8.49655 7.65721 8.48077 8.76033C8.48077 9.87143 7.68452 10.7761 6.68339 10.7761ZM13.329 10.7761C12.3436 10.7761 11.5316 9.87143 11.5316 8.76033C11.5316 7.64924 12.3278 6.74455 13.329 6.74455C14.338 6.74455 15.1421 7.65721 15.1264 8.76033C15.1264 9.87143 14.3381 10.7761 13.329 10.7761Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_10332_2079)">
                <path
                  d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10332_2079">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_10332_2081)">
                <path
                  d="M19.9998 1.97268L16.8365 17.9211C16.8365 17.9211 16.3944 19.027 15.1776 18.4961L7.84514 12.884C8.83069 11.9981 16.4764 5.12425 16.8108 4.81253C17.3276 4.33011 17.0069 4.043 16.4061 4.40784L5.11272 11.5797L0.75569 10.1129C0.75569 10.1129 0.0697526 9.86956 0.00373695 9.3387C-0.0626693 8.80784 0.777956 8.52034 0.777956 8.52034L18.5401 1.55237C18.5401 1.55237 19.9998 0.910966 19.9998 1.97268Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10332_2081">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 lg:basis-[calc(45%-32px)]">
        <div className="flex flex-col gap-2 lg:gap-3 text-base font-normal">
          <h6 className="mb-2 font-semibold">Resources</h6>

          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://blog.algem.io"
          >
            Blog
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://docs.algem.io"
          >
            Docs
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://github.com/AlgemDeFi/media-kit"
          >
            Brand assets
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://github.com/AlgemDeFi/audits"
          >
            Audits
          </Link>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          <h6 className="mb-2">Products</h6>

          <p className="w-max">Liquid Farming</p>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://app.algem.io/liquid-staking"
          >
            Liquid Staking
          </Link>
          <p className="w-max">Liquid Crowdloan</p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          <h6 className="mb-2">About</h6>

          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://www.algem.io/privacy-policy"
          >
            Privacy policy
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://www.algem.io/terms-of-use"
          >
            Terms of use
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:h-[2px] after:left-0 after:w-0 after:-bottom-2 after:ease-linear after:duration-100 after:bg-white ease-linear duration-100 w-max hover:after:w-full"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9LxCHcSEM52CGPqCXTBY53k2zo0M5TmpOHFCbp5Na7HcDCg/viewform?usp=sf_link"
          >
            Feedback and suggestions
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4 text-base lg:basis-[calc(20%-32px)] flex-grow xl:min-w-[360px] 2xl:xl:max-w-[360px] 2xl:ml-auto">
        <h5 className="mb-1 lg:mb-2 font-semibold">
          Stay up to date with Algem
        </h5>

        <p>We value your inbox: no spam, only important news, and insights.</p>

        <SubscribeForm />

        <p className="text-xs">
          {"Algem's"}{" "}
          <Link
            className="underline"
            href="https://www.algem.io/privacy-policy"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="https://www.algem.io/terms-of-use">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>

      <div className="flex items-center justify-between w-full lg:basis-[100%]">
        <p className="text-sm text-[#7B7C7F]">© 2024 Algem</p>

        <div className="items-center gap-4 hidden lg:flex">
          <Link href="https://discord.gg/Y7fQNdevV2">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path
                d="M16.9309 1.64162C15.6562 1.05674 14.2892 0.625801 12.86 0.378965C12.8339 0.3742 12.8079 0.386114 12.7945 0.409903C12.6187 0.722598 12.424 1.13049 12.2876 1.45111C10.7504 1.22096 9.22101 1.22096 7.7153 1.45111C7.5789 1.12338 7.3771 0.722598 7.2005 0.409903C7.1871 0.386895 7.16108 0.374981 7.13507 0.378965C5.70663 0.624981 4.33968 1.05592 3.06413 1.64162C3.05308 1.64639 3.04362 1.65432 3.03733 1.66463C0.444522 5.53826 -0.265791 9.3167 0.0826466 13.0483C0.0842091 13.0665 0.0944826 13.084 0.108662 13.0951C1.81933 14.3513 3.47644 15.114 5.10273 15.6195C5.12874 15.6275 5.15632 15.618 5.17288 15.5965C5.55757 15.0712 5.9005 14.5172 6.19452 13.9347C6.21187 13.9006 6.1953 13.8601 6.15983 13.8466C5.61589 13.6403 5.09796 13.3887 4.59972 13.103C4.5603 13.08 4.55714 13.0237 4.59343 12.9967C4.69827 12.9181 4.80315 12.8363 4.90327 12.7538C4.9214 12.7387 4.94663 12.7356 4.96792 12.7451C8.24105 14.2395 11.7846 14.2395 15.0191 12.7451C15.0404 12.7347 15.0656 12.7379 15.0845 12.753C15.1847 12.8355 15.2895 12.9181 15.3951 12.9966C15.4314 13.0236 15.429 13.08 15.3896 13.103C14.8914 13.3942 14.3735 13.6403 13.8287 13.8458C13.7933 13.8593 13.7775 13.9006 13.7949 13.9347C14.0952 14.5164 14.4382 15.0703 14.8157 15.5957C14.8315 15.6179 14.8599 15.6275 14.8859 15.6195C16.5201 15.114 18.1772 14.3513 19.8878 13.095C19.9028 13.0839 19.9123 13.0672 19.9139 13.049C20.3309 8.7349 19.2154 4.98744 16.9568 1.66537C16.9514 1.65432 16.9419 1.64639 16.9309 1.64162ZM6.68339 10.7761C5.69796 10.7761 4.88597 9.87143 4.88597 8.76033C4.88597 7.64924 5.68218 6.74455 6.68339 6.74455C7.69241 6.74455 8.49655 7.65721 8.48077 8.76033C8.48077 9.87143 7.68452 10.7761 6.68339 10.7761ZM13.329 10.7761C12.3436 10.7761 11.5316 9.87143 11.5316 8.76033C11.5316 7.64924 12.3278 6.74455 13.329 6.74455C14.338 6.74455 15.1421 7.65721 15.1264 8.76033C15.1264 9.87143 14.3381 10.7761 13.329 10.7761Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="https://twitter.com/Algem_io">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_10332_2079)">
                <path
                  d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10332_2079">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://t.me/Algem_io">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_10332_2081)">
                <path
                  d="M19.9998 1.97268L16.8365 17.9211C16.8365 17.9211 16.3944 19.027 15.1776 18.4961L7.84514 12.884C8.83069 11.9981 16.4764 5.12425 16.8108 4.81253C17.3276 4.33011 17.0069 4.043 16.4061 4.40784L5.11272 11.5797L0.75569 10.1129C0.75569 10.1129 0.0697526 9.86956 0.00373695 9.3387C-0.0626693 8.80784 0.777956 8.52034 0.777956 8.52034L18.5401 1.55237C18.5401 1.55237 19.9998 0.910966 19.9998 1.97268Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10332_2081">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
