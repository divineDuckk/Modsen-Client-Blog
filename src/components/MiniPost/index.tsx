import { FC } from "react";

import { heading4 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";

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
        <h2 className={heading4}>{title}</h2>
      </Link>
    </article>
  );
};
