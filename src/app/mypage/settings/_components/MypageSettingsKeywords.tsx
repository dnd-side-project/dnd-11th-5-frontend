"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
} from "@/apis/onboarding/onboardingType";
import { BasicButton } from "@/components/core/Button";
import {
  CategoryKeywordInput,
  MoodKeywordInput,
} from "@/components/core/Input";
import { PriorityKeywordInput } from "@/components/core/Input/KeywordInput";
import CompanionKeywordInput from "@/components/core/Input/KeywordInput/ConpanionKeywordInput";
import {
  ProfileUpdateSchema,
  ProfileUpdateSchemaType,
} from "@/validations/ProfileUpdateSchema";

interface Props {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const MypageSettingsKeywords: FC<Props> = ({
  categories,
  companions,
  priorities,
  moods,
}) => {
  const { handleSubmit, control } = useForm<ProfileUpdateSchemaType>({
    defaultValues: {
      categoryIds: [],
      moodIds: [],
      companionIds: [],
      priorityIds: [],
    },
    resolver: zodResolver(ProfileUpdateSchema),
  });

  const onSubmit = (data: ProfileUpdateSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col justify-between gap-[28px]"
    >
      <Controller
        control={control}
        name="categoryIds"
        render={({ field: { onChange, value } }) => (
          <CategoryKeywordInput
            categories={categories}
            selectedCategories={value}
            onChange={onChange}
            maxCount={2}
            label="관심있는 페스티벌 분야"
            isPrimaryLabel
          />
        )}
      />

      <Controller
        control={control}
        name="moodIds"
        render={({ field: { onChange, value } }) => (
          <MoodKeywordInput
            moods={moods}
            selectedMoods={value}
            onChange={onChange}
            maxCount={3}
            label="선호하는 페스티벌 분위기"
            isPrimaryLabel
          />
        )}
      />
      <Controller
        control={control}
        name="companionIds"
        render={({ field: { onChange, value } }) => (
          <CompanionKeywordInput
            companions={companions}
            selectedCompanions={value}
            onChange={onChange}
            isPrimaryLabel
          />
        )}
      />
      <Controller
        control={control}
        name="priorityIds"
        render={({ field: { onChange, value } }) => (
          <PriorityKeywordInput
            priorities={priorities}
            selectedPriorities={value}
            onChange={onChange}
            maxCount={3}
            label="페스티벌 우선순위"
            isPrimaryLabel
          />
        )}
      />

      <BasicButton type="submit" label="완료" />
    </form>
  );
};

export default MypageSettingsKeywords;
