import { localeType } from "@/types";
import { returnEmailStatusMsg } from "@/utils/functions/returnEmailStatusMsg";

describe("returnEmailStatusMsg", () => {
  test("should return 'Отправка...' if sending is true and locale is 'ru'", () => {
    const result = returnEmailStatusMsg(
      true,
      false,
      "Initial message",
      "ru" as localeType,
    );
    expect(result).toBe("Отправка...");
  });

  test("should return 'Sending...' if sending is true and locale is 'en'", () => {
    const result = returnEmailStatusMsg(
      true,
      false,
      "Initial message",
      "en" as localeType,
    );
    expect(result).toBe("Sending...");
  });

  test("should return 'Успех' if success is true and locale is 'ru'", () => {
    const result = returnEmailStatusMsg(
      false,
      true,
      "Initial message",
      "ru" as localeType,
    );
    expect(result).toBe("Успех");
  });

  test("should return 'Success' if success is true and locale is 'en'", () => {
    const result = returnEmailStatusMsg(
      false,
      true,
      "Initial message",
      "en" as localeType,
    );
    expect(result).toBe("Success");
  });

  test("should return the initial message if neither sending nor success are true", () => {
    const result = returnEmailStatusMsg(
      false,
      false,
      "Initial message",
      "ru" as localeType,
    );
    expect(result).toBe("Initial message");
  });
});
