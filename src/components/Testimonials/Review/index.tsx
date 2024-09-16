"use client";

import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { photoType } from "@/types";

export interface ReviewProps {
  review: string;
  city: string;
  country: string;
  name: string;
  photo: photoType;
}

export const Review: FC<ReviewProps> = ({
  city,
  country,
  name,
  photo,
  review,
}) => {
  return (
    <article className="w-full flex-shrink-0">
      <h2
        className={twMerge(` mb-28 font-bold text-2xl max-w-md`, sen.className)}
      >
        {review}
      </h2>
      <div className="flex gap-4 items-center mb-4">
        <Image src={photo} alt={`${name} photo`} />
        <div>
          <h3 className={twMerge(`font-bold text-2xl`, sen.className)}>
            {name}
          </h3>
          <p className="font-normal text-base opacity-65">
            {city}, {country}
          </p>
        </div>
      </div>
    </article>
  );
};
