import BannerCard from "./interface/BannerCard";
import ProductStyle1 from "./interface/ProductStyle1";
import ProductStyle3 from "./interface/ProductStyle3";

export default async function NewArrivals() {
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
              <li>
                <BannerCard />
              </li>
            </ul>
          </div>
          <div className="grid-item2">
            <ul className="product-list-wrap">
              <li>
                <ProductStyle1 />
              </li>
              <li>
                <ProductStyle1 />
              </li>
            </ul>
          </div>
          <div className="grid-item3">
            <ul className="product-list-wrap">
              <li>
                <ProductStyle3 />
              </li>
            </ul>
          </div>
          <div className="grid-item4">
            <ul className="product-list-wrap">
              <li>
                <ProductStyle1 />
              </li>
              <li>
                <ProductStyle1 />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
