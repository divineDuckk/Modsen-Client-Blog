import { getMonthAndYear } from "@/utils/functions/getMonthAndYear";

describe("getMonthAndYear", () => {
  test("should return correct month and remains for a valid date", () => {
    const date = "May 23, 2022";
    const result = getMonthAndYear(date);
    expect(result).toEqual({
      month: "May",
      remains: "23, 2022",
    });
  });
});
