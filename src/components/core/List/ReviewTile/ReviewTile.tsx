import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import Ratings from "@/components/rating/Ratings";
import { cn } from "@/utils/cn";

import ReviewTag from "../../Tag/ReviewTag/ReviewTag";

interface FestivalReview {
  src?: string;
  title: string;
  content: string;
  duration: string;
  keywords: string[];
  rating: number;
}

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  festivalReview: FestivalReview;
}

const ReviewTile: FC<Props> = ({ festivalReview, ...props }) => {
  const firstTwoKeywords = festivalReview.keywords.slice(0, 2);

  return (
    <div
      className={cn(
        "w-full h-full duration-300 rounded-[8px] p-[16px]",
        "flex items-start justify-between gap-[12px]",
        "bg-gray-scale-0",
        props.className,
      )}
      {...props}
    >
      {!!festivalReview.src && (
        <div className="relative h-[104px] min-w-[80px]">
          <Image src={festivalReview.src} alt={festivalReview.title} fill />
        </div>
      )}

      <div className="flex h-full w-full flex-col items-start justify-between gap-[8px] py-[4px]">
        <div className="flex h-full  w-full flex-col items-start gap-[6px]">
          <div className="flex h-full w-full  items-center justify-between">
            <span className="line-clamp-1 text-body2-bold text-gray-scale-700">
              {festivalReview.title}
            </span>
            <Ratings rating={festivalReview.rating} />
          </div>
          <span className="line-clamp-2 text-body1-regular text-gray-scale-600">
            {festivalReview.content}
          </span>
        </div>
        <div className="flex gap-[8px]">
          {firstTwoKeywords.map((keyword) => (
            <ReviewTag key={keyword} label={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewTile;
