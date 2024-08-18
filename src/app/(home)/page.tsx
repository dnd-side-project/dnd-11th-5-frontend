import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import FestivalHot from "./_components/FestivalHot";
import FestivalThisWeek from "./_components/FestivalThisWeek";

export default async function Home() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <main className="flex flex-wrap gap-4 px-[16px]">
        <FestivalHot />
        <FestivalThisWeek />
      </main>
      <NavigationBar />
    </div>
  );
}
