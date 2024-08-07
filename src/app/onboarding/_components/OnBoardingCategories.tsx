import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { SquareTabButton } from "@/components/core/Button";
import { CategoryModel, OnboardingModel } from "@/model/onboarding";

import { ONBOARDING } from "../_constants";
import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  categories: Array<CategoryModel>;
}

const OnBoardingCategories: FC<Props> = ({ categories }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append } = useFieldArray({
    control: control,
    name: "categories",
  });

  const handleCategoryToggle = (
    isSelected: boolean,
    category: CategoryModel,
  ) => {
    isSelected
      ? replace(fields.filter((v) => v.categoryId !== category.categoryId))
      : append(category);
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING.CATEGORY_TITLE}
          subtitle={ONBOARDING.CATEGORY_SUBTITLE}
        />

        <section className="grid h-auto w-full grid-cols-3 gap-x-[18px] gap-y-[20px]">
          {categories.map(({ categoryId, category }) => {
            const isSelected = fields.some((c) => c.categoryId === categoryId);
            return (
              <SquareTabButton
                key={categoryId}
                type="button"
                label={category}
                active={isSelected}
                disabled={fields.length === 2 && !isSelected}
                onClick={() =>
                  handleCategoryToggle(isSelected, { categoryId, category })
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
