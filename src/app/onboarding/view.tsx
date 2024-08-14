"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
  OnboardingModel,
} from "@/model/onboarding";
import { OnBoardingSchema } from "@/validations/OnboardingSchema";

import { OnBoardingContainer } from "./_components";

const OnBoardingLoading = dynamic(
  () => import("./_components/onBoardingLoading"),
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
    formState: { isSubmitting, isSubmitted },
  } = methods;

  if (isSubmitting || isSubmitted) {
    return <OnBoardingLoading />;
  }

  return (
    <FormProvider {...methods}>
      <OnBoardingContainer
        categories={categories}
        companies={companies}
        priorities={priorities}
        moods={moods}
      />
      ;
    </FormProvider>
  );
};

export default OnBoardingView;
