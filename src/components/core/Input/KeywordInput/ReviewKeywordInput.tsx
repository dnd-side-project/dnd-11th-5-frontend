"use client";
import { FC } from "react";

import { ReviewKeyword } from "@/apis/review/reviewKeywords/reviewKeywordsType";

import { BasicChip } from "../../Chip";

const MAX_COUNT = 2;

interface Props {
  keywords: Array<ReviewKeyword>;
  selectedkeywordId: Array<number>;
  onChange: (_keyword: Array<number>) => void;
}

const ReviewKeywordInput: FC<Props> = ({
  keywords,
  selectedkeywordId,
  onChange,
}) => {
  const handleHandleToggle = (isSelected: boolean, id: number) => {
    if (isSelected) {
      const filteredList = selectedkeywordId.filter(
        (selectedkeywordId) => selectedkeywordId !== id,
      );
      onChange(filteredList);
      return;
    }

    onChange([...selectedkeywordId, id]);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[6px]">
        <label className="text-subtitle-medium text-gray-scale-900">
          페스티벌 키워드
          <span className="text-primary-01">*</span>
        </label>

        <span className="text-caption1-regular text-gray-300">최대 2개</span>
      </div>
      <div className="flex w-full flex-wrap gap-[8px]">
        {keywords.map((ky) => {
          const { keyword, keywordId } = ky;
          const isSelected = selectedkeywordId.some((id) => id === keywordId);
          const isMaxSelected = selectedkeywordId.length === MAX_COUNT;

          return (
            <BasicChip
              key={keywordId}
              type="button"
              label={keyword}
              active={isSelected}
              disabled={isMaxSelected && !isSelected}
              onClick={() => {
                if (!isMaxSelected || isSelected) {
                  handleHandleToggle(isSelected, keywordId);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewKeywordInput;
