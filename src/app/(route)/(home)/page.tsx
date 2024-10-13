import { Metadata } from "next";

import { getServerSideSession } from "@/apis/auth/auth";
import { FloatingButton } from "@/components/core/Button";
import { HomeHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import {
  FestivalHot,
  FestivalRecommend,
  FestivalThisWeek,
  TopReviews,
} from "./_components";
import RecommendFestivalFallbackUI from "./_components/FestivalRecommend/RecommendFestivalFallbackUI";

export const metadata: Metadata = {
  title: {
    default: "피에스타",
    template: "%s - 피에스타",
  },
  description:
    "한국의 공식 및 비공식 축제 모두를 한곳에서! 날짜, 장소, 프로그램 등 다양한 국내 축제 정보를 확인하고, 대학 축제와 같은 특별한 행사도 피에스타에서 만나보세요.",
  openGraph: {
    siteName: "피에스타",
    title: "피에스타",
    type: "website",
    description:
      "한국의 공식 및 비공식 축제 모두를 한곳에서! 날짜, 장소, 프로그램 등 다양한 국내 축제 정보를 확인하고, 대학 축제와 같은 특별한 행사도 피에스타에서 만나보세요.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Fiesta OG Image",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://www.odiga.kr",
  },
};

export default async function Home() {
  const session = await getServerSideSession();
  return (
    <div className="mb-[60px] mt-[44px]">
      <HomeHeader />
      {!!session ? <FestivalRecommend /> : <RecommendFestivalFallbackUI />}

      <main className="flex flex-col gap-[40px] rounded-t-[20px] bg-gray-scale-100 px-[16px] pb-[36px] pt-[16px]">
        <FestivalHot />
        <FestivalThisWeek />
        <TopReviews />
      </main>
      {!!session ? <FloatingButton /> : null}
      <NavigationBar />
    </div>
  );
}
