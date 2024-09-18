import Image from "next/image";
import { FC } from "react";

import { fetchAuthorById } from "@/api/fetchAuthorById";
import { fetchPostsByAuthor } from "@/api/fetchPostsByAuthor";
import { heading1, heading2 } from "@/app/classes";
import { createLinks } from "@/components/AuthorsContainer/AuthorCard/constants";
import { LinksContainer } from "@/components/AuthorsContainer/AuthorCard/LinksContainer";
import { PostsContainer } from "@/components/PostsContainer";

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

const Author: FC<AuthorPageProps> = async ({ params }) => {
  const { slug } = params;
  const {
    photo,
    about,
    facebookLink,
    instargamLink,
    linkedInLink,
    name,
    twitterLink,
  } = await fetchAuthorById(slug);
  const links = createLinks({
    facebook: facebookLink,
    twitter: twitterLink,
    instagram: instargamLink,
    linkedIn: linkedInLink,
  });

  const serverPosts = await fetchPostsByAuthor(slug);

  return (
    <main className="w-full justify-center flex flex-col items-center">
      <div className="w-full bg-magnolia flex items-center justify-center mb-32">
        <div>
          <section className="flex items-center gap-8 max-w-5xl mt-32 mb-24">
            <div className="w-full h-full max-w-64 max-h-72 overflow-hidden">
              <Image
                src={photo}
                alt={`${name} photo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className={`${heading1} mb-6`}>
                Hey there, I’m {name} and welcome to my Blog
              </h1>
              <p className="font-normal text-base mb-6">{about}</p>
              <LinksContainer links={links} />
            </div>
          </section>
          <div className="w-full h-6 flex">
            <span className="w-2/3 h-full bg-goldenYellow inline-block" />
            <span className="w-1/3 h-full bg-purple-700 inline-block" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mb-32">
        {serverPosts.length ? (
          <PostsContainer serverPosts={serverPosts} atAuthorPage />
        ) : (
          <div className="flex justify-center items-center">
            <h2 className={heading2}>The author has no posts yet</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Author;
