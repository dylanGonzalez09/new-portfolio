import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";

function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase());

  for (const language of preferred) {
    const base = language.split("-")[0];
    if (isLocale(language)) return language;
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip internals and any file with an extension (pdf, ico, etc.)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
