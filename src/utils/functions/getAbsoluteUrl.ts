import { headers } from "next/headers";

export const getAbsoluteUrl = () => {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  return `${protocol}://${host}`;
};
