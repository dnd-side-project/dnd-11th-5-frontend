import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import BasicChip from "@/components/core/Chip/BasicChip/BasicChip";
import { FestivalMood, OnboardingModel } from "@/model/onboarding";

import { ONBOARDING } from "../_constants";
import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  moods: Array<FestivalMood>;
}

const OnBoardingCategories: FC<Props> = ({ moods }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append } = useFieldArray({
    control: control,
    name: "moods",
  });

  const handleMoodToggle = (isSelected: boolean, moodItem: FestivalMood) => {
    isSelected
      ? replace(fields.filter((v) => v.moodId !== moodItem.moodId))
      : append(moodItem);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING.MOOD_TITLE}
          subtitle={ONBOARDING.MOOD_SUBTITLE}
        />

        <section className="flex w-auto flex-wrap justify-center gap-[12px]">
          {moods.map((moodItem) => {
            const { moodId, mood } = moodItem;
            const isSelected = fields.some((c) => c.moodId === moodId);
            return (
              <BasicChip
                key={moodId}
                type="button"
                label={mood}
                active={isSelected}
                disabled={fields.length === 3 && !isSelected}
                onClick={() => handleMoodToggle(isSelected, moodItem)}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OnBoardingCategories;
