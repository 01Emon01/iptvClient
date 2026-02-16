"use client";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BannerSlider() {
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
        <SwiperSlide>
          <div
            className="banner-image"
            style={{
              background: "url(/banner-image.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-image"
            style={{
              background: "url(/banner-image.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
