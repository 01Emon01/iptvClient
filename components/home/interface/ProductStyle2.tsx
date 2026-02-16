import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ProductImageStyle2 from "./packages/ProductImageStyle2";

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
  specialsAsFourth: any[];
};

type dataProps = {
  data: Product;
};

export default function ProductStyle2({ data }: dataProps) {
  return (
    <div className="product-card style-2 h-full">
      <div className="product-thumb-image">
        <Link href={`/products/${data.id}`}>
          <ProductImageStyle2 data={data} />
        </Link>
      </div>
      <div className="product-info pt-6">
        <div className="grid gap-2">
          <div className="bg-white">
            <p className="text-gray-500 text-sm mb-3">{data.categories.name}</p>
            <Link
              href={`/products/${data.id}`}
              className="product-name text-left! text-[18px] font-semibold mb-2"
            >
              {data.name}
            </Link>
          </div>
          <div className="btn-groups-product-card mb-3">
            {data.discount ? (
              <p className="product-price-wrapper flex items-center gap-2 duration-300">
                <span className="secondary-color new-price text-xl font-semibold">
                  {data.discount}
                </span>
                <span className="old-price line-through text-gray-500">
                  {data.price}
                </span>
              </p>
            ) : (
              <p className="product-price-wrapper duration-300 flex flex-col gap-2">
                <span className="secondary-color new-price text-xl font-semibold">
                  {data.price}
                </span>
              </p>
            )}
          </div>
          <a href="https://wa.me/0502368942" className="side-banner-btn-link">
            <div className="side-banner-btn">
              <span>Whatsapp</span> <BsChevronRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
