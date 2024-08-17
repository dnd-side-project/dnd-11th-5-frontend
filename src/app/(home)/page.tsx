import { getHotFestival } from "@/apis/festivals/hotFestival/hotFestival";
import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import HomeView from "./view";

export default async function Home() {
  const hotFestivals = await getHotFestival();
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <HomeView hotFestivals={hotFestivals} />
      <NavigationBar />
    </div>
  );
}
