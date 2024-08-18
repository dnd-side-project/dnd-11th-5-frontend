import { FestivalHandler } from "./data/festivalMocks/hotFestivalHandler";
import { thisWeekFestivalHandler } from "./data/festivalMocks/thisWeekFestivalHandler";

export const handlers = [...FestivalHandler, ...thisWeekFestivalHandler];
