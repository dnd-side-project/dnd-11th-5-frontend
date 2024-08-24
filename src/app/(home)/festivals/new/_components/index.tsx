"use client";

import { FC, ReactElement } from "react";
import { useFormContext } from "react-hook-form";

import {
  FestivalCategory,
  FestivalMood,
} from "@/apis/onboarding/onboardingType";
import { ProgressBar } from "@/components/core/Progress";
import {
  CREATE_FESTIVAL_SETTING,
  CREATE_FESTIVAL_VALIDATION_FIELDS,
} from "@/config";
import useStep from "@/hooks/useStep";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

import OnBoardingButton from "./CreateFestivalButton";
import CreateFestivalFirstStep from "./CreateFestivalFirstStep";
import CreateFestivalSecondStep from "./CreateFestivalSecondStep";

const { INITIAL_STEP, TOTAL_STEP } = CREATE_FESTIVAL_SETTING;

interface Props {
  moods: Array<FestivalMood>;
  categories: Array<FestivalCategory>;
}

const CreateFestivalContainer: FC<Props> = ({ moods, categories }) => {
  const { trigger, handleSubmit } = useFormContext<CreateFestivalType>();

  const { currentStep, handleNextStep, handlePrevStep } =
    useStep<CreateFestivalType>(
      INITIAL_STEP,
      TOTAL_STEP,
      CREATE_FESTIVAL_VALIDATION_FIELDS,
      trigger,
    );

  const onSubmit = async (data: CreateFestivalType) => {
    console.log(data);
  };

  const renderCurrentStep: {
    [key: number]: ReactElement;
  } = {
    1: <CreateFestivalFirstStep />,
    2: <CreateFestivalSecondStep moods={moods} categories={categories} />,
  };

  return (
    <main className="mt-[92px] w-full">
      <DefaultHeader label="페스티벌 등록하기" onClick={handlePrevStep} />
      <ProgressBar
        totalSteps={TOTAL_STEP}
        currentStep={currentStep}
        className="fixed top-0 mt-[44px] flex h-[8px] w-full max-w-none gap-[6px] bg-gray-scale-0 p-[20px] lg:max-w-[450px]"
      />
      <form
        className="flex w-full flex-col items-center justify-between  px-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <>{renderCurrentStep[currentStep]}</>
        <OnBoardingButton
          totalStep={TOTAL_STEP}
          currentStep={currentStep}
          onNext={handleNextStep}
        />
      </form>
    </main>
  );
};

export default CreateFestivalContainer;
