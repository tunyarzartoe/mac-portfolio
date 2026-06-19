"use client";

import { usePathname } from "next/navigation";
import Icon from "@/public/favicon.ico";

export interface MetadataState {
  title: string;
  description: string;
  icon: string;
}

export const useMetadata = (): MetadataState => {
  const pathname = usePathname();

  switch (pathname) {
    case "/":
      return {
        title: "Tun Yar Zar Toe | Software Engineer",
        description:
          "Interactive terminal portfolio showcasing projects, skills, and experience.",
        icon: Icon.src,
      };

    case "/projects":
      return {
        title: "Projects | Tun Yar Zar Toe",
        description:
          "A collection of software engineering and web development projects.",
        icon: Icon.src,
      };

    case "/about":
      return {
        title: "About | Tun Yar Zar Toe",
        description:
          "Learn more about Tun Yar Zar Toe — background, skills, and experience.",
        icon: Icon.src,
      };

    default:
      return {
        title: "Tun Yar Zar Toe",
        description: "Software Engineer Portfolio",
        icon: Icon.src,
      };
  }
};