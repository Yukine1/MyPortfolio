import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import {SmoothScrollProvider} from "@shared/lib/providers/SmoothControllerProvider";

export const metadata: Metadata = {
    title: "Oleksandr Kolva | Full Stack Developer | AI & React Expert",

    description: "Full Stack Developer with 3+ years of experience specializing in React, TypeScript, and AI integrations. Based in Zaandam, Netherlands.",

    keywords: ["Full Stack Developer", "React Developer Netherlands", "AI Voice Assistant Developer", "TypeScript Expert", "Next.js Portfolio"],
    authors: [{ name: "Oleksandr Kolva" }],
    openGraph: {
        title: "Oleksandr Kolva — Portfolio",
        description: "Building intelligent digital experiences with React and AI.",
        url: "https://my-portfolio.vercel.app",
        siteName: "Oleksandr Kolva Portfolio",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className="bg-[#0a0a0a]">
        <SmoothScrollProvider>
            <body className={inter.className}>{children}</body>
        </SmoothScrollProvider>
        </html>
    );
}