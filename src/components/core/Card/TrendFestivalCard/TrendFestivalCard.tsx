import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

import DateTag from "../../Tag/DateTag/DateTag";

type FestivalModel = {
  location: string;
  title: string;
  duration: string;
  dday: string;
  image: string;
};

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "type"> {
  festival: FestivalModel;
}

const TrendFestivalCard: FC<Props> = ({ festival, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full h-auto flex flex-col gap-[12px] rounded-t-[8px] ",
        props.className,
      )}
      {...props}
    >
      <div className="relative h-[136px] w-full rounded-[8px]">
        <Image fill src={festival.image} alt="trendy" />
        <DateTag
          label={festival.dday}
          className="absolute left-[14px] top-[12px]"
        />
      </div>

      <div className="flex w-full flex-col items-start">
        <span className="w-full max-w-[90%] truncate text-start text-caption1-regular text-gray-scale-600">
          {festival.location}
        </span>
        <span className="w-full max-w-[90%] truncate text-start text-subtitle-bold text-gray-scale-700">
          {festival.title}
        </span>
        <span className="text-start text-caption1-medium text-gray-scale-600">
          {festival.duration}
        </span>
      </div>
    </button>
  );
};

export default TrendFestivalCard;