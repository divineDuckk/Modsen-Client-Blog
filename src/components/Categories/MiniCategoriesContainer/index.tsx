import { useTranslations } from "next-intl";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { CATEGORY } from "@/constants";

import { Category } from "./Category";

export const MiniCategoriesContainer: FC = () => {
  const t = useTranslations<"CategorySection" | "Categories">();

  return (
    <div className="mb-12">
      <h2 className={twMerge(`mb-10`, heading2)}>
        {t("CategorySection.categories")}
      </h2>
      <section className="flex flex-col gap-6">
        {CATEGORY.map(({ title, icon }) => (
          <Category icon={icon} title={t(`Categories.${title}`)} key={title} />
        ))}
      </section>
    </div>
  );
};
