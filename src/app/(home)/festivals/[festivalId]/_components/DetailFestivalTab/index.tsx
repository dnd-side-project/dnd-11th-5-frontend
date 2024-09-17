"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { FC } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";

import Detail from "./Detail";
const Review = dynamic(() => import("./Review"));
const Around = dynamic(() => import("./Around"));

import dynamic from "next/dynamic";

interface Props {
  festivals: DetailFestivalResponse;
}

const DetailFestivalTab: FC<Props> = ({ festivals }) => {
  const TabList = [
    {
      name: "상세내용",
      contentComponent: <Detail festivals={festivals} />,
    },
    {
      name: "리뷰",
      contentComponent: <Review festivals={festivals} />,
    },
    {
      name: "주변정보",
      contentComponent: <Around festivals={festivals} />,
    },
  ];

  return (
    <Tabs.Root className="TabsRoot " defaultValue={TabList[0].name}>
      <Tabs.List
        className="flex h-[47px] w-full"
        aria-label="Manage your account"
      >
        {TabList.map(({ name }) => (
          <Tabs.Trigger
            key={name}
            className="TabsTrigger w-full border-b-[1px] border-gray-scale-400 text-subtitle-semi text-gray-scale-400"
            value={name}
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
