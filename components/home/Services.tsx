"use client";

import {
  PiCreditCardLight,
  PiKeyReturnLight,
  PiSealPercentLight,
  PiTimerLight,
  PiTruckLight,
} from "react-icons/pi";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./interface/ServiceCard";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  return (
    <div className="xz-zClass-service-wrapper pb-10">
      <div className="container mx-auto px-4">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
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
          spaceBetween={20}
        >
          <SwiperSlide>
            <ServiceCard
              icon={<PiTruckLight size={36} />}
              title="Free Delivery"
              subtitle="Free shipping for orders over 20$"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              icon={<PiCreditCardLight size={36} />}
              title="Payment"
              subtitle="Pay with multiple credit cards"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              icon={<PiTimerLight size={36} />}
              title="Support 24/7"
              subtitle="24 hours a day, 7 days a week"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              icon={<PiSealPercentLight size={36} />}
              title="Best Offers"
              subtitle="Exclusive discounts, only for you."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              icon={<PiKeyReturnLight size={36} />}
              title="Easy Return"
              subtitle="Within 30 days for an exchange"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
