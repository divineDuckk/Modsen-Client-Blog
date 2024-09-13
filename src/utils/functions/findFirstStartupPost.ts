import { Post } from "@/interfaces/post";

export const findFirstStartupPost = (posts: Post[]) => {
  return posts.find(({ category }) => category === "startup");
};
