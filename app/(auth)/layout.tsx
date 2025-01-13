import Image from "next/image";

import AnimeAuthBG from "@/public/1358151.png";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex gap-x-2 bg-base-200 w-full rounded-[2.5rem] max-w-6xl overflow-hidden p-5 shadow-lg border-2 border-base-300 ">
        <section className="flex-1 max-h-[calc(100vh-9.9rem)] overflow-y-auto">
          {children}
        </section>
        <section className="flex-1 hidden md:block">
          <Image
            src={AnimeAuthBG}
            className="object-cover object-bottom block h-full shadow-md rounded-tl-md rounded-bl-md rounded-tr-[2.5rem] rounded-br-[2.5rem]"
            alt="Anime Auth"
          />
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;
