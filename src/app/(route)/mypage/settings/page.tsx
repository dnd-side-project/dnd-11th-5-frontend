import { Metadata } from "next/types";

import { getOnboardingData } from "@/apis/onboarding/onboarding";
import { getUserOnboardingInfo } from "@/apis/user/onboarding-info/onboarding-info";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import MypageSettingsView from "./view";

export const metadata: Metadata = {
  title: "프로필 수정",
};

export default async function MypageSettingsPage() {
  const { moods, categories, companions, priorities } =
    await getOnboardingData();
  const userOnboardingInfo = await getUserOnboardingInfo();

  return (
    <div className="mt-[44px]">
      <DefaultHeader href="/mypage" label="프로필 수정" />
      <MypageSettingsView
        categories={categories}
        companions={companions}
        priorities={priorities}
        moods={moods}
        userOnboardingInfo={userOnboardingInfo}
      />
    </div>
  );
}
