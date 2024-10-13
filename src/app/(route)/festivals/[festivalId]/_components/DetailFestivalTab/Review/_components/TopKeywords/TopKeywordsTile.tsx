import React, { FC } from "react";

import { TopKeyword } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalType";
import { cn } from "@/utils";

interface Props {
  keyword: TopKeyword;
  percentage: number;
}

const TopKeywordsTile: FC<Props> = ({ keyword, percentage }) => {
  return (
    <div className="relative flex h-[45px] w-full items-center justify-between rounded-[10px] border-[1px] border-gray-scale-100 px-[16px]">
      <span className="z-[1] text-body2-medium text-gray-scale-700">
        {keyword.keyword}
      </span>
      <span className="z-[1] text-body2-medium text-primary-01">
        {keyword.selectionCount}
      </span>
      <div
        className={cn(
          `absolute left-0 top-0 h-[45px] rounded-[10px] bg-primary-05`,
        )}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default TopKeywordsTile;
