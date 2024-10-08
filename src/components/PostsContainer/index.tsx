/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useTranslations } from "next-intl";
import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { heading1, heading4 } from "@/app/classes";
import { BlogPost } from "@/components/BlogPost";
import { Post } from "@/interfaces/post";
import { checkIsEndOfArray } from "@/utils/functions/checkIsEndOfArray";

import { PAGE_SIZE } from "./constants";

interface PostsContainerProps {
  serverPosts: Post[];
  atAuthorPage?: boolean;
  atCategoryPage?: boolean;
  pageSize?: number;
}

export const PostsContainer: FC<PostsContainerProps> = ({
  serverPosts,
  atAuthorPage = false,
  atCategoryPage = false,
  pageSize = PAGE_SIZE,
}) => {
  const [page, setPage] = useState(0);
  const initialPosts =
    serverPosts.length !== 0 ? serverPosts.slice(page, pageSize) : [];
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
    `${isTherePrevPage ? "opacity-65 cursor-not-allowed" : "hover:scale-105"}`,
    "transition-all",
    heading4,
  );

  const nextClass = twMerge(
    `${isThereNextPage ? "opacity-65 cursor-not-allowed" : "hover:scale-105"}`,
    "transition-all",
    heading4,
  );

  const headerClass = twMerge(
    `${!atAuthorPage && "border-b border-solid border-gray-200 pb-8"}`,
    "mb-16 text-left w-full",
    heading1,
  );

  const t = useTranslations<"AuthorPosts" | "BlogCards" | "Categories">();

  return (
    <div className="w-full" ref={ref}>
      {!atCategoryPage && (
        <h1 className={headerClass}>
          {atAuthorPage ? t("AuthorPosts.posts") : t("BlogCards.allPosts")}
        </h1>
      )}
      <section className="flex flex-col gap-16 mb-16 items-center xl:items-baseline">
        {posts.map(({ category, content, id, imgUrl, title }) => (
          <BlogPost
            category={t(`Categories.${category}`)}
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
            {t("BlogCards.prev")}
          </button>
          <button
            onClick={handleNextClick}
            className={nextClass}
            disabled={isThereNextPage}
          >
            {t("BlogCards.next")}
          </button>
        </div>
      )}
    </div>
  );
};
