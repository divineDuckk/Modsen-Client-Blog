import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
import { photoType } from "@/types";

interface CategoryProps {
  content: string;
  icon: photoType;
  title: string;
}

export const Category: FC<CategoryProps> = ({ content, icon, title }) => {
  return (
    <Link
      href={`${getRoute("category")}${title}`}
      className="p-8 border border-solid border-gray-200 max-w-72 cursor-pointer hover:bg-goldenYellow transition-all"
    >
      <div className="w-fit rounded-lg p-3 bg-linen mb-4">
        <Image src={icon} alt="category icon" />
      </div>
      <h3 className={twMerge(`font-bold text-3xl mb-1`, sen.className)}>
        {title}
      </h3>
      <p className="font-normal text-base opacity-65">{content}</p>
    </Link>
  );
};
