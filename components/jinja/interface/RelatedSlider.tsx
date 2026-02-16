"use client";

import ProductStyle3 from "@/components/home/interface/ProductStyle3";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: ".related-prev-btn",
        nextEl: ".related-next-btn",
      }}
      spaceBetween={25}
      watchSlidesProgress
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
      <SwiperSlide>
        <ProductStyle3 />
      </SwiperSlide>
    </Swiper>
  );
}
