"use client";
import Image, { ImageLoader } from "next/image";

type styleProps = {
  data: string;
};

export default function ProductImageStyle2({ data }: styleProps) {
  const imagesData = JSON.parse(data);
  const normalizePath = (path: string) =>
    path.replace(/\\/g, "/").replace(/^uploads\//, "");
  const img = normalizePath(imagesData[0]);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/data/files/${src}?w=${width}&q=${
      quality || 50
    }`;
  };
  return (
    <Image
      loader={myLoader}
      src={img}
      width={350}
      height={350}
      alt="product-image"
      priority={false}
      className="product-img"
    />
  );
}
