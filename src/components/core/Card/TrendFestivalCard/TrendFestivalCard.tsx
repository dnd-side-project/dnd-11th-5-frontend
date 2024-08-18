import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { FestivalListModel } from "@/apis/festivals/hotFestival/hotFestivalType";
import { DateTag } from "@/components/core/Tag";
import { formatToKoreanDate, getDday } from "@/lib/dayjs";

export interface TrendFestivalCardProps extends LinkProps {
  festival: FestivalListModel;
}

const TrendFestivalCard: FC<TrendFestivalCardProps> = ({
  festival,
  ...props
}) => {
  return (
    <Link
      className={
        "flex h-auto w-full max-w-[200px] flex-col gap-[12px] rounded-t-[8px]"
      }
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
  );
};

export default TrendFestivalCard;
