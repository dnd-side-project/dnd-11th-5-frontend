import { FC } from "react";

import { Review } from "@/apis/review/reviews/reviewsType";

import TotalReviewListItem from "./TotalReviewListItem";

interface Props {
  reviews: Array<Review>;
}

const TotalReviewList: FC<Props> = ({ reviews }) => {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <div className="flex w-full flex-col">
        {reviews.map((review) => (
          <TotalReviewListItem
            key={review?.reviewId ?? review?.createdAt}
            review={review}
          />
        ))}
      </div>
    </div>
  );
};

export default TotalReviewList;
