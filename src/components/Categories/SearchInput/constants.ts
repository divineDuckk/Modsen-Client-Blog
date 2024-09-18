import { object, string } from "yup";

import { TAGS } from "@/constants";
import { localeType } from "@/types";

const schemes = {
  ru: object({
    tag: string().oneOf(TAGS, "Неправильный тег"),
  }),
  en: object({
    tag: string().oneOf(TAGS, "Invalid tag"),
  }),
};

export const getSchema = (locale: localeType) => {
  return schemes[locale];
};
