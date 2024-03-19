import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/account", "/add-listing"];

export function middleware(request: NextRequest) {
  if (
    protectedPaths.some((protectedPath) => request.url.includes(protectedPath))
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
