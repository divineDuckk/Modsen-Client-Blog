import Image from "next/image";
import { FC } from "react";

import { fetchPostById } from "@/api/fetchPostById";
import { fetchPosts } from "@/api/fetchPosts";
import { heading1, heading2, heading4 } from "@/app/classes";
import { JoinContainer } from "@/components/JoinContainer";
import { WhatToRead } from "@/components/WhatToRead";
import { getCategoryImg, getRoute } from "@/constants";
import { Link } from "@/i18n/routing";
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

  const { name, photo, id } = author;
  return (
    <div className="min-w-full mt-32 h-full">
      <div className="flex justify-center">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <Image src={photo} alt={`${name} photo`} className="w-12" />
            <div>
              <Link
                href={`${getRoute("author")}${id}`}
                className="text-blue-600"
              >
                <h3 className={heading4}>{name}</h3>
              </Link>
              <p className="font-normal text-base opacity-65">
                posted on {date}
              </p>
            </div>
          </div>
          <h2 className={`${heading1} max-w-3xl mb-8`}>{title}</h2>
          <div className="flex items-center gap-2 mb-16">
            <Image
              src={getCategoryImg(category) as photoType}
              alt="category image"
            />
            <p className={`${heading4}`}>{category}</p>
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
          <h2 className={`${heading2} mb-4`}>{title}</h2>
          <p className="font-normal text-base opacity-65">{content}</p>
        </div>
      </div>
      <WhatToRead posts={recommendedPosts} />
      <JoinContainer />
    </div>
  );
};

export default Post;
