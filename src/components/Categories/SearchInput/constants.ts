import { object, string } from "yup";

import { TAGS } from "@/constants";

export const validationSchema = object({
  tag: string().oneOf(TAGS, "Invalid tag"),
});
