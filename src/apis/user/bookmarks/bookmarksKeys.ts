import { BookmarkFestivalParameter } from "./bookmarksType";

export const bookmarksKeys = {
  all: ["bookmarks"] as const,
  list: (params: BookmarkFestivalParameter) =>
    [...bookmarksKeys.all, params] as const,
};
