// useMetadata.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from "./favicon.ico"

export const useMetadata = () => {
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    icon:Icon
  });
  const router = useRouter();

  useEffect(() => {
    const handleMetadata = () => {
      const { pathname } = router;
      if (pathname === "/") {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe - Web Developer",
          description: "Description for the About page",
        }));
      } else if (pathname === "/about") {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe | About",
          description: "Description for the Contact page",
        }));
      } else if (pathname === "/services") {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe | Services",
          description: "Description for the Contact page",
        }));
      } else if (pathname === "/work") {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe | Work",
          description: "Description for the Contact page",
        }));
      } else if (pathname === "/contact") {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe | Contact",
          description: "Description for the Contact page",
        }));
      } else {
        setMetadata((prev) => ({
          ...prev,
          title: "Tun Yar Zar Toe | Articles ",
          description: "Default description for your site",
        }));
      }
    };
    handleMetadata();
    router.events.on("routeChangeComplete", handleMetadata);

    return () => {
      router.events.off("routeChangeComplete", handleMetadata);
    };
  }, [router, Icon]);

  return metadata;
};
