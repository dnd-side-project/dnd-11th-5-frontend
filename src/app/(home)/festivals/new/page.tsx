import { getCategories, getMoods } from "@/apis/onboarding/onboarding";

import CreateFestivalView from "./view";

export default async function CreateFestivalPageProps() {
  const moods = await getMoods();
  const categories = await getCategories();
  return (
    <main className="relative mb-[110px] mt-[44px] h-auto">
      <CreateFestivalView moods={moods} categories={categories} />
    </main>
  );
}
