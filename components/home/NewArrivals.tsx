import BannerCard from "./interface/BannerCard";
import ProductStyle1 from "./interface/ProductStyle1";
import ProductStyle3 from "./interface/ProductStyle3";

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

export default async function NewArrivals({ data }: DataProps) {
  const spFirst = data.find((p) => p.specialsAsSecond?.length > 0);
  const spSecond = data.find((p) => p.specialsAsThird?.length > 0);
  const rpFirst = data
    .filter((p) => p.id !== spFirst?.id)
    .filter((p) => p.id !== spSecond?.id)
    .slice(0, 2);
  return (
    <div className="xz-zClass-arrivals_wrapper pt-5 pb-6">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-300 pb-2 mb-7">
          <h2 className="text-lg md:text-3xl font-bold text-gray-700">
            New Arrivals
          </h2>
        </div>
        <div className="grid grid-style-1">
          <div className="grid-item1">
            <ul className="product-list-wrap">
              <li>{spFirst && <BannerCard data={spFirst} />}</li>
            </ul>
          </div>
          <div className="grid-item2">
            <ul className="product-list-wrap">
              {rpFirst.map((item) => (
                <li key={item.id}>
                  <ProductStyle1 data={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item3">
            <ul className="product-list-wrap">
              <li>{spSecond && <ProductStyle3 data={spSecond} />}</li>
            </ul>
          </div>
          <div className="grid-item4">
            <ul className="product-list-wrap">
              {rpFirst.map((item) => (
                <li key={item.id}>
                  <ProductStyle1 data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
