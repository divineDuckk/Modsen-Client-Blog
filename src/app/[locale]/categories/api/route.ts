import { CATEGORY } from "@/constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryTitle = searchParams.get("title");

  const category = CATEGORY.find(({ title }) => title === categoryTitle);

  return new Response(JSON.stringify(category), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
