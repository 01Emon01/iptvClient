"use client";
import BannerCard from "./interface/BannerCard";

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
  specialsAsSecond: any[];
  specialsAsThird: any[];
};

type DataProps = {
  data: Product[];
};

export default function BestSeller({ data }: DataProps) {
  const products = data.slice(0, 4);
  return (
    <div className="mk-zClass-bestSeller_wrapper pb-7">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-3">
          {products.map((item) => (
            <BannerCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
