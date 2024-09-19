import { getLocale } from "next-intl/server";

import { Category } from "@/interfaces/category";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export const fetchCategory = async (title: string) => {
  const baseUrl = getAbsoluteUrl();
  const locale = await getLocale();
  const params = new URLSearchParams({ title }).toString();
  const response = await fetch(`${baseUrl}/${locale}/categories/api?${params}`);
  const category: Category = await response.json();
  return category;
};
