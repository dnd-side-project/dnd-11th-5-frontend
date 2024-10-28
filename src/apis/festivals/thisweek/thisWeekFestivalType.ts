import type { PaginationMetaData } from "@/apis/festival";

export interface FestivalListModel {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
}

export interface FestivalResponse<T> {
  statusCode: number;
  status: string;
  message: string;
  data: T;
}

export type ThisWeekFestivalResponse = FestivalResponse<ThisWeekFestivalData>;

export interface ThisWeekFestivalData
  extends ThisWeekFestivalContent,
    PaginationMetaData {}

export interface ThisWeekFestivalContent {
  content: FestivalListModel[];
}
