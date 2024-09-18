import { useTranslations } from "next-intl";
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
    `transition-all font-bold text-sm px-9 py-3 border-2 border-solid border-gray-500 rounded-3xl hover:bg-linen transition-all`,
    ` ${isActive && "bg-goldenYellow"}`,
    `${sen.className}`,
  );
  const t = useTranslations("Tags");

  return (
    <button onClick={handleClick} className={tagClass}>
      {t(name)}
    </button>
  );
};
