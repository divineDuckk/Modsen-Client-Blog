import { object, string } from "yup";

import { localeType } from "@/types";

export const getSchema = (locale: localeType) => {
  if (locale === "ru") {
    return object({
      email: string()
        .email("Введите корректный email")
        .required("Email обязателен"),
    }).required();
  }
  return object({
    email: string().email("Uncorrect email").required("Email is required"),
  }).required();
};
