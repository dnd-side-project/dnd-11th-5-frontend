export const BookmarkCountFestivalKeys = {
  all: ["hotFestival"],
  byId: (festivalId: string | number) => [
    BookmarkCountFestivalKeys.all,
    festivalId,
  ],
} as const;
