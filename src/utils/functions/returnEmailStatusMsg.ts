import { localeType } from "@/types";

export const returnEmailStatusMsg = (
  sending: boolean,
  success: boolean,
  initialMsg: string,
  locale: localeType,
) => {
  if (sending) return locale === "ru" ? "Отправка..." : "Sending...";
  else if (success) return locale === "ru" ? "Успех" : "Success";
  else return initialMsg;
};
