import { FestivalReviewsParameters } from "./reviewsType";

export const reviewsKeys = {
  all: ["reviews"] as const,
  detail: (reviewId: string | number) =>
    [...reviewsKeys.all, reviewId] as const,
  list: (params: FestivalReviewsParameters) =>
    [...reviewsKeys.all, params] as const,
};
