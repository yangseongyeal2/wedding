import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "成烈 ❤ 彥芳 電子喜帖",
  // description: "成烈 ❤ 彥芳 電子喜帖",
    title: "電子喜帖 Template",
    description: "電子喜帖 Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
  );
}
