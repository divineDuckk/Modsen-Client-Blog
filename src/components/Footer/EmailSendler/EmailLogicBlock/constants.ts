import { object, string } from "yup";

export const schema = object({
  email: string()
    .email("Введите корректный email")
    .required("Email обязателен"),
}).required();
