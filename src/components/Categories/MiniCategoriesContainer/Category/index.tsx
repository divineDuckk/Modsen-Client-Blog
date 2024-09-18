"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading3 } from "@/app/classes";
import { getRoute } from "@/constants";
import { photoType } from "@/types";

interface CategoryProps {
  title: string;
  icon: photoType;
}

export const Category: FC<CategoryProps> = ({ title, icon }) => {
  const { category } = useParams();

  const isActive = category === title;
  const categoryClass = twMerge(
    `flex items-center gap-4 p-6 hover:bg-whiteSmoke transition-all cursor-pointer`,
    `${isActive && "bg-goldenYellow"}`,
  );

  return (
    <Link className={categoryClass} href={`${getRoute("category")}${title}`}>
      <div className="p-3 bg-сosmicLatte rounded-md">
        <Image src={icon} alt="category icon" />
      </div>
      <h3 className={heading3}>{title}</h3>
    </Link>
  );
};
