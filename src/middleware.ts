import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default withAuth({
  pages: {
    signIn: "/login",
  },
});
