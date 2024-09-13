import { fetchPosts } from "./fetchPosts";

export const fetchPostById = async (id: string) => {
  const posts = await fetchPosts();
  return posts.find((post) => post.id === id);
};
