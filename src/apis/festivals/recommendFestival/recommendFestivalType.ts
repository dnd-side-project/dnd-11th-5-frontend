export type PaginationParamter = {
  page: number;
  size: number;
};

export type UserType = {
  userTypeId: number;
  name: string;
};

export type RecommendFestivalResponse = {
  festivals: Array<RecommendFestivalModel>;
  userType: UserType;
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
