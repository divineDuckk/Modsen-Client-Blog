"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Modal } from "@/components/Modal";
import { Video } from "@/components/Video";
import { HEADER_LINKS } from "@/constants";
import { Link } from "@/i18n/routing";

export const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const t = useTranslations("Navigation");

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const toogleBurger = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  const handleBurgerClose = () => {
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    if (isBurgerOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isBurgerOpen]);

  return (
    <div className="w-full mx-auto bg-сharcoalBlue flex justify-center">
      <header className="w-full max-w-1440 flex justify-between px-9 bg-сharcoalBlue items-center gap-3 h-20">
        <h2 className="font-bold text-2xl text-white">{t("title")}</h2>
        <ul
          className={twMerge(
            "flex gap-6 items-center fixed bg-сharcoal top-0 -left-60 h-full pt-10 z-40 text-white flex-col lg:flex-row lg:static lg:bg-transparent lg:pt-0",
            "transition-transform duration-500 ease-in-out",
            isBurgerOpen && "translate-x-full w-full max-w-56",
          )}
        >
          <li
            data-testid="langSwitcher"
            className="hover:bg-cyan-600 hover:lg:bg-transparent lg:p-0 p-2 transition-all flex w-full justify-center cursor-pointer"
          >
            <LanguageSwitcher />
          </li>
          {HEADER_LINKS.map(({ link, title }) => (
            <li
              className={twMerge(
                "text-base text-nowrap font-normal hover:text-shadow-white transition-all flex w-full justify-center cursor-pointer",
                "hover:bg-cyan-600 hover:lg:bg-transparent lg:p-0 p-2",
              )}
              key={title}
              onClick={handleBurgerClose}
            >
              <Link data-testid={`${title}-Test`} href={link}>
                {t(title.toLowerCase())}
              </Link>
            </li>
          ))}
          <li className="w-full flex justify-center">
            <button
              onClick={handlePopupOpen}
              className={twMerge(
                `cursor-pointer px-12 py-4 bg-white text-сharcoalBlue text-lg font-bold hover:bg-orange-100 transition-all`,
                sen.className,
                "whitespace-nowrap w-full",
              )}
            >
              {t("videoAboutUs")}
            </button>
          </li>
        </ul>
        {isBurgerOpen && (
          <div
            className="w-full h-full absolute top-0 left-0 bg-dark"
            onClick={handleBurgerClose}
          />
        )}
        <button
          className="w-7 h-6 flex-col justify-between flex lg:hidden"
          onClick={toogleBurger}
        >
          <div className="w-full h-1 bg-white transition-transform duration-300" />
          <div className="w-full h-1 bg-white transition-transform duration-300" />
          <div className="w-full h-1 bg-white transition-transform duration-300" />
        </button>
      </header>
      {isPopupOpen && (
        <Modal onClose={handlePopupClose}>
          <Video />
        </Modal>
      )}
    </div>
  );
};
