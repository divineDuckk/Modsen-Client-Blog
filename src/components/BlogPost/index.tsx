import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
import { Post } from "@/interfaces/post";

interface BlogPostProps extends Omit<Post, "author" | "date" | "tags"> {
  atCategoryPage?: boolean;
}

export const BlogPost: FC<BlogPostProps> = ({
  category,
  content,
  id,
  imgUrl,
  title,
  atCategoryPage = false,
}) => {
  const imgClass = twMerge(
    `object-cover w-full`,
    `${atCategoryPage ? "max-w-80 h-80" : "max-w-md h-full max-h-80"}`,
  );
  const contentClass = twMerge(
    `${atCategoryPage ? "xl:max-w-lg h-80  flex flex-col justify-center" : "xl:max-w-2xl"}`,
    `h-full max-w-sm`,
  );

  return (
    <Link
      href={`${getRoute("blogPost")}${id}`}
      className="flex flex-col md:flex-row gap-8 items-center hover:bg-linen transition-all cursor-pointer"
      data-testid="post"
    >
      <div className={imgClass}>
        <Image src={imgUrl} alt="post image" className="h-full object-cover" />
      </div>
      <div className={contentClass}>
        <h3 className="font-semibold text-base text-blue-800 tracking-widest mb-7 uppercase">
          {category}
        </h3>
        <h2 className={twMerge(`tracking-tight mb-6 w-full`, heading2)}>
          {title}
        </h2>
        <p className="font-normal text-base opacity-65 w-full">{content}</p>
      </div>
    </Link>
  );
};
