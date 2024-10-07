import { SortOption } from "@/apis/review/reviews/reviewsType";

export type BookmarksResponse = {
  content: Array<BookmarkedFestival>;
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

export type BookmarkFestivalParameter = {
  page?: number;
  size?: number;
  sort?: SortOption;
};

export type BookmarkedFestival = {
  festivalId: number;
  name: string;
  thumbnailImage: string;
  sido: string;
  sigungu: string;
  startDate: string;
  endDate: string;
  isBookmarked: boolean;
};
