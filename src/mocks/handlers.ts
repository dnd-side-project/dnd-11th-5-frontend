import {
  FestivalHandler,
  reviewsHandler,
  SearchFestivalHandler,
  thisWeekFestivalHandler,
  topKeywordFestivalHandler,
  topReviewsHandler,
  trendingFestivalHandler,
} from "./data/festivalMocks";

export const handlers = [
  ...FestivalHandler,
  ...thisWeekFestivalHandler,
  ...trendingFestivalHandler,
  ...SearchFestivalHandler,
  ...topReviewsHandler,
  ...topKeywordFestivalHandler,
  ...reviewsHandler,
];
