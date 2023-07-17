import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDB } from "../../../../utils/database";
import User from "../../../../schema/user";

export const handler = NextAuth({
  pages: {
    signIn: "/registration",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { username, email, password, date } = credentials;
        const user = { name: username };

        try {
          await connectToDB();
          const userExists = await User.findOne({
            email,
          });

          if (!userExists) {
            await User.create({
              email,
              username,
              password,
              date,
            });
          }
          return user;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
