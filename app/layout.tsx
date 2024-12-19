import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar.jsx";
import Footer from "@/components/Footer/Footer";
import { DisplayContextProvider } from "@/components/State/Context.jsx";
import Section from "@/components/Section.jsx";


export const metadata: Metadata = {
  title: "Dream Watch",
  description: "Watch your Favourite anime here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DisplayContextProvider>
          <Section >
            <Navbar />
            {children}
            <Footer />
          </Section>
        </DisplayContextProvider>
      </body>
    </html>
  );
}
