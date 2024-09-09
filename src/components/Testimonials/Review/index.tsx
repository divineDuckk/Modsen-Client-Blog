"use client";

import Image from "next/image";
import { FC } from "react";

import { sen } from "@/app/fonts";

import { ReviewProps } from "./types";

export const Review: FC<ReviewProps> = ({
  city,
  country,
  name,
  photo,
  review,
}) => {
  return (
    <article className="w-full flex-shrink-0">
      <h2 className={`${sen.className} mb-28 font-bold text-2xl max-w-md`}>
        {review}
      </h2>
      <div className="flex gap-4 items-center mb-4">
        <Image src={photo} alt={`${name} photo`} />
        <div>
          <h3 className={`${sen.className} font-bold text-2xl`}>{name}</h3>
          <p className="font-normal text-base opacity-65">
            {city}, {country}
          </p>
        </div>
      </div>
    </article>
  );
};
