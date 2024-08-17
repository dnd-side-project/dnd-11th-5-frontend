export type PagenationParamter = {
  page: number;
  size: number;
};

interface Festival {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
}

export interface HotFestivalResponse extends PageMetaData {
  content: Festival[];
}

export interface PageMetaData {
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
