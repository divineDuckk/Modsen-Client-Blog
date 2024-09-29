import { useTranslations } from "next-intl";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading6 } from "@/app/classes";

interface HintProps {
  tags: string[];
  handleClick: (tag: string) => () => void;
}

export const Hint: FC<HintProps> = ({ tags, handleClick }) => {
  const t = useTranslations("Tags");

  return (
    <ul
      className="w-full list-none bg-white z-10 absolute top-full py-3 border border-solid border-gray-400 rounded-md"
      data-testid="hint"
    >
      {tags.map((tag) => (
        <li
          onClick={handleClick(t(tag))}
          key={tag}
          className={twMerge(`cursor-pointer hover:bg-linen px-3`, heading6)}
        >
          {t(tag)}
        </li>
      ))}
    </ul>
  );
};
