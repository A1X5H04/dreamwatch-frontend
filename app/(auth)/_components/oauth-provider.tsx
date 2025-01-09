import React from "react";
import { FaGoogle } from "react-icons/fa";
import { SiAnilist } from "react-icons/si";

function OAuthProvider() {
  return (
    <div className="my-6 flex items-center gap-x-1 w-full">
      <button className="btn btn-accent flex-1">
        <FaGoogle className="size-5 animate-none" />
      </button>
      <button className="btn btn-info flex-1">
        <SiAnilist className="size-5 animate-none" />
      </button>
    </div>
  );
}

export default OAuthProvider;
