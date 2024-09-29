import { MOCKED_POSTS } from "@/constants";

export async function GET() {
  return new Response(JSON.stringify(MOCKED_POSTS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
