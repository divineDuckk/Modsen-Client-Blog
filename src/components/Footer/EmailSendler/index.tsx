"use client";

import { sen } from "@/app/fonts";

export const EmailSendler = () => {
  return (
    <section className="bg-сharcoal flex px-16 py-20 justify-between items-start mb-12">
      <h2
        className={`${sen.className} text-white font-bold text-4xl max-w-xl tracking-tight`}
      >
        Subscribe to our newsletter to get the latest updates and news
      </h2>
      <div className="flex gap-6 max-w-xl w-full">
        <input
          className="py-4 bg-transparent border border-gray-600 w-full max-w-80 pl-6 text-white pr-6"
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          className={`px-12 py-4 bg-goldenYellow font-bold text-lg ${sen.className} text-black`}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};
