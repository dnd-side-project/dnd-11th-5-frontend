"use client";

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

import { getRecommendFestival } from "@/apis/festivals/recommendFestival/recommendFestival";
import { recommendFestivalKeys } from "@/apis/festivals/recommendFestival/recommendFestivalKeys";
import RecommendFestivalList from "@/components/Swiper/RecommendFestival/RecommendFestival";
import { useUserStore } from "@/store/user";

import RecommendFestivalSkeleton from "./RecommendFestivalSkeleton";

interface Props {}

const RecommendFestival: FC<Props> = ({}) => {
  const user = useUserStore((state) => state.user);

  const { data: recommendFestivals, isLoading } = useQuery({
    queryKey: recommendFestivalKeys.user(user?.userId ?? 0),
    queryFn: () => getRecommendFestival(),
    retry: false,
  });

  if (isLoading) {
    return <RecommendFestivalSkeleton />;
  }

  return <RecommendFestivalList recommendFestivals={recommendFestivals} />;
};

export default RecommendFestival;
