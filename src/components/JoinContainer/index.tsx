import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { ActionLink } from "@/components/ActionLink";
import { getRoute } from "@/constants";

export const JoinContainer = () => {
  return (
    <div className="w-full flex justify-center mb-32">
      <article className="flex flex-col items-center max-w-md">
        <h2 className={twMerge(`text-center mb-4`, heading2)}>
          Join our team to be a part of our story
        </h2>
        <p className="font-normal text-base text-center opacity-65 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <ActionLink content="Join Now" link={getRoute("contact")} />
      </article>
    </div>
  );
};
