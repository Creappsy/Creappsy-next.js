import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, user }) {
      if (user) {
        // @ts-ignore
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
