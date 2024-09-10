import { TopKeywordParameter } from "./topKeywordFestivalType";

export const topKeywordFestivalKeys = {
  all: ["searchFestival"] as const,
  list: (params: TopKeywordParameter) =>
    [topKeywordFestivalKeys.all, params] as const,
};
