/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { sen } from "@/app/fonts";
import { BLOG_POST_ROUTE } from "@/constants";

import { BlogPostProps } from "./types";

export const BlogPost: FC<BlogPostProps> = ({
  category,
  content,
  id,
  imgUrl,
  title,
}) => {
  return (
    <Link
      href={BLOG_POST_ROUTE + id}
      className="flex gap-8 items-center hover:bg-linen transition-all cursor-pointer"
    >
      <div className="object-cover max-w-md max-h-80 w-full">
        <Image src={imgUrl} alt="post image" />
      </div>
      <div className="max-w-2xl">
        <h3 className="font-semibold text-base text-blue-800 tracking-widest mb-5 uppercase">
          {category}
        </h3>
        <h2
          className={`${sen.className} font-bold text-4xl tracking-tight mb-4`}
        >
          {title}
        </h2>
        <p className="font-normal text-base opacity-65">{content}</p>
      </div>
    </Link>
  );
};
