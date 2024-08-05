import MobileHomeHeader from "@/layout/Mobile/MobileHeader/MobileHomeHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar/NavigationBar";

import HomeView from "./view";

export default function Home() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <MobileHomeHeader />
      <HomeView />
      <NavigationBar />
    </div>
  );
}
