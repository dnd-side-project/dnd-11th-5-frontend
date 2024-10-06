"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { FC } from "react";

import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
} from "@/apis/onboarding/onboardingType";

import MypageSettingsKeywords from "./MypageSettingsKeywords";
import MypageSettingsProfile from "./MypageSettingsProfile";

interface Props {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
}

const MypageSettingsTab: FC<Props> = ({
  categories,
  companions,
  priorities,
  moods,
}) => {
  const TabList = [
    {
      name: "기본정보",
      contentComponent: <MypageSettingsProfile />,
    },
    {
      name: "맞춤 필터",
      contentComponent: (
        <MypageSettingsKeywords
          categories={categories}
          companions={companions}
          priorities={priorities}
          moods={moods}
        />
      ),
    },
  ];

  const handleTabChange = () => {
    const tabElement = document.getElementById(`tab`);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tabs.Root className="w-full " defaultValue={TabList[0].name}>
      <Tabs.List
        id={"tab"}
        className="mb-[30px] flex h-[47px] w-full"
        aria-label="Manage your account"
      >
        {TabList.map(({ name }, index) => (
          <Tabs.Trigger
            key={name}
            className="TabsTrigger w-full border-b-[1px] border-gray-scale-400 text-subtitle-semi text-gray-scale-400"
            value={name}
            onClick={handleTabChange}
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TabList.map(({ name, contentComponent }) => (
        <Tabs.Content
          key={name}
          className="flex flex-col gap-[18px] px-[16px]"
          value={name}
        >
          {contentComponent}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default MypageSettingsTab;
