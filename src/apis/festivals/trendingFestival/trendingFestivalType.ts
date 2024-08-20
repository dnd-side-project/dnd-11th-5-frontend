import { PageMetaData } from "../hotFestival/hotFestivalType";

export type TrendingFestival = {
  festivalId: number;
  name: string;
};

export interface TrendingFestivalResponse extends PageMetaData {
  content: Array<TrendingFestival>;
}
