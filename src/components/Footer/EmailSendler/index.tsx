import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";

import { EmailLogicBlock } from "./EmailLogicBlock";

export const EmailSendler = async () => {
  const t = await getTranslations("Footer");

  return (
    <section className="bg-сharcoal flex flex-col px-5 py-7 sm:px-16 sm:py-20 items-center justify-between xl:items-start mb-12 h-full md:h-64 gap-5 xl:flex-row">
      <h2 className={twMerge(`text-white max-w-xl tracking-tight`, heading2)}>
        {t("title")}
      </h2>
      <EmailLogicBlock />
    </section>
  );
};
