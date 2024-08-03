import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { HeartIcon } from "@/components/icons";

import IconButton from "../Button/IconButton/IconButton";
import DateTag from "../Tag/DateTag/DateTag";
import FestivalTile from "./FestivalTile";

const meta: Meta<typeof FestivalTile> = {
  title: "List/FestivalTile",
  component: FestivalTile,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    festival: {
      src: "/images/festival.png",
      title: "서울 치맥 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeFestivalTile: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <FestivalTile {...args} />
    </div>
  ),
  args: {
    festival: {
      src: "/images/festival.png",
      title: "서울 치맥 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
    icon: <DateTag label="D-2" />,
  },
};

export const UnScrabedFestivalTile: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <FestivalTile {...args} />
    </div>
  ),
  args: {
    festival: {
      src: "/images/festival.png",
      title: "서울 치맥 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
    icon: (
      <IconButton active={false} icon={<HeartIcon width={24} height={24} />} />
    ),
  },
};

export const ScrabedFestivalTile: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <FestivalTile {...args} />
    </div>
  ),
  args: {
    festival: {
      src: "/images/festival.png",
      title: "서울 치맥 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
    icon: (
      <IconButton active={true} icon={<HeartIcon width={24} height={24} />} />
    ),
  },
};
