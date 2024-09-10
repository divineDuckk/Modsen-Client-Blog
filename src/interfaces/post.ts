import { photoType } from "@/types";

export interface Post {
  author: string;
  title: string;
  content: string;
  date: string;
  imgUrl: photoType;
  id: string;
  category: string;
  authorId: string;
}
