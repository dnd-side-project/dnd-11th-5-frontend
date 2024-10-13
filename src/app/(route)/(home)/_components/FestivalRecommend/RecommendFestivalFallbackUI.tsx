import Image from "next/image";
import Link from "next/link";
import React from "react";

import RoundButton from "@/components/core/Button/RoundButton/RoundButton";

const RecommendFestivalFallbackUI = () => {
  return (
    <div className="flex w-full justify-between gap-[12px] px-[24px] py-[35px]">
      <div className="flex w-full flex-col justify-between gap-[12px]">
        <div className="flex flex-col">
          <span className="whitespace-nowrap text-title-bold">
            로그인을 통해
          </span>
          <span className="whitespace-nowrap text-title-bold">
            페스티벌을 추천받아요
          </span>
        </div>
        <Link href="/auth/sign-in">
          <RoundButton
            label={"로그인하러가기"}
            className="w-auto bg-primary-01"
          />
        </Link>
      </div>
      <div className="flex h-auto w-full items-end justify-end">
        <Image
          src="/images/fallbackLogo.png"
          alt="romantist"
          width={134}
          height={112}
        />
      </div>
    </div>
  );
};

export default RecommendFestivalFallbackUI;
