"use client";

import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { FC } from "react";

import { getRecommendFestival } from "@/apis/festivals/recommendFestival/recommendFestival";
import { recommendFestivalKeys } from "@/apis/festivals/recommendFestival/recommendFestivalKeys";
import RecommendFestivalList from "@/components/Swiper/RecommendFestival/RecommendFestival";

import RecommendFestivalFallbackUI from "./RecommendFestivalFallbackUI";
import RecommendFestivalSkeleton from "./RecommendFestivalSkeleton";

interface Props {
  session: Session | null;
}

const RecommendFestival: FC<Props> = ({ session }) => {
  const { data: recommendFestivals, isLoading } = useQuery({
    queryKey: recommendFestivalKeys.user(session?.user.userId ?? 0),
    queryFn: () => getRecommendFestival(),
    retry: false,
  });

  if (isLoading) {
    return <RecommendFestivalSkeleton />;
  }

  if (!session) {
    return <RecommendFestivalFallbackUI />;
  }

  return (
    <RecommendFestivalList
      recommendFestivals={recommendFestivals}
      user={session.user}
    />
  );
};

export default RecommendFestival;
