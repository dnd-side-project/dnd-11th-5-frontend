import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import BasicTile from "@/components/core/List/BasicTitle/BasicTile";
import { CheckCircleIcon } from "@/components/icons";
import { CompanyModel, OnboardingModel } from "@/model/onboarding";
import { cn } from "@/utils/cn";

import { ONBOARDING } from "../_constants";
import OnBoardingTitle from "./OnBoardingTitle";

interface Props {
  companies: Array<CompanyModel>;
}

const OnBoardingCategories: FC<Props> = ({ companies }) => {
  const { control } = useFormContext<OnboardingModel>();
  const { fields, replace, append, remove } = useFieldArray({
    control: control,
    name: "companies",
  });

  const handleMoodToggle = (isSelected: boolean, company: CompanyModel) => {
    isSelected
      ? replace(
          fields.filter((v) => v.companionTypeId !== company.companionTypeId),
        )
      : append(company);
  };

  const handleCheckAllToggle = () => {
    if (fields.length < 5) {
      remove(fields.map((_, index) => index));
      companies.forEach((v) => append(v));
    } else {
      remove(fields.map((_, index) => index));
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
          {companies.map((companyItem) => {
            const { companionTypeId, companionType } = companyItem;
            const isSelected = fields.some(
              (c) => c.companionTypeId === companionTypeId,
            );
            return (
              <BasicTile
                key={companionTypeId}
                type="button"
                label={companionType}
                active={isSelected}
                onClick={() => handleMoodToggle(isSelected, companyItem)}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OnBoardingCategories;
