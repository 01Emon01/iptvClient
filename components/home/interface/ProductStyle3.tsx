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

export default function ProductStyle3({ data }: styleProps) {
  if (!data) return null;
  const message = `
Hello, I'm interested in this product:

Product: ${data.name}
Price: $${data.price}
Link: ${process.env.NEXT_PUBLIC_SITE_URL}/product/${data.id}

Can you provide more details?
`;
  const whatsappUrl = `https://wa.me/9710502368942?text=${encodeURIComponent(message)}`;

  const percentSold =
    data.sales + data.stock > 0
      ? (data.sales / (data.sales + data.stock)) * 100
      : 0;

  return (
    <div className="product-card style-3 h-full w-full">
      <div className="product-thumb-image">
        <Link href={`/products/${data.id}`} className="product-logo-thumb">
          <ProductImage data={data} />
        </Link>
      </div>
      <div className="product-info pt-4">
        <div className="product-name text-sm sm:text-base font-semibold mb-2 sm:mb-4">
          <Link href={`/products/${data.id}`}>{data.name}</Link>
        </div>
        <div className="flex items-center gap-3 mb-2 sm:mb-6">
          {data.discount ? (
            <>
              <span className="secondary-color text-sm sm:text-lg font-bold">
                <bdi>{data.discount} د.إ</bdi>
              </span>
              <span className="text-gray-700 text-sm sm:text-base line-through">
                <bdi>{data.price} د.إ</bdi>
              </span>
            </>
          ) : (
            <>
              <span className="secondary-color text-sm sm:text-lg font-bold">
                <bdi>{data.price} د.إ</bdi>
              </span>
            </>
          )}
        </div>
        <div className="hidden sm:flex stock-bar-wrapper mb-3 sm:mb-8">
          <div className="flex items-center justify-between w-full text-sm mb-2">
            <span>Sold: {data.sales}</span>
            <span>Stock: {data.stock}</span>
          </div>
          <div className="stock-bar">
            <div
              className="inner-bar"
              style={{ width: `${percentSold}%` }}
            ></div>
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <div className="product-shop-btn">
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
