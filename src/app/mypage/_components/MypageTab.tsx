"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { FC } from "react";

interface Props {}

const MypageTab: FC<Props> = ({}) => {
  const TabList = [
    {
      name: "스크랩",
      contentComponent: <h1>스크랩</h1>,
    },
    {
      name: "활동뱃지",
      contentComponent: <h1>활동뱃지</h1>,
    },
  ];

  const handleTabChange = () => {
    const tabElement = document.getElementById(`tab`);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tabs.Root className="w-full" defaultValue={TabList[0].name}>
      <Tabs.List
        id={"tab"}
        className="flex h-[47px] w-full"
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

export default MypageTab;
