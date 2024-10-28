export type PaginationParamter = {
  page: number;
  size: number;
};

export interface PaginationMetaData {
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export type FestivalListModel = {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
};

export type FestivalResponse<T> = {
  statusCode: number;
  status: string;
  message: string;
  data: T;
};

export type FiestaResponse<T> = {
  statusCode: number;
  status: string;
  message: string;
  data: T;
};
