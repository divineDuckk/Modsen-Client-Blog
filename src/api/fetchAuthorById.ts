import { Author } from "@/interfaces/author";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export const fetchAuthorById = async (slug: string) => {
  const baseUrl = getAbsoluteUrl();
  const params = new URLSearchParams({ slug }).toString();
  const response = await fetch(`${baseUrl}/authors/api?${params}`);
  const author: Author = await response.json();
  return author;
};
