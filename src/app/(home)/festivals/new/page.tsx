import { getCategories, getMoods } from "@/apis/onboarding/onboarding";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import CreateFestivalView from "./view";

export default async function CreateFestivalPageProps() {
  const moods = await getMoods();
  const categories = await getCategories();
  return (
    <div className="relative mb-[110px] mt-[44px] h-auto">
      <DefaultHeader href="/" label="페스티벌 등록하기" />
      <CreateFestivalView moods={moods} categories={categories} />
    </div>
  );
}
