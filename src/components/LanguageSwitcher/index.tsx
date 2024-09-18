"use client";

import { useTranslations, useLocale } from "next-intl";

import { usePathname } from "@/i18n/routing";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Language");

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    const newPathname = `/${newLocale}${pathname.substring(locale?.length + 1)}`;
    window.location.href = newPathname;
  };

  return (
    <button
      className="text-base font-normal cursor-pointer hover:text-shadow-white transition-all"
      onClick={switchLanguage}
    >
      {t("lan")}
    </button>
  );
};
