import { redirect } from "next/navigation";

import { getServerSideSession } from "@/apis/auth/auth";
import { getOnboardingData } from "@/apis/onboarding/onboarding";

import OnBoardingView from "./view";

export default async function OnBoarding() {
  const session = await getServerSideSession();

  if (!session || session?.isProfileRegistered) {
    redirect("/");
  }

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
