import { getInitialOnboadingData } from "./action";
import OnBoardingView from "./view";

export default async function OnBoarding() {
  const { moods, categories, companies, priorities } =
    await getInitialOnboadingData();

  return (
    <OnBoardingView
      categories={categories}
      companies={companies}
      priorities={priorities}
      moods={moods}
    />
  );
}
