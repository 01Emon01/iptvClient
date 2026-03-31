"use client";
import Image, { ImageLoader } from "next/image";

type styleProps = {
  data: string;
};

export default function ProductImage({ data }: styleProps) {
  const imagesData = JSON.parse(data);
  const normalizePath = (path: string) =>
    path.replace(/\\/g, "/").replace(/^uploads\//, "");
  const img1 = normalizePath(imagesData[0]);
  const img2 = normalizePath(imagesData[1] ?? imagesData[0]);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/data/files/${src}?w=${width}&q=${
      quality || 50
    }`;
  };

  return (
    <>
      <Image
        loader={myLoader}
        src={img1}
        width={250}
        height={250}
        alt="product-image"
        priority={false}
        className="product-img"
      />
      <Image
        loader={myLoader}
        src={img2}
        width={250}
        height={250}
        alt="product-image-hover"
        priority={false}
        className="product-img-hover"
      />
    </>
  );
}
