import { fetchPosts } from "./fetchPosts";

export const fetchPostsByAuthor = async (slug: string) => {
  const posts = await fetchPosts();
  return posts.filter(({ author }) => author.id === slug);
};
