"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
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

import OnBoardingButton from "./_components/OnBoardingButton";
import OnBoardingCategories from "./_components/OnBoardingCategories";
import { ONBOARDING } from "./_constants";

const OnBoardingMoods = dynamic(() => import("./_components/OnBoardingMoods"));
const OnBoardingCompanies = dynamic(
  () => import("./_components/OnBoardingCompanies"),
);
const OnBoardingPriorities = dynamic(
  () => import("./_components/OnBoardingPriorities"),
);

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

  const handlePrevStep = () => {
    currentStep !== ONBOARDING.INITIAL_STEP
      ? setCurrentStep((prev) => prev - 1)
      : undefined;
  };

  const handleNextStep = () => {
    if (currentStep < ONBOARDING.TOTAL_STEP) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSubmit = (data: OnboardingModel) => {
    console.log(data);
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
          {currentStep === 1 && (
            <OnBoardingCategories categories={categories} />
          )}
          {currentStep === 2 && <OnBoardingMoods moods={moods} />}
          {currentStep === 3 && <OnBoardingCompanies companies={companies} />}
          {currentStep === 4 && (
            <OnBoardingPriorities priorities={priorities} />
          )}
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
