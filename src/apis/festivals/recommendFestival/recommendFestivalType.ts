import type { FestivalListModel } from "@/apis/festival";

export type UserType = {
  userTypeId: number;
  name: string;
};

export interface RecommendFestivalResponse {
  festivals: Array<FestivalListModel>;
  userType: UserType;
}
