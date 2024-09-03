export type PaginationParamter = {
  page: number;
  size: number;
};

export type UserType = {
  userTypeId: number;
  name: string;
};

export interface RecommendFestivalResponse {
  festivals: Array<RecommendFestivalModel>;
  userType: UserType;
}

export type RecommendFestivalModel = {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
};
