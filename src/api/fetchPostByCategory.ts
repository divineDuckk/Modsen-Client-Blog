import { Post } from "@/interfaces/post";

import { fetchPosts } from "./fetchPosts";

export const fetchPostByCategory = async (categoryName: string) => {
  const posts: Post[] = await fetchPosts();
  const categoryPosts = posts.filter(
    ({ category }) => category === categoryName,
  );
  return categoryPosts;
};
