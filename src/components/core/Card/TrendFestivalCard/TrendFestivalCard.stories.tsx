import type { Meta, StoryObj } from "@storybook/react";

import TrendFestivalCard from "./TrendFestivalCard";

const meta: Meta<typeof TrendFestivalCard> = {
  title: "Card/TrendFestivalCard",
  component: TrendFestivalCard,
  parameters: {
    layout: "centered",
    controls: { include: ["festival"] },
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
  render: (args) => (
    <div className="w-[200px]">
      <TrendFestivalCard {...args} href={"/"} />
    </div>
  ),
  args: {
    festival: {
      festivalId: 1,
      name: "한강 페스티벌",
      sido: "서울",
      sigungu: "광진구",
      thumbnailImage: "/images/festivalTrend.png",
      startDate: "2024-10-04",
      endDate: "2024-10-10",
    },
    href: "/",
  },
};
