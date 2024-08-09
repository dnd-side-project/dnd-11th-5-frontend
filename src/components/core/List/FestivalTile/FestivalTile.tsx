import Image from "next/image";
import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

interface Festival {
  src: string;
  title: string;
  location: string;
  duration: string;
  dday: string;
}

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  festival: Festival;
}

const FestivalTile: FC<Props> = ({ festival, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full h-auto duration-300 rounded-[8px] p-[12px]",
        "flex items-start justify-between gap-[16px]",
        "bg-gray-scale-0",
        props.className,
      )}
      {...props}
    >
      <div className="relative h-[84px] min-w-[80px]">
        <Image src={festival.src} alt={festival.title} fill />
      </div>

      <div className="flex w-full  items-start justify-between py-[8px]">
        <div className="flex flex-col items-start gap-[2px]">
          <span className="text-caption1-regular text-gray-scale-600">
            {festival.location}
          </span>
          <span className="text-subtitle-bold text-gray-scale-700">
            {festival.title}
          </span>
          <span className="text-caption1-medium text-gray-scale-700">
            {festival.duration}
          </span>
        </div>
        {props.children}
      </div>
    </button>
  );
};

export default FestivalTile;
