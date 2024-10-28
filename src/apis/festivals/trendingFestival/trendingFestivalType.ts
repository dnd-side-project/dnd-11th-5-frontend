import type { PaginationMetaData } from "@/apis/festival";

export type TrendingFestival = {
  festivalId: number;
  name: string;
};

export interface TrendingFestivalResponse extends PaginationMetaData {
  content: Array<TrendingFestival>;
}
