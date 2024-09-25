import { Session } from "next-auth";
import { Suspense } from "react";

import { getRecommendFestival } from "@/apis/festivals/recommendFestival/recommendFestival";
import { getMe } from "@/apis/user/me/me";
import UserInitializer from "@/lib/UserInitializer";

import RecommendFestivalList from "../../../../components/Swiper/RecommendFestival/RecommendFestival";
import RecommendFestivalFallbackUI from "./RecommendFestivalFallbackUI";
import RecommendFestivalSkeleton from "./RecommendFestivalSkeleton";

const RecommendFestival = async ({ session }: { session: Session | null }) => {
  if (!session) {
    return <RecommendFestivalFallbackUI />;
  }

  const festivals = await getRecommendFestival();
  const user = session && (await getMe());

  return (
    <UserInitializer user={user}>
      <Suspense fallback={<RecommendFestivalSkeleton />}>
        <RecommendFestivalList initialData={festivals} />
      </Suspense>
    </UserInitializer>
  );
};

export default RecommendFestival;
