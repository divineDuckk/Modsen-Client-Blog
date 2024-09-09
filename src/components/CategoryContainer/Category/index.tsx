import Image from "next/image";
import { FC } from "react";

import { sen } from "@/app/fonts";

import { CategoryProps } from "./types";

export const Category: FC<CategoryProps> = ({ content, icon, title }) => {
  return (
    <div
      key={title}
      className="p-8 border border-solid border-gray-200 max-w-72 cursor-pointer hover:bg-goldenYellow transition-all"
    >
      <div className="w-fit rounded-lg p-3 bg-linen mb-4">
        <Image src={icon} alt="category icon" />
      </div>
      <h3 className={`${sen.className} font-bold text-3xl mb-1`}>{title}</h3>
      <p className="font-normal text-base opacity-65">{content}</p>
    </div>
  );
};
