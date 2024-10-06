"use client";

import { useRouter } from "next/navigation";
import { FC, ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
  OnboardingModel,
} from "@/apis/onboarding/onboardingType";
import { postProfile } from "@/apis/user/profile/profile";
import { ProgressBar } from "@/components/core/Progress";
import { ONBOARDING_SETTING } from "@/config";
import useStep from "@/hooks/useStep";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import { extractKeyFromArray, generateUrlWithParams } from "@/utils";
import { delay } from "@/utils/delay";

import OnBoardingButton from "./OnBoardingButton";
import OnBoardingCategories from "./OnBoardingCategories";
import OnBoardingCompanies from "./OnBoardingCompanies";
import OnBoardingMoods from "./OnBoardingMoods";
import OnBoardingPriorities from "./OnBoardingPriorities";

interface Props {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const OnBoardingContainer: FC<Props> = ({
  categories,
  companions,
  priorities,
  moods,
}) => {
  const router = useRouter();
  const { trigger, handleSubmit } = useFormContext<OnboardingModel>();

  const { currentStep, handleNextStep, handlePrevStep } = useStep(
    ONBOARDING_SETTING.INITIAL_STEP,
    ONBOARDING_SETTING.TOTAL_STEP,
  );

  useEffect(() => {
    trigger();
  }, []);

  const onSubmit = async (data: OnboardingModel) => {
    const payload = {
      categoryIds: extractKeyFromArray(data.categories, "categoryId"),
      moodIds: extractKeyFromArray(data.moods, "moodId"),
      companionIds: extractKeyFromArray(data.companions, "companionId"),
      priorityIds: extractKeyFromArray(data.priorities, "priorityId"),
    };

    const [profile] = await Promise.all([postProfile(payload), delay(5000)]);
    router.replace(generateUrlWithParams("/onboarding/complete", profile));
  };

  const renderCurrentStep: {
    [key: number]: ReactElement;
  } = {
    1: <OnBoardingCategories categories={categories} />,
    2: <OnBoardingMoods moods={moods} />,
    3: <OnBoardingCompanies companions={companions} />,
    4: <OnBoardingPriorities priorities={priorities} />,
  };

  return (
    <main className="mt-[92px] w-full">
      <DefaultHeader
        onClick={handlePrevStep}
        showBackButton={currentStep !== ONBOARDING_SETTING.INITIAL_STEP}
      />
      <ProgressBar
        totalSteps={ONBOARDING_SETTING.TOTAL_STEP}
        currentStep={currentStep}
        className="fixed top-0 mt-[44px] flex h-[8px] w-full max-w-none gap-[6px] bg-gray-scale-0 p-[20px] lg:max-w-[450px]"
      />
      <form
        className="flex h-screen w-full flex-col items-center justify-between px-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <>{renderCurrentStep[currentStep]}</>
        <OnBoardingButton
          totalStep={ONBOARDING_SETTING.TOTAL_STEP}
          currentStep={currentStep}
          onNext={handleNextStep}
        />
      </form>
    </main>
  );
};

export default OnBoardingContainer;
