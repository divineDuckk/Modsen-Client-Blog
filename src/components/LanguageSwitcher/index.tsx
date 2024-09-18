"use client";

import { useTranslations, useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/routing";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Language");

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    router.push(pathname, { locale: newLocale });
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
