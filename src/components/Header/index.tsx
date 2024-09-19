"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Modal } from "@/components/Modal";
import { Video } from "@/components/Video";
import { HEADER_LINKS } from "@/constants";
import { Link } from "@/i18n/routing";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full mx-auto bg-сharcoalBlue flex justify-center">
      <header className="w-full max-w-1440 flex justify-between px-9 bg-сharcoalBlue items-center h-20">
        <h2 className="font-bold text-2xl text-white">{t("title")}</h2>
        <ul className="flex gap-6 items-center text-white">
          <li>
            <LanguageSwitcher />
          </li>
          {HEADER_LINKS.map(({ link, title }) => (
            <li
              className="text-base font-normal cursor-pointer hover:text-shadow-white transition-all"
              key={title}
            >
              <Link href={link}>{t(title.toLowerCase())}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleOpen}
              className={twMerge(
                `cursor-pointer px-12 py-4 bg-white text-сharcoalBlue text-lg font-bold hover:bg-orange-100 transition-all`,
                sen.className,
              )}
            >
              {t("videoAboutUs")}
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
