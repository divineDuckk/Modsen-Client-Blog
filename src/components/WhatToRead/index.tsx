import { FC } from "react";

import { sen } from "@/app/fonts";
import { Post } from "@/interfaces/post";

import { PostCard } from "./PostCard";

interface WhatToReadProps {
  posts: Post[];
}

export const WhatToRead: FC<WhatToReadProps> = ({ posts }) => {
  return (
    <div className="pb-16 border-b-2 border-whiteSmoke border-solid mb-32">
      <h2 className={`${sen.className} font-bold text-4xl mb-16`}>
        What to read next
      </h2>
      <div className="flex justify-between">
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
