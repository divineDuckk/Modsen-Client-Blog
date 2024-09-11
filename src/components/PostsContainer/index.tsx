"use client";

import { FC, useRef, useState } from "react";

import { sen } from "@/app/fonts";
import { BlogPost } from "@/components/BlogPost";
import { Post } from "@/interfaces/post";
import { checkIsEndOfArray } from "@/utils/functions/checkIsEndOfArray";

import { PAGE_SIZE } from "./constants";
import { PostsContainerProps } from "./types";

export const PostsContainer: FC<PostsContainerProps> = ({ serverPosts }) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post[]>(
    serverPosts.slice(page, PAGE_SIZE),
  );

  const ref = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    setPage((prev) => prev + PAGE_SIZE);
    setPosts(serverPosts.slice(page + PAGE_SIZE, page + 2 * PAGE_SIZE));
    scrollToPost();
  };

  const handlePrevtClick = () => {
    setPage((prev) => prev - PAGE_SIZE);
    setPosts(serverPosts.slice(page - PAGE_SIZE, page));
    scrollToPost();
  };

  const scrollToPost = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        block: "start",
        inline: "start",
      });
    }
  };

  const isThereNextPage = checkIsEndOfArray(posts, serverPosts);

  return (
    <div
      className={`${sen.className} font-bold text-5xl w-full max-w-1440 px-8 mb-16`}
      ref={ref}
    >
      <h1 className="text-left w-full pb-8 border-b border-solid border-gray-200 mb-16">
        All posts
      </h1>
      <section className="flex flex-col gap-16 mb-16">
        {posts.map(
          ({
            author,
            authorId,
            category,
            content,
            date,
            id,
            imgUrl,
            title,
          }) => (
            <BlogPost
              author={author}
              authorId={authorId}
              category={category}
              content={content}
              date={date}
              id={id}
              imgUrl={imgUrl}
              title={title}
              key={id}
            />
          ),
        )}
      </section>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevtClick}
          className={`${sen.className} font-bold text-2xl transition-all   ${page === 0 ? "opacity-65 cursor-not-allowed" : "hover:scale-105"}`}
          disabled={page === 0}
        >
          {"< Prev"}
        </button>
        <button
          onClick={handleNextClick}
          className={`${sen.className} font-bold text-2xl ${isThereNextPage ? "opacity-65 cursor-not-allowed" : "hover:scale-105"} transition-all`}
          disabled={isThereNextPage}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};
