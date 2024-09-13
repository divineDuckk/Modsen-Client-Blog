import { sen } from "@/app/fonts";
import { ActionLink } from "@/components/ActionLink";
import { getRoute } from "@/constants";

export const JoinContainer = () => {
  return (
    <div className="w-full flex justify-center mb-32">
      <article className="flex flex-col items-center max-w-md">
        <h2 className={`${sen.className} font-bold text-4xl text-center mb-4`}>
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
