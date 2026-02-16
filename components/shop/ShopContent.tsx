import ProductStyle3 from "../home/interface/ProductStyle3";

type Product = {
  id: string;
  images: string[];
  name: string;
  category: string;
  shortDesc: string;
  desc: string;
  price: string;
  discount: string;
  stock: number;
  sales: number;
};

type Props = {
  searchParams?: {
    c?: string;
    n?: string;
  };
};

export default async function ShopContent({ searchParams }: Props) {
  const params = await searchParams;

  const category = params?.c;
  const name = params?.n;

  const query = new URLSearchParams();

  if (category) query.append("c", category);
  if (name) query.append("n", name);

  const url = `${process.env.API_BASE_URL}/data/admin/products${
    query.toString() ? `?${query.toString()}` : ""
  }`;

  const res = await fetch(url, {
    cache: "no-store",
  });
  const data: Product[] = await res.json();
  return (
    <div className="mk-zClass-spContent-area w-full">
      {/* <div className="mk-zClass-shopControls flex xl:hidden items-center justify-between flex-wrap gap-2 sm:gap-10 pb-4 mb-6 border-b border-gray-200">
        <div className="flex xl:hidden items-center gap-10">
          <FilterButton />
        </div>
      </div> */}
      <div className="mk-zClass-gridLayout_wrapper">
        <div className="mk-grid-layout style-1">
          {data.map((item) => (
            <ProductStyle3 data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
