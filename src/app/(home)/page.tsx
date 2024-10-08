import { FloatingButton } from "@/components/core/Button";
import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import {
  FestivalHot,
  FestivalRecommend,
  FestivalThisWeek,
  TopReviews,
} from "./_components";

export default async function Home() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <FestivalRecommend />
      <main className="flex flex-col gap-[40px] rounded-t-[20px] bg-gray-scale-100 px-[16px] pb-[36px] pt-[16px]">
        <FestivalHot />
        <FestivalThisWeek />
        <TopReviews />
      </main>
      <FloatingButton />
      <NavigationBar />
    </div>
  );
}
