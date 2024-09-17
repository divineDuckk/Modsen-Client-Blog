import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { localeType } from "@/types";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as localeType)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
