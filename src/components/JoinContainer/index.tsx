import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { ActionLink } from "@/components/ActionLink";
import { getRoute } from "@/constants";

export const JoinContainer = async () => {
  const t = await getTranslations("JoinOurTeam");

  return (
    <div className="w-full flex justify-center mb-32">
      <article className="flex flex-col items-center max-w-md">
        <h2 className={twMerge(`text-center mb-4`, heading2)}>{t("title")}</h2>
        <p className="font-normal text-base text-center opacity-65 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <ActionLink content={t("link")} link={getRoute("contact")} />
      </article>
    </div>
  );
};
