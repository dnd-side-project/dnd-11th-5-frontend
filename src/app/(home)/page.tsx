import { getHotFestival } from "@/apis/festivals/hotFestival/hotFestival";
import { getThisWeekFestival } from "@/apis/festivals/thisweek/thisWeekFestival";
import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import HomeView from "./view";

export default async function Home() {
  const hotFestivals = await getHotFestival();
  const thisWeekFestivals = await getThisWeekFestival();
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <HomeView
        hotFestivals={hotFestivals}
        thisWeekFestivals={thisWeekFestivals}
      />
      <NavigationBar />
    </div>
  );
}
