import { object, string } from "yup";

import { localeType } from "@/types";

const schemes = {
  ru: object({
    email: string()
      .email("Введите корректный email")
      .required("Email обязателен"),
  }).required(),
  en: object({
    email: string().email("Uncorrect email").required("Email is required"),
  }).required(),
};

export const getSchema = (locale: localeType) => {
  return schemes[locale];
};
