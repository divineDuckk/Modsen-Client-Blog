import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { Carousel } from "@/components/Carousel";
import { REVIEWS } from "@/constants";

import { Review } from "./Review";

export const Testimonials = async () => {
  const t = await getTranslations("Testimonials");

  return (
    <div className="flex flex-col items-center bg-linen justify-center mb-32 xl:flex-row xl:items-start">
      <div className="pr-20 max-w-96  h-fit">
        <h3 className="font-semibold mt-20 text-base tracking-widest text-сharlestonGreen mb-3 uppercase">
          {t("testimonials")}
        </h3>
        <h2 className={twMerge("mb-4", heading2)}>{t("title")}</h2>
        <p className="font-normal text-base text-сharlestonGreen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="flex mt-20 justify-center pl-20  mb-20 border-0 xl:border-l-2 border-solid border-l-gray-200 ">
        <Carousel>
          {REVIEWS.map(({ id, review, reviewer }) => {
            const { city, country, name, photo } = reviewer;
            return (
              <Review
                city={city}
                country={country}
                name={name}
                photo={photo}
                review={review}
                key={id}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
