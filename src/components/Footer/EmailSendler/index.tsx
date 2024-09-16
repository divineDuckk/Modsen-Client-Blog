import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";

import { EmailLogicBlock } from "./EmailLogicBlock";

export const EmailSendler = () => {
  return (
    <section className="bg-сharcoal flex flex-col px-16 py-20 items-center justify-between xl:items-start mb-12 h-64 gap-5 xl:flex-row">
      <h2 className={twMerge(`text-white max-w-xl tracking-tight`, heading2)}>
        Subscribe to our newsletter to get the latest updates and news
      </h2>
      <EmailLogicBlock />
    </section>
  );
};
