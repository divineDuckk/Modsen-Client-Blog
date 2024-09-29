import Image from "next/image";
import { FC } from "react";

interface LInksContainerProps {
  links: Record<string, string>[];
}

export const LinksContainer: FC<LInksContainerProps> = ({ links }) => {
  return (
    <div className="flex gap-4">
      {links.map(({ img, link }) => (
        <a key={link} href={link} target="_blank" className="cursor-pointer ">
          <Image src={img} alt="link" />
        </a>
      ))}
    </div>
  );
};
