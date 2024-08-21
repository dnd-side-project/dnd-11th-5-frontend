import type { Meta, StoryObj } from "@storybook/react";

import FestivalSearchTile from "./FestivalSearchTile";

const meta: Meta<typeof FestivalSearchTile> = {
  title: "List/FestivalSearchTile",
  component: FestivalSearchTile,
  parameters: {
    controls: { include: [] },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeFestivalSearchTile: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <FestivalSearchTile {...args} />
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
      isBookmarked: true,
    },
  },
};
