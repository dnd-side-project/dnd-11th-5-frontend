import { Session } from "next-auth";
import { Suspense } from "react";

import { getRecommendFestival } from "@/apis/festivals/recommendFestival/recommendFestival";

import RecommendFestivalList from "../../../../components/Swiper/RecommendFestival/RecommendFestival";
import RecommendFestivalFallbackUI from "./RecommendFestivalFallbackUI";
import RecommendFestivalSkeleton from "./RecommendFestivalSkeleton";

const RecommendFestival = async ({ session }: { session: Session | null }) => {
  if (!session) {
    return <RecommendFestivalFallbackUI />;
  }

  const festivals = await getRecommendFestival();

  return (
    <Suspense fallback={<RecommendFestivalSkeleton />}>
      <RecommendFestivalList initialData={festivals} />
    </Suspense>
  );
};

export default RecommendFestival;
