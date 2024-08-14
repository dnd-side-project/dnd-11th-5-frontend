import { useRouter } from "next/navigation";
import { FC, ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { ProgressBar } from "@/components/core/Progress";
import { useOnBoardingStep } from "@/hooks/useOnBoardingStep";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
  OnboardingModel,
} from "@/model/onboarding";
import { delay } from "@/utils/delay";

import OnBoardingButton from "./OnBoardingButton";
import OnBoardingCategories from "./OnBoardingCategories";
import OnBoardingCompanies from "./OnBoardingCompanies";
import OnBoardingMoods from "./OnBoardingMoods";
import OnBoardingPriorities from "./OnBoardingPriorities";

interface Props {
  categories: Array<FestivalCategory>;
  companies: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const OnBoardingContainer: FC<Props> = ({
  categories,
  companies,
  priorities,
  moods,
}) => {
  const router = useRouter();

  const { currentStep, handleNextStep, handlePrevStep, ONBOARDING } =
    useOnBoardingStep();
  const { trigger, handleSubmit } = useFormContext<OnboardingModel>();

  // * 첫 렌더링에 유효성 검사 1회 실행
  useEffect(() => {
    trigger();
  }, []);

  const onSubmit = async (data: OnboardingModel) => {
    await delay(5000);
    console.log("🚀 ~ onSubmit ~ data:", data);
    router.replace("/onboarding/complete");
  };

  const renderCurrentStep: {
    [key: number]: ReactElement;
  } = {
    1: <OnBoardingCategories categories={categories} />,
    2: <OnBoardingMoods moods={moods} />,
    3: <OnBoardingCompanies companies={companies} />,
    4: <OnBoardingPriorities priorities={priorities} />,
  };

  return (
    <main className="mt-[92px] w-full">
      <DefaultHeader
        showBackButton={currentStep !== ONBOARDING.INITIAL_STEP}
        onClick={handlePrevStep}
      />
      <ProgressBar
        totalSteps={ONBOARDING.TOTAL_STEP}
        currentStep={currentStep}
        className="fixed top-0 mt-[44px] flex h-[8px] w-full max-w-none gap-[6px] bg-gray-scale-0 p-[20px] lg:max-w-[450px]"
      />
      <form
        className="flex h-screen w-full flex-col items-center justify-between px-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <>{renderCurrentStep[currentStep]}</>
        <OnBoardingButton
          totalStep={ONBOARDING.TOTAL_STEP}
          currentStep={currentStep}
          onNext={handleNextStep}
        />
      </form>
    </main>
  );
};

export default OnBoardingContainer;
