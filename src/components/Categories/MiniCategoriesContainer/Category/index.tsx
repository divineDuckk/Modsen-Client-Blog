"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading3 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
import { photoType } from "@/types";

interface CategoryProps {
  title: string;
  icon: photoType;
}

export const Category: FC<CategoryProps> = ({ title, icon }) => {
  const { category } = useParams();
  const t = useTranslations("Categories");

  const isActive = category === title;
  const categoryClass = twMerge(
    `flex items-center gap-4 p-6 hover:bg-whiteSmoke transition-all cursor-pointer`,
    `${isActive && "bg-goldenYellow"}`,
    "max-w-72 w-full",
  );

  return (
    <Link className={categoryClass} href={`${getRoute("category")}${title}`}>
      <div className="p-3 bg-сosmicLatte rounded-md w-12 h-12">
        <Image src={icon} alt="category icon" />
      </div>
      <h3 className={heading3}>{t(title)}</h3>
    </Link>
  );
};
