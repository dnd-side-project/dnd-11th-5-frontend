import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { formatToKoreanDate } from "@/lib/dayjs";
import { FestivalListModel } from "@/model/festivalTypes";
import { cn } from "@/utils/cn";

export interface FestivalTileProps extends LinkProps {
  festival: FestivalListModel;
  children: React.ReactNode;
}

const FestivalTile: FC<FestivalTileProps> = ({
  festival,
  children,
  ...props
}) => {
  return (
    <Link
      className={cn(
        "w-full h-auto duration-300 rounded-[8px] p-[12px]",
        "flex items-start justify-between gap-[16px]",
        "bg-gray-scale-0",
      )}
      {...props}
    >
      <div className="relative h-[90px] min-w-[80px] rounded-[8px]">
        <Image
          src={festival.thumbnailImage}
          alt={festival.name}
          fill
          className="rounded-[8px]"
        />
      </div>

      <div className="flex w-full items-start justify-between py-[8px]">
        <div className="flex flex-col items-start gap-[2px]">
          <span className="text-caption1-regular text-gray-scale-600">
            {festival.sido + festival.sigungu}
          </span>
          <span className="text-subtitle-bold text-gray-scale-700">
            {festival.name}
          </span>
          <span className="text-caption1-medium text-gray-scale-700">
            {`${formatToKoreanDate(festival.startDate)} - ${formatToKoreanDate(festival.endDate)}`}
          </span>
        </div>
        {children}
      </div>
    </Link>
  );
};

export default FestivalTile;
