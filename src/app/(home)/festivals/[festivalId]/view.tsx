"use client";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

import {
  DetailFestivalCarousel,
  DetailFestivalInfoPanel,
  DetailFestivalTab,
} from "./_components";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailFestivalView = ({ festivals }: Props) => {
  return (
    <>
      <DetailFestivalCarousel festivals={festivals} />
      <DetailFestivalInfoPanel festivals={festivals} />

      <div className="h-[12px] w-full bg-gray-scale-100" />

      <DetailFestivalTab festivals={festivals} />
    </>
  );
};

export default DetailFestivalView;
