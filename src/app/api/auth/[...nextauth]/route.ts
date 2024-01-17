import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    // Credentials({
    //   name: "Credentials",
    // }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
