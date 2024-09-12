import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { CATEGORY } from "@/constants";

import { Category } from "./Category";

interface CategoryContainerProps {
  title: string;
  atHome: boolean;
}

export const CategoryContainer: FC<CategoryContainerProps> = ({
  title,
  atHome,
}) => {
  const categoryClass = twMerge(
    `${sen.className} ${atHome ? "text-center" : "text-left"} font-bold text-3xl mb-12`,
  );
  return (
    <div className="w-full">
      <h2 className={categoryClass}>{title}</h2>
      <div className="flex justify-between mb-32 md:flex-row flex-col md:items-baseline items-center">
        {CATEGORY.map(({ content, icon, title }) => (
          <Category key={title} content={content} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
};
