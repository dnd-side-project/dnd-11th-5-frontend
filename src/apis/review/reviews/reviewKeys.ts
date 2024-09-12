import { FestivalReviewsParameters } from "./reviewsType";

export const reviewsKeys = {
  all: ["reviews"],
  list: (params: FestivalReviewsParameters) => [reviewsKeys.all, params],
} as const;
