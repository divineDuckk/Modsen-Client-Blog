import { FC } from "react";

import { sen } from "@/app/fonts";
import { MOCKED_AUTHORS } from "@/constants";

import { AuthorCard } from "./AuthorCard";
import { AuthorsContainerProps } from "./types";

export const AuthorsContainer: FC<AuthorsContainerProps> = ({ atHome }) => {
  const list = atHome ? MOCKED_AUTHORS.slice(0, 4) : MOCKED_AUTHORS;
  return (
    <div className="mb-24">
      <h2 className={`${sen.className} text-center font-bold text-4xl mb-12`}>
        List of Authors
      </h2>
      <section className="grid grid-cols-4 gap-8">
        {list.map(
          ({
            about,
            facebookLink,
            id,
            instargamLink,
            linkedInLink,
            name,
            photo,
            twitterLink,
          }) => (
            <AuthorCard
              about={about}
              facebookLink={facebookLink}
              instargamLink={instargamLink}
              linkedInLink={linkedInLink}
              name={name}
              photo={photo}
              twitterLink={twitterLink}
              key={id}
            />
          ),
        )}
      </section>
    </div>
  );
};
