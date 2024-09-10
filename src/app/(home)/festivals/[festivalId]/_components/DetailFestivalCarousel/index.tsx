"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailFestivalCarousel = ({ festivals }: Props) => {
  const { images } = festivals;
  return (
    <Swiper
      id="FestivalDatilSwiper"
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="aspect-video h-auto w-full sm:aspect-square"
    >
      {images.map((src) => (
        <SwiperSlide key={src.imageId}>
          <Image src={src.imageUrl} alt={src.imageUrl} fill priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailFestivalCarousel;
