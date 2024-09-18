import { MOCKED_AUTHORS } from "@/constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const authorId = searchParams.get("slug");

  const author = MOCKED_AUTHORS.find(({ id }) => id === authorId);
  return new Response(JSON.stringify(author), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
