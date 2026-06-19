"use client";

import { useEffect } from "react";
import { useMetadata } from "@/src/data/meta_data";

export default function MetaDataHead() {
  const metadata = useMetadata();

  useEffect(() => {
    document.title = metadata.title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      "content",
      metadata.description
    );

    let faviconTag = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement | null;

    if (!faviconTag) {
      faviconTag = document.createElement("link");
      faviconTag.rel = "icon";
      document.head.appendChild(faviconTag);
    }

    faviconTag.href = metadata.icon;

    console.log("Metadata Updated:", metadata);
  }, [metadata]);

  return null;
}