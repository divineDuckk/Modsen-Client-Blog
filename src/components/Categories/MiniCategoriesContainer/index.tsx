import { useTranslations } from "next-intl";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { CATEGORY } from "@/constants";

import { Category } from "./Category";

export const MiniCategoriesContainer: FC = () => {
  const t = useTranslations("CategorySection");

  return (
    <div className="mb-12">
      <h2 className={twMerge(`mb-10 text-center xl:text-left`, heading2)}>
        {t("categories")}
      </h2>
      <section className="flex justify-center xl:justify-normal flex-row xl:flex-col gap-6 flex-wrap">
        {CATEGORY.map(({ title, icon }) => (
          <Category icon={icon} title={title} key={title} />
        ))}
      </section>
    </div>
  );
};
