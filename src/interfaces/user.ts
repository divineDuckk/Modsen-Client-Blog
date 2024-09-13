import { photoType } from "@/types";

export interface Reviewer {
  id: string;
  name: string;
  photo: photoType;
  city: string;
  country: string;
}
