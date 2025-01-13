"use server";

import prismadb from "@/lib/prismadb";
import { createResponse } from "@/lib/utils";
import { signInSchema, signUpSchema } from "@/lib/yup-schemas";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import { signIn as authSignIn } from "@/auth";
import { AuthError } from "next-auth";

export async function signIn(values: unknown) {
  try {
    const validatedFields = await signInSchema.validate(values, {
      abortEarly: false,
    });

    const { login, password } = validatedFields;

    const user = await prismadb.user.findFirst({
      where: {
        OR: [{ email: login }, { username: login }],
      },
    });

    if (!user || !user.email || !user.passwordHash) {
      return createResponse(false, "Invalid credentials");
    }

    await authSignIn("credentials", {
      login,
      password,
    });

    return createResponse(true, "Signed in successfully");
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log("Auth: Sign In", err);
      return createResponse(false, err.message || "Validation error");
    } else if (err instanceof AuthError) {
      console.log("Auth: AuthJS Error Sign In", err);
      switch (err.type) {
        case "CredentialsSignin":
          return createResponse(false, "Invalid credentials");
        default:
          return createResponse(
            false,
            err.message || "Unknown authentication error"
          );
      }
    } else {
      console.log("Auth: Sign In", err);
      return createResponse(false, "An error occurred. Please try again later");
    }
  }
}

export async function signUp(values: unknown) {
  try {
    const validatedData = await signUpSchema.validate(values, {
      abortEarly: false,
    });

    const existingUser = await prismadb.user.findFirst({
      select: { id: true },
      where: {
        email: validatedData.email,
      },
    });

    if (existingUser) {
      return createResponse(false, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await prismadb.user.create({
      select: { id: true, email: true, username: true },
      data: {
        email: validatedData.email,
        passwordHash: hashedPassword,
        username: validatedData.username,
      },
    });

    return createResponse(true, "Registed Successfully", user);
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log("Auth: Sign Up", err);
      return createResponse(false, err.message || "Validation error");
    } else {
      console.log("Auth: Sign Up", err);
      return createResponse(false, "An error occurred. Please try again later");
    }
  }
}
