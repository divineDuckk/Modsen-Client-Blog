import { FC } from "react";

import { heading6 } from "@/app/classes";

interface HintProps {
  tags: string[];
  handleClick: (tag: string) => () => void;
}

export const Hint: FC<HintProps> = ({ tags, handleClick }) => {
  return (
    <ul className="w-full list-none bg-white z-10 absolute top-full py-3 border border-solid border-gray-400 rounded-md">
      {tags.map((tag) => (
        <li
          onClick={handleClick(tag)}
          key={tag}
          className={`${heading6} cursor-pointer hover:bg-linen px-3`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
