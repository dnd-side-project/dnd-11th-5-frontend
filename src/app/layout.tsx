import "../styles/globals.css";
import "../styles/reset.css";

import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { env } from "@/env";
import MobileLayout from "@/layout/Mobile/MobileLayout";
import {
  MSWProvider,
  ReactQueryProvider,
  SessionProvider,
} from "@/lib/Providers";
import { cn } from "@/utils/cn";

import { Pretendard } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odiga.kr"),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={Pretendard.variable}>
      <body className={cn(Pretendard.className)} suppressHydrationWarning>
        <SessionProvider>
          <MSWProvider>
            <ReactQueryProvider>
              <MobileLayout>
                <Script
                  src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
                  strategy="beforeInteractive"
                />
                {children}
              </MobileLayout>
            </ReactQueryProvider>
          </MSWProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
