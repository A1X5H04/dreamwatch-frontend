import React, { ReactNode } from "react";
import Navbar from "@/components/HomePage/Navbar/Navbar.jsx";
import { DisplayContextProvider } from "@/components/State/Context.jsx";
import Section from "@/components/Section.jsx";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <DisplayContextProvider>
      <Section>
        <Navbar />
        {children}
      </Section>
    </DisplayContextProvider>
  );
}

export default MainLayout;
