import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ProductImageStyle3 from "./packages/ProductImageStyle3";

type Category = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  categories: Category;
  category: string;
  images: string[];
  price: string;
  discount: string;
  stock: number;
  sales: number;
};

type styleProps = {
  data: Product;
};

export default function ProductStyle1({ data }: styleProps) {
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
    <div className="product-card style-1 ">
      <div className="product-thumb-image">
        <Link href={`/products/${data.id}`} className="card-image-link">
          <ProductImageStyle3 data={data} />
        </Link>
      </div>
      <div className="product-info">
        <div className="grid gap-2">
          <div className="bg-white">
            <p className="text-gray-500 text-sm">{data.categories.name}</p>
            <Link href={""} className="product-name font-semibold">
              {data.name}
            </Link>
          </div>
          <div className="btn-groups-product-card">
            <p className="product-price-wrapper duration-300 flex flex-col">
              {data.discount ? (
                <>
                  <span className="secondary-color new-price text-xl font-semibold">
                    ${data.discount}
                  </span>
                  <span className="old-price line-through text-gray-500">
                    ${data.price}
                  </span>
                </>
              ) : (
                <span className="secondary-color new-price text-xl font-semibold">
                  ${data.price}
                </span>
              )}
            </p>
          </div>
          <div className="hidden sm:flex stock-bar-wrapper mb-2">
            <div className="flex items-center justify-between w-full text-sm mb-2">
              <span>Sold: {data.sales}</span>
              <span>Stock: {data.stock}</span>
            </div>
            <div className="stock-bar">
              <div className="inner-bar"></div>
            </div>
          </div>
          <a href={whatsappUrl}>
            <div className="product-shop-btn">
              <span className="text-[12px] sm:text-base">Whatsapp</span>
              <BsChevronRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
