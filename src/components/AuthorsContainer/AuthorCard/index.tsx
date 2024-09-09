import Image from "next/image";
import { FC } from "react";

import { sen } from "@/app/fonts";
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import linkedInIcon from "@/assets/linkedIn.svg";
import twitterIcon from "@/assets/twitter.svg";

import { AuthorCardProps } from "./types";

export const AuthorCard: FC<AuthorCardProps> = ({
  about,
  facebookLink,
  instargamLink,
  linkedInLink,
  name,
  photo,
  twitterLink,
}) => {
  const links = [
    {
      img: facebookIcon,
      link: facebookLink,
    },
    {
      img: twitterIcon,
      link: twitterLink,
    },
    {
      img: instagramIcon,
      link: instargamLink,
    },
    {
      img: linkedInIcon,
      link: linkedInLink,
    },
  ];

  return (
    <article className="p-10 flex flex-col items-center bg-whiteSmoke hover:bg-linen transition-all cursor-pointer max-w-xs">
      <Image
        className="rounded-full mb-5 max-w-32"
        src={photo}
        alt={`${name} photo`}
      />
      <h2 className={`${sen.className} text-3xl font-bold mb-2`}>{name}</h2>
      <p className="mb-5 opacity-65">{about}</p>
      <div className="flex gap-4">
        {links.map(({ img, link }) => (
          <a key={link} href={link} target="_blank">
            <Image src={img} alt="link" />
          </a>
        ))}
      </div>
    </article>
  );
};
