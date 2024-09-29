/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

const requestConfig: ReturnType<typeof getRequestConfig> = getRequestConfig(
  async ({ locale }) => {
    if (!routing.locales.includes(locale as any)) notFound();

    return {
      messages: (await import(`../../messages/${locale}.json`)).default,
    };
  },
);

export default requestConfig;
