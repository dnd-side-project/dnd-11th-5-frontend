import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { SearchFestival } from "@/apis/festivals/searchFestival/searchFestivalType";
import { ScrabIcon } from "@/components/icons";
import { formatToKoreanDate } from "@/lib/dayjs";
import { cn } from "@/utils/cn";

import { IconButton } from "../../Button";

export interface FestivalTileProps {
  festival: SearchFestival;
}

const FestivalSearchTile: FC<FestivalTileProps> = ({ festival }) => {
  return (
    <div
      className={cn(
        "w-full h-auto duration-300 rounded-[8px] p-[12px] flex justify-between items-start bg-gray-scale-0 shadow-sm",
      )}
    >
      <Link
        href={`/featival/${festival.festivalId}`}
        className="flex items-start justify-between gap-[16px]"
      >
        <div className="relative h-[90px] min-w-[80px] rounded-[8px]">
          <Image
            src={festival.thumbnailImage}
            alt={festival.name}
            fill
            className="rounded-[8px]"
          />
        </div>

        <div className="flex flex-col items-start gap-[2px]">
          <span className="text-caption1-regular text-gray-scale-600">
            {festival.sido + festival.sigungu}
          </span>
          <span className="line-clamp-2 text-subtitle-bold text-gray-scale-700">
            {festival.name}
          </span>
          <span className="text-caption1-medium text-gray-scale-700">
            {`${formatToKoreanDate(festival.startDate)} - ${formatToKoreanDate(festival.endDate)}`}
          </span>
        </div>
      </Link>
      <IconButton
        active={festival.isBookmarked}
        onClick={() => console.log("test")}
      >
        <ScrabIcon width={24} height={24} />
      </IconButton>
    </div>
  );
};

export default FestivalSearchTile;
