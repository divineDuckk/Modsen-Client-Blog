import Link from "next/link";
import { FC } from "react";

import { sen } from "@/app/fonts";

export interface ActionLinkProps {
  content: string;
  link: string;
}

export const ActionLink: FC<ActionLinkProps> = ({ content, link }) => {
  return (
    <Link
      href={link}
      className={`px-12 py-4 bg-goldenYellow font-bold text-lg ${sen.className} text-black -z-0`}
    >
      {content}
    </Link>
  );
};
