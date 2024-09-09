import { Author } from "@/interfaces/author";

export interface AuthorCardProps extends Omit<Author, "id"> {}
