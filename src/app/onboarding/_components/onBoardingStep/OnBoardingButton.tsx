import { FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { OnboardingModel } from "@/apis/onboarding/onboardingType";
import { BasicButton } from "@/components/core/Button";
import { ONBOARDING_SETTING } from "@/config";
import { checkNumber } from "@/utils/checkNumber";

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

  const getCurrentStepData = (step: number) => {
    const label: {
      [key: number]: { label: string; isError: boolean };
    } = {
      1: {
        label: `다음 (${checkNumber(fields.categories?.length)}/${ONBOARDING_SETTING.CATEGORY_MIN})`,
        isError: !!errors.categories,
      },
      2: {
        label: `다음 (${checkNumber(fields.moods?.length)}/${ONBOARDING_SETTING.MOOD_MIN})`,
        isError: !!errors.moods,
      },
      3: {
        label: `다음`,
        isError: !!errors.companions,
      },
      4: {
        label: `다음 (${checkNumber(fields.priorities?.length)}/${ONBOARDING_SETTING.PRIORITY_MIN})`,
        isError: !!errors.priorities,
      },
    };

    return label[step] || { label: "다음", isError: false };
  };

  return (
    <div className="fixed bottom-[8px] w-full max-w-none px-[16px] lg:max-w-[450px]">
      <BasicButton
        type={totalStep === currentStep ? "submit" : "button"}
        disabled={getCurrentStepData(currentStep).isError}
        label={getCurrentStepData(currentStep).label}
        onClick={onNext}
      />
    </div>
  );
};

export default OnBoardingButton;
