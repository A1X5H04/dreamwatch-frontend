import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "./lib/prismadb";
import { signInSchema } from "./lib/yup-schemas";
import bcryptjs from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          const validatedData = await signInSchema.validate(credentials, {
            abortEarly: false,
          });

          const { login, password } = validatedData;

          const user = await prismadb.user.findFirst({
            where: {
              OR: [{ email: login }, { username: login }],
            },
          });

          if (!user || !user.passwordHash) return null;

          const validPassword = await bcryptjs.compare(
            password,
            user.passwordHash
          );

          if (validPassword)
            return { id: user.id, email: user.email, username: user.username };

          return null;
        } catch (err) {
          console.error("Auth: Sign In", err);
          return null;
        }
      },
    }),
  ],
});
