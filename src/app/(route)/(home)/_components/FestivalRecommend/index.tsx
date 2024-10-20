import { Session } from "next-auth";
import { FC } from "react";

import { RecommendFestivalResponse } from "@/apis/festivals/recommendFestival/recommendFestivalType";
import RecommendFestivalList from "@/components/Swiper/RecommendFestival/RecommendFestival";

interface Props {
  session: Session;
  recommendFestivals?: RecommendFestivalResponse;
}

const RecommendFestival: FC<Props> = ({ recommendFestivals, session }) => {
  return (
    <RecommendFestivalList
      recommendFestivals={recommendFestivals}
      session={session}
    />
  );
};

export default RecommendFestival;
