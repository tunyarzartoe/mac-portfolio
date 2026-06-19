import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import MetaDataHead from "../components/MetaDataHead";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MetaDataHead />
        {children}
      </body>
    </html>
  );
}