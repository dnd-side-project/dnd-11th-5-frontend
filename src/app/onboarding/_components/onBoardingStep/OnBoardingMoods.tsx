import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FestivalMood,
  OnboardingModel,
} from "@/apis/onboarding/onboardingType";
import BasicChip from "@/components/core/Chip/BasicChip/BasicChip";
import { ONBOARDING_SETTING } from "@/config";

import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  moods: Array<FestivalMood>;
}

const OnBoardingMoods: FC<Props> = ({ moods }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append } = useFieldArray({
    control: control,
    name: "moods",
  });

  const handleMoodToggle = (isSelected: boolean, moodItem: FestivalMood) => {
    isSelected
      ? replace(
          fields.filter((festival) => festival.moodId !== moodItem.moodId),
        )
      : append(moodItem);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING_SETTING.MOOD_TITLE}
          subtitle={ONBOARDING_SETTING.MOOD_SUBTITLE}
        />

        <section className="flex w-auto flex-wrap justify-center gap-[12px]">
          {moods.map((moodItem) => {
            const { moodId, name } = moodItem;
            const isSelected = fields.some(
              (festival) => festival.moodId === moodId,
            );
            return (
              <BasicChip
                key={moodId}
                type="button"
                label={name}
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

export default OnBoardingMoods;
