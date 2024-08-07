"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import ProgressBar from "@/components/core/Progress/ProgressBar/ProgressBar";
import MobileHeader from "@/layout/Mobile/MobileHeader/MobileHeader";
import {
  CategoryModel,
  CompanyModel,
  MoodModel,
  OnboardingModel,
  PriorityModel,
} from "@/model/onboarding";
import { OnBoardingSchema } from "@/validations/OnboardingSchema";

import {
  OnBoardingButton,
  OnBoardingCategories,
  OnBoardingCompanies,
  OnBoardingMoods,
  OnBoardingPriorities,
} from "./_components";
import { ONBOARDING } from "./_constants";

interface Props {
  categories: Array<CategoryModel>;
  companies: Array<CompanyModel>;
  priorities: Array<PriorityModel>;
  moods: Array<MoodModel>;
}

const OnBoardingView: FC<Props> = ({
  categories,
  companies,
  priorities,
  moods,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    ONBOARDING.INITIAL_STEP,
  );

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

  const { trigger, handleSubmit } = methods;

  // * 첫 렌더링에 유효성 검사 1회 실행
  useEffect(() => {
    trigger();
  }, []);

  const INITIAL_STEP = ONBOARDING.INITIAL_STEP;
  const TOTAL_STEP = ONBOARDING.TOTAL_STEP;

  const handleStepChange = (stepChange: number) => {
    setCurrentStep((prev) => {
      const newStep = prev + stepChange;
      return newStep >= INITIAL_STEP && newStep <= TOTAL_STEP ? newStep : prev;
    });
  };

  const handlePrevStep = () => handleStepChange(-1);
  const handleNextStep = () => handleStepChange(1);

  const onSubmit = (data: OnboardingModel) => {
    console.log(data);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <OnBoardingCategories categories={categories} />;
      case 2:
        return <OnBoardingMoods moods={moods} />;
      case 3:
        return <OnBoardingCompanies companies={companies} />;
      case 4:
        return <OnBoardingPriorities priorities={priorities} />;
      default:
        return null;
    }
  };

  return (
    <main className="mt-[92px] w-full">
      <MobileHeader
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
          {renderCurrentStep()}
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
