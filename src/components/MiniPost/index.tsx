import { FC } from "react";

import { sen } from "@/app/fonts";

import { MiniPostProps } from "./types";

export const MiniPost: FC<MiniPostProps> = ({ author, date, title }) => {
  return (
    <article className="p-8 cursor-pointer hover:bg-сosmicLatte transition-all">
      <p className="mb-2">
        By <span className="text-blue-500">{author}</span> | {date}
      </p>
      <h2 className={`${sen.className} font-bold text-2xl`}>{title}</h2>
    </article>
  );
};
