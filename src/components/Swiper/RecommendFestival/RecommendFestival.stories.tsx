import type { Meta, StoryObj } from "@storybook/react";

import RecommendFestivalFallbackUI from "../../../app/(home)/_components/FestivalRecommend/RecommendFestivalFallbackUI";
import RecoomendFestivalList from "./RecommendFestival";

const meta: Meta<typeof RecoomendFestivalList> = {
  title: "Swiper/RecommendFestival",
  component: RecoomendFestivalList,
  parameters: {
    controls: { include: [] },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="h-[300px] w-[400px]">{/* <RecoomendFestivalList /> */}</div>
  ),
};
export const NoSession: Story = {
  args: {},
  render: (args) => (
    <div className="h-[300px] w-[400px]">
      <RecommendFestivalFallbackUI />
    </div>
  ),
};
