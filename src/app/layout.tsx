"use client";

import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import MetaDataHead from "../components/MetaDataHead";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <MetaDataHead/>
      <body>{children}</body>
    </html>
  );
}