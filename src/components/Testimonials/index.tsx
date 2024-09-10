import { sen } from "@/app/fonts";
import { Carousel } from "@/components/Carousel";
import { REVIEWS } from "@/constants";

import { Review } from "./Review";

export const Testimonials = () => {
  return (
    <div className="flex flex-col items-center bg-linen justify-center mb-32 xl:flex-row">
      <div className="pr-20  max-w-96 mt-20 h-fit">
        <h3 className="font-semibold text-base tracking-widest text-сharlestonGreen mb-3">
          TESTIMONIALS
        </h3>
        <h2 className={`${sen.className} font-bold text-4xl mb-4`}>
          What people say about our blog
        </h2>
        <p className="font-normal text-base text-сharlestonGreen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="flex justify-center pl-20 mt-20 mb-20 border-0 xl:border-l-2 border-solid border-l-gray-200 ">
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
