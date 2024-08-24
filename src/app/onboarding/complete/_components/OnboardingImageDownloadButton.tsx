"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { IconButton } from "@/components/core/Button";
import { DownloadIcon } from "@/components/icons";
import { downloadImageByUrl, errorLog } from "@/utils";

const OnboardingImageDownloadButton = () => {
  const searchParams = useSearchParams();

  const userTypeName = searchParams.get("userTypeName");

  // TODO: replace to image from server
  const handleDownloadImage = async () => {
    try {
      await downloadImageByUrl(
        decodeURIComponent(searchParams.get("userTypeImage") as string),
        userTypeName ?? undefined,
      );
    } catch (error) {
      errorLog(error);
    }
  };

  return (
    <>
      <div className="relative h-full max-h-[438px] w-full max-w-[323px] rounded-[42px]">
        <Image
          fill
          priority
          src={searchParams.get("userTypeImage") as string}
          // src={"/images/onboardingCard.png"}
          alt="onboading-card"
          sizes="(max-width: 323px)"
        />
      </div>
      <IconButton
        type="button"
        className="flex items-center gap-[8px]"
        onClick={handleDownloadImage}
      >
        <DownloadIcon width={24} height={24} className="text-gray-scale-600" />
        <span className="text-button1-semi text-gray-scale-600">
          이미지 저장하기
        </span>
      </IconButton>
    </>
  );
};

export default OnboardingImageDownloadButton;
