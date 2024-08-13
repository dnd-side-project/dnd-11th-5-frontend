"use server";

import { OnboardingService } from "@/apis/onboarding/onboardingService";
import { OnboardingModel } from "@/model/onboarding";

const onboardingService = new OnboardingService();

export const getInitialOnboadingData = async (): Promise<OnboardingModel> => {
  const moods = await onboardingService.getMoods();
  const categories = await onboardingService.getCategories();
  const companies = await onboardingService.getCompanions();
  const priorities = await onboardingService.getPriority();

  return {
    moods,
    categories,
    companies,
    priorities,
  };
};
