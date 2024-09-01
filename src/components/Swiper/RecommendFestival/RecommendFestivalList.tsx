"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RecommendFestivalResponse } from "@/apis/festivals/recommendFestival/recommendFestivalType";
import { formatToKoreanDate } from "@/lib/dayjs";

import RecommendFestivalHeader from "./RecommendFestivalHeader";

const RecommendFestivalList = ({
  recommendFestivals,
}: {
  recommendFestivals: RecommendFestivalResponse;
}) => {
  return (
    <section className="relative h-full w-full px-[24px] py-[35px]">
      <RecommendFestivalHeader userType={recommendFestivals.userType} />
      <Swiper
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        loop
        pagination={{
          type: "fraction",
          el: ".pagination_fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              " / " +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
        modules={[Pagination, Autoplay]}
        className="relative flex h-[289px] w-full items-center justify-center rounded-[18px]"
      >
        {recommendFestivals.festivals.map((festival) => (
          <SwiperSlide
            key={festival.festivalId}
            className="relative flex h-[289px] w-full cursor-pointer items-center justify-center"
          >
            <Image
              src={festival.thumbnailImage}
              alt="image"
              fill
              className="rounded-[18px]"
            />
            <Link
              href={`/festivals/${festival.festivalId}`}
              className="absolute bottom-[20px] left-[10px] flex h-auto w-auto flex-col gap-[4px] rounded-[10px] bg-gray-scale-900/30 px-[12px] py-[8px]"
            >
              <h2 className="text-body2-bold text-gray-scale-0">
                {`${festival.sido} ${festival.sigungu} | ${formatToKoreanDate(festival.startDate)} - ${formatToKoreanDate(festival.endDate)}`}
              </h2>
              <h1 className="text-title-bold text-gray-scale-0">
                {festival.name}
              </h1>
            </Link>
          </SwiperSlide>
        ))}
        <button className="absolute right-[10px] top-[10px] z-[4] rounded-[40px]  bg-gray-scale-900/50 px-[12px] py-[8px] text-button2-medium text-white">
          <span className="pagination_fraction"></span>
        </button>
      </Swiper>
    </section>
  );
};

export default RecommendFestivalList;
