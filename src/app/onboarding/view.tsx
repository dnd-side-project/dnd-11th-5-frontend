"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { FC, ReactElement, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ProgressBar } from "@/components/core/Progress";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
  OnboardingModel,
} from "@/model/onboarding";
import { delay } from "@/utils/delay";
import { OnBoardingSchema } from "@/validations/OnboardingSchema";

import {
  OnBoardingButton,
  OnBoardingCategories,
  OnBoardingCompanies,
  OnBoardingMoods,
  OnBoardingPriorities,
} from "./_components";
import { ONBOARDING } from "./_constants";

const OnBoardingLoading = dynamic(
  () => import("./_components/OnBoardingLoading"),
);

interface Props {
  categories: Array<FestivalCategory>;
  companies: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const OnBoardingView: FC<Props> = ({
  categories,
  companies,
  priorities,
  moods,
}) => {
  const { INITIAL_STEP, TOTAL_STEP } = ONBOARDING;
  const [currentStep, setCurrentStep] = useState<number>(INITIAL_STEP);

  const methods = useForm<OnboardingModel>({
    mode: "onChange",
    defaultValues: {
      categories: [],
      moods: [],
      companies: [],
      priorities: [],
    },
    resolver: zodResolver(OnBoardingSchema),
  });

  const {
    trigger,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // * 첫 렌더링에 유효성 검사 1회 실행
  useEffect(() => {
    trigger();
  }, []);

  const handleStepChange = (stepChange: number) => {
    setCurrentStep((prev) => {
      const newStep = prev + stepChange;
      return newStep >= INITIAL_STEP && newStep <= TOTAL_STEP ? newStep : prev;
    });
  };

  const handlePrevStep = () => handleStepChange(-1);
  const handleNextStep = () => handleStepChange(1);

  const onSubmit = async (data: OnboardingModel) => {
    await delay(5000);
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  const renderCurrentStep: {
    [key: number]: ReactElement;
  } = {
    1: <OnBoardingCategories categories={categories} />,
    2: <OnBoardingMoods moods={moods} />,
    3: <OnBoardingCompanies companies={companies} />,
    4: <OnBoardingPriorities priorities={priorities} />,
  };

  if (isSubmitting) {
    return <OnBoardingLoading />;
  }

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
      <FormProvider {...methods}>
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
      </FormProvider>
    </main>
  );
};

export default OnBoardingView;
