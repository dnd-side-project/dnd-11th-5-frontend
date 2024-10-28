import type { PaginationMetaData } from "@/apis/festival";

export type FestivalListModel = {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
};

export type HotFestivalResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: HostFestivalData;
};

export interface HostFestivalData extends HotFestivalList, PaginationMetaData {}

export interface HotFestivalList {
  content: FestivalListModel[];
}
