import ProductStyle2 from "./interface/ProductStyle2";
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
  specialsAsFourth: any[];
};

export default async function Divider2() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/data/admin/products/category/subs`,
  );
  const data: Product[] = await res.json();

  const specialProduct = data.find((p) => p.specialsAsFourth?.length > 0);

  const restProducts = data
    .filter((p) => p.id !== specialProduct?.id)
    .slice(0, 2);
  const rSecPrd = data.filter((p) => p.id !== specialProduct?.id).slice(2, 6);
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="border-b border-gray-300 mx-4 pb-2 mb-7">
          <h2 className="text-lg md:text-3xl font-bold text-gray-700">
            Trending
          </h2>
        </div>
        <div className="flex flex-wrap mx-2 gap-y-6">
          <div className="w-full xl:w-1/2 px-2">
            {specialProduct && <ProductStyle2 data={specialProduct} />}
          </div>
          <div className="w-full xl:w-1/2 px-2">
            <div className="grid grid-cols-2 gap-2">
              {restProducts.map((product) => (
                <ProductStyle3 key={product.id} data={product} />
              ))}
            </div>
          </div>
          <div className="w-full px-2">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
              {rSecPrd.map((product) => (
                <ProductStyle3 key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
