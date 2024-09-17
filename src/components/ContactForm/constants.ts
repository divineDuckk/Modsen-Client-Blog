import { object, string } from "yup";

import { localeType } from "@/types";

export const EN_QUERY_RALATED = [
  "Techninical issues",
  "Perfomance issues",
  "Internalization issues",
];

export const getSchema = (locale: localeType) => {
  if (locale === "ru") {
    return object().shape({
      email: string()
        .email("Не правильный формат почты")
        .required("Почта обязательна"),
      name: string()
        .required("Имя обязательно")
        .min(3, "Минимум 3 символа")
        .max(50, "Максимум 50 символов"),
      selectedValue: string()
        .required("Выберите запрос")
        .not(["Недавние запросы"], "Выберите запрос"),
      message: string()
        .required("Сообщение обязательно")
        .min(5, "Минимум 5 символов")
        .max(100, "Максимум 100 символов"),
    });
  }
  return object().shape({
    email: string().email("Invalid email format").required("Email is required"),
    name: string()
      .required("Full Name is required")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbold"),
    selectedValue: string()
      .required("Please select a query")
      .not(["Query Related"], "Please select a query"),
    message: string()
      .required("Message is required")
      .min(5, "Minimum 5 symblos")
      .max(100, "Maximum 100 symbols"),
  });
};

export const RU_QUERY_RALATED = [
  "Технические проблемы",
  "Проблемы с производительностью",
  "Проблемы с переводом",
];
