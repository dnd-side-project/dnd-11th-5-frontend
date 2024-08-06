import type { Meta, StoryObj } from "@storybook/react";

import TrendFestivalCard from "./TrendFestivalCard";

const meta: Meta<typeof TrendFestivalCard> = {
  title: "Card/TrendFestivalCard",
  component: TrendFestivalCard,
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

export const Default: Story = {
  args: {
    festival: {
      image: "/images/festivalTrend.png",
      title: "한강 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const RegionCard: Story = {
  args: {
    festival: {
      image: "/images/festivalTrend.png",
      title: "한강 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
    isScrabed: false,
    onScrab: () => {},
  },
  render: (args) => (
    <div className="w-[200px]">
      <TrendFestivalCard {...args} />
    </div>
  ),
};

export const RegionCardScrabed: Story = {
  args: {
    festival: {
      image: "/images/festivalTrend.png",
      title: "한강 페스티벌",
      location: "서울 광진구",
      duration: "8월 1일 ~ 8월 4일",
      dday: "D-2",
    },
    isScrabed: true,
    onScrab: () => {},
  },
  render: (args) => (
    <div className="w-[200px]">
      <TrendFestivalCard {...args} />
    </div>
  ),
};
