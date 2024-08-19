"use client";

import Script from "next/script";

import { env } from "@/env";

const KakaoInit = () => {
  const onLoad = () => {
    window.Kakao.init(env.NEXT_PUBLIC_CLIENT_ID);
  };

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
};

export default KakaoInit;
