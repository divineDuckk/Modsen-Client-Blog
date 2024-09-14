import { FC } from "react";

import { sen } from "@/app/fonts";
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

export const AuthorsContainer: FC<AuthorsContainerProps> = ({
  atHome = false,
}) => {
  const list = atHome
    ? MOCKED_AUTHORS.slice(MIN_AUTHORS_SIZE, MAX_HOME_AUTHORS_SIZE)
    : MOCKED_AUTHORS.slice(MIN_AUTHORS_SIZE, MAX_AUTHORS_SIZE);
  return (
    <div className="mb-24">
      <h2 className={`${sen.className} text-center font-bold text-4xl mb-12`}>
        List of Authors
      </h2>
      <section className="grid grid-cols-4 gap-8">
        {list.map((author) => (
          <AuthorCard key={author.id} {...author} />
        ))}
      </section>
    </div>
  );
};
