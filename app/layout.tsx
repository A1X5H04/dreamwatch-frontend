import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import TanstackQueryClientProvider from "@/providers/query-client";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <TanstackQueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
