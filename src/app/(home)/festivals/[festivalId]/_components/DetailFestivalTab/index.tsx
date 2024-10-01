"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Session } from "next-auth";
import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

import Around from "./Around";
import Detail from "./Detail";
import Review from "./Review";

interface Props {
  festivals: DetailFestivalResponse;
  session: Session | null;
}

const DetailFestivalTab: FC<Props> = ({ festivals, session }) => {
  const TabList = [
    {
      name: "상세내용",
      contentComponent: <Detail festivals={festivals} />,
    },
    {
      name: "리뷰",
      contentComponent: <Review festivals={festivals} session={session} />,
    },
    {
      name: "주변정보",
      contentComponent: <Around festivals={festivals} />,
    },
  ];

  const handleTabChange = () => {
    const tabElement = document.getElementById(`tab`);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tabs.Root className="TabsRoot " defaultValue={TabList[0].name}>
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

export default DetailFestivalTab;
