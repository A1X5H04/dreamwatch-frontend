import Image from "next/image";
import AnimeAuthBG from "@/public/auth-anime_bg.jpg";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex p-4 gap-x-2 bg-neutral w-full max-w-7xl rounded-[2.5rem]">
        <section className="flex-1">{children}</section>
        <section className="flex-1">
          <Image
            src={AnimeAuthBG}
            className="object-cover rounded-[2.25rem] block h-[calc(100vh-10rem)] border-2 shadow-md"
            alt="Anime Auth"
          />
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;
