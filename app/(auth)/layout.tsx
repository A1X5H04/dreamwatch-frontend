import Image from "next/image";

import AnimeAuthBG from "@/public/1358151.png";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex gap-x-2 bg-base-200 w-full max-w-7xl rounded-[2.5rem] overflow-hidden p-5 shadow-lg border-2 border-base-300">
        <section className="flex-1">{children}</section>
        <section className="flex-1">
          <Image
            src={AnimeAuthBG}
            className="object-cover object-bottom block h-[calc(100vh-10rem)] shadow-md rounded-tl-md rounded-bl-md rounded-tr-[2.5rem] rounded-br-[2.5rem]"
            alt="Anime Auth"
          />
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;
