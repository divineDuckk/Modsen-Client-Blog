import Image from "next/image";
import Link from "next/link";

import bgImg from "@/assets/businessman.png";
import whyWeStartedBg from "@/assets/whyWeStarderBg.png";
import { AboutUsContainer } from "@/components/AboutUsContainer";
import { ActionLink } from "@/components/ActionLink";
import { AuthorsContainer } from "@/components/AuthorsContainer";
import { CategoryContainer } from "@/components/CategoryContainer";
import { JoinContainer } from "@/components/JoinContainer";
import { MiniPost } from "@/components/MiniPost";
import { Observer } from "@/components/Observer";
import { Testimonials } from "@/components/Testimonials";
import { getRoute, LINKS_LIST, MOCKED_POSTS } from "@/constants";
import { Post } from "@/interfaces/post";
import { findFirstStartupPost } from "@/utils/functions/findFirstStartupPost";
import { getAbsoluteUrl } from "@/utils/functions/getAbsoluteUrl";

import { sen } from "./fonts";

export default async function Home() {
  const baseUrl = getAbsoluteUrl();
  const response = await fetch(`${baseUrl}/api`);
  const posts = await response.json();

  const startUpPost = findFirstStartupPost(posts);
  const { imgUrl, content, title, date, author, category, id }: Post =
    startUpPost ? startUpPost : posts[0];

  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <div className="w-full max-w-1440 mx-auto">
          <div className="h-90">
            <section className="text-white ml-20 flex flex-col gap-6 items-start max-w-5xl pt-32">
              <h3 className="font-light text-base uppercase tracking-widest">
                Posted on{" "}
                <span className="font-bold tracking-widest">{category}</span>
              </h3>
              <h1 className={`text-6xl ${sen.className} font-bold`}>{title}</h1>
              <p className="text-base font-normal">
                By <span className="text-goldenYellow">{author.name}</span> |{" "}
                {date}
              </p>
              <p className="text-base font-normal max-w-xl mb-12">{content}</p>
              <ActionLink
                content="Read more >"
                link={`${getRoute("blogPost")}${id}`}
              />
            </section>
            <div className="absolute -z-10 left-0 top-0 w-full h-90">
              <Image
                src={bgImg}
                alt="businessman"
                priority
                className="object-cover w-full h-full max-h-full filter brightness-50"
              />
            </div>
          </div>
        </div>
        <div className="max-w-1440 w-full">
          <Observer>
            <div className="flex mt-96  justify-center gap-8 mb-32">
              <div>
                <h2 className={`${sen.className} font-bold text-4xl mb-8`}>
                  Featured Post
                </h2>
                <section className="p-8 border border-solid border-gray-200 max-w-3xl">
                  <Image src={imgUrl} alt="post image" />
                  <p className="mt-8 mb-4">
                    By <span className="text-blue-600">{author.name}</span> |{" "}
                    {date}
                  </p>
                  <h3 className={`${sen.className} font-bold text-3xl mb-4`}>
                    {title}
                  </h3>
                  <p className="font-normal text-base mb-8">{content}</p>
                  <ActionLink
                    content="Read more >"
                    link={`${getRoute("blogPost")}${id}`}
                  />
                </section>
              </div>
              <div className="flex flex-col max-w-lg">
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`${sen.className} font-bold text-4xl`}>
                    All Posts
                  </h2>
                  <Link className="text-blue-500" href={getRoute("blog")}>
                    View All
                  </Link>
                </div>
                {MOCKED_POSTS.slice(1, 5).map(({ author, date, title, id }) => (
                  <MiniPost
                    authorName={author.name}
                    date={date}
                    title={title}
                    key={id}
                  />
                ))}
              </div>
            </div>
            <AboutUsContainer atHome />
            <CategoryContainer title="Choose A Catagory" atHome />
            <div className="flex relative mb-32">
              <div className="object-cover h-full">
                <Image src={whyWeStartedBg} alt="friends background" />
              </div>
              <div className="p-20 absolute right-0 max-w-2xl bg-white bottom-0">
                <h3 className="font-semibold uppercase text-base tracking-widest mb-6">
                  Why we started
                </h3>
                <h2
                  className={`${sen.className} font-bold text-5xl mb-7 tracking-wide`}
                >
                  It started out as a simple idea and evolved into our passion
                </h2>
                <p className="opacity-65 font-normal text-base mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <ActionLink
                  content="Discover our story >"
                  link={getRoute("aboutUs")}
                />
              </div>
            </div>
            <AuthorsContainer atHome />
            <div className="flex justify-between mb-24 items-center px-6">
              {LINKS_LIST.map((url, index) => (
                <Image key={index} src={url} alt="ad link" />
              ))}
            </div>
            <Testimonials />
            <JoinContainer />
          </Observer>
        </div>
      </main>
    </div>
  );
}
