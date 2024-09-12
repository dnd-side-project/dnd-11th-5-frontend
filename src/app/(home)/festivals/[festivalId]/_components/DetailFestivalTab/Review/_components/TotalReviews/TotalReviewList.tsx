import Image from "next/image";
import { FC } from "react";

import { Review } from "@/apis/review/reviews/reviewsType";
import { BasicChip } from "@/components/core/Chip";
import { DotsIcon } from "@/components/icons";
import Ratings from "@/components/rating/Ratings";
import { formatToYYYYMMDD } from "@/lib/dayjs";

interface Props {
  reviews: Array<Review>;
}

const TotalReviewList: FC<Props> = ({ reviews }) => {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <div className="flex w-full flex-col">
        {reviews.map((review) => (
          <div
            key={review.reviewId}
            className="flex flex-col gap-[8px] border-b-[1px] border-gray-scale-100 py-[20px]"
          >
            <div className="flex w-full items-start justify-between">
              <div className="flex w-full gap-[4px] ">
                <Image
                  className="rounded-full"
                  src={review.user.profileImage}
                  alt={review.user.nickname}
                  width={33}
                  height={33}
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-[4px]">
                    <span className="text-body2-semi text-gray-scale-700">
                      {review.user.nickname}
                    </span>
                    <span className="text-caption1-regular text-gray-scale-400">
                      {formatToYYYYMMDD(review.createdAt)}
                    </span>
                  </div>
                  <Ratings rating={review.rating} />
                </div>
              </div>
              <button>
                <DotsIcon
                  width={24}
                  height={24}
                  className="rotate-90 text-gray-scale-400"
                />
              </button>
            </div>
            <p className="text-body1-regular-lh-20 text-gray-scale-700">
              {review.content}
            </p>
            <div className="flex w-full justify-between">
              <div className="flex gap-[8px]">
                {review.keywords.map((keyword) => (
                  <BasicChip key={keyword.keywordId} label={keyword.keyword} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalReviewList;
