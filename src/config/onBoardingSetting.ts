import { FieldPath } from "react-hook-form";

import { OnboardingModel } from "@/apis/onboarding/onboardingType";

export const ONBOARDING_SETTING = Object.freeze({
  INITIAL_STEP: 1,
  TOTAL_STEP: 4,
  CATEGORY_MIN: 2,
  MOOD_MIN: 3,
  PRIORITY_MIN: 3,
  CATEGORY_TITLE: "관심있는 페스티벌을 알려주세요!",
  CATEGORY_SUBTITLE: "관심 분야 2가지를 선택해주세요",
  MOOD_TITLE: "선호하는 페스티벌 분위기를 알려주세요!",
  MOOD_SUBTITLE: "선호하는 무드 3가지를 골라주세요",
  COMPANY_TITLE: "주로 누구와 함께 가시나요?",
  COMPANY_SUBTITLE: "선택하신 대상과 함께 갈 페스티벌을 추천해드려요.",
  PRIORITY_TITLE: "페스티벌에서 어떤 것이 가장 중요하신가요?",
  PRIORITY_SUBTITLE: "중요 요소 3가지를 선택해주세요",
});

export const ONBOARDING_VALIDATION_FIELDS: Record<
  number,
  Array<FieldPath<OnboardingModel>>
> = {
  1: ["categories"],
  2: ["moods"],
  3: ["companions"],
  4: ["priorities"],
};
