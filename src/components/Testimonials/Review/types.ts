import { photoType } from "@/types";

export interface ReviewProps {
  review: string;
  city: string;
  country: string;
  name: string;
  photo: photoType;
}
