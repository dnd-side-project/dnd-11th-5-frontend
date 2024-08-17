export type PaginationParamter = {
  page: number;
  size: number;
};

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

export interface HostFestivalData extends HotFestivalList, PageMetaData {}

export interface HotFestivalList {
  content: FestivalListModel[];
}

export interface PageMetaData {
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
