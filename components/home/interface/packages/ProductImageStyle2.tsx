"use client";
import Image, { ImageLoader } from "next/image";

type Product = {
  images: string[];
};

type styleProps = {
  data: Product;
};

export default function ProductImageStyle2({ data }: styleProps) {
  const normalizePath = (path: string) =>
    path.replace(/\\/g, "/").replace(/^uploads\//, "");
  const img = normalizePath(data.images[0]);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:8000/data/files/${src}?w=${width}&q=${
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
