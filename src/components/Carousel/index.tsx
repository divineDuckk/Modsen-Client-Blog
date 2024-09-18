"use client";

import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { OFFSET } from "./constants";

interface CarouselProps {
  children: JSX.Element[];
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  const [page, setPage] = useState(0);

  const handleForwardClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleBackClick = () => {
    setPage((prev) => prev - 1);
  };

  const isStartPage = page === 0;
  const isEndPage = Math.abs(page - 1) === children.length;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex max-w-lg relative">
        <div
          className="w-full flex transition-transform duration-500"
          style={{ transform: `translateX(${page * OFFSET}px)` }}
        >
          {children}
        </div>
        <div className="flex absolute right-5 bottom-3 gap-6">
          <button
            disabled={isStartPage}
            onClick={handleForwardClick}
            className={twMerge(
              `text-2xl bg-white rounded-full w-12 h-12 transition-all`,
              `${!isStartPage ? "hover:scale-125 hover:bg-black hover:text-white " : "opacity-65 cursor-not-allowed"}`,
            )}
          >
            {"<-"}
          </button>
          <button
            disabled={isEndPage}
            onClick={handleBackClick}
            className={twMerge(
              `text-2xl bg-white rounded-full w-12 h-12 transition-all`,
              `${!isEndPage ? "hover:scale-125 hover:bg-black hover:text-white " : "opacity-65 cursor-not-allowed"}`,
            )}
          >
            {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};
