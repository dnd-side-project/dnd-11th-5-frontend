import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FestivalPriority,
  OnboardingModel,
} from "@/apis/onboarding/onboardingType";
import BasicTile from "@/components/core/List/BasicTitle/BasicTile";
import { ONBOARDING_SETTING } from "@/config";

import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  priorities: Array<FestivalPriority>;
}

const OnBoardingPriorities: FC<Props> = ({ priorities }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<OnboardingModel>();
  const { fields, replace, append } = useFieldArray({
    control: control,
    name: "priorities",
  });

  const handlePriorityToggle = (
    isSelected: boolean,
    priorityItem: FestivalPriority,
  ) => {
    isSelected
      ? replace(
          fields.filter(
            (festival) => festival.priorityId !== priorityItem.priorityId,
          ),
        )
      : append(priorityItem);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING_SETTING.PRIORITY_TITLE}
          subtitle={ONBOARDING_SETTING.PRIORITY_SUBTITLE}
        />

        <section className="grid h-auto w-full grid-cols-2 gap-x-[18px] gap-y-[20px]">
          {priorities.map((priorityItem) => {
            const { priorityId, priority } = priorityItem;
            const isSelected = fields.some(
              (festival) => festival.priorityId === priorityId,
            );
            return (
              <BasicTile
                key={priorityId}
                type="button"
                label={priority}
                active={isSelected}
                disabled={!errors.priorities && !isSelected}
                onClick={() => handlePriorityToggle(isSelected, priorityItem)}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OnBoardingPriorities;
