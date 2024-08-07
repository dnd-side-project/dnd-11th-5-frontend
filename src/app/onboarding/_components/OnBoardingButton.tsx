import { FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { BasicButton } from "@/components/core/Button";
import { OnboardingModel } from "@/model/onboarding";

interface Props {
  totalStep: number;
  currentStep: number;
  onNext: () => void;
}

const OnBoardingButton: FC<Props> = ({ currentStep, totalStep, onNext }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<OnboardingModel>();
  const fields = useWatch({ control });

  const getLabel = (step: number) => {
    switch (step) {
      case 1:
        return `다음 (${fields.categories?.length ?? 0}/2)`;
      case 2:
        return `다음 (${fields.moods?.length ?? 0}/3)`;
      case 4:
        return `다음 (${fields.priorities?.length ?? 0}/3)`;
      default:
        return `다음`;
    }
  };

  const getIsError = (step: number) => {
    switch (step) {
      case 1:
        return !!errors.categories;
      case 2:
        return !!errors.moods;
      case 4:
        return !!errors.priorities;
      default:
        return !!errors.companies;
    }
  };

  const label = getLabel(currentStep);
  const isError = getIsError(currentStep);

  return (
    <div className="fixed bottom-[8px] w-full max-w-none px-[16px] lg:max-w-[450px]">
      <BasicButton
        type={totalStep === currentStep ? "submit" : "button"}
        disabled={isError}
        label={label}
        onClick={onNext}
      />
    </div>
  );
};

export default OnBoardingButton;
