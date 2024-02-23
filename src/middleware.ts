import { authMiddleware } from "@clerk/nextjs";

const protectedPaths = ["/account", "/add-listing"];

export default authMiddleware({
  publicRoutes: (req) =>
    !protectedPaths.some((protectedPath) => req.url.includes(protectedPath)),
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
