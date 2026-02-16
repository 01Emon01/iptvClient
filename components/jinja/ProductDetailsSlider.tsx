"use client";

import Image from "next/image";
import { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import DetailsImage from "./interface/DetailsImage";

export default function ProductDetailsSlider({ images }: { images: string[] }) {
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
        {images.map((item) => (
          <SwiperSlide>
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
          {images.map((item) => (
            <SwiperSlide>
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
