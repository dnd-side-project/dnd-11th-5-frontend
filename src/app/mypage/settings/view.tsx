import { FC } from "react";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
} from "@/apis/onboarding/onboardingType";
import { OnboardingInfoResponse } from "@/apis/user/onboarding-info/onboarding-infoType";

import MypageSettingsTab from "./_components/MypageSettingsTab";

interface Props {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
  userOnboardingInfo: OnboardingInfoResponse;
}

const MypageSettingsView: FC<Props> = ({
  categories,
  companions,
  priorities,
  moods,
  userOnboardingInfo,
}) => {
  return (
    <MypageSettingsTab
      categories={categories}
      companions={companions}
      priorities={priorities}
      moods={moods}
      userOnboardingInfo={userOnboardingInfo}
    />
  );
};

export default MypageSettingsView;
