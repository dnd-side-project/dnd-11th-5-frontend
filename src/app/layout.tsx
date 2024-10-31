import "../styles/globals.css";
import "../styles/reset.css";

import Script from "next/script";
import { ReactNode } from "react";

import { getServerSideSession } from "@/apis/auth/auth";
import ToastProvider from "@/components/Toast/Toast";
import { env } from "@/env";
import MobileLayout from "@/layout/Mobile/MobileLayout";
import {
  MSWProvider,
  ReactQueryProvider,
  SessionProvider,
} from "@/lib/Providers";
import { cn } from "@/utils/cn";

import { Pretendard } from "./fonts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSideSession();

  return (
    <html lang="ko" className={Pretendard.variable}>
      <body className={cn(Pretendard.className)} suppressHydrationWarning>
        <SessionProvider session={session}>
          <MSWProvider>
            <ReactQueryProvider>
              <MobileLayout>
                <Script
                  src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
                  strategy="beforeInteractive"
                />
                {children}
                <ToastProvider />
              </MobileLayout>
            </ReactQueryProvider>
          </MSWProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
