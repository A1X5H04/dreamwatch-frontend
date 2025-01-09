"use client";

import React from "react";
import Link from "next/link";

function SignUpPage() {
  return (
    <div className="p-10">
      <div className="">
        <h4 className="text-3xl font-bold text-neutral-content">
          Welcome To Dreamwatch!
        </h4>
        <p className="text-lg font-semibold text-neutral-content/40">
          Create an account to continue
        </p>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold px-2">
                Email Address
                <span className="text-error ml-1">*</span>
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
          </div>
          <button className="btn btn-primary w-full mt-5">Sign Up</button>
        </form>
      </div>
      <Link href="/sign-in">Login Instead</Link>
    </div>
  );
}

export default SignUpPage;
