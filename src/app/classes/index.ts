import { twMerge } from "tailwind-merge";

import { sen } from "@/app/fonts";

export const display = twMerge(`font-bold text-6xl`, sen.className);
export const heading1 = twMerge(` font-bold text-5xl`, sen.className);
export const heading2 = twMerge(` font-bold text-4xl`, sen.className);
export const heading3 = twMerge(` font-bold text-3xl`, sen.className);
export const heading4 = twMerge(` font-bold text-2xl`, sen.className);
export const heading5 = twMerge(` font-bold text-xl`, sen.className);
export const heading6 = twMerge(` font-bold text-base`, sen.className);
