import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import RelatedSlider from "./interface/RelatedSlider";

export default function RelatedProducts() {
  return (
    <div className="pb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-7">
          <h5 className="text-lg sm:text-2xl text-gray-800 font-semibold">
            Products Related To This Item
          </h5>
          <div className="mk-zClass-deals-navBtns flex items-center gap-2 text-gray-600">
            <button
              type="button"
              className="deals-nav-btn related-prev-btn text-xl cursor-pointer disabled:cursor-auto disabled:text-gray-400"
            >
              <GoChevronLeft />
            </button>
            <button
              type="button"
              className="deals-nav-btn related-next-btn text-xl cursor-pointer disabled:cursor-auto disabled:text-gray-400"
            >
              <GoChevronRight />
            </button>
          </div>
        </div>
        <RelatedSlider />
      </div>
    </div>
  );
}
