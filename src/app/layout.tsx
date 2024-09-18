import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import QueryProvider from "@/app/component/query-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    // title: "成烈 ❤ 彥芳 電子喜帖",
    // description: "成烈 ❤ 彥芳 電子喜帖",
    title: "電子喜帖 Template",
    description: "電子喜帖 Template",
};
const queryClient = new QueryClient()
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <QueryProvider>
            <body className={inter.className}>{children}</body>
        </QueryProvider>
        </html>
    );
}
