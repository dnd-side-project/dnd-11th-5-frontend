import NavigationBar from "@/layout/Mobile/NavigationBar";

import MypageHeader from "./_components/MypageHeader";
import MyPageView from "./view";

export default function Map() {
  return (
    <div className="mb-[60px] ">
      <MypageHeader />
      <MyPageView />
      <NavigationBar />
    </div>
  );
}
