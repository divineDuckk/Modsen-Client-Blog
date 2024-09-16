import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { heading3 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Author } from "@/interfaces/author";

import { createLinks } from "./constants";
import { LinksContainer } from "./LinksContainer";

export interface AuthorCardProps extends Author {}

export const AuthorCard: FC<AuthorCardProps> = ({
  about,
  facebookLink,
  instargamLink,
  linkedInLink,
  name,
  photo,
  twitterLink,
  id,
}) => {
  const links = createLinks({
    facebook: facebookLink,
    twitter: twitterLink,
    instagram: instargamLink,
    linkedIn: linkedInLink,
  });
  return (
    <article className="p-10 flex flex-col items-center bg-whiteSmoke hover:bg-linen transition-all max-w-xs">
      <Link href={`${getRoute("author")}${id}`} className="cursor-pointer ">
        <Image
          className="rounded-full mb-5 max-w-32"
          src={photo}
          alt={`${name} photo`}
        />
      </Link>
      <h2 className={`${heading3} mb-2`}>{name}</h2>
      <p className="mb-5 opacity-65">{about}</p>
      <LinksContainer links={links} />
    </article>
  );
};
