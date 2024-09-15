"use client";

import { FC, useState } from "react";

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

  const handleSearchClick = () => {
    if (tag === "") {
      setPosts(serverPosts);
      return;
    }
    setPosts(serverPosts.filter(({ tags }) => tags.includes(tag as tag)));
  };
  const handleTagClick = (tag: string) => () => {
    if (tag === "All") {
      setPosts(serverPosts);
      return;
    }
    setPosts(serverPosts.filter(({ tags }) => tags.includes(tag as tag)));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex justify-between gap-11">
        {posts.length ? (
          <PostsContainer
            serverPosts={posts}
            atCategoryPage
            pageSize={SMALL_PAGE_SIZE}
          />
        ) : (
          <div className="w-full flex justify-center items-center">
            <h2 className={heading2}>No posts available</h2>
          </div>
        )}
        <aside className="max-w-xs">
          <SearchInput
            value={tag}
            setValue={setTag}
            handleClick={handleSearchClick}
          />
          <MiniCategoriesContainer />
          <div>
            <h2 className={`${heading2} mb-6`}>All Tags</h2>
            <div className="flex flex-wrap gap-4">
              {tagsWithOutEmptyString.map((tag) => (
                <Tag key={tag} name={tag} handleClick={handleTagClick(tag)} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
