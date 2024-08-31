import { getServerSideSession } from "@/apis/auth/auth";
import { FloatingButton } from "@/components/core/Button";
import RecommendFestival from "@/components/Swiper/RecommendFestival";
import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import { FestivalHot, FestivalThisWeek, TopReviews } from "./_components";

export default async function Home() {
  const session = await getServerSideSession();
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <RecommendFestival />
      <main className="flex flex-col gap-[40px] rounded-t-[20px] bg-gray-scale-100 px-[16px] pb-[36px] pt-[16px]">
        <FestivalHot />
        <FestivalThisWeek />
        <TopReviews />
      </main>
      <FloatingButton session={session} />
      <NavigationBar />
    </div>
  );
}
