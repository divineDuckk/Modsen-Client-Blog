import { Post } from "@/interfaces/post";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export const fetchPosts = async () => {
  const baseUrl = getAbsoluteUrl();
  const response = await fetch(`${baseUrl}/api`);
  const posts: Post[] = await response.json();
  return posts;
};
