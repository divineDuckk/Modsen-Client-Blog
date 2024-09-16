import { Category } from "@/interfaces/category";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export const fetchCategory = async (title: string) => {
  const baseUrl = getAbsoluteUrl();
  const params = new URLSearchParams({ title }).toString();
  const response = await fetch(`${baseUrl}/categories/api?${params}`);
  const category: Category = await response.json();
  return category;
};
