"use server";

import * as Yup from "yup";

// import { signIn } from "@/auth"

// export { signIn }

export function signUp() {
  try {
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.error(err.errors);
    }
  }
}
