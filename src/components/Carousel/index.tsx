"use client";

import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { BREAKPOINT, OFFSET, XS_OFFSET } from "./constants";

interface CarouselProps {
  children: JSX.Element[];
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  const [page, setPage] = useState(0);
  const [reviewSize, setReviewSize] = useState(OFFSET);
  const handleForwardClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleBackClick = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= BREAKPOINT) {
        setReviewSize(XS_OFFSET);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  const isStartPage = page === 0;
  const isEndPage = Math.abs(page - 1) === children.length;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex max-w-xs sm:max-w-lg relative pb-12 sm:pb-0">
        <div
          className="w-full  flex transition-transform duration-500"
          style={{ transform: `translateX(${page * reviewSize}px)` }}
        >
          {children}
        </div>
        <div className="flex absolute left-3 sm:left-auto sm:right-5 bottom-2 sm:bottom-3 gap-6">
          <button
            disabled={isStartPage}
            onClick={handleForwardClick}
            className={twMerge(
              `text-2xl bg-white rounded-full w-12 h-12 transition-all`,
              `${!isStartPage ? "hover:scale-125 hover:bg-black hover:text-white " : "opacity-65 cursor-not-allowed"}`,
            )}
            data-testid="carouselPrev"
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
            data-testid="carouselNext"
          >
            {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};
