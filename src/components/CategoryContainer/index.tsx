import { FC } from "react";

import { sen } from "@/app/fonts";
import { CATEGORY } from "@/constants";

import { Category } from "./Category";
import { CategoryContainerProps } from "./types";

export const CategoryContainer: FC<CategoryContainerProps> = ({
  title,
  atHome,
}) => {
  return (
    <div>
      <h2
        className={`${sen.className} ${atHome ? "text-center" : "text-left"} font-bold text-3xl mb-12`}
      >
        {title}
      </h2>
      <div className="flex justify-between mb-32">
        {CATEGORY.map(({ content, icon, title }) => (
          <Category key={title} content={content} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
};
