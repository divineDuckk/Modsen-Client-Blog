import Image from "next/image";
import { FC } from "react";

import { fetchPostById } from "@/api/fetchPostById";
import { fetchPosts } from "@/api/fetchPosts";
import { sen } from "@/app/fonts";
import { JoinContainer } from "@/components/JoinContainer";
import { WhatToRead } from "@/components/WhatToRead";
import { getCategoryImg } from "@/constants";
import { Post as PostType } from "@/interfaces/post";
import { photoType } from "@/types";
import { getRecommendedPosts } from "@/utils/functions/getRecommendedPosts";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const Post: FC<PostPageProps> = async ({ params }) => {
  const { slug } = params;

  const { author, category, content, date, imgUrl, title } =
    (await fetchPostById(slug)) as PostType;

  const posts = await fetchPosts();

  const recommendedPosts = getRecommendedPosts(posts, slug, category);

  const { name, photo } = author;
  return (
    <div className="min-w-full mt-32 h-full">
      <div className="flex justify-center">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <Image src={photo} alt={`${name} photo`} className="w-12" />
            <div>
              <h3 className={`${sen.className} font-bold text-2xl`}>{name}</h3>
              <p className="font-normal text-base opacity-65">
                posted on {date}
              </p>
            </div>
          </div>
          <h2 className={`${sen.className} font-bold text-5xl max-w-3xl mb-8`}>
            {title}
          </h2>
          <div className="flex items-center gap-2 mb-16">
            <Image
              src={getCategoryImg(category) as photoType}
              alt="category image"
            />
            <p className={`${sen.className} font-bold text-2xl`}>{category}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:h-600 mb-16">
        <Image
          src={imgUrl}
          alt="post image"
          className="object-cover w-full max-h-full  max-w-full"
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="mb-32 max-w-4xl">
          <h2 className={`${sen.className} font-bold text-4xl mb-4  `}>
            {title}
          </h2>
          <p className="font-normal text-base opacity-65">{content}</p>
        </div>
      </div>
      <WhatToRead posts={recommendedPosts} />
      <JoinContainer />
    </div>
  );
};

export default Post;
