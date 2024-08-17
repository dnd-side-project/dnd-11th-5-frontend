import type { Meta, StoryObj } from "@storybook/react";

import DateTag from "../../Tag/DateTag/DateTag";
import FestivalTile from "./FestivalTile";

const meta: Meta<typeof FestivalTile> = {
  title: "List/FestivalTile",
  component: FestivalTile,
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

export const HomeFestivalTile: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <FestivalTile {...args}>
        <DateTag label={"D-2"} />
      </FestivalTile>
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
  },
};
