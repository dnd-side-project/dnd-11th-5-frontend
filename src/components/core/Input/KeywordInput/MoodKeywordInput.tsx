"use client";
import { FC } from "react";

import { FestivalMood } from "@/apis/onboarding/onboardingType";

import { BasicChip } from "../../Chip";

interface Props {
  moods: Array<FestivalMood>;
  selectedMoods: Array<number>;
  onChange: (keyword: Array<number>) => void;
  maxCount?: number;
}

const MoodKeywordInput: FC<Props> = ({
  moods,
  selectedMoods,
  maxCount = 2,
  onChange,
}) => {
  const handleHandleToggle = (isSelected: boolean, id: number) => {
    if (isSelected) {
      onChange(selectedMoods.filter((m) => m !== id));
      return;
    }

    onChange([...selectedMoods, id]);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[6px]">
        <label className="text-caption2-medium text-gray-500">분위기</label>
        <span className="text-caption1-regular text-gray-300">최대 2개</span>
      </div>
      <div className="flex w-full flex-wrap gap-[8px]">
        {moods.map((mood) => {
          const { moodId, name } = mood;
          const isSelected = selectedMoods.some((id) => id === moodId);
          return (
            <BasicChip
              key={moodId}
              type="button"
              label={name}
              active={isSelected}
              disabled={selectedMoods.length === maxCount && !isSelected}
              onClick={() => handleHandleToggle(isSelected, moodId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoodKeywordInput;
