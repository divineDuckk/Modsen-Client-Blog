import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CategoryProps {
  content: string;
  icon: string | StaticImport;
  title: string;
}
