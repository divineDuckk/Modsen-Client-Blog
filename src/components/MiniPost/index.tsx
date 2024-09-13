import Link from "next/link";
import { FC } from "react";

import { sen } from "@/app/fonts";
import { getRoute } from "@/constants";

interface MiniPostProps {
  authorName: string;
  date: string;
  title: string;
  id: string;
}

export const MiniPost: FC<MiniPostProps> = ({
  authorName,
  date,
  title,
  id,
}) => {
  return (
    <article className="p-8 cursor-pointer hover:bg-сosmicLatte transition-all">
      <Link href={`${getRoute("blogPost")}${id}`}>
        <p className="mb-2">
          By <span className="text-blue-500">{authorName}</span> | {date}
        </p>
        <h2 className={`${sen.className} font-bold text-2xl`}>{title}</h2>
      </Link>
    </article>
  );
};
