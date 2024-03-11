import { PropsWithClassName, PropsWithSizes } from "@/types";
import { FC } from "react";

export const ArrRight: FC<PropsWithClassName<PropsWithSizes>> = ({className, width = 24, height = 24}) => {
  return (
    <svg
    className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_10311_1084)">
        <path
          d="M13.6885 6.5L18.4998 12L13.6885 17.5"
          stroke="#020202"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1232 12H5.5"
          stroke="#020202"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10311_1084">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
