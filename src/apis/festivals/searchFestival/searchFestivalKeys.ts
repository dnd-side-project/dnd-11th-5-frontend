import { SearchFestivalParameter } from "./searchFestivalType";

const defaultParams: SearchFestivalParameter = { query: "" };

export const SearchFestivalKeys = {
  all: ["searchFestival"] as const,
  list: (params: SearchFestivalParameter = defaultParams) => [
    SearchFestivalKeys.all,
    params,
  ],
};
