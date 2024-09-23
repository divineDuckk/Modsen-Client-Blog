import { getTranslations } from "next-intl/server";
import { FC } from "react";

import { heading4 } from "@/app/classes";
import { getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
import { getMonthAndYear } from "@/utils/functions/getMonthAndYear";

interface MiniPostProps {
  authorName: string;
  date: string;
  title: string;
  id: string;
}

export const MiniPost: FC<MiniPostProps> = async ({
  authorName,
  date,
  title,
  id,
}) => {
  const t = await getTranslations("Date");
  const { remains, month } = getMonthAndYear(date);

  return (
    <article
      className="p-8 cursor-pointer hover:bg-сosmicLatte transition-all"
      data-testid="miniPost"
    >
      <Link href={`${getRoute("blogPost")}${id}`}>
        <p className="mb-2">
          {t("By")} <span className="text-blue-600">{authorName}</span> |{" "}
          {t(`${month}`)} {remains}
        </p>
        <h2 className={heading4}>{title}</h2>
      </Link>
    </article>
  );
};
