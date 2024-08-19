"use client";

import confetti from "canvas-confetti";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { BasicButton, IconButton } from "@/components/core/Button";
import { DownloadIcon } from "@/components/icons";
import { downloadImageByUrl } from "@/utils/downloadImageByUrl";
import { errorLog } from "@/utils/log";

const OnBoardingComplete = () => {
  // TODO: replace to image from server
  const handleDownloadImage = async () => {
    try {
      await downloadImageByUrl(
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=400",
      );
    } catch (error) {
      errorLog(error);
    }
  };

  useEffect(() => {
    confetti({
      origin: {
        x: 0.5,
        y: 0.5,
      },
      particleCount: 100,
      spread: 80,
    });

    setTimeout(() => {
      confetti({
        origin: {
          x: 0.3,
          y: 0.8,
        },
        particleCount: 100,
        spread: 80,
      });
    }, 100);

    setTimeout(() => {
      confetti({
        origin: {
          x: 0.7,
          y: 1,
        },
        particleCount: 100,
        spread: 80,
      });
    }, 180);
  }, []);

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-between gap-[30px] px-[16px] pb-[38px]">
      <div />

      <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
        <div className="flex w-full justify-center">
          <h1 className="text-center text-title-bold text-gray-scale-900">
            페스티벌 유형 프로필이 완성됐어요!
          </h1>
        </div>

        <div className="relative h-full max-h-[438px] w-full max-w-[323px] rounded-[42px]">
          <Image
            fill
            priority
            src={"/images/onboardingCard.png"}
            alt="onboading-card"
            sizes="(max-width: 323px)"
          />
        </div>

        <IconButton
          type="button"
          className="flex items-center gap-[8px]"
          onClick={handleDownloadImage}
        >
          <DownloadIcon
            width={24}
            height={24}
            className="text-gray-scale-600"
          />
          <span className="text-button1-semi text-gray-scale-600">
            이미지 저장하기
          </span>
        </IconButton>
      </div>

      <Link href="/" className="w-full" prefetch>
        <BasicButton type="button" label="맞춤 페스티벌 보러가기" />
      </Link>
    </section>
  );
};

export default OnBoardingComplete;
