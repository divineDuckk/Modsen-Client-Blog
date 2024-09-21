import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading3 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
import { Post } from "@/interfaces/post";
import { getMonthAndYear } from "@/utils/functions/getMonthAndYear";

interface PostCardProps extends Omit<Post, "category"> {}

export const PostCard: FC<PostCardProps> = async ({
  author,
  date,
  imgUrl,
  content,
  title,
  id,
}) => {
  const { name, id: authorId } = author;
  const { remains, month } = getMonthAndYear(date);

  const t = await getTranslations("Date");

  return (
    <article className="max-w-sm hover:bg-linen transition-all duration-300 flex flex-col">
      <Link href={`${getRoute("blogPost")}${id}`}>
        <div className="object-cover">
          <Image
            src={imgUrl}
            alt={`${name} post`}
            className="mb-8 object-fill w-full max-w-sm  hover:brightness-90 transition-all duration-300 h-auto sm:h-300"
          />
        </div>
      </Link>
      <p className="font-medium text-sm text-сharcoal mb-4">
        {t("By")}{" "}
        <Link
          href={`${getRoute("author")}${authorId}`}
          className="text-blue-800"
        >
          {name}
        </Link>{" "}
        | {t(month)} {remains}
      </p>

      <div className="flex flex-col justify-between h-full">
        <h2 className={twMerge(`mb-4`, heading3)}>{title}</h2>
        <p className="text-base font-normal text-сharcoalBlue opacity-85">
          {content}
        </p>
      </div>
    </article>
  );
};
