"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { ArrowLeftSmallIcon, ShareIcon } from "@/components/icons";

interface Props {}

const FestivalHeader: FC<Props> = ({}) => {
  const router = useRouter();

  const handleGoback = () => {
    router.back();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "피에스타 링크 공유하기",
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  return (
    <header className="flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      <button type="button" onClick={handleGoback}>
        <ArrowLeftSmallIcon width={24} height={24} />
      </button>

      <div className="size-[44px]" />

      <button type="button" onClick={handleShare}>
        <ShareIcon width={24} height={24} />
      </button>
    </header>
  );
};

export default FestivalHeader;
