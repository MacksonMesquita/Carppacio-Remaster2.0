/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel1() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 4300 }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/129464904/261821007-1e821d29-b2a9-4879-bb86-80201fc90cd9.jpg"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/129464904/261821042-af3cc2bf-3a4d-468e-b816-83a1ff0b813e.jpg"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/129464904/261821074-4c051ad7-cbe8-43fd-a8be-1f539508aadf.jpg"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/129464904/261821153-2db6717a-49a5-432d-b325-a0950b64144c.jpg"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/129464904/261821251-59ccc057-5999-4082-813f-5f183f5edea3.jpg"
          alt="Restaurant Image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
