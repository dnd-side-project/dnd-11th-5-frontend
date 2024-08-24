"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import {
  FestivalCategory,
  FestivalMood,
} from "@/apis/onboarding/onboardingType";
import CreateFestivalSchema from "@/validations/CreateFestivalSchema";

import CreateFestivalContainer from "./_components";

interface Props {
  moods: Array<FestivalMood>;
  categories: Array<FestivalCategory>;
}

const CreateFestivalView: FC<Props> = ({ moods, categories }) => {
  const methods = useForm<z.output<typeof CreateFestivalSchema>>({
    defaultValues: {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      latitude: "",
      longitude: "",
      address: "",
      sido: "",
      sigungu: "",
      playtime: "",
      homepageUrl: "",
      instagramUrl: "",
      ticketLink: "",
      fee: "",
      categoryIds: [],
      moodIds: [],
      tip: "",
      images: [],
    },
    resolver: zodResolver(CreateFestivalSchema),
  });

  const {
    formState: { isSubmitting, isSubmitted, errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <CreateFestivalContainer moods={moods} categories={categories} />
    </FormProvider>
  );
};

export default CreateFestivalView;
