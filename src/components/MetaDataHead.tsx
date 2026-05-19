"use client";
import { useMetadata } from "@/src/data/meta_data";

export default function MetaDataHead() {
  const metadata = useMetadata();
  console.log("Metadata in MetaDataHead:", metadata);

  return (
    <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* <link rel="icon" href={metadata.icon} /> */}
    </head>
    </>
    
  );
}