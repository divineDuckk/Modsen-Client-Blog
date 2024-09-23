import { Post } from "@/interfaces/post";
import { checkIsEndOfArray } from "@/utils/functions/checkIsEndOfArray";

const mockAuthor = {
  photo: "author_photo_url",
  name: "John Doe",
  about: "A writer",
  facebookLink: "facebook.com/john",
  twitterLink: "twitter.com/john",
  instargamLink: "instagram.com/john",
  linkedInLink: "linkedin.com/john",
  id: "author1",
};

const mockPosts: Post[] = [
  {
    id: "1",
    author: mockAuthor,
    title: "Post 1",
    content: "Content 1",
    date: "2023-09-21",
    imgUrl: "image1.png",
    category: "Technology",
    tags: ["Technology"],
  },
  {
    id: "2",
    author: mockAuthor,
    title: "Post 2",
    content: "Content 2",
    date: "2023-09-22",
    imgUrl: "image2.png",
    category: "Marketing",
    tags: ["Marketing"],
  },
  {
    id: "3",
    author: mockAuthor,
    title: "Post 3",
    content: "Content 3",
    date: "2023-09-23",
    imgUrl: "image3.png",
    category: "Business",
    tags: ["Business"],
  },
];

describe("checkIsEndOfArray", () => {
  test("should return true when the last post in subArray matches the last post in array", () => {
    const subArray = [mockPosts[2]];
    expect(checkIsEndOfArray(subArray, mockPosts)).toBe(true);
  });

  test("should return false when the last post in subArray does not match the last post in array", () => {
    const subArray = [mockPosts[0]];
    expect(checkIsEndOfArray(subArray, mockPosts)).toBe(false);
  });
});
