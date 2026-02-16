"use client";
import BannerCard from "./interface/BannerCard";

export default function BestSeller() {
  return (
    <div className="mk-zClass-bestSeller_wrapper pb-7">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-3">
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
        </div>
      </div>
    </div>
  );
}
