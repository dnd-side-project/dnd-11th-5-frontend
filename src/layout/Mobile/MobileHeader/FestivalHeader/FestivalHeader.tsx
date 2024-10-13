"use client";

import Link from "next/link";
import { FC } from "react";

import { ArrowLeftSmallIcon, ShareIcon } from "@/components/icons";

interface Props {}

const FestivalHeader: FC<Props> = ({}) => {
  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
  };

  return (
    <header className="flex h-[44px] w-full max-w-none items-center justify-between bg-gray-scale-0 px-[10px] text-gray-900 lg:max-w-[450px]">
      <Link href="/">
        <ArrowLeftSmallIcon width={24} height={24} />
      </Link>

      <div className="size-[44px]" />

      <button type="button" onClick={handleShare}>
        <ShareIcon width={24} height={24} />
      </button>
    </header>
  );
};

export default FestivalHeader;
