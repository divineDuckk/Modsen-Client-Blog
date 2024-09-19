import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { heading2 } from "@/app/classes";
import { Post } from "@/interfaces/post";

import { PostCard } from "./PostCard";

interface WhatToReadProps {
  posts: Post[];
}

export const WhatToRead: FC<WhatToReadProps> = async ({ posts }) => {
  const t = await getTranslations("OtherPosts");

  return (
    <div className="pb-16 border-b-2 border-whiteSmoke border-solid mb-32">
      <h2 className={twMerge(`mb-16`, heading2)}>{t("readNext")}</h2>
      <div className="flex justify-between">
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
