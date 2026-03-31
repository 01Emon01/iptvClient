"use client";
import BannerCard from "./interface/BannerCard";

type Category = {
  id: string;
  name: string;
};

type Specials = {
  id: string;
  createdAt: string;
  fstPrd: string;
  secPrd: string;
  thirdPrd: string;
  frthPrd: string;
};

type Product = {
  id: string;
  name: string;
  category: Category;
  images: string;
  price: string;
  discount: string;
  stock: number;
  sales: number;
  specialsAsSecond: Specials[];
  specialsAsThird: Specials[];
};

type DataProps = {
  data: Product[];
};

export default function BestSeller({ data }: DataProps) {
  const safeData = Array.isArray(data) ? data : [];

  const spFirst = safeData.find((p) => p.specialsAsSecond?.length > 0);
  const spSecond = safeData.find((p) => p.specialsAsThird?.length > 0);
  const products = safeData
    .filter((p) => p.id !== spFirst?.id)
    .filter((p) => p.id !== spSecond?.id)
    .slice(4, 8);
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
