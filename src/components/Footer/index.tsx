import { getTranslations } from "next-intl/server";

import { FOOTER_LINKS } from "@/constants";
import { Link } from "@/i18n/routing";

import { LINKS } from "./constants";
import { EmailSendler } from "./EmailSendler";

export const Footer = async () => {
  const t = await getTranslations("Navigation");

  return (
    <div className="w-full mx-auto bg-сharcoalBlue flex justify-center">
      <footer className="w-full max-w-1440 flex flex-col px-9 bg-сharcoalBlue mt-14">
        <div className="w-full flex justify-between mb-12 items-center flex-wrap">
          <h2 className="font-bold text-2xl text-white">{t("title")}</h2>
          <ul className="flex gap-6 items-center text-white flex-wrap">
            {FOOTER_LINKS.map(({ link, title }) => (
              <li
                className="text-base font-normal cursor-pointer hover:text-shadow-white transition-all"
                key={title}
              >
                <Link href={link}>{t(title.toLowerCase())}</Link>
              </li>
            ))}
          </ul>
        </div>
        <EmailSendler />
        <div className="flex justify-between mb-14">
          <div>
            <p className="font-normal text-base text-white opacity-70">
              Finstreet 118 2561 Fintown
            </p>
            <p className="font-normal text-base text-white opacity-70">
              Hello@finsweet.com 020 7993 2905
            </p>
          </div>
          <ul className="flex gap-6 items-center ">
            {LINKS.map(({ icon, link }) => (
              <li key={link} className="w-4 h-4">
                <a href={link}>{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};
