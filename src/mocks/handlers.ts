import { FestivalHandler } from "./data/festivalMocks/hotFestivalHandler";
import { SearchFestivalHandler } from "./data/festivalMocks/searchFestivalHandler";
import { thisWeekFestivalHandler } from "./data/festivalMocks/thisWeekFestivalHandler";
import { trendingFestivalHandler } from "./data/festivalMocks/trendingFestivalHandler";

export const handlers = [
  ...FestivalHandler,
  ...thisWeekFestivalHandler,
  ...trendingFestivalHandler,
  ...SearchFestivalHandler,
];
