import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { CATEGORY } from "@/constants";

import { Category } from "./Category";

interface CategoryContainerProps {
  title: string;
  atHome?: boolean;
}

export const CategoryContainer: FC<CategoryContainerProps> = ({
  title,
  atHome = false,
}) => {
  const categoryClass = twMerge(
    `${sen.className}`,
    `${atHome ? "text-center" : "text-left mt-16"}`,
    "font-bold text-3xl mb-12",
  );

  return (
    <div className="w-full mb-8">
      <h2 className={categoryClass}>{title}</h2>
      <div className="xl:flex xl:justify-between mb-32 md:grid md:grid-cols-2 justify-items-center gap-4 grid grid-cols-1">
        {CATEGORY.map(({ content, icon, title }) => (
          <Category key={title} content={content} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
};
