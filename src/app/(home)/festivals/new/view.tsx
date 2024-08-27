"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { createFestival } from "@/apis/festivals/createFestival/createFestival";
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
import CreateFestivalSchema from "@/validations/CreateFestivalSchema";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

import {
  CreateFestivalButton,
  CreateFestivalFirstStep,
  CreateFestivalSecondStep,
} from "./_components";

const { INITIAL_STEP, TOTAL_STEP } = CREATE_FESTIVAL_SETTING;

interface Props {
  moods: Array<FestivalMood>;
  categories: Array<FestivalCategory>;
}

const CreateFestivalView: FC<Props> = ({ moods, categories }) => {
  const onSubmit = async (data: CreateFestivalType) => {
    const response = await createFestival(data);
  };

  const renderCurrentStep: {
    [key: number]: ReactElement;
  } = {
    1: <CreateFestivalFirstStep />,
    2: <CreateFestivalSecondStep moods={moods} categories={categories} />,
  };

  const methods = useForm<z.output<typeof CreateFestivalSchema>>({
    defaultValues: {
      name: undefined,
      description: undefined,
      startDate: "",
      endDate: "",
      latitude: undefined,
      longitude: undefined,
      address: undefined,
      sido: undefined,
      sigungu: undefined,
      playtime: "",
      homepageUrl: undefined,
      instagramUrl: undefined,
      ticketLink: undefined,
      fee: undefined,
      categoryIds: [],
      moodIds: [],
      tip: "",
      images: [],
    },
    resolver: zodResolver(CreateFestivalSchema),
  });

  const { trigger, handleSubmit } = methods;

  const { currentStep, handleNextStep, handlePrevStep } =
    useStep<CreateFestivalType>(
      INITIAL_STEP,
      TOTAL_STEP,
      CREATE_FESTIVAL_VALIDATION_FIELDS,
      trigger,
    );

  return (
    <FormProvider {...methods}>
      <section className="mt-[92px] w-full">
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
          <CreateFestivalButton
            totalStep={TOTAL_STEP}
            currentStep={currentStep}
            onNext={handleNextStep}
          />
        </form>
      </section>
    </FormProvider>
  );
};

export default CreateFestivalView;
