import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { heading1, heading5 } from "@/app/classes";
import { ContactForm } from "@/components/ContactForm";
import { MapContainer } from "@/components/MapContainer";

export default async function Contact() {
  const t = await getTranslations(["Contact", "WorkingHours"]);

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full max-w-3xl mt-32">
        <div className="text-center  mb-16">
          <h3 className="font-black text-base tracking-widest mb-4 uppercase">
            {t("Contact.subtitle")}
          </h3>
          <h1 className={twMerge(`mb-6`, heading1)}>{t("Contact.title")}</h1>
          <p className="text-base font-normal opacity-65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="w-full bg-purple-800 flex text-white justify-evenly mb-8">
          <div className="w-full max-w-72 my-12 ">
            <p className="text-sm font-normal opacity-65 w-full border-b border-solid border-gray-300 pb-4 mb-5 tracking-wide">
              {t("WorkingHours.workHours")}
            </p>
            <h2 className={twMerge(`mb-4 max-w-52`, heading5)}>
              {t("WorkingHours.weekDays")} <br /> {t("WorkingHours.time")}
            </h2>
            <p className="text-base font-normal opacity-65 ">
              {t("WorkingHours.support")}
            </p>
          </div>
          <div className="w-full max-w-72 my-12">
            <p className="text-sm font-normal opacity-65 w-full border-b border-solid border-gray-300 pb-4 mb-5 tracking-wide">
              {t("WorkingHours.contactUs")}
            </p>
            <h2 className={twMerge(`mb-4 max-w-52`, heading5)}>
              020 7993 2905
            </h2>
            <p className="text-base font-normal opacity-65 ">
              hello@finsweet.com
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <MapContainer />
    </main>
  );
}
