import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import BasicTile from "@/components/core/List/BasicTitle/BasicTile";
import { CheckCircleIcon } from "@/components/icons";
import { FestivalCompanion, OnboardingModel } from "@/model/onboarding";
import { cn } from "@/utils/cn";

import { ONBOARDING } from "../_constants";
import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  companies: Array<FestivalCompanion>;
}

const OnBoardingCompanions: FC<Props> = ({ companies }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append, remove } = useFieldArray({
    control: control,
    name: "companies",
  });

  const handleMoodToggle = (
    isSelected: boolean,
    company: FestivalCompanion,
  ) => {
    isSelected
      ? replace(fields.filter((v) => v.companionId !== company.companionId))
      : append(company);
  };

  const handleCheckAllToggle = () => {
    remove(fields.map((_, index) => index));

    if (fields.length < 5) {
      companies.forEach((companyItem) => append(companyItem));
    }
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-[32px] ">
        <OnBoardingTitle
          title={ONBOARDING.COMPANY_TITLE}
          subtitle={ONBOARDING.COMPANY_SUBTITLE}
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
                  fields.length === 5
                    ? "text-primary-01"
                    : "text-gray-scale-300",
                )}
              />
              <span
                className={cn(
                  "text-caption2-medium text-gray-700",
                  fields.length === 5
                    ? "text-primary-01"
                    : "text-gray-scale-700",
                )}
              >
                전체선택
              </span>
            </button>
          </div>
          {companies.map(({ companionId, companionType }) => {
            const isSelected = fields.some(
              (c) => c.companionId === companionId,
            );
            return (
              <BasicTile
                key={companionType}
                type="button"
                label={companionType}
                active={isSelected}
                onClick={() =>
                  handleMoodToggle(isSelected, { companionId, companionType })
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
