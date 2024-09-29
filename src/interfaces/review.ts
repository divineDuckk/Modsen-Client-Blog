import { Reviewer } from "./user";

export interface Review {
  review: string;
  id: string;
  reviewer: Reviewer;
}
