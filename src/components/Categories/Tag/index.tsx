import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";

interface TagProps {
  name: string;
  handleClick: () => void;
  isActive: boolean;
}

export const Tag: FC<TagProps> = ({ name, handleClick, isActive }) => {
  const tagClass = twMerge(
    `${sen.className} ${isActive && "bg-goldenYellow"} transition-all font-bold text-sm px-9 py-3 border-2 border-solid border-gray-500 rounded-3xl hover:bg-linen transition-all`,
  );
  return (
    <button onClick={handleClick} className={tagClass}>
      {name}
    </button>
  );
};
