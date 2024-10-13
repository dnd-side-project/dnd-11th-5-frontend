import { Metadata } from "next/types";

import { getUserBadges } from "@/apis/user/badges/badges";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import MypageHeader from "./_components/MypageHeader";
import MyPageView from "./view";

export const metadata: Metadata = {
  title: "마이페이지",
};

export default async function Mypage() {
  const badges = await getUserBadges();

  return (
    <div className="mb-[60px] ">
      <MypageHeader />
      <MyPageView badges={badges} />
      <NavigationBar />
    </div>
  );
}
