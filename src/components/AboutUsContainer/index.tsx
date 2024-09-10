import Link from "next/link";
import { FC } from "react";

import { sen } from "@/app/fonts";
import { ABOUT_US_ROUTE } from "@/constants";

import { AboutUsContainerProps } from "./types";

export const AboutUsContainer: FC<AboutUsContainerProps> = ({ atHome }) => {
  return (
    <div className="w-full mb-32">
      {atHome && (
        <div className="w-full h-6 flex">
          <span className="w-1/3 h-full inline-block" />
          <span className="w-2/3 h-full bg-goldenYellow inline-block" />
          <span className="w-1/3 h-full bg-purple-700 inline-block" />
        </div>
      )}
      <div
        className={`py-24 flex ${atHome ? "flex-row" : "flex-col-reverse items-center"} gap-14 justify-center bg-magnolia`}
      >
        <div className="max-w-lg">
          <p className="font-semibold text-base text-сharlestonGreen uppercase mb-6 tracking-widest">
            {atHome ? "About us" : "Our Vision"}
          </p>
          <h2
            className={`${sen.className} font-bold text-4xl text-сharlestonGreen mb-4 leading-normal`}
          >
            {atHome
              ? "We are a community of content writers who share their learnings"
              : "A platform that empowers individuals to improve"}
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
              className={`${sen.className} font-bold text-blue-700`}
              href={ABOUT_US_ROUTE}
            >
              {"Read More >"}
            </Link>
          )}
        </div>
        <div className="max-w-lg">
          <p className="font-semibold text-base text-сharlestonGreen mb-6 tracking-widest">
            OUR MISSION
          </p>
          <h2
            className={`${sen.className} font-bold text-3xl text-сharlestonGreen mb-4 leading-normal`}
          >
            Creating valuable content for creatives all around the world
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
