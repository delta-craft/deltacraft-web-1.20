import { Inter } from "next/font/google";
import React from "react";
import AppThemeProvider from "@components/theme-provider/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeltaCraft - Season 5",
  description: "DeltaCraft Season 5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
