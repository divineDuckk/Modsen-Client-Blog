import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { MOCKED_AUTHORS } from "@/constants";

import { AuthorCard } from "./AuthorCard";
import {
  MAX_AUTHORS_SIZE,
  MAX_HOME_AUTHORS_SIZE,
  MIN_AUTHORS_SIZE,
} from "./constants";

interface AuthorsContainerProps {
  atHome?: boolean;
}

export const AuthorsContainer: FC<AuthorsContainerProps> = async ({
  atHome = false,
}) => {
  const t = await getTranslations("AuthorsList");

  const list = atHome
    ? MOCKED_AUTHORS.slice(MIN_AUTHORS_SIZE, MAX_HOME_AUTHORS_SIZE)
    : MOCKED_AUTHORS.slice(MIN_AUTHORS_SIZE, MAX_AUTHORS_SIZE);
  return (
    <div className="mb-24">
      <h2 className={twMerge(`text-center mb-12`, heading2)}>{t("title")}</h2>
      <section className="grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-8 justify-items-center ">
        {list.map((author) => (
          <AuthorCard key={author.id} {...author} />
        ))}
      </section>
    </div>
  );
};
