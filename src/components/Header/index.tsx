"use client";

import Link from "next/link";
import { useState } from "react";

import { sen } from "@/app/fonts";
import { Modal } from "@/components/Modal";
import { Video } from "@/components/Video";
import { HEADER_LINKS } from "@/constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full mx-auto bg-сharcoalBlue flex justify-center">
      <header className="w-full max-w-1440 flex justify-between px-9 bg-сharcoalBlue items-center h-20">
        <h2 className="font-bold text-2xl text-white">Modsen Client Blog</h2>
        <ul className="flex gap-6 items-center text-white">
          {HEADER_LINKS.map(({ link, title }) => (
            <li
              className="text-base font-normal cursor-pointer hover:text-shadow-white transition-all"
              key={title}
            >
              <Link href={link}>{title}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleOpen}
              className={`cursor-pointer px-12 py-4 bg-white text-сharcoalBlue text-lg font-bold ${sen.className} hover:bg-orange-100 transition-all`}
            >
              Video about us
            </button>
          </li>
        </ul>
      </header>
      {isOpen && (
        <Modal onClose={handleClose}>
          <Video />
        </Modal>
      )}
    </div>
  );
};
