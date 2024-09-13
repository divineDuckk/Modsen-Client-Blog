import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { sen } from "@/app/fonts";
import { getRoute } from "@/constants";
import { Post } from "@/interfaces/post";

interface PostCardProps extends Omit<Post, "category"> {}

export const PostCard: FC<PostCardProps> = ({
  author,
  date,
  imgUrl,
  content,
  title,
  id,
}) => {
  const { name, id: authorId } = author;
  return (
    <article className="max-w-sm hover:bg-linen transition-all duration-300 flex flex-col">
      <Link href={`${getRoute("blogPost")}${id}`}>
        <Image
          src={imgUrl}
          alt={`${name} post`}
          className="mb-8 object-fill max-w-sm  hover:brightness-90 transition-all duration-300 h-300"
        />
      </Link>
      <p className="font-medium text-sm text-сharcoal mb-4">
        By{" "}
        <Link
          href={`${getRoute("author")}${authorId}`}
          className="text-blue-800"
        >
          {name}
        </Link>{" "}
        | {date}
      </p>
      <div className="flex flex-col justify-between h-full">
        <h2 className={`${sen.className} font-bold text-3xl mb-4`}>{title}</h2>
        <p className="text-base font-normal text-сharcoalBlue opacity-85">
          {content}
        </p>
      </div>
    </article>
  );
};
