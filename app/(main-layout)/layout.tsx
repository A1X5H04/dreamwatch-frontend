import React, { ReactNode } from "react";
import Navbar from "@/components/HomePage/Navbar/Navbar.jsx";
import Footer from "@/components/HomePage/Footer/Footer";
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
        <Footer />
      </Section>
    </DisplayContextProvider>
  );
}

export default MainLayout;
