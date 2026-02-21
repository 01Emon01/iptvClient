import BannerCard from "./interface/BannerCard";
import BannerSlider from "./interface/BannerSlider";

type Banner = {
  id: string;
  images: string[];
};

type Product = {
  id: string;
  images: string[];
  name: string;
  category: string;
  price: string;
  discount: string;
  stock: number;
  sales: number;
};

type Data = {
  banner: Banner;
  product: Product;
  secProduct: Product;
};

export default async function Banners() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/data/admin/featured/banners`,
  );
  const data: Data = await res.json();
  return (
    <div className="mk-zClass-banners_wrapper py-7">
      <div className="container mx-auto">
        <div className="flex flex-wrap xl:flex-nowrap gap-y-3 mx-2">
          <div className="w-full xl:w-6/8 px-2">
            <BannerSlider banners={data.banner} />
          </div>
          <div className="banner-cards-wrapper flex flex-col sm:flex-row xl:flex-col gap-4 w-full lg:w-8/8 xl:w-2/8 px-2">
            <BannerCard data={data.product} />
            <div className="hidden sm:block xl:hidden w-full h-full">
              <BannerCard data={data.secProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
