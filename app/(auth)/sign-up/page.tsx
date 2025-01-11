"use client";

import React from "react";

// import LogoImage from "@/public/logo.png";
// import Image from "next/image";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import FormikInputField from "@/components/formik-fields/input";

import OAuthProvider from "../_components/oauth-provider";
import { InferYupType, signUpSchema } from "@/lib/yup-schemas";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUp } from "@/action/auth";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const router = useRouter();
  const { isPending, mutate } = useMutation<
    Awaited<ReturnType<typeof signUp>>,
    Error,
    InferYupType<typeof signUpSchema>
  >({
    mutationKey: ["signUp"],
    mutationFn: (values) => signUp(values),
    onError: (error) => {
      console.log("Auth: Sign Up", error);
      toast.error("An error occurred. Please try again later");
    },
    onSuccess: (data) => {
      if (data.status) {
        router.replace("/sign-in");
        return toast.success(data.message || "Account created successfully");
      } else {
        return toast.error(data.message || "Something went wrong.");
      }
    },
  });

  return (
    <div className="p-10">
      <div className="mb-6">
        {/* <Image src={LogoImage} alt="Anime Logo" className="w-14 mb-5" /> */}
        <h4 className="text-3xl font-bold text-base-content">
          Welcome To Dreamwatch!
        </h4>
        <p className="text-lg font-semibold text-base-content/40">
          Create an account to continue
        </p>
      </div>
      <Formik
        validationSchema={signUpSchema}
        onSubmit={(values) => mutate(values)}
        initialValues={{
          email: "",
          username: "",
          password: "",
        }}
      >
        <Form>
          <div>
            <Field
              name="email"
              label="Email Address"
              type="email"
              placeholder="user@example.com"
              required
              component={FormikInputField}
            />
            <Field
              name="username"
              label="Username"
              placeholder="user123"
              required
              component={FormikInputField}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              placeholder="******"
              helperText="Password must be at least 6 characters long"
              required
              component={FormikInputField}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-5">
            {isPending ? (
              <span className="loading loading-dots"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </Form>
      </Formik>

      <div className="divider font-bold">OR</div>
      <OAuthProvider />
      <div className="text-center mt-5">
        Already have an account?&nbsp;
        <Link className="link link-hover font-bold" href="/sign-in">
          Login here
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;

{
  /* <div className="space-y-4">
<div className="space-y-2">
  <label className="text-sm font-semibold px-2">
    Email Address
    
  </label>
  <input
    type="email"
    placeholder="johndoe@example.com"
    className="input input-bordered input-error w-full"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-semibold px-2">
    Full Name
    <span className="text-error ml-1">*</span>
  </label>
  <input
    type="text"
    placeholder="Eren Yeager"
    className="input input-bordered w-full"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-semibold px-2">
    Username
    <span className="text-error ml-1">*</span>
  </label>
  <input
    type="text"
    placeholder="tatakae"
    className="input input-bordered w-full"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-semibold px-2">
    Password
    <span className="text-error ml-1">*</span>
  </label>
  <input
    type="password"
    placeholder="********"
    className="input input-bordered w-full"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-semibold px-2">
    Confirm Password
    <span className="text-error ml-1">*</span>
  </label>
  <input
    type="password"
    placeholder="********"
    className="input input-bordered w-full"
  />
</div>
</div> */
}
