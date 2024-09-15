/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { heading1, heading4 } from "@/app/classes";
import { BlogPost } from "@/components/BlogPost";
import { Post } from "@/interfaces/post";
import { checkIsEndOfArray } from "@/utils/functions/checkIsEndOfArray";

import { PAGE_SIZE } from "./constants";

interface PostsContainerProps {
  serverPosts: Post[];
  atCategoryPage?: boolean;
  pageSize?: number;
}

export const PostsContainer: FC<PostsContainerProps> = ({
  serverPosts,
  atCategoryPage = false,
  pageSize = PAGE_SIZE,
}) => {
  const [page, setPage] = useState(0);
  const initialPosts =
    serverPosts.length !== 0 ? serverPosts.slice(page, pageSize) : [];
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(posts, serverPosts);
    setPosts(initialPosts);
  }, [serverPosts]);

  const handleNextClick = () => {
    setPage((prev) => prev + pageSize);
    setPosts(serverPosts.slice(page + pageSize, page + 2 * pageSize));
    scrollToPost();
  };

  const handlePrevtClick = () => {
    setPage((prev) => prev - pageSize);
    setPosts(serverPosts.slice(page - pageSize, page));
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
  const isTherePrevPage = page === 0;
  const isNeedShowButtons = serverPosts.length > pageSize;

  const prevClass = twMerge(
    `${heading4} transition-all   ${isTherePrevPage ? "opacity-65 cursor-not-allowed" : "hover:scale-105"}`,
  );
  const nextClass = twMerge(
    `${heading4} ${isThereNextPage ? "opacity-65 cursor-not-allowed" : "hover:scale-105"} transition-all`,
  );
  return (
    <div className="w-full" ref={ref}>
      {!atCategoryPage && (
        <h1
          className={`${heading1} text-left w-full pb-8 border-b border-solid border-gray-200 mb-16`}
        >
          All posts
        </h1>
      )}
      <section className="flex flex-col gap-16 mb-16">
        {posts.map(({ category, content, id, imgUrl, title }) => (
          <BlogPost
            category={category}
            content={content}
            id={id}
            imgUrl={imgUrl}
            title={title}
            key={id}
            atCategoryPage={atCategoryPage}
          />
        ))}
      </section>
      {isNeedShowButtons && (
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrevtClick}
            className={prevClass}
            disabled={isTherePrevPage}
          >
            {"< Prev"}
          </button>
          <button
            onClick={handleNextClick}
            className={nextClass}
            disabled={isThereNextPage}
          >
            {"Next >"}
          </button>
        </div>
      )}
    </div>
  );
};
