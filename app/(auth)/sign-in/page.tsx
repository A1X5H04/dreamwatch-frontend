import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <div className="p-10">
      <div className="">
        <h4 className="text-3xl font-bold">Welcome Back</h4>
        <p className="text-lg font-semibold text-neutral-content">
          Sign in to continue to Dreamwatch
        </p>
      </div>
      <Link href="/sign-up">Make an account</Link>
    </div>
  );
}

export default SignInPage;
