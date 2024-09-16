import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";

export interface ActionLinkProps {
  content: string;
  link: string;
}

export const ActionLink: FC<ActionLinkProps> = ({ content, link }) => {
  return (
    <Link
      href={link}
      className={twMerge(
        `px-12 py-4 bg-goldenYellow font-bold text-lg text-black -z-0`,
        sen.className,
      )}
    >
      {content}
    </Link>
  );
};
