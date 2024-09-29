import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";
import { localeType } from "./types";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { locales, defaultLocale } = routing;
  const pathname = req.nextUrl.pathname;
  const locale = pathname.split("/")[1] as localeType;

  if (!locales.includes(locale)) {
    const url = new URL(`/${defaultLocale}`, req.url);
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
