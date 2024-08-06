import HomeHeader from "@/layout/Mobile/MobileHeader/HomeHeader/HomeHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar/NavigationBar";

import HomeView from "./view";

export default function Home() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      <HomeView />
      <NavigationBar />
    </div>
  );
}
