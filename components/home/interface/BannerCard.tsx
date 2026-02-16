import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

export default function BannerCard() {
  return (
    <div className="side-banner h-full w-full">
      <div className="product-thumb-image">
        <Link href={""} className="banner-logo">
          <Image
            src={"/product-card-image2.png"}
            width={250}
            height={250}
            alt="product-image"
            priority={false}
            className="product-img"
          />
          <Image
            src={"/product-card-image.png"}
            width={250}
            height={250}
            alt="product-image-hover"
            priority={false}
            className="product-img-hover"
          />
        </Link>
      </div>
      <div className="side-banner-content pt-4">
        <div className="product-name text-sm sm:text-base font-semibold mb-2 sm:mb-4">
          <Link href={""}>Amazon Cloud CAM Security</Link>
        </div>
        <div className="flex items-center gap-3 mb-2 sm:mb-6">
          <span className="secondary-color text-sm sm:text-lg font-bold">
            $30.25
          </span>
          <span className="text-gray-700 text-sm sm:text-base line-through">
            $30.25
          </span>
        </div>
        <div className="hidden sm:flex stock-bar-wrapper mb-3 sm:mb-8">
          <div className="flex items-center justify-between w-full text-sm mb-2">
            <span>Available: 20</span>
            <span>Stock: 20</span>
          </div>
          <div className="stock-bar">
            <div className="inner-bar"></div>
          </div>
        </div>
        <a href="https://wa.me/0502368942" className="side-banner-btn-link">
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
