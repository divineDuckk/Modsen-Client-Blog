import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { heading2 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Post } from "@/interfaces/post";

interface BlogPostProps extends Omit<Post, "author" | "date"> {}

export const BlogPost: FC<BlogPostProps> = ({
  category,
  content,
  id,
  imgUrl,
  title,
}) => {
  return (
    <Link
      href={`${getRoute("blogPost")}${id}`}
      className="flex gap-8 items-center hover:bg-linen transition-all cursor-pointer"
    >
      <div className="object-cover max-w-md max-h-80 w-full">
        <Image src={imgUrl} alt="post image" />
      </div>
      <div className="max-w-2xl">
        <h3 className="font-semibold text-base text-blue-800 tracking-widest mb-5 uppercase">
          {category}
        </h3>
        <h2 className={`${heading2} tracking-tight mb-4`}>{title}</h2>
        <p className="font-normal text-base opacity-65">{content}</p>
      </div>
    </Link>
  );
};
