import { getLocale } from "next-intl/server";

import { Author } from "@/interfaces/author";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export const fetchAuthorById = async (slug: string) => {
  const baseUrl = getAbsoluteUrl();
  const locale = await getLocale();
  const params = new URLSearchParams({ slug }).toString();
  const response = await fetch(`${baseUrl}/${locale}/authors/api?${params}`);
  const author: Author = await response.json();
  return author;
};
