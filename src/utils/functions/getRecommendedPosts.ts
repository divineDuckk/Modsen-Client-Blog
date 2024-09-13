import { MAX_RECOMMENDED_POSTS, RANDOM_CHANCE } from "@/constants";
import { Post } from "@/interfaces/post";

export const getRecommendedPosts = (
  posts: Post[],
  currPostId: string,
  category: string,
) => {
  const filteredPosts = posts.filter(
    (post) => post.category === category && post.id !== currPostId,
  );

  const shuffledPosts = filteredPosts.sort(() => Math.random() - RANDOM_CHANCE);

  return shuffledPosts.slice(0, MAX_RECOMMENDED_POSTS);
};
