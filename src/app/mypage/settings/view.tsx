import { FC } from "react";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
} from "@/apis/onboarding/onboardingType";

import MypageSettingsTab from "./_components/MypageSettingsTab";

interface Props {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const MypageSettingsView: FC<Props> = ({
  categories,
  companions,
  priorities,
  moods,
}) => {
  return (
    <MypageSettingsTab
      categories={categories}
      companions={companions}
      priorities={priorities}
      moods={moods}
    />
  );
};

export default MypageSettingsView;
