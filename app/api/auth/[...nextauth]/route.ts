import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDB } from "../../../../utils/database";
import User from "../../../../schema/user";
import { useDispatch } from "react-redux";
import { open } from "../../../redux/features/banner/bannerSlice";

export const handler = NextAuth({
  pages: {
    signIn: "/registration",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { action } = req.body;

        if (action === "login") {
          const { username, password } = credentials;
          await connectToDB();
          const userExists = await User.findOne({
            username,
            password,
          });
          if (userExists) {
            return { name: username };
          }
          return null;
        }

        if (action === "register") {
          const { username, email, password, date } = credentials;
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
