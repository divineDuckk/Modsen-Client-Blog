import { Post } from "@/interfaces/post";
import { findFirstStartupPost } from "@/utils/functions/findFirstStartupPost";

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
    category: "Startup",
    tags: ["Business"],
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

describe("findFirstStartupPost", () => {
  test("should return the first post with category 'Startup'", () => {
    const result = findFirstStartupPost(mockPosts);
    expect(result).toEqual(mockPosts[1]);
  });

  test("should return undefined if no post with category 'Startup' is found", () => {
    const result = findFirstStartupPost([mockPosts[0], mockPosts[2]]);
    expect(result).toBeUndefined();
  });

  test("should return undefined if the posts array is empty", () => {
    const result = findFirstStartupPost([]);
    expect(result).toBeUndefined();
  });
});
