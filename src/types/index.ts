import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type photoType = string | StaticImport;
export type tag =
  | "Business"
  | "Experience"
  | "Screen"
  | "Technology"
  | "Marketing"
  | "Life"
  | "";

export type localeType = "ru" | "en";
