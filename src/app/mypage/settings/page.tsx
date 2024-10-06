import { getOnboardingData } from "@/apis/onboarding/onboarding";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import MypageSettingsView from "./view";

export default async function MypageSettingsPage() {
  const { moods, categories, companions, priorities } =
    await getOnboardingData();

  return (
    <div className="mt-[44px]">
      <DefaultHeader label="프로필 수정" />
      <MypageSettingsView
        categories={categories}
        companions={companions}
        priorities={priorities}
        moods={moods}
      />
    </div>
  );
}
