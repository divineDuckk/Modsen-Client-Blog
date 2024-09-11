import { Post } from "@/interfaces/post";

export const checkIsEndOfArray = (subArray: Post[], array: Post[]) => {
  return subArray[subArray.length - 1].id === array[array.length - 1].id;
};
