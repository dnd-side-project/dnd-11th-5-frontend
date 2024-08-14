import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import BasicTile from "@/components/core/List/BasicTitle/BasicTile";
import { FestivalPriority, OnboardingModel } from "@/model/onboarding";

import { ONBOARDING } from "../../_constants";
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
      ? replace(fields.filter((v) => v.priorityId !== priorityItem.priorityId))
      : append(priorityItem);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING.PRIORITY_TITLE}
          subtitle={ONBOARDING.PRIORITY_SUBTITLE}
        />

        <section className="grid h-auto w-full grid-cols-2 gap-x-[18px] gap-y-[20px]">
          {priorities.map((priorityItem) => {
            const { priorityId, priority } = priorityItem;
            const isSelected = fields.some((c) => c.priorityId === priorityId);
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
