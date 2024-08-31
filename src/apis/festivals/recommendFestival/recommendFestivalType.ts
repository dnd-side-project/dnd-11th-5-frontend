export type PaginationParamter = {
  page: number;
  size: number;
};

export type RecommendFestivalResponse = {
  festivals: Array<RecommendFestivalModel>;
  userType: {
    userTypeId: number;
    name: string;
  };
};

export interface RecommendFestivalModel {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
}
