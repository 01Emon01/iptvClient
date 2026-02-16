import BannerCard from "./interface/BannerCard";
import BannerSlider from "./interface/BannerSlider";

export default function Banners() {
  return (
    <div className="mk-zClass-banners_wrapper py-7">
      <div className="container mx-auto">
        <div className="flex flex-wrap xl:flex-nowrap gap-y-3 mx-2">
          <div className="w-full xl:w-6/8 px-2">
            <BannerSlider />
          </div>
          <div className="banner-cards-wrapper flex flex-col sm:flex-row xl:flex-col gap-4 w-full lg:w-8/8 xl:w-2/8 px-2">
            <BannerCard />
            <div className="hidden md:block xl:hidden w-full h-full">
              <BannerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
