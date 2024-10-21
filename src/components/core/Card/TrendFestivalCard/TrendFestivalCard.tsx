import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { FC, MouseEvent } from "react";

import { FestivalListModel } from "@/apis/festivals/hotFestival/hotFestivalType";
import { DateTag } from "@/components/core/Tag";
import { ScrabIcon } from "@/components/icons";
import { formatToKoreanDate, getDday } from "@/lib/dayjs";
import { cn } from "@/utils";

import { IconButton } from "../../Button";

export interface TrendFestivalCardProps extends LinkProps {
  festival: FestivalListModel;
  isBookmarkAvailable?: boolean;
  isBookmarked?: boolean;
  onToggle?: () => void;
}

const TrendFestivalCard: FC<TrendFestivalCardProps> = ({
  festival,
  isBookmarkAvailable,
  isBookmarked,
  onToggle,
  ...props
}) => {
  const handleIconButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle && onToggle();
  };
  return (
    <div className="relative h-auto">
      <Link
        className={"flex h-auto w-full flex-col gap-[12px] rounded-t-[8px]"}
        {...props}
      >
        <div className="relative h-[136px] w-full rounded-[8px]">
          <Image
            fill
            src={festival.thumbnailImage}
            alt="trendy"
            className="rounded-[8px]"
          />
          <DateTag
            label={getDday(festival.startDate, festival.endDate)}
            className="absolute left-[14px] top-[12px]"
          />
        </div>

        <div className="flex w-full flex-col items-start">
          <span className="w-full max-w-[90%] truncate text-start text-caption1-regular text-gray-scale-600">
            {festival.sido + festival.sigungu}
          </span>
          <span className="w-full max-w-[90%] truncate text-start text-subtitle-bold text-gray-scale-700">
            {festival.name}
          </span>
          <span className="text-start text-caption1-medium text-gray-scale-600">
            {`${formatToKoreanDate(festival.startDate)} - ${formatToKoreanDate(festival.endDate)}`}
          </span>
        </div>
      </Link>
      {isBookmarkAvailable && (
        <IconButton
          className={cn(
            "absolute top-[10px] right-[10px] flex justify-center items-center rounded-full bg-gray-scale-700 p-1",
          )}
          onClick={handleIconButtonClick}
        >
          <ScrabIcon
            width="16px"
            height="16px"
            className={isBookmarked ? "!text-primary-01" : "!text-gray-scale-0"}
          />
        </IconButton>
      )}
    </div>
  );
};

export default TrendFestivalCard;
