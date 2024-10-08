"use client";

import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { PostsContainer } from "@/components/PostsContainer";
import { TAGS } from "@/constants";
import { Post } from "@/interfaces/post";
import { tag } from "@/types";

import { SMALL_PAGE_SIZE } from "./constants";
import { MiniCategoriesContainer } from "./MiniCategoriesContainer";
import { SearchInput } from "./SearchInput";
import { Tag } from "./Tag";

interface CategoriesProps {
  serverPosts: Post[];
}

export const Categories: FC<CategoriesProps> = ({ serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);
  const [tag, setTag] = useState("");
  const tagsWithOutEmptyString = TAGS.filter((tag) => tag !== "");

  const t = useTranslations<"CategorySection" | "Tags">();

  const handleSearchClick = () => {
    if (tag === "") {
      setPosts(serverPosts);
      return;
    }
    setPosts(serverPosts.filter(({ tags }) => tags.includes(tag as tag)));
  };
  const handleTagClick = (tag: string) => () => {
    setTag(tag);
    if (tag === t("Tags.All")) {
      setPosts(serverPosts);
      return;
    }

    const localePosts = serverPosts.map((post) => ({
      ...post,
      tags: post.tags.map((tag) => t(`Tags.${tag}`)) as tag[],
    }));
    setPosts(localePosts.filter(({ tags }) => tags.includes(tag as tag)));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex justify-between flex-col-reverse xl:flex-row gap-11">
        {posts.length ? (
          <PostsContainer
            serverPosts={posts}
            atCategoryPage
            pageSize={SMALL_PAGE_SIZE}
          />
        ) : (
          <div className="w-full flex justify-center items-center">
            <h2 className={heading2}>{t("CategorySection.noPosts")}</h2>
          </div>
        )}
        <aside className="max-w-full xl:max-w-xs flex flex-col items-center xl:items-baseline">
          <SearchInput
            value={tag}
            setValue={setTag}
            handleSearchClick={handleSearchClick}
            handleTagClick={handleTagClick}
          />
          <MiniCategoriesContainer />
          <div>
            <h2 className={twMerge(`mb-6 text-center xl:text-left`, heading2)}>
              {t("CategorySection.tags")}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center xl:justify-normal">
              {tagsWithOutEmptyString.map((tagName) => {
                return (
                  <Tag
                    key={tagName}
                    name={tagName}
                    handleClick={handleTagClick(t(`Tags.${tagName}`))}
                    isActive={tag === t(`Tags.${tagName}`)}
                  />
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
