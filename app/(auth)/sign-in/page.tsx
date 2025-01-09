"use client";

import React from "react";

// import LogoImage from "@/public/logo.png";
// import Image from "next/image";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import FormikInputField from "@/components/formik-fields/input";
import OAuthProvider from "../_components/oauth-provider";
import { InferYupType, signInSchema } from "@/lib/yup-schemas";

const initialValues: InferYupType<typeof signInSchema> = {
  login: "",
  password: "",
};

function SignInPage() {
  return (
    <div className="p-10">
      <div className="mb-6">
        {/* <Image src={LogoImage} alt="Anime Logo" className="w-14 mb-5" /> */}
        <h4 className="text-3xl font-bold text-base-content">Welcome Back!</h4>
        <p className="text-lg font-semibold text-base-content/40">
          Sign in to continue
        </p>
      </div>
      <div>
        <Formik
          validationSchema={signInSchema}
          onSubmit={(values) => alert(JSON.stringify(values))}
          initialValues={initialValues}
        >
          <Form>
            <div>
              <Field
                name="login"
                label="Email Address / Username"
                placeholder="whateveryoulike123"
                required
                component={FormikInputField}
              />
              <Field
                name="password"
                label="Password"
                type="password"
                placeholder="**********"
                helperText="Password must be at least 8 characters long"
                required
                component={FormikInputField}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-5 cursor-not-allowed"
            >
              <span className="loading loading-dots"></span>
            </button>
          </Form>
        </Formik>
      </div>
      <div className="divider font-bold">OR</div>
      <OAuthProvider />
      <div className="text-center mt-5">
        Don&apos;t have an account?&nbsp;
        <Link className="link link-hover font-bold" href="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;

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
