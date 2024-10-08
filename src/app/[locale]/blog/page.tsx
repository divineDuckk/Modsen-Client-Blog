import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

import { fetchPosts } from "@/api/fetchPosts";
import { heading2 } from "@/app/classes";
import { ActionLink } from "@/components/ActionLink";
import { CategoryContainer } from "@/components/CategoryContainer";
import { JoinContainer } from "@/components/JoinContainer";
import { PostsContainer } from "@/components/PostsContainer";
import { getRoute } from "@/constants";
import { getMonthAndYear } from "@/utils/functions/getMonthAndYear";

export default async function Blog() {
  const posts = await fetchPosts();
  const { author, content, date, imgUrl, title, id } = posts[0];

  const t = await getTranslations(["FeaturedPost", "Date", "CategoryHead"]);
  const { remains, month } = getMonthAndYear(date);

  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <div className="bg-magnolia w-full mb-8">
          <div className="flex flex-col-reverse lg:flex-row w-full mb-20 max-w-1440 mx-auto justify-between px-9 pt-20 items-center">
            <section className="max-w-xl flex flex-col items-center lg:items-baseline mt-4 lg:mt-0">
              <h3 className="font-medium text-base tracking-widest uppercase mb-5">
                {t("FeaturedPost.featured")}
              </h3>
              <h2
                className={twMerge(`mb-4 text-center lg:text-left`, heading2)}
              >
                {title}
              </h2>
              <p className="font-medium text-sm mb-4">
                {t("Date.By")}{" "}
                <span className="font-medium text-sm text-blue-600">
                  {author.name}
                </span>{" "}
                | {t(`Date.${month}`)} {remains}
              </p>
              <p className="mb-8 font-normal text-base opacity-65 text-center lg:text-left">
                {content}
              </p>
              <ActionLink
                content={t("FeaturedPost.readMore")}
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
          <CategoryContainer title={t("CategoryHead.title")} />
          <JoinContainer />
        </div>
      </main>
    </div>
  );
}
