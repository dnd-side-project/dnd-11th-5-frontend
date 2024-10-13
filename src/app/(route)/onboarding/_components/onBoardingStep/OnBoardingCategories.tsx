import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FestivalCategory,
  OnboardingModel,
} from "@/apis/onboarding/onboardingType";
import { SquareTabButton } from "@/components/core/Button";
import { ONBOARDING_SETTING } from "@/config";

import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  categories: Array<FestivalCategory>;
}

const OnBoardingCategories: FC<Props> = ({ categories }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append } = useFieldArray({
    control: control,
    name: "categories",
  });

  const handleCategoryToggle = (
    isSelected: boolean,
    category: FestivalCategory,
  ) => {
    if (isSelected) {
      replace(
        fields.filter(
          (festival) => festival.categoryId !== category.categoryId,
        ),
      );
      return;
    }
    append(category);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING_SETTING.CATEGORY_TITLE}
          subtitle={ONBOARDING_SETTING.CATEGORY_SUBTITLE}
        />

        <section className="grid h-auto w-full grid-cols-3 gap-x-[18px] gap-y-[20px]">
          {categories.map(({ categoryId, name, emoji }) => {
            const isSelected = fields.some(
              (festival) => festival.categoryId === categoryId,
            );
            return (
              <SquareTabButton
                key={categoryId}
                type="button"
                label={name}
                active={isSelected}
                emoji={emoji}
                disabled={
                  fields.length === ONBOARDING_SETTING.CATEGORY_MIN &&
                  !isSelected
                }
                onClick={() =>
                  handleCategoryToggle(isSelected, {
                    categoryId,
                    name,
                    emoji,
                  })
                }
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OnBoardingCategories;
