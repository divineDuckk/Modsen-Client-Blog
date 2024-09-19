import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { heading1, heading2 } from "@/app/classes";

export default async function Privacy() {
  const t = await getTranslations("Privacy");
  return (
    <main className="w-full flex flex-col items-center mb-32">
      <div className="w-full bg-magnolia flex justify-center flex-col items-center mb-32">
        <h1 className={twMerge(heading1, "mb-1 mt-20")}>{t("title")}</h1>
        <p className="font-normal text-base mb-20">{t("description")}</p>
      </div>
      <div className="w-full max-w-3xl">
        <h2 className={twMerge(heading1, "mb-8")}>
          Lorem ipsum dolor sit amet
        </h2>
        <p className="font-normal text-base opacity-65 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <h3 className={twMerge(heading2, "mb-6")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h3>
        <p className="font-normal text-base opacity-65 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>{" "}
        <p className="font-normal text-base opacity-65">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
      </div>
    </main>
  );
}
