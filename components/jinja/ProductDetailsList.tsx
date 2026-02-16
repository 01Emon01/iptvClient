import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

type Categories = {
  id: string;
  name: string;
  slug: string;
};

type DataProps = {
  name: string;
  categories: Categories;
  category: string;
  shortDesc: string;
  price: string;
  discount: string;
  stock: number;
  sales: number;
};

type DetailsProps = {
  data: DataProps;
};

export default function ProductDetailsList({ data }: DetailsProps) {
  return (
    <div className="mk-zClass-product-details_wrap">
      <div className="product-details-list">
        <div className="mk-product-details-content">
          <div className="product-details-heading">
            <p className="text-sm text-gray-700">
              Categories:{" "}
              <Link href={""} className="">
                {data.categories.name}
              </Link>
            </p>
            <h5 className="product-details-name text-2xl font-semibold text-gray-800">
              {data.name}
            </h5>
          </div>
          <div className="product-details-center">
            <div className="flex items-center gap-2">
              {data.discount ? (
                <>
                  <h4 className="primary-color text-3xl font-semibold">
                    ${data.discount}
                  </h4>
                  <span className="old-price line-through text-lg text-gray-600">
                    ${data.price}
                  </span>
                </>
              ) : (
                <>
                  <h4 className="primary-color text-3xl font-semibold">
                    ${data.price}
                  </h4>
                </>
              )}
            </div>
          </div>
          <div className="product-details-bottom">
            <h6 className="text-lg font-semibold text-gray-800">
              About this item
            </h6>
            <div className="product-short-desc mb-4">
              <div
                dangerouslySetInnerHTML={{ __html: data.shortDesc }}
                className="text-gray-700"
              />
            </div>
            <Link href={""}>
              <div className="product-shop-btn w-max!">
                <span className="text-[12px] sm:text-base">Whatsapp Now</span>
                <BsChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
