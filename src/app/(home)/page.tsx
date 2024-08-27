import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import { FestivalHot, FestivalThisWeek, TopReviews } from "./_components";
export default async function Home() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <main className="flex flex-col gap-[40px] bg-gray-scale-100 px-[16px] pb-[36px] pt-[16px]">
        <FestivalHot />
        <FestivalThisWeek />
        <TopReviews />
      </main>
      <NavigationBar />
    </div>
  );
}
