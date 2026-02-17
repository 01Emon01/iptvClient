import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ProductImage from "./packages/ProductImage";

type Product = {
  id: string;
  images: string[];
  name: string;
  category: string;
  price: string;
  discount: string;
  stock: number;
  sales: number;
};

type styleProps = {
  data: Product;
};

export default function BannerCard({ data }: styleProps) {
  if (!data) return null;
  const message = `
Hello, I'm interested in this product:

Product: ${data.name}
Price: $${data.price}
Link: ${process.env.NEXT_PUBLIC_SITE_URL}/product/${data.id}

Can you provide more details?
`;
  const whatsappUrl = `https://wa.me/0502368942?text=${encodeURIComponent(message)}`;
  return (
    <div className="side-banner h-full w-full">
      <div className="product-thumb-image">
        <Link href={`/products/${data.id}`} className="product-logo-thumb">
          <ProductImage data={data} />
        </Link>
      </div>
      <div className="side-banner-content pt-4">
        <div className="product-name text-sm sm:text-base font-semibold mb-2 sm:mb-4">
          <Link href={`/products/${data.id}`}>{data.name}</Link>
        </div>
        <div className="flex items-center gap-3 mb-2 sm:mb-6">
          {data.discount ? (
            <>
              <span className="secondary-color text-sm sm:text-lg font-bold">
                {data.discount}
              </span>
              <span className="text-gray-700 text-sm sm:text-base line-through">
                {data.price}
              </span>
            </>
          ) : (
            <>
              <span className="secondary-color text-sm sm:text-lg font-bold">
                {data.price}
              </span>
            </>
          )}
        </div>
        <div className="hidden sm:flex stock-bar-wrapper mb-3 sm:mb-8">
          <div className="flex items-center justify-between w-full text-sm mb-2">
            <span>Sold: {data.sales}</span>
            <span>Available: {data.stock}</span>
          </div>
          <div className="stock-bar">
            <div className="inner-bar"></div>
          </div>
        </div>
        <a href={whatsappUrl} className="side-banner-btn-link">
          <div className="side-banner-btn">
            <span className="text-[12px] sm:text-base">Whatsapp</span>
            <BsChevronRight />
          </div>
        </a>
      </div>
      <div className="hot-tag">
        <span className="text-white text-sm uppercase font-bold">Hot</span>
      </div>
    </div>
  );
}
