import { FC } from "react";

import { sen } from "@/app/fonts";

interface MiniPostProps {
  authorName: string;
  date: string;
  title: string;
}

export const MiniPost: FC<MiniPostProps> = ({ authorName, date, title }) => {
  return (
    <article className="p-8 cursor-pointer hover:bg-сosmicLatte transition-all">
      <p className="mb-2">
        By <span className="text-blue-500">{authorName}</span> | {date}
      </p>
      <h2 className={`${sen.className} font-bold text-2xl`}>{title}</h2>
    </article>
  );
};
