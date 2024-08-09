import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

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
