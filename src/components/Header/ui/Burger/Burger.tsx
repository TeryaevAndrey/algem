"use client";

import { MobMenu } from "@/components";
import { Button } from "@/components/ui";
import { useState } from "react";

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      {!isOpen ? (
        <button
          className="w-10 h-10 flex justify-center items-center"
          onClick={toggleMenu}
        >
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <Button
          onClick={toggleMenu}
          type="standart"
          size="small"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#020202"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      )}

      {isOpen && <MobMenu />}
    </div>
  );
};
