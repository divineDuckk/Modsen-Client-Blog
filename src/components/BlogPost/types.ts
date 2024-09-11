import { Post } from "@/interfaces/post";

export interface BlogPostProps extends Omit<Post, "author" | "date"> {}
