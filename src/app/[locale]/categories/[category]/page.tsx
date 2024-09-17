import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { fetchCategory } from "@/api/fetchCategory";
import { fetchPostByCategory } from "@/api/fetchPostByCategory";
import { display } from "@/app/classes";
import { Categories } from "@/components/Categories";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const Category: FC<CategoryPageProps> = async ({ params }) => {
  const { category: name } = params;
  const { content, title } = await fetchCategory(name);
  const posts = await fetchPostByCategory(title);
  return (
    <main className="mb-32">
      <div className="w-full bg-magnolia mb-28">
        <div className="py-20 flex flex-col justify-center items-center">
          <h1 className={twMerge(`mb-4`, display)}>{title}</h1>
          <p className="text-base font-normal opacity-65 mb-8">{content}</p>
          <p className="text-base font-medium tracking-widest uppercase">
            BLOG {">"} {title}
          </p>
        </div>
      </div>
      <Categories serverPosts={posts} />
    </main>
  );
};

export default Category;
