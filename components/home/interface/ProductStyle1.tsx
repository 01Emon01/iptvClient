import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

export default function ProductStyle1() {
  return (
    <div className="product-card style-1 ">
      <div className="product-thumb-image">
        <Link href={""} className="card-image-link">
          <Image
            src={"/product-card-image.png"}
            width={200}
            height={200}
            alt="product-image"
            priority={false}
            className="product-img"
          />
          <Image
            src={"/product-card-image2.png"}
            width={200}
            height={200}
            alt="product-image-hover"
            priority={false}
            className="product-img-hover"
          />
        </Link>
      </div>
      <div className="product-info">
        <div className="grid gap-2">
          <div className="bg-white">
            <p className="text-gray-500 text-sm">Cosmetics</p>
            <Link href={""} className="product-name font-semibold">
              Red Lipstick Realistic Cosmetic Product
            </Link>
          </div>
          <div className="btn-groups-product-card">
            <p className="product-price-wrapper duration-300 flex flex-col">
              <span className="secondary-color new-price text-xl font-semibold">
                $300.00
              </span>
              <span className="old-price line-through text-gray-500">
                $300.00
              </span>
            </p>
          </div>
          <div className="hidden sm:flex stock-bar-wrapper mb-2">
            <div className="flex items-center justify-between w-full text-sm mb-2">
              <span>Available: 20</span>
              <span>Stock: 20</span>
            </div>
            <div className="stock-bar">
              <div className="inner-bar"></div>
            </div>
          </div>
          <a href="https://wa.me/0502368942">
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
