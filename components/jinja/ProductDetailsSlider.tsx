"use client";

import { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import DetailsImage from "./interface/DetailsImage";

export default function ProductDetailsSlider({ images }: { images: string }) {
  const converted = JSON.parse(images);
  const [viewSwiper, setViewSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Thumbs]}
        thumbs={{ swiper: viewSwiper }}
        watchSlidesProgress
        style={{ width: "100%" }}
      >
        {converted.map((item: string, i: string) => (
          <SwiperSlide key={i}>
            <DetailsImage data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setViewSwiper}
          spaceBetween={20}
          watchSlidesProgress
          slidesPerView={5}
          style={{ width: "100%" }}
          className="product-details-slider-bottom"
        >
          {converted.map((item: string, i: string) => (
            <SwiperSlide key={i}>
              <div className="product-details-image-item overflow-hidden">
                <DetailsImage data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
