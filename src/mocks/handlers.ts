import {
  FestivalHandler,
  SearchFestivalHandler,
  thisWeekFestivalHandler,
  topReviewsHandler,
  trendingFestivalHandler,
} from "./data/festivalMocks";

export const handlers = [
  ...FestivalHandler,
  ...thisWeekFestivalHandler,
  ...trendingFestivalHandler,
  ...SearchFestivalHandler,
  ...topReviewsHandler,
];
