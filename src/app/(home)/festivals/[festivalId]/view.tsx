"use client";

import { Session } from "next-auth";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

import {
  DetailFestivalCarousel,
  DetailFestivalInfoPanel,
  DetailFestivalTab,
} from "./_components";

interface Props {
  festivals: DetailFestivalResponse;
  session: Session | null;
}

const DetailFestivalView = ({ festivals, session }: Props) => {
  return (
    <>
      <DetailFestivalCarousel festivals={festivals} />
      <DetailFestivalInfoPanel festivals={festivals} />

      <div className="h-[12px] w-full bg-gray-scale-100" />

      <DetailFestivalTab festivals={festivals} session={session} />
    </>
  );
};

export default DetailFestivalView;
