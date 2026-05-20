"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/public/favicon.ico";

interface MetadataState {
  title: string;
  description: string;
  icon: string;
}

export const useMetadata = () => {
  const pathname = usePathname();

  const [metadata, setMetadata] = useState<MetadataState>({
    title: "",
    description: "",
    icon: Icon as unknown as string,
  });

  useEffect(() => {
    if (pathname === "/") {
      setMetadata({
        title: "Tun Yar Zar Toe | Software Engineer",
        description:
          "Interactive terminal portfolio showcasing projects, skills, and experience.",
        icon: Icon as unknown as string,
      });
    } else if (pathname === "/projects") {
      setMetadata({
        title: "Projects | Tun Yar Zar Toe",
        description: "A collection of software engineering and web development projects.",
        icon: Icon as unknown as string,
      });
    } else if (pathname === "/about") {
      setMetadata({
        title: "About | Tun Yar Zar Toe",
        description: "Learn more about Tun Yar Zar Toe — background, skills, and experience.",
        icon: Icon as unknown as string,
        // icon: Icon as unknown as string,
      });
    } else {
      setMetadata({
        title: "Tun Yar Zar Toe",
        description: "Software Engineer Portfolio.",
        icon: Icon as unknown as string,
      });
    }
  }, [pathname]);

  return metadata;
};