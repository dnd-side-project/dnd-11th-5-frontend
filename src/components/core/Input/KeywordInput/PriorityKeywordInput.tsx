"use client";
import { FC } from "react";

import { FestivalPriority } from "@/apis/onboarding/onboardingType";
import { cn } from "@/utils";

import { BasicChip } from "../../Chip";

interface Props {
  priorities: Array<FestivalPriority>;
  selectedPriorities: Array<number>;
  onChange: (keyword: Array<number>) => void;
  maxCount?: number;
  isPrimaryLabel?: boolean;
  label?: string;
}

const PriorityKeywordInput: FC<Props> = ({
  priorities,
  selectedPriorities,
  maxCount = 3,
  onChange,
  isPrimaryLabel = false,
  label = "페스티벌 우선순위",
}) => {
  const handleHandleToggle = (isSelected: boolean, id: number) => {
    if (isSelected) {
      onChange(selectedPriorities.filter((m) => m !== id));
      return;
    }

    onChange([...selectedPriorities, id]);
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
        <span className="text-caption1-regular text-gray-300">
          최대 {maxCount}개
        </span>
      </div>
      <div className="flex w-full flex-wrap gap-[8px]">
        {priorities.map((priorityItem) => {
          const { priority, priorityId } = priorityItem;
          const isSelected = selectedPriorities.some((id) => id === priorityId);
          return (
            <BasicChip
              key={priorityId}
              type="button"
              label={priority}
              active={isSelected}
              disabled={selectedPriorities.length === maxCount && !isSelected}
              onClick={() => handleHandleToggle(isSelected, priorityId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriorityKeywordInput;
