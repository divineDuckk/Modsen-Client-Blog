import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2, heading3 } from "@/app/classes";
import { sen } from "@/app/fonts";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";

export interface AboutUsContainerProps {
  atHome?: boolean;
}

export const AboutUsContainer: FC<AboutUsContainerProps> = async ({
  atHome = false,
}) => {
  const aboutClassName = twMerge(
    `py-24 flex`,
    atHome ? "flex-row" : "flex-row-reverse items-start",
    `gap-14 justify-center bg-magnolia`,
  );

  const t = await getTranslations("AboutUs");

  return (
    <div className="w-full mb-32">
      {atHome && (
        <div className="w-full h-6 flex">
          <span className="w-1/3 h-full inline-block" />
          <span className="w-2/3 h-full bg-goldenYellow inline-block" />
          <span className="w-1/3 h-full bg-purple-700 inline-block" />
        </div>
      )}
      <div className={aboutClassName}>
        <div className="max-w-lg">
          <p className="font-semibold text-base text-сharlestonGreen uppercase mb-6 tracking-widest">
            {atHome ? t("aboutUsTitle") : t("ourVision")}
          </p>
          <h2
            className={twMerge(
              `text-сharlestonGreen mb-4 leading-normal`,
              heading2,
            )}
          >
            {atHome ? t("aboutUsHeader") : t("ourVisionText")}
          </h2>
          <p className="text-base font-normal opacity-60 mb-4">
            {atHome
              ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`
              : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                 At risus viverra adipiscing at in tellus.`}
          </p>
          {atHome && (
            <Link
              className={twMerge(`font-bold text-blue-700`, sen.className)}
              href={getRoute("aboutUs")}
              data-testid="aboutUsLink"
            >
              {t("readMore")}
            </Link>
          )}
        </div>
        <div className="max-w-lg">
          <p className="font-semibold text-base text-сharlestonGreen mb-6 tracking-widest">
            {t("aboutUsTitle")}
          </p>
          <h2
            className={twMerge(
              `text-сharlestonGreen mb-4 leading-normal`,
              heading3,
            )}
          >
            {t("missionText")}
          </h2>
          <p className="text-base font-normal opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
