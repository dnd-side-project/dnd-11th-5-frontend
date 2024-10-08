import { getOnboardingData } from "@/apis/onboarding/onboarding";

import OnBoardingView from "./view";

export default async function OnBoarding() {
  const { moods, categories, companions, priorities } =
    await getOnboardingData();

  return (
    <OnBoardingView
      categories={categories}
      companions={companions}
      priorities={priorities}
      moods={moods}
    />
  );
}
