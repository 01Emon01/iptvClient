"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Banners = {
  id: string;
  images: string[];
};

type DataProps = {
  banners: Banners;
};

export default function BannerSlider({ banners }: DataProps) {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={10}
        className="banner-swiper"
      >
        {banners.images.map((item, i) => {
          const normalizePath = () =>
            item.replace(/\\/g, "/").replace(/^uploads\//, "");
          return (
            <SwiperSlide key={i}>
              <div
                className="banner-image"
                style={{
                  background: `url(${process.env.NEXT_PUBLIC_SITE_URL}/data/files/${normalizePath()})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50%, 50%",
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
