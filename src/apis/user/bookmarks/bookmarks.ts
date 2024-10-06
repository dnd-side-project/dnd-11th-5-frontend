import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";
import { generateUrlWithParams } from "@/utils";

import { BookmarkFestivalParameter, BookmarksResponse } from "./bookmarksType";

const defaultParameter: BookmarkFestivalParameter = {
  page: 0,
  size: 6,
};

export const getBookmarkedFestival = async (
  params: BookmarkFestivalParameter = defaultParameter,
) => {
  const endpoint = FIESTA_ENDPOINTS.users.bookmarks;
  const { data } = await instance.get<BookmarksResponse>(
    generateUrlWithParams(endpoint, params),
    {
      cache: "no-store",
    },
  );

  return data;
};
