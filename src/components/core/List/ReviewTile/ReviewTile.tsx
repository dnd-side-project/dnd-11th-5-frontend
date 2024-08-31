import Image from "next/image";
import { ComponentPropsWithoutRef, FC } from "react";

import { TopReview } from "@/apis/review/topReviews/topReviewsType";
import Ratings from "@/components/rating/Ratings";
import { cn } from "@/utils/cn";

import { ReviewTag } from "../../Tag";

interface Props extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  review: TopReview;
}

const ReviewTile: FC<Props> = ({ review, className }) => {
  return (
    <div
      className={cn(
        "w-full h-full duration-300 rounded-[8px] p-[16px]",
        "flex items-start justify-between gap-[12px]",
        "bg-gray-scale-0",
        className,
      )}
    >
      {!review.thumbnailImage && (
        <div className="relative h-[104px] min-w-[80px]">
          <Image
            src={review.thumbnailImage ?? "/images/fallbackLogo.png"}
            alt={review.festivalName}
            fill
            className=" rounded-[8px]"
          />
        </div>
      )}

      <div className="flex h-full w-full flex-col items-start justify-between gap-[8px] py-[4px]">
        <div className="flex h-full  w-full flex-col items-start justify-between gap-[8px]">
          <div className="flex h-auto w-full  items-center justify-between">
            <span className="line-clamp-1 text-body2-bold text-gray-scale-700">
              {review.festivalName}
            </span>
            <Ratings rating={review.rating} />
          </div>
          <span className="line-clamp-2 text-body1-regular text-gray-scale-600">
            {review.content}
          </span>
        </div>
        <div className="flex gap-[8px]">
          {review.keywords.map(({ keyword, keywordId }) => (
            <ReviewTag key={keywordId} label={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewTile;
