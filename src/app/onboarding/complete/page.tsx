"use client";

import Link from "next/link";
import { Suspense } from "react";

import { BasicButton } from "@/components/core/Button";
import useUpdateUserSession from "@/hooks/session/useUpdateUserSession";

import OnboardingCompleteConfetti from "./_components/OnboardingCompleteConfetti";
import OnboardingImageDownloadButton from "./_components/OnboardingImageDownloadButton";

const OnBoardingComplete = () => {
  useUpdateUserSession();

  return (
    <Suspense>
      <section className="relative flex h-full w-full flex-col items-center justify-between gap-[30px] px-[16px] pb-[38px]">
        <div />

        <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
          <div className="flex w-full justify-center">
            <h1 className="text-center text-title-bold text-gray-scale-900">
              페스티벌 유형 프로필이 완성됐어요!
            </h1>
          </div>

          <OnboardingImageDownloadButton />
        </div>

        <Link href="/" prefetch className="w-full">
          <BasicButton type="button" label="맞춤 페스티벌 보러가기" />
        </Link>
        <OnboardingCompleteConfetti />
      </section>
    </Suspense>
  );
};

export default OnBoardingComplete;
