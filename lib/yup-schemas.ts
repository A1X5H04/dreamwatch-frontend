import * as Yup from "yup";

export type InferYupType<T extends Yup.Schema<unknown>> = Yup.InferType<T>;

const signInSchema = Yup.object().shape({
  login: Yup.string()
    .required("Email or Username is required")
    .test(
      "is-email-or-username",
      "Must be a valid email or username",
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[A-Za-z][A-Za-z0-9_-]*$/;
        return emailRegex.test(value) || usernameRegex.test(value);
      }
    )
    .min(8, "Must be at least 8 characters long"),
  password: Yup.string().required().min(6),
});

const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  username: Yup.string()
    .required()
    .matches(/^[A-Za-z][A-Za-z0-9_-]*$/, "Invalid username")
    .min(8), // Do not add spaces
  password: Yup.string().required().min(6),
});

export { signInSchema, signUpSchema };
