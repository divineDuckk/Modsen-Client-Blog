import Image from "next/image";

import { sen } from "@/app/fonts";
import { ActionLink } from "@/components/ActionLink";
import { CategoryContainer } from "@/components/CategoryContainer";
import { JoinContainer } from "@/components/JoinContainer";
import { PostsContainer } from "@/components/PostsContainer";
import { getRoute } from "@/constants";
import { Post } from "@/interfaces/post";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

export default async function Blog() {
  const baseUrl = getAbsoluteUrl();
  const response = await fetch(`${baseUrl}/api`);
  const posts: Post[] = await response.json();
  const { author, content, date, imgUrl, title, id } = posts[0];
  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <div className="bg-magnolia w-full mb-8">
          <div className="flex w-full mb-20 max-w-1440 mx-auto justify-between px-9 pt-20 items-center">
            <section className="max-w-xl">
              <h3 className="font-medium text-base tracking-widest uppercase mb-5">
                Featured Post
              </h3>
              <h2 className={`${sen.className} font-bold text-4xl mb-4`}>
                {title}
              </h2>
              <p className="font-medium text-sm mb-4">
                By{" "}
                <span className="font-medium text-sm text-blue-600">
                  {author.name}
                </span>{" "}
                | {date}
              </p>
              <p className="mb-8 font-normal text-base opacity-65">{content}</p>
              <ActionLink
                content="Read more >"
                link={`${getRoute("blogPost")}${id}`}
              />
            </section>
            <div className="max-w-lg object-cover">
              <Image src={imgUrl} alt="post image" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-1440 px-8">
          <PostsContainer serverPosts={posts} />
          <CategoryContainer title="All Categories" />
          <JoinContainer />
        </div>
      </main>
    </div>
  );
}
