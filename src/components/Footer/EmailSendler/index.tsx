import { sen } from "@/app/fonts";

import { EmailLogicBlock } from "./EmailLogicBlock";

export const EmailSendler = () => {
  return (
    <section className="bg-сharcoal flex flex-col px-16 py-20 items-center justify-between xl:items-start mb-12 h-64 gap-5 xl:flex-row">
      <h2
        className={`${sen.className} text-white font-bold text-4xl max-w-xl tracking-tight`}
      >
        Subscribe to our newsletter to get the latest updates and news
      </h2>
      <EmailLogicBlock />
    </section>
  );
};
