import { getRecommendFestival } from "@/apis/festivals/recommendFestival/recommendFestival";

import RecommendFestivalFallbackUI from "./RecommendFestivalFallbackUI";
import RecommendFestivalList from "./RecommendFestivalList";

const RecommendFestival = async () => {
  const festivals = await getRecommendFestival();

  if (!festivals) {
    return <RecommendFestivalFallbackUI />;
  }

  return <RecommendFestivalList recommendFestivals={festivals} />;
};

export default RecommendFestival;
