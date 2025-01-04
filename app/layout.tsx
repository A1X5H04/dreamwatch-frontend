import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/HomePage/Navbar/Navbar.jsx";
import Footer from "@/components/HomePage/Footer/Footer";
import { DisplayContextProvider } from "@/components/State/Context.jsx";
import Section from "@/components/Section.jsx";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DisplayContextProvider>
            <Section>
              <Navbar />
              {children}
              <Footer />
            </Section>
          </DisplayContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
