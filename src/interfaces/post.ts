import { photoType } from "@/types";

import { Author } from "./author";

export interface Post {
  author: Author;
  title: string;
  content: string;
  date: string;
  imgUrl: photoType;
  id: string;
  category: string;
}
