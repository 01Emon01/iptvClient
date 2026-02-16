"use client";
import Image, { ImageLoader } from "next/image";

type styleProps = {
  data: string;
};

export default function DetailsImage({ data }: styleProps) {
  const normalizePath = (path: string) =>
    path.replace(/\\/g, "/").replace(/^uploads\//, "");
  const img = normalizePath(data);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:8000/data/files/${src}?w=${width}&q=${
      quality || 50
    }`;
  };
  return (
    <>
      <Image
        loader={myLoader}
        src={img}
        height={800}
        width={800}
        alt="product-image"
        priority={false}
        className="product-details-image"
      />
    </>
  );
}
