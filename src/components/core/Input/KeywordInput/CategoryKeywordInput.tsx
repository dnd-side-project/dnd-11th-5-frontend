"use client";

import { FC } from "react";

import { FestivalCategory } from "@/apis/onboarding/onboardingType";
import { cn } from "@/utils";

import { BasicChip } from "../../Chip";

interface Props {
  categories: Array<FestivalCategory>;
  selectedCategories: Array<number>;
  onChange: (keyword: Array<number>) => void;
  maxCount?: number;
  isPrimaryLabel?: boolean;
  label?: string;
}

const CategoryKeywordInput: FC<Props> = ({
  categories,
  label = "주제",
  isPrimaryLabel = false,
  selectedCategories,
  maxCount = 2,
  onChange,
}) => {
  const handleHandleToggle = (isSelected: boolean, id: number) => {
    if (isSelected) {
      onChange(selectedCategories.filter((m) => m !== id));
      return;
    }

    onChange([...selectedCategories, id]);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[6px]">
        <label
          className={cn(
            "text-caption2-medium",
            isPrimaryLabel
              ? "text-gray-scale-900 subtitle-medium"
              : "text-gray-scale-400",
          )}
        >
          {label}
        </label>
        <span className="text-caption1-regular text-gray-300">최대 2개</span>
      </div>
      <div className="flex w-full flex-wrap gap-[8px]">
        {categories.map((mood) => {
          const { categoryId, name } = mood;
          const isSelected = selectedCategories.some((id) => id === categoryId);
          return (
            <BasicChip
              key={categoryId}
              type="button"
              label={name}
              active={isSelected}
              disabled={selectedCategories.length >= maxCount && !isSelected}
              onClick={() => handleHandleToggle(isSelected, categoryId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryKeywordInput;
