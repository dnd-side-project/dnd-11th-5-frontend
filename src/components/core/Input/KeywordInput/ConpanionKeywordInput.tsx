"use client";
import { FC } from "react";

import { FestivalCompanion } from "@/apis/onboarding/onboardingType";
import { cn } from "@/utils";

import { BasicChip } from "../../Chip";

interface Props {
  companions: Array<FestivalCompanion>;
  isPrimaryLabel?: boolean;
  selectedCompanions: Array<number>;
  onChange: (keyword: Array<number>) => void;
  label?: string;
}

const CompanionKeywordInput: FC<Props> = ({
  companions,
  isPrimaryLabel = false,
  selectedCompanions,
  onChange,
  label = "페스티벌 일행",
}) => {
  const handleHandleToggle = (isSelected: boolean, id: number) => {
    if (isSelected) {
      onChange(selectedCompanions.filter((m) => m !== id));
      return;
    }

    onChange([...selectedCompanions, id]);
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
      </div>
      <div className="flex w-full flex-wrap gap-[8px]">
        {companions.map((companion) => {
          const { companionId, companionType } = companion;
          const isSelected = selectedCompanions.some(
            (id) => id === companionId,
          );
          return (
            <BasicChip
              key={companionId}
              type="button"
              label={companionType}
              active={isSelected}
              onClick={() => handleHandleToggle(isSelected, companionId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanionKeywordInput;
