import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  let region = request.cookies.get("creappsy_region")?.value;

  if (!region) {
    region = "LATAM";
  }

  const response = NextResponse.next();
  response.cookies.set("creappsy_region", region, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
