import { CATEGORIES, COMPANIES, MOODS, PRIORITIES } from "@/model/onboarding";

import OnBoardingView from "./view";

export default async function OnBoarding() {
  // TODO: server side fetching

  return (
    <OnBoardingView
      categories={CATEGORIES}
      companies={COMPANIES}
      priorities={PRIORITIES}
      moods={MOODS}
    />
  );
}
