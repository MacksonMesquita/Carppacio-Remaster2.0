/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export function Carousel2() {
  return (
    <Swiper
      className="w-[1300px] h-[500px] rounded-3xl"
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4300 }}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&w=1300"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/18586560/pexels-photo-18586560/free-photo-of-alcool-bebida-alcoolica-vidro-copo.jpeg?auto=compress&cs=tinysrgb&w=1300"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1300"
          alt="Restaurant Image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/11157601/pexels-photo-11157601.jpeg?auto=compress&cs=tinysrgb&w=1300&lazy=load"
          alt="Restaurant Image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
