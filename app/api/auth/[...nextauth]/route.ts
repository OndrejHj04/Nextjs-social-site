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
          try {
            await connectToDB();
            const userExists = await User.findOne({
              username,
              password,
            });
            if (userExists) {
              return { name: username };
            }
            return null;
          } catch (e) {
            console.log(e);
          }
        }

        if (action === "register") {
          const { username, email, password, date } = credentials;
          try {
            await connectToDB();
            const user = await User.findOne({
              $or: [{ username }, { email }],
            });
            console.log(user.email);
            if (!user) {
              User.create({ username, email, password, date });
              return { name: username };
            }

            throw null

          } catch (e) {
            console.log(e);
          }
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
