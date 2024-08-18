import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  FestivalCompanion,
  OnboardingModel,
} from "@/apis/onboarding/onboardingType";
import BasicTile from "@/components/core/List/BasicTitle/BasicTile";
import { CheckCircleIcon } from "@/components/icons";
import { ONBOARDING_SETTING } from "@/config";
import { cn } from "@/utils/cn";

import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  companions: Array<FestivalCompanion>;
}

const OnBoardingCompanions: FC<Props> = ({ companions }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append, remove } = useFieldArray({
    control: control,
    name: "companions",
  });

  const handleMoodToggle = (
    isSelected: boolean,
    company: FestivalCompanion,
  ) => {
    isSelected
      ? replace(
          fields.filter(
            (festival) => festival.companionId !== company.companionId,
          ),
        )
      : append(company);
  };

  const handleCheckAllToggle = () => {
    remove(fields.map((_, index) => index));

    if (fields.length < companions.length) {
      companions.forEach((companyItem) => append(companyItem));
    }
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING_SETTING.COMPANY_TITLE}
          subtitle={ONBOARDING_SETTING.COMPANY_SUBTITLE}
        />

        <section className="flex w-auto flex-wrap justify-center gap-[12px]">
          <div className="flex w-full  justify-end">
            {/* // TODO: 컴포넌트가 없음 따로빼야할듯 */}
            <button
              type="button"
              className="flex items-center gap-[6px]"
              onClick={handleCheckAllToggle}
            >
              <CheckCircleIcon
                width={18}
                height={18}
                className={cn(
                  fields.length === companions.length
                    ? "text-primary-01"
                    : "text-gray-scale-300",
                )}
              />
              <span
                className={cn(
                  "text-caption2-medium text-gray-700",
                  fields.length === companions.length
                    ? "text-primary-01"
                    : "text-gray-scale-700",
                )}
              >
                전체선택
              </span>
            </button>
          </div>
          {companions.map(({ companionId, companionType }) => {
            const isSelected = fields.some(
              (festival) => festival.companionId === companionId,
            );
            return (
              <BasicTile
                key={companionType}
                type="button"
                label={companionType}
                active={isSelected}
                onClick={() =>
                  handleMoodToggle(isSelected, {
                    companionId,
                    companionType,
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

export default OnBoardingCompanions;
