import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";
import aboutImage from "@/assets/about.png";
import hands from "@/assets/hands.png";
import threePersons from "@/assets/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";
import { AboutUsContainer } from "@/components/AboutUsContainer";
import { AuthorsContainer } from "@/components/AuthorsContainer";
import { JoinContainer } from "@/components/JoinContainer";
import { ABOUT_US_INFO } from "@/constants";

export default function About() {
  return (
    <main className="mt-20 max-w-7xl w-full">
      <div className="flex justify-center gap-24 items-center translate-y-12">
        <div className="bg-white p-16">
          <h2 className="font-medium text-base tracking-widest mb-4">
            ABOUT US
          </h2>
          <h1 className={`${sen.className} font-bold text-5xl max-w-lg`}>
            We are a team of content writers who share their learnings
          </h1>
        </div>
        <p className="bg-transparent font-normal text-base opacity-65 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex justify-center relative -z-10">
        <Image src={aboutImage} alt="about us image" />
        <div className="absolute max-w-4xl w-full bottom-0 left-32">
          <div className="flex justify-between bg-goldenYellow py-8 px-12 w-full max-w-2xl">
            {ABOUT_US_INFO.map(({ info, value }) => (
              <div key={info} className="bg-goldenYellow">
                <h2
                  className={`${sen.className} font-bold text-6xl text-сharcoalBlue tracking-tight`}
                >
                  {value}
                </h2>
                <span className="text-сharcoalBlue font-normal text-base">
                  {info}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-6 flex">
            <span className="w-1/3 h-full inline-block bg-purple-700" />
            <span className="w-2/3 h-full bg-goldenYellow inline-block" />
          </div>
        </div>
      </div>
      <AboutUsContainer />
      <div className="flex relative text-сharcoalBlue justify-between items-center mb-32">
        <div className="max-w-lg w-full">
          <h2 className={twMerge(`font-bold text-4xl mb-4`, sen.className)}>
            Our team of creatives
          </h2>
          <h3 className={twMerge(`font-bold text-2xl mb-4`, sen.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h3>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="relative">
          <div className="w-24 h-28 bg-goldenYellow absolute rounded-tl-5xl top-1/4 -left-12" />
          <Image src={hands} alt="hands image" />
        </div>
      </div>
      <div className="flex relative text-сharcoalBlue gap-16 items-center mb-32">
        <div className="relative">
          <div className="w-20 h-20 bg-purple-800 absolute rounded-full -bottom-10 left-1/4" />
          <Image src={threePersons} alt="hands image" />
        </div>
        <div className="max-w-lg w-full">
          <h2 className={twMerge(`font-bold text-4xl mb-4`, sen.className)}>
            Why we started this Blog
          </h2>
          <h3 className={twMerge(`font-bold text-2xl mb-4`, sen.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h3>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <AuthorsContainer />
      <JoinContainer />
    </main>
  );
}
