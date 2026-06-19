import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tun Yar Zar Toe - software engineer",
  description: "AI Engineer & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}