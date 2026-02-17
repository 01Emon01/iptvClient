"use client";
import Image, { ImageLoader } from "next/image";

type Product = {
  images: string[];
};

type styleProps = {
  data: Product;
};

export default function ProductImageStyle3({ data }: styleProps) {
  const normalizePath = (path: string) =>
    path.replace(/\\/g, "/").replace(/^uploads\//, "");
  const img1 = normalizePath(data.images[0]);
  const img2 = normalizePath(data.images[1] ?? data.images[0]);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:8000/data/files/${src}?w=${width}&q=${
      quality || 50
    }`;
  };
  return (
    <>
      <Image
        loader={myLoader}
        src={img1}
        width={200}
        height={200}
        alt="product-image"
        priority={false}
        className="product-img"
      />
      <Image
        loader={myLoader}
        src={img2}
        width={200}
        height={200}
        alt="product-image-hover"
        priority={false}
        className="product-img-hover"
      />
    </>
  );
}
